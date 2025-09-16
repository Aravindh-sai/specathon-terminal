"use client";

export default function Judges() {
  return (
    <div className="section judges-section">
      <h2 className="section-heading">Judges</h2>
      <div className="card-container">
        {/* Judge 1 */}
        <div className="judge-card">
          <img
            src="/judges/judge1.jpg" // <-- replace with actual path
            alt="Judge 1"
            className="judge-photo"
          />
          <h3 className="judge-name">Mr. Abdul Khader</h3>
          <p className="judge-designation">Deputy Manager, NSIC</p>
        </div>

        {/* Divider */}
        <div className="vertical-divider"></div>

        {/* Judge 2 */}
        <div className="judge-card">
          <img
            src="/judges/judge2.jpg" // <-- replace with actual path
            alt="Judge 2"
            className="judge-photo"
          />
          <h3 className="judge-name">Mr. Santosh Chaluvadi</h3>
          <p className="judge-designation">CEO, Supraja Technologies</p>
        </div>
      </div>
    </div>
  );
}
