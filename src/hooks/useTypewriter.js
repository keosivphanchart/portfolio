import { useEffect, useState } from "react";
import { prefersReducedMotion } from "./useReducedMotion";

/* Cycles through words: shows the first one, then deletes and retypes
   the next, forever. Reduced-motion users get a static first word. */
export function useTypewriter(words) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (prefersReducedMotion || words.length < 2) return;

    let roleIdx = 0;
    let charIdx = words[0].length;
    let deleting = true;
    let timer;

    const step = () => {
      const word = words[roleIdx];
      if (deleting) {
        charIdx--;
        setText(word.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % words.length;
        }
        timer = setTimeout(step, 45);
      } else {
        charIdx++;
        setText(words[roleIdx].slice(0, charIdx));
        if (charIdx === words[roleIdx].length) {
          deleting = true;
          timer = setTimeout(step, 1800);
          return;
        }
        timer = setTimeout(step, 85);
      }
    };

    timer = setTimeout(step, 1800);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}
