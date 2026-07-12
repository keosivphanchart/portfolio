import Section from "../Section.jsx";
import { experience } from "../../data/experience.js";

export default function Experience() {
  return (
    <Section
      id="experience"
      kicker="My journey"
      title={<>Experience &amp; <em>Education</em></>}
    >
      <div className="timeline">
        {experience.map((item, i) => (
          <div
            key={item.title}
            className="timeline-item reveal-item"
            style={{ "--stagger": `${i * 0.15}s` }}
          >
            <span className="timeline-period">{item.period}</span>
            <h3>{item.title}</h3>
            <p className="timeline-org">{item.org}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
