import { skills } from "../../data/skills.js";
import { useReveal } from "../../hooks/useReveal.js";

/* Uses useReveal directly (not the Section wrapper) because the bar
   widths also animate off the same `visible` flag. */
export default function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className={`section reveal${visible ? " visible" : ""}`}
    >
      <p className="section-kicker">What I know</p>
      <h2 className="section-title">
        My <em>Skills</em>
      </h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="skill reveal-item"
            style={{ "--stagger": `${i * 0.08}s` }}
          >
            <div className="skill-head">
              <span>{skill.name}</span>
              <span className="skill-pct">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <span
                className="skill-bar-fill"
                style={{ width: visible ? `${skill.level}%` : 0 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
