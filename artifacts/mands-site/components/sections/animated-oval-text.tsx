"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedOvalText({ children, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.55 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`relative inline-block whitespace-nowrap italic align-baseline ${className ?? ""}`}
    >
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[1.38em] w-[112%] -translate-x-1/2 -translate-y-[48%] overflow-visible"
        viewBox="0 0 220 72"
        preserveAspectRatio="none"
      >
        <path
          d="M12 39 C16 11 82 4 145 10 C202 15 219 37 204 53 C187 71 78 69 33 58 C16 54 8 47 12 39 Z"
          fill="none"
          stroke="#5CA7F3"
          strokeLinecap="round"
          strokeWidth="3"
          className="transition-[stroke-dashoffset,opacity] duration-1000 ease-out motion-reduce:transition-none"
          style={{
            opacity: isVisible ? 1 : 0,
            strokeDasharray: 560,
            strokeDashoffset: isVisible ? 0 : 560,
          }}
        />
      </svg>
    </span>
  );
}
