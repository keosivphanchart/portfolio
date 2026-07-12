import { useState } from "react";
import Icon from "../Icon.jsx";
import { site, navLinks } from "../../data/site.js";
import { useTheme } from "../../hooks/useTheme.js";
import { useActiveSection } from "../../hooks/useActiveSection.js";

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [light, toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <span className="logo-mark">K</span>
        <span className="logo-text">
          Sivphanchart<span>.</span>
        </span>
      </a>
      <nav
        className={`nav-links${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? "active" : ""}
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
