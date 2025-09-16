import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiGlobe } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Animated shimmer */}
      <div className="gradient-shimmer animate-gradient" />

      {/* Neon top border */}
      <div className="top-border" />

      <div className="content">
        {/* Top Row */}
        <div className="top-row">
          <div>
            <h2>Gradient Club</h2>
            <p>Ideas are automated</p>
          </div>
          <a
            href="https://spechyd.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            St. Peters Engineering College
          </a>
        </div>

        {/* Middle Row */}
        <div className="middle-row">
          <div className="social-icons">
            <a href="https://www.instagram.com/gradient_spec" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/spec-gradient-club/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://unstop.com/hackathons/specathon-2025-st-peters-engineering-college-1533248" target="_blank" rel="noopener noreferrer">
              <FiGlobe />
            </a>
          </div>

          <div className="contact-info">
            <a href="tel:+918328026979">
              <MdPhone /> +91 8328026979
            </a>
            <a href="mailto:gradient@stpetershyd.com">
              <HiOutlineMail /> gradient@stpetershyd.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Bottom Row */}
        <div className="bottom-row">
          <p>© 2025 Gradient Club | All Rights Reserved</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
