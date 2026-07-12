import { useEffect, useState } from "react";
import Icon from "../Icon.jsx";
import { goToSection } from "../../utils/navigation.js";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="/"
      className={`back-to-top${show ? " show" : ""}`}
      aria-label="Back to top"
      onClick={(e) => goToSection("home", e)}
    >
      <Icon name="arrow-up" />
    </a>
  );
}
