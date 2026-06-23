import struct
import zlib
from collections import deque


PNG_SIG = b"\x89PNG\r\n\x1a\n"


def read_chunks(path):
    with open(path, "rb") as f:
        if f.read(8) != PNG_SIG:
            raise ValueError("Not a PNG file")
        while True:
            length_bytes = f.read(4)
            if not length_bytes:
                break
            length = struct.unpack(">I", length_bytes)[0]
            ctype = f.read(4)
            data = f.read(length)
            crc = f.read(4)
            yield ctype, data, crc
            if ctype == b"IEND":
                break


def paeth(a, b, c):
    p = a + b - c
    pa = abs(p - a)
    pb = abs(p - b)
    pc = abs(p - c)
    if pa <= pb and pa <= pc:
        return a
    if pb <= pc:
        return b
    return c


def unfilter(raw, width, height, bpp):
    stride = width * bpp
    rows = []
    offset = 0
    prev = bytearray(stride)
    for _ in range(height):
        filter_type = raw[offset]
        offset += 1
        scan = bytearray(raw[offset:offset + stride])
        offset += stride

        if filter_type == 1:
            for i in range(stride):
                left = scan[i - bpp] if i >= bpp else 0
                scan[i] = (scan[i] + left) & 0xFF
        elif filter_type == 2:
            for i in range(stride):
                scan[i] = (scan[i] + prev[i]) & 0xFF
        elif filter_type == 3:
            for i in range(stride):
                left = scan[i - bpp] if i >= bpp else 0
                up = prev[i]
                scan[i] = (scan[i] + ((left + up) // 2)) & 0xFF
        elif filter_type == 4:
            for i in range(stride):
                left = scan[i - bpp] if i >= bpp else 0
                up = prev[i]
                up_left = prev[i - bpp] if i >= bpp else 0
                scan[i] = (scan[i] + paeth(left, up, up_left)) & 0xFF

        rows.append(scan)
        prev = scan
    return rows


def refilter(rows):
    payload = bytearray()
    for row in rows:
        payload.append(0)
        payload.extend(row)
    return bytes(payload)


def color_distance(a, b):
    dr = a[0] - b[0]
    dg = a[1] - b[1]
    db = a[2] - b[2]
    return (dr * dr + dg * dg + db * db) ** 0.5


def get_px(rows, width, x, y):
    idx = x * 4
    row = rows[y]
    return row[idx], row[idx + 1], row[idx + 2], row[idx + 3]


def set_alpha(rows, x, y, alpha):
    rows[y][x * 4 + 3] = alpha


def is_bg_like(pixel):
    r, g, b = pixel
    avg = (r + g + b) / 3
    spread = max(r, g, b) - min(r, g, b)
    return avg > 150 and spread < 26


def remove_connected_checker(rows, width, height, tolerance=30):
    bg = bytearray(width * height)

    for y in range(height):
        for x in range(width):
            r, g, b, a = get_px(rows, width, x, y)
            if not a:
                bg[y * width + x] = 1
                continue
            if is_bg_like((r, g, b)):
                bg[y * width + x] = 1

    for y in range(height):
        for x in range(width):
            i = y * width + x
            if bg[i]:
                set_alpha(rows, x, y, 0)
                continue

            near = 0
            for oy in (-1, 0, 1):
                for ox in (-1, 0, 1):
                    if not ox and not oy:
                        continue
                    nx, ny = x + ox, y + oy
                    if 0 <= nx < width and 0 <= ny < height and bg[ny * width + nx]:
                        near += 1
            if near >= 3:
                _, _, _, a = get_px(rows, width, x, y)
                set_alpha(rows, x, y, min(a, max(0, 255 - near * 40)))


def write_png(path, width, height, rows):
    ihdr = struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)
    raw = refilter(rows)
    idat = zlib.compress(raw, level=9)

    def chunk(ctype, data):
        body = ctype + data
        return struct.pack(">I", len(data)) + body + struct.pack(">I", zlib.crc32(body) & 0xFFFFFFFF)

    with open(path, "wb") as f:
        f.write(PNG_SIG)
        f.write(chunk(b"IHDR", ihdr))
        f.write(chunk(b"IDAT", idat))
        f.write(chunk(b"IEND", b""))


def main(src, dst):
    width = height = None
    idat_parts = []

    for ctype, data, _ in read_chunks(src):
        if ctype == b"IHDR":
            width, height, bit_depth, color_type, comp, flt, interlace = struct.unpack(">IIBBBBB", data)
            if bit_depth != 8 or color_type != 6 or interlace != 0:
                raise ValueError("Only 8-bit RGBA non-interlaced PNG is supported")
        elif ctype == b"IDAT":
            idat_parts.append(data)

    raw = zlib.decompress(b"".join(idat_parts))
    rows = unfilter(raw, width, height, 4)
    remove_connected_checker(rows, width, height)
    write_png(dst, width, height, rows)


if __name__ == "__main__":
    src = "/Users/nahuel/Documents/Playground/ValmoréCRM/site/valmore_site/botella-final.png"
    dst = "/Users/nahuel/Documents/Playground/ValmoréCRM/site/valmore_site/botella-final-transparent.png"
    main(src, dst)
