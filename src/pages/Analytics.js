import React, { useState } from 'react';
import WorkoutTypeChart from '../components/analytics/WorkoutTypeChart';
import MovementAnalysis from '../components/analytics/MovementAnalysis';
import TotalMetrics from '../components/analytics/TotalMetrics';

function Analytics() {
  const [workoutTypes] = useState({
    'CrossFit': 45,
    'Weightlifting': 30,
    'Gymnastics': 15,
    'Endurance': 10
  });

  const [metrics] = useState({
    totalHours: 156,
    totalWorkouts: 89,
    avgWorkoutLength: '65 min',
    prs: 23
  });

  const [movements] = useState({
    mostPracticed: {
      name: 'Power Clean',
      count: 45
    },
    leastPracticed: {
      name: 'Muscle Ups',
      count: 8
    }
  });

  return (
    <div className="analytics-container">
      <h1>Analytics</h1>
      <div className="analytics-grid">
        <div className="analytics-section metrics-section">
          <TotalMetrics metrics={metrics} />
        </div>
        <div className="analytics-section chart-section">
          <WorkoutTypeChart data={workoutTypes} />
        </div>
        <div className="analytics-section movement-section">
          <MovementAnalysis 
            mostPracticed={movements.mostPracticed}
            leastPracticed={movements.leastPracticed}
          />
        </div>
      </div>
    </div>
  );
}

export default Analytics; 