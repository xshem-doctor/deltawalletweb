"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type TypingTitleProps = {
  text: string;
  className?: string;
  speedMs?: number;
};

export default function TypingTitle({
  text,
  className,
  speedMs = 28,
}: TypingTitleProps) {
  const [visibleCount, setVisibleCount] = useState(0);

  const characters = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    setVisibleCount(0);

    if (!text) return;

    const timer = window.setInterval(() => {
      setVisibleCount((current) => {
        if (current >= characters.length) {
          window.clearInterval(timer);
          return current;
        }

        return current + 1;
      });
    }, speedMs);

    return () => window.clearInterval(timer);
  }, [text, characters.length, speedMs]);

  return (
    <h1 className={className} aria-label={text}>
      <span>{characters.slice(0, visibleCount).join("")}</span>

      {visibleCount < characters.length ? (
        <motion.span
          aria-hidden="true"
          className="ms-1 inline-block h-[0.9em] w-[3px] translate-y-1 rounded-full bg-delta-orange"
          animate={{ opacity: [1, 0.15, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      ) : null}
    </h1>
  );
}