import { useEffect, useState } from "react";
import Icon from "../Icon.jsx";
import { site, navLinks } from "../../data/site.js";
import { useTheme } from "../../hooks/useTheme.js";
import { useActiveSection } from "../../hooks/useActiveSection.js";
import { sectionPath, goToSection } from "../../utils/navigation.js";

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [light, toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  // keep the URL in sync with the section being read (no history spam)
  useEffect(() => {
    if (!active) return;
    const path = sectionPath(active);
    if (window.location.pathname !== path) {
      history.replaceState(null, "", path);
    }
  }, [active]);

  return (
    <header className="navbar">
      <a href="/" className="logo" onClick={(e) => goToSection("home", e)}>
        <span className="logo-mark">K</span>
        <span className="logo-text">
          Sivphanchart<span>.</span>
        </span>
      </a>
      <nav className={`nav-links${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={sectionPath(link.id)}
            className={active === link.id ? "active" : ""}
            onClick={(e) => {
              goToSection(link.id, e);
              setMenuOpen(false);
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle light/dark theme"
      >
        <Icon name={light ? "moon" : "sun"} />
      </button>
      <a href={`mailto:${site.email}`} className="btn btn-outline btn-sm nav-cta">
        Hire Me
      </a>
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>
    </header>
  );
}
