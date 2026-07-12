import { useReveal } from "../../hooks/useReveal.js";

export default function Quote() {
  const [ref, visible] = useReveal();

  return (
    <section
      ref={ref}
      className={`quote-strip reveal${visible ? " visible" : ""}`}
      aria-label="Personal motto"
    >
      <figure className="quote-inner">
        <blockquote className="quote-text">
          Stay calm like a capybara — automate everything, stress about nothing.
        </blockquote>
        <figcaption className="quote-author">— my DevOps philosophy</figcaption>
      </figure>
    </section>
  );
}
