import React from 'react';

function ProfileHeader({ user }) {
  return (
    <div className="profile-header">
      <div className="profile-info">
        <div className="profile-basics">
          <h1>{user.name}</h1>
          <p className="profile-location">{user.location}</p>
        </div>
        <div className="profile-stats">
          <div className="stat-box">
            <span className="stat-value">{user.totalWorkouts}</span>
            <span className="stat-label">Workouts</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">{user.prCount}</span>
            <span className="stat-label">PRs</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">{user.hoursThisMonth}</span>
            <span className="stat-label">Hours this month</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader; 