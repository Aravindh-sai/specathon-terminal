"use client";
import { useState } from "react";
import LandingPage from "../../components/LandingPage";
import HackerBackground from "../../components/HackerBackground";
import CenteredWelcome from "../../components/CenteredWelcome";

export default function Home() {
  const [authorized, setAuthorized] = useState(false);

  return (
    <main className="relative min-h-screen w-full">
      {!authorized ? (
        <LandingPage onAccessGranted={() => setAuthorized(true)} />
      ) : (
        <>
          <HackerBackground />
          <div
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
        >
            <CenteredWelcome />
          </div>
        </>
      )}
    </main>
  );
}
