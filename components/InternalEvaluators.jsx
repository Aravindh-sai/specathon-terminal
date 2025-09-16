"use client";

export default function InternalEvaluators() {
  return (
    <div className="section evaluators-section">
      <h2 className="section-heading">Internal Evaluators</h2>
      <div className="evaluator-grid">
        {/* Evaluator 1 */}
        <div className="evaluator-card">
          <h3 className="evaluator-name">Dr. Amjan Shaik</h3>
          <p className="evaluator-designation">Assistant Professor, CSE</p>
        </div>

        {/* Evaluator 2 */}
        <div className="evaluator-card">
          <h3 className="evaluator-name">Dr. P. Deepan</h3>
          <p className="evaluator-designation">Assistant Professor, CSE</p>
        </div>

        {/* Evaluator 3 */}
        <div className="evaluator-card">
          <h3 className="evaluator-name">Dr. Preethi Vennam</h3>
          <p className="evaluator-designation">Associate Professor, IT</p>
        </div>

        {/* Evaluator 4 */}
        <div className="evaluator-card">
          <h3 className="evaluator-name">Dr. B. Archana</h3>
          <p className="evaluator-designation">Associate Professor, IT</p>
        </div>
      </div>
    </div>
  );
}
