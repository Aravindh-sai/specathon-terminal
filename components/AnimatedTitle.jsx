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

    // Animation interval runs every 50ms
    const interval = setInterval(() => {
      let output = "";
      let allSettled = true;

      text.split("").forEach((char, i) => {
        if (frame >= settleFrames[i]) {
          // Character settled to final
          output += char;
        } else {
          allSettled = false;
          // Random char from chars string
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      });

      // Add subtle glitch flicker with 3-8% chance
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
        setDisplayText(text); // Ensure final text is set
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1
      className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-mono text-green-400 tracking-wider text-center mx-auto"
      style={{ minHeight: "5rem"}}
      aria-label={text}
    >
      {displayText}
    </h1>
  );
}
