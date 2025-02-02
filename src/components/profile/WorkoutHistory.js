import React from 'react';

function WorkoutHistory({ workouts }) {
  return (
    <div className="workout-history">
      <h2>Recent Workouts</h2>
      <div className="workout-list">
        {workouts.map(workout => (
          <div key={workout.id} className="workout-entry">
            <div className="workout-date">{workout.date}</div>
            <div className="workout-content">
              <h3>{workout.name}</h3>
              <p className="workout-description">{workout.description}</p>
              <div className="workout-result">
                <span className="result-label">Result:</span>
                <span className="result-value">{workout.result}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutHistory; 