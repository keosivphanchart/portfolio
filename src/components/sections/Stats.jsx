import { useEffect, useState } from "react";
import { stats } from "../../data/stats.js";
import { useReveal } from "../../hooks/useReveal.js";
import { prefersReducedMotion } from "../../hooks/useReducedMotion.js";

/* Counts 0 → value with an ease-out curve once `active` flips true */
function Counter({ value, active }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (prefersReducedMotion) {
      setN(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);

  return <span className="count">{n}</span>;
}

export default function Stats() {
  const [ref, visible] = useReveal();

  return (
    <section
      ref={ref}
      className={`stats reveal${visible ? " visible" : ""}`}
      aria-label="Statistics"
    >
      <div className="stats-inner">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <div className="stat-num">
              <Counter value={stat.value} active={visible} />
              <span>{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
