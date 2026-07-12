import { useState } from "react";

/* Light/dark toggle — the saved theme is applied before paint by an
   inline script in index.html, so here we only read and flip it. */
export function useTheme() {
  const [light, setLight] = useState(
    () => document.documentElement.getAttribute("data-theme") === "light"
  );

  const toggle = () => {
    const next = light ? "" : "light";
    if (next) {
      document.documentElement.setAttribute("data-theme", next);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", next);
    setLight(!light);
  };

  return [light, toggle];
}
