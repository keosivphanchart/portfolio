import { useState } from "react";
import Icon from "../Icon.jsx";
import { site } from "../../data/site.js";
import { roles } from "../../data/roles.js";
import { useTypewriter } from "../../hooks/useTypewriter.js";
import { goToSection } from "../../utils/navigation.js";

export default function Hero() {
  const role = useTypewriter(roles);
  const [portraitOk, setPortraitOk] = useState(true);

  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />
      <div className="dot-grid" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-badge">
            <span className="pulse-dot" /> Available for work
          </p>
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{site.name}</h1>
          <h2 className="hero-tagline">
            A{" "}
            <em>
              <span>{role}</span>
              <span className="caret" />
            </em>
          </h2>
          <p className="hero-bio">
            DevOps engineer at Hattha Bank and RUPP graduate (Class of 2025),
            focused on CI/CD automation, cloud infrastructure, and building
            things secure by design (DevSecOps). I enjoy writing Go and making
            deployments boring — in the best way.
          </p>
          <div className="hero-actions">
            <a href={site.resume} className="btn btn-primary" download>
              <Icon name="download" />
              Get Resume
            </a>
            <a
              href="/projects"
              className="btn btn-ghost"
              onClick={(e) => goToSection("projects", e)}
            >
              View Work
              <Icon name="arrow-right" />
            </a>
          </div>
          <div className="hero-socials">
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon name="github" />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
          </div>
        </div>

        {/* Portrait: drop your photo at public/assets/images/profile.png and
            it appears automatically; until then your initials show. */}
        <div className="hero-portrait">
          <div className="portrait-ring">
            <div className="portrait">
              <span className="portrait-initials">{site.initials}</span>
              {portraitOk && (
                <img
                  src={site.portrait}
                  alt={`Portrait of ${site.name}`}
                  onError={() => setPortraitOk(false)}
                />
              )}
            </div>
          </div>
          <div className="portrait-chip chip-a">
            <Icon name="code" />
            CI/CD Automation
          </div>
          <div className="portrait-chip chip-b">
            <Icon name="zap" />
            DevSecOps Mindset
          </div>
        </div>
      </div>
    </section>
  );
}
