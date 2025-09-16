"use client";
import { useState } from "react";
import LandingPage from "../../components/LandingPage";
import HackerBackground from "../../components/HackerBackground";
import CenteredWelcome from "../../components/CenteredWelcome";
import Details from "../../components/Details";

export default function Home() {
  const [authorized, setAuthorized] = useState(false);

  return (
    <main style={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      {!authorized ? (
        <LandingPage onAccessGranted={() => setAuthorized(true)} />
      ) : (
        <>
          <HackerBackground />

          {/* Centered Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              minHeight: "100vh",
              position: "relative",
              zIndex: 10,
            }}
          >
            <CenteredWelcome />
          </div>

          {/* Details Section (scrollable) */}
          <div style={{ position: "relative", zIndex: 10, padding: "20px 20px" }}>
            <Details abstracts={120} teams={25} participants={150} />
          </div>
        </>
      )}
    </main>
  );
}
