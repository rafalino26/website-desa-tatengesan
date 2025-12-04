"use client";

import { useEffect, useRef, useState } from "react";

// Hook: detect element when it first enters the viewport
function useInViewOnce<T extends HTMLElement>(
  ref: React.RefObject<T | null>
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, inView]);

  return inView;
}

type AnimatedNumberProps = {
  value: number;
  duration?: number; // ms
  className?: string;
  format?: (val: number) => string;
};

export function AnimatedNumber({
  value,
  duration = 1200,
  className,
  format,
}: AnimatedNumberProps) {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  // trigger animation only once when visible
  const inView = useInViewOnce(spanRef);

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frameId: number;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);

      // Smooth easing (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = Math.round(eased * value);
      setDisplay(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [inView, value, duration]);

  const text = format ? format(display) : display.toString();

  return (
    <span ref={spanRef} className={className}>
      {text}
    </span>
  );
}
