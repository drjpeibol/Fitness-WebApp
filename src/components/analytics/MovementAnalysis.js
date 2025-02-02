import React from 'react';

function MovementAnalysis({ mostPracticed, leastPracticed }) {
  return (
    <div className="movement-analysis">
      <h2>Movement Analysis</h2>
      <div className="movement-cards">
        <div className="movement-card most-practiced">
          <h3>Most Practiced</h3>
          <div className="movement-info">
            <i className="fas fa-fire"></i>
            <div className="movement-details">
              <span className="movement-name">{mostPracticed.name}</span>
              <span className="movement-count">{mostPracticed.count} times</span>
            </div>
          </div>
        </div>
        <div className="movement-card least-practiced">
          <h3>Least Practiced</h3>
          <div className="movement-info">
            <i className="fas fa-exclamation-circle"></i>
            <div className="movement-details">
              <span className="movement-name">{leastPracticed.name}</span>
              <span className="movement-count">{leastPracticed.count} times</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovementAnalysis; 