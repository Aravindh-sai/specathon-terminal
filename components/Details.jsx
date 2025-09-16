"use client";
import { useEffect, useState } from "react";

export default function Details({ abstracts = 0, teams = 0, participants = 0 }) {
  const [displayAbstracts, setDisplayAbstracts] = useState(0);
  const [displayTeams, setDisplayTeams] = useState(0);
  const [displayParticipants, setDisplayParticipants] = useState(0);

  useEffect(() => {
    // Simple counter animation
    const duration = 8000; // 1.5 seconds
    const stepTime = 30;

    const animateNumber = (target, setter) => {
      let current = 0;
      const increment = Math.ceil(target / (duration / stepTime));
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setter(current);
      }, stepTime);
    };

    animateNumber(abstracts, setDisplayAbstracts);
    animateNumber(teams, setDisplayTeams);
    animateNumber(participants, setDisplayParticipants);
  }, [abstracts, teams, participants]);

  return (
    <div className="details-box">
      <div className="detail-item">
        <span className="detail-number">{displayAbstracts}</span>
        <p className="detail-text">Abstracts Received</p>
      </div>
      <div className="detail-item">
        <span className="detail-number">{displayTeams}</span>
        <p className="detail-text">Teams Shortlisted</p>
      </div>
      <div className="detail-item">
        <span className="detail-number">{displayParticipants}</span>
        <p className="detail-text">Participants</p>
      </div>
    </div>
  );
}
