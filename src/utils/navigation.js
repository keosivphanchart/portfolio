import { prefersReducedMotion } from "../hooks/useReducedMotion.js";

/* Clean-URL navigation: sections live at real paths (/services,
   /projects, …) instead of #hash anchors. Clicking a link smooth-
   scrolls and pushes the path; deep links and back/forward scroll
   to the right section. */

export const sectionPath = (id) => (id === "home" ? "/" : `/${id}`);

/* The section id encoded in the current URL ("/projects" → "projects").
   Also accepts legacy "#projects" links so old shared URLs keep working. */
export const sectionFromUrl = () => {
  const hash = window.location.hash.slice(1);
  if (hash) return hash;
  return window.location.pathname.replace(/\/+$/, "").slice(1) || "home";
};

export function scrollToSection(id, instant = false) {
  const behavior = instant || prefersReducedMotion ? "auto" : "smooth";
  if (id === "home") {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior });
}

/* Click handler for nav/CTA links */
export function goToSection(id, event) {
  if (event) event.preventDefault();
  scrollToSection(id);
  if (window.location.pathname + window.location.hash !== sectionPath(id)) {
    history.pushState(null, "", sectionPath(id));
  }
}
