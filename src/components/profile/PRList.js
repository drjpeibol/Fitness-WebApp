import React from 'react';

function PRList({ personalRecords }) {
  const categories = {
    'Weightlifting': ['Snatch', 'Clean & Jerk', 'Back Squat', 'Deadlift'],
    'Gymnastics': ['Pull-ups', 'Muscle-ups', 'Handstand Walk'],
    'Benchmarks': ['Fran', 'Grace', 'Helen', 'Murph']
  };

  return (
    <div className="pr-section">
      <h2>Personal Records</h2>
      {Object.entries(categories).map(([category, movements]) => (
        <div key={category} className="pr-category">
          <h3>{category}</h3>
          <div className="pr-grid">
            {movements.map(movement => {
              const pr = personalRecords.find(pr => pr.movement === movement);
              return (
                <div key={movement} className="pr-card">
                  <div className="pr-movement">{movement}</div>
                  <div className="pr-value">{pr?.value || 'Not set'}</div>
                  <div className="pr-date">{pr?.date || '-'}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PRList; 