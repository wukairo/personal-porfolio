"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function RevealOnScroll({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "-40px 0px -70px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={visible ? "scroll-reveal is-visible" : "scroll-reveal"}>
      {children}
    </div>
  );
}
