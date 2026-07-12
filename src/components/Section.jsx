import { useReveal } from "../hooks/useReveal.js";

/* Shared wrapper: kicker + title + scroll-reveal. `title` is JSX so
   each section can italicize its accent word, e.g. <>My <em>Skills</em></>. */
export default function Section({ id, kicker, title, children }) {
  const [ref, visible] = useReveal();

  return (
    <section id={id} ref={ref} className={`section reveal${visible ? " visible" : ""}`}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}
