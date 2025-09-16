import "./globals.css";
import HackerBackground from "../../components/HackerBackground";

export const metadata = {
  title: "Specathon Terminal",
  description: "Invitation to Specathon",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HackerBackground />   {/* Background applied globally */}
        <main>{children}</main>
        <img
          src="/logo.png"
          alt="Club Logo Watermark"
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            width: "100px",
            opacity: 1,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 9999,
          }}
        />
      </body>
    </html>
  );
}
