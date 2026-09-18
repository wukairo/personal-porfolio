"use client";

import { useEffect, useState } from "react";
import { INTRO_TEXT } from "@/lib/constants";
import { CodeCard } from "./CodeCard";

type Phase = "waiting" | "typing" | "holding" | "exit" | "done";

export function IntroSequence() {
  const [visibleText, setVisibleText] = useState("");
  const [phase, setPhase] = useState<Phase>("waiting");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer: ReturnType<typeof setTimeout>;

    if (reducedMotion) {
      setVisibleText(INTRO_TEXT);
      setPhase("holding");
      timer = setTimeout(() => setPhase("done"), 350);
      return () => clearTimeout(timer);
    }

    let index = 0;
    const typeNext = () => {
      if (index >= INTRO_TEXT.length) {
        setPhase("holding");
        timer = setTimeout(() => setPhase("exit"), 850);
        return;
      }

      index += 1;
      setVisibleText(INTRO_TEXT.slice(0, index));
      const character = INTRO_TEXT[index - 1];
      const delay = character === "\n" ? 100 : character === "," ? 65 : 27;
      timer = setTimeout(typeNext, delay);
    };

    timer = setTimeout(() => {
      setPhase("typing");
      typeNext();
    }, 160);

    return () => clearTimeout(timer);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`intro-overlay${phase === "exit" ? " intro-exit" : ""}`}
      onTransitionEnd={(event) => {
        if (phase === "exit" && event.propertyName === "opacity") setPhase("done");
      }}
    >
      <CodeCard text={visibleText} typing={phase === "typing" || phase === "waiting"} />
    </div>
  );
}
