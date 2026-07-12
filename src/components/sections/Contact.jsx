import Icon from "../Icon.jsx";
import { site } from "../../data/site.js";
import { useReveal } from "../../hooks/useReveal.js";

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className={`section reveal${visible ? " visible" : ""}`}
    >
      <div className="contact-panel">
        <div className="contact-glow" aria-hidden="true" />
        <p className="section-kicker">What's next?</p>
        <h2 className="section-title">
          Get In <em>Touch</em>
        </h2>
        <p className="contact-text">
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open.
        </p>
        <a href={`mailto:${site.email}`} className="btn btn-primary btn-lg">
          <Icon name="mail" />
          Say Hello
        </a>
      </div>
    </section>
  );
}
