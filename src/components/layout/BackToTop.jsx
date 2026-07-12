import { useEffect, useState } from "react";
import Icon from "../Icon.jsx";

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
      href="#home"
      className={`back-to-top${show ? " show" : ""}`}
      aria-label="Back to top"
    >
      <Icon name="arrow-up" />
    </a>
  );
}
