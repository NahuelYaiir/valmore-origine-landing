(function () {
  const storageKey = "valmore-theme";
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  const saved = localStorage.getItem(storageKey);
  const initialTheme = saved || (prefersLight ? "light" : "dark");

  function applyTheme(theme) {
    const isLight = theme === "light";
    document.documentElement.dataset.theme = theme;
    if (document.body) {
      document.body.classList.toggle("theme-light", isLight);
    }
    const button = document.querySelector("[data-theme-toggle]");
    if (button) {
      button.setAttribute("aria-pressed", String(isLight));
      button.setAttribute("aria-label", isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro");
      button.title = isLight ? "Modo oscuro" : "Modo claro";
      button.innerHTML = isLight
        ? '<span aria-hidden="true">☾</span>'
        : '<span aria-hidden="true">☀</span>';
    }
  }

  function createButton() {
    if (document.querySelector("[data-theme-toggle]")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.setAttribute("data-theme-toggle", "");
    button.setAttribute("aria-label", "Cambiar modo de color");
    button.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("theme-light") ? "dark" : "light";
      localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
    });
    document.body.appendChild(button);
  }

  applyTheme(initialTheme);

  function initThemeToggle() {
    createButton();
    applyTheme(initialTheme);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
