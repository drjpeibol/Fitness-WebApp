import React, { useState } from 'react';

function WodGenerator() {
  const [workout, setWorkout] = useState(null);
  
  const workoutTypes = {
    amrap: {
      name: 'AMRAP',
      durations: [10, 12, 15, 20],
    },
    forTime: {
      name: 'For Time',
      rounds: [3, 4, 5],
    },
    emom: {
      name: 'EMOM',
      durations: [10, 15, 20],
    }
  };

  const movements = {
    gymnastics: ['Pull-ups', 'Push-ups', 'Air Squats', 'Burpees', 'Handstand Push-ups'],
    weightlifting: ['Thrusters', 'Clean and Jerks', 'Snatches', 'Deadlifts', 'Wall Balls'],
    cardio: ['Row (calories)', 'Run (meters)', 'Box Jumps', 'Double-unders']
  };

  const generateWorkout = () => {
    // Randomly select workout type
    const types = Object.keys(workoutTypes);
    const selectedType = types[Math.floor(Math.random() * types.length)];
    const type = workoutTypes[selectedType];

    // Select movements
    const selectedMovements = [];
    Object.values(movements).forEach(category => {
      const movement = category[Math.floor(Math.random() * category.length)];
      selectedMovements.push(movement);
    });

    // Generate workout structure
    let structure = '';
    let description = '';

    switch(selectedType) {
      case 'amrap':
        const amrapTime = type.durations[Math.floor(Math.random() * type.durations.length)];
        structure = `${amrapTime} Minute AMRAP`;
        description = selectedMovements.map(movement => 
          `${Math.floor(Math.random() * 15 + 5)} ${movement}`
        ).join('\n');
        break;
      case 'forTime':
        const rounds = type.rounds[Math.floor(Math.random() * type.rounds.length)];
        structure = `${rounds} Rounds For Time`;
        description = selectedMovements.map(movement => 
          `${Math.floor(Math.random() * 15 + 5)} ${movement}`
        ).join('\n');
        break;
      case 'emom':
        const emomTime = type.durations[Math.floor(Math.random() * type.durations.length)];
        structure = `${emomTime} Minute EMOM`;
        description = selectedMovements.map((movement, index) => 
          `Minute ${index + 1}: ${Math.floor(Math.random() * 15 + 5)} ${movement}`
        ).join('\n');
        break;
      default:
        break;
    }

    setWorkout({ structure, description });
  };

  return (
    <div className="wod-generator">
      <h3>WOD Generator</h3>
      <button className="btn generate-btn" onClick={generateWorkout}>
        Generate WOD
      </button>
      {workout && (
        <div className="generated-workout">
          <h4>{workout.structure}</h4>
          <pre className="workout-description">{workout.description}</pre>
        </div>
      )}
    </div>
  );
}

export default WodGenerator; 