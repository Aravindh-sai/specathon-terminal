"use client";
import AnimatedTitle from "./AnimatedTitle";

export default function CenteredWelcome() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-mono space-y-8">
      <div className="w-full max-w-max text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-green-300">
          Gradient Club Welcomes you to the
        </p>
      </div>
      <div className="w-full max-w-max text-center">
        <AnimatedTitle />
      </div>
    </div>
  );
}
