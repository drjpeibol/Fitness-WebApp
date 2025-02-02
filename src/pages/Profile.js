import React, { useState } from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import PRList from '../components/profile/PRList';
import WorkoutHistory from '../components/profile/WorkoutHistory';
import TrainingHoursGraph from '../components/profile/TrainingHoursGraph';

function Profile() {
  const [user] = useState({
    name: 'John Doe',
    location: 'CrossFit NYC',
    totalWorkouts: 156,
    prCount: 23,
    hoursThisMonth: 24
  });

  const [personalRecords] = useState([
    { movement: 'Snatch', value: '185 lbs', date: '2024-01-15' },
    { movement: 'Clean & Jerk', value: '225 lbs', date: '2024-01-10' },
    { movement: 'Fran', value: '3:21', date: '2024-01-05' },
    { movement: 'Pull-ups', value: '45 unbroken', date: '2024-01-01' }
  ]);

  const [workouts] = useState([
    {
      id: 1,
      date: '2024-01-20',
      name: 'Friday WOD',
      description: '5 rounds for time:\n30 Wall Balls\n20 Cal Row\n10 Power Cleans (135/95)',
      result: '12:45'
    },
    {
      id: 2,
      date: '2024-01-19',
      name: 'Strength Focus',
      description: 'Back Squat 5x5\nBuild to heavy set of 5',
      result: '275 lbs'
    }
  ]);

  const [trainingHours] = useState([
    { month: 'Aug', hours: 15 },
    { month: 'Sep', hours: 18 },
    { month: 'Oct', hours: 22 },
    { month: 'Nov', hours: 20 },
    { month: 'Dec', hours: 16 },
    { month: 'Jan', hours: 24 }
  ]);

  return (
    <div className="profile-container">
      <ProfileHeader user={user} />
      <div className="profile-content">
        <div className="profile-main">
          <div className="graph-section">
            <TrainingHoursGraph data={trainingHours} />
          </div>
          <PRList personalRecords={personalRecords} />
        </div>
        <div className="profile-sidebar">
          <WorkoutHistory workouts={workouts} />
        </div>
      </div>
    </div>
  );
}

export default Profile; 