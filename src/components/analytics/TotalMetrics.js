import React from 'react';

function TotalMetrics({ metrics }) {
  return (
    <div className="total-metrics">
      <div className="metrics-grid">
        <div className="metric-card">
          <i className="fas fa-clock"></i>
          <div className="metric-info">
            <span className="metric-value">{metrics.totalHours}</span>
            <span className="metric-label">Total Hours</span>
          </div>
        </div>
        <div className="metric-card">
          <i className="fas fa-dumbbell"></i>
          <div className="metric-info">
            <span className="metric-value">{metrics.totalWorkouts}</span>
            <span className="metric-label">Workouts</span>
          </div>
        </div>
        <div className="metric-card">
          <i className="fas fa-bolt"></i>
          <div className="metric-info">
            <span className="metric-value">{metrics.avgWorkoutLength}</span>
            <span className="metric-label">Avg. Length</span>
          </div>
        </div>
        <div className="metric-card">
          <i className="fas fa-trophy"></i>
          <div className="metric-info">
            <span className="metric-value">{metrics.prs}</span>
            <span className="metric-label">PRs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalMetrics; 