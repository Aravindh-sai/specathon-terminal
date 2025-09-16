// components/AnimatedTitle.jsx
"use client";
import { useState, useEffect } from "react";

export default function AnimatedTitle({ text = "SPECATHON 2025" }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let frame = 0;
    const settleFrames = text.split("").map(
      (_, i) => 10 + i * 5 + Math.floor(Math.random() * 10)
    );

    const interval = setInterval(() => {
      let output = "";
      let allSettled = true;

      text.split("").forEach((char, i) => {
        if (frame >= settleFrames[i]) {
          output += char;
        } else {
          allSettled = false;
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      });

      if (!allSettled && Math.random() < 0.05) {
        const glitchIndex = Math.floor(Math.random() * output.length);
        const glitchChar = chars[Math.floor(Math.random() * chars.length)];
        output =
          output.substring(0, glitchIndex) +
          glitchChar +
          output.substring(glitchIndex + 1);
      }

      setDisplayText(output);
      frame++;

      if (allSettled) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1
      className="specathon-title font-mono text-green-400 tracking-wider text-center mx-auto"
      aria-label={text}
    >
      {displayText}
    </h1>
  );
}