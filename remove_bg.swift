import Foundation
import AppKit
import Vision
import CoreImage
import CoreImage.CIFilterBuiltins
import ImageIO
import UniformTypeIdentifiers

let arguments = CommandLine.arguments
guard arguments.count >= 3 else {
    fputs("Usage: remove_bg.swift <input> <output>\n", stderr)
    exit(1)
}

let inputURL = URL(fileURLWithPath: arguments[1])
let outputURL = URL(fileURLWithPath: arguments[2])

let ciContext = CIContext(options: nil)

func savePNG(_ image: CIImage, to url: URL, context: CIContext) throws {
    guard let colorSpace = CGColorSpace(name: CGColorSpace.sRGB) else {
        throw NSError(domain: "remove_bg", code: 1, userInfo: [NSLocalizedDescriptionKey: "Could not create color space"])
    }

    guard let cgImage = context.createCGImage(image, from: image.extent) else {
        throw NSError(domain: "remove_bg", code: 2, userInfo: [NSLocalizedDescriptionKey: "Could not create CGImage"])
    }

    guard let destination = CGImageDestinationCreateWithURL(url as CFURL, UTType.png.identifier as CFString, 1, nil) else {
        throw NSError(domain: "remove_bg", code: 3, userInfo: [NSLocalizedDescriptionKey: "Could not create image destination"])
    }

    CGImageDestinationAddImage(destination, cgImage, [
        kCGImageDestinationLossyCompressionQuality: 1.0,
        kCGImagePropertyPNGDictionary: [:]
    ] as CFDictionary)

    if !CGImageDestinationFinalize(destination) {
        throw NSError(domain: "remove_bg", code: 4, userInfo: [NSLocalizedDescriptionKey: "Could not finalize PNG"])
    }
}

do {
    guard let nsImage = NSImage(contentsOf: inputURL) else {
        throw NSError(domain: "remove_bg", code: 5, userInfo: [NSLocalizedDescriptionKey: "Could not load input image"])
    }

    guard let tiffData = nsImage.tiffRepresentation,
          let bitmap = NSBitmapImageRep(data: tiffData),
          let cgImage = bitmap.cgImage else {
        throw NSError(domain: "remove_bg", code: 6, userInfo: [NSLocalizedDescriptionKey: "Could not read CGImage"])
    }

    let request = VNGenerateForegroundInstanceMaskRequest()
    let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
    try handler.perform([request])

    guard let observation = request.results?.first else {
        throw NSError(domain: "remove_bg", code: 7, userInfo: [NSLocalizedDescriptionKey: "No foreground mask was generated"])
    }

    let instances = observation.allInstances
    let maskBuffer = try observation.generateScaledMaskForImage(forInstances: instances, from: handler)

    let inputImage = CIImage(cgImage: cgImage)
    let maskImage = CIImage(cvPixelBuffer: maskBuffer)
    let clearBackground = CIImage(color: .clear).cropped(to: inputImage.extent)

    let filter = CIFilter.blendWithMask()
    filter.inputImage = inputImage
    filter.backgroundImage = clearBackground
    filter.maskImage = maskImage

    guard let outputImage = filter.outputImage else {
        throw NSError(domain: "remove_bg", code: 8, userInfo: [NSLocalizedDescriptionKey: "Could not blend image with mask"])
    }

    try savePNG(outputImage, to: outputURL, context: ciContext)
    print("Saved \(outputURL.path)")
} catch {
    fputs("ERROR: \(error.localizedDescription)\n", stderr)
    exit(1)
}
