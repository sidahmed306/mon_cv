"use client";

import { useEffect, useState } from "react";

type Props = {
  texts: readonly string[];
  speed?: number;
  pause?: number;
  className?: string;
  loop?: boolean;
};

export function Typewriter({ texts, speed = 50, pause = 1800, className, loop = true }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    if (!current) return;

    if (!deleting && text === current) {
      const timer = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timer);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => {
        if (loop) return (i + 1) % texts.length;
        return Math.min(i + 1, texts.length - 1);
      });
      return;
    }

    const timer = setTimeout(
      () => {
        if (deleting) {
          setText(current.slice(0, text.length - 1));
        } else {
          setText(current.slice(0, text.length + 1));
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timer);
  }, [text, deleting, index, texts, speed, pause, loop]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-2 h-5 bg-terminal-cyan ml-1 animate-blink align-middle" />
    </span>
  );
}
