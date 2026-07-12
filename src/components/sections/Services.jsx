import Icon from "../Icon.jsx";
import Section from "../Section.jsx";
import { services } from "../../data/services.js";

export default function Services() {
  return (
    <Section id="services" kicker="Services" title={<>What I <em>Do</em></>}>
      <div className="services-grid">
        {services.map((service, i) => (
          <article
            key={service.title}
            className="service-card reveal-item"
            style={{ "--stagger": `${i * 0.12}s` }}
          >
            <span className="service-icon">
              <Icon name={service.icon} />
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
