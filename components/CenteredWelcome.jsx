"use client";
import { useState, useEffect } from "react";
import AnimatedTitle from "./AnimatedTitle";

export default function CenteredWelcome() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxScroll = 300; // how far scroll affects title
  const scrollProgress = Math.min(scrollY / maxScroll, 1);
  const scale = 1 - 0.4 * scrollProgress; // shrink to 60% max
  const translateY = -scrollProgress * 50; // move up max 50px
  const welcomeOpacity = 1 - scrollProgress * 2; // fade out welcome message

  return (
    <div
      className="title-wrapper"
      style={{
        transform: `translateY(${translateY}px) scale(${scale})`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <p
        className="welcome-text text-green-300"
        style={{ opacity: welcomeOpacity > 0 ? welcomeOpacity : 0 }}
      >
        Gradient Club Welcomes you to the
      </p>
      <AnimatedTitle />
    </div>
  );
}
