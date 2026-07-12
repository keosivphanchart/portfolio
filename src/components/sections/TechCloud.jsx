import { useEffect, useRef } from "react";
import { techStack } from "../../data/techStack.js";
import { useReveal } from "../../hooks/useReveal.js";
import { prefersReducedMotion } from "../../hooks/useReducedMotion.js";

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

/* Tech stack: draggable 3D icon globe.
   Raw logos sit on a sphere. It does NOT move on its own — grab and
   drag to spin it like a globe; release keeps momentum that eases
   to a stop. Reduced-motion users get a static organic scatter. */
export default function TechCloud() {
  const [sectionRef, visible] = useReveal();
  const cloudRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    const cloud = cloudRef.current;
    const icons = iconRefs.current.filter(Boolean);
    const N = icons.length;
    if (!cloud || N === 0) return;

    if (prefersReducedMotion) {
      // static sunflower scatter — organic cluster, no overlaps, no motion
      icons.forEach((el, i) => {
        const r = Math.sqrt((i + 0.6) / N) * 42;
        const theta = i * GOLDEN_ANGLE;
        el.style.left = (50 + r * Math.cos(theta)).toFixed(1) + "%";
        el.style.top = (50 + r * Math.sin(theta)).toFixed(1) + "%";
      });
      return;
    }

    // evenly distributed points on a unit sphere; the half-step offset
    // keeps icons off the poles (a pole point wouldn't move when spun)
    const points = icons.map((_, i) => {
      const y = 1 - ((i + 0.5) / N) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = GOLDEN_ANGLE * i;
      return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
    });

    let angle = 0.6; // rotation around the vertical axis
    let tilt = 0.3;  // tilt of that axis
    let velA = 0;    // momentum carried after release
    let velT = 0;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let rafId;

    const onPointerDown = (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      velA = velT = 0;
      cloud.classList.add("grabbing");
      cloud.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      // drag right → front face moves right; drag down → front face moves down
      velA = dx * 0.005;
      velT = -dy * 0.004;
      angle += velA;
      tilt += velT;
    };
    const onRelease = () => {
      dragging = false;
      cloud.classList.remove("grabbing");
    };

    cloud.addEventListener("pointerdown", onPointerDown);
    cloud.addEventListener("pointermove", onPointerMove);
    cloud.addEventListener("pointerup", onRelease);
    cloud.addEventListener("pointercancel", onRelease);

    const frame = () => {
      if (!dragging) {
        // glide on after release, easing out to a stop
        angle += velA;
        tilt += velT;
        velA *= 0.95;
        velT *= 0.95;
      }
      // keep the tilt in a range where the cluster reads clean
      tilt = Math.max(-0.9, Math.min(0.9, tilt));

      const rect = cloud.getBoundingClientRect();
      const R = Math.min(rect.width, rect.height) / 2 - 40;
      const cosA = Math.cos(angle), sinA = Math.sin(angle);
      const cosT = Math.cos(tilt), sinT = Math.sin(tilt);

      points.forEach((p, i) => {
        // rotate around Y (spin), then X (tilt)
        const x1 = p.x * cosA + p.z * sinA;
        const z1 = -p.x * sinA + p.z * cosA;
        const y1 = p.y * cosT - z1 * sinT;
        const z2 = p.y * sinT + z1 * cosT;

        const depth = (z2 + 1) / 2; // 0 (back) .. 1 (front)
        const scale = 0.5 + depth * 0.6;
        icons[i].style.transform =
          `translate(-50%, -50%) translate(${x1 * R}px, ${y1 * R}px) scale(${scale})`;
        icons[i].style.opacity = (0.3 + depth * 0.7).toFixed(2);
        icons[i].style.zIndex = Math.round(depth * 100);
      });

      rafId = requestAnimationFrame(frame);
    };
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      cloud.removeEventListener("pointerdown", onPointerDown);
      cloud.removeEventListener("pointermove", onPointerMove);
      cloud.removeEventListener("pointerup", onRelease);
      cloud.removeEventListener("pointercancel", onRelease);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`tech-strip reveal${visible ? " visible" : ""}`}
      aria-label="Tools and technologies"
    >
      <p className="section-kicker">My toolbox</p>
      <div className="tech-cloud" ref={cloudRef}>
        {techStack.map((tech, i) => {
          const size = 44 + ((i * 29) % 4) * 8; // 44–68px, varied but deterministic
          return (
            <div
              key={tech.name}
              ref={(el) => (iconRefs.current[i] = el)}
              className="cloud-icon"
              title={tech.name}
              style={{ width: size, height: size, left: "50%", top: "50%" }}
            >
              <img src={tech.img} alt={tech.name} loading="lazy" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
