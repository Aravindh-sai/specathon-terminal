"use client";

export default function Venues() {
  return (
    <div className="section venues-section">
      <h2 className="section-heading">Venues</h2>
      <div className="card-container">
        {/* Venue 1 */}
        <div className="venue-card">
          <h3 className="venue-name">T1 &amp; T2</h3>
        </div>

        {/* Divider */}
        <div className="vertical-divider"></div>

        {/* Venue 2 */}
        <div className="venue-card">
          <h3 className="venue-name">T19 &amp; T20</h3>
        </div>

        {/* Divider */}
        <div className="vertical-divider"></div>

        {/* Venue 3 */}
        <div className="venue-card">
          <h3 className="venue-name">Auditorium</h3>
        </div>
      </div>
    </div>
  );
}
