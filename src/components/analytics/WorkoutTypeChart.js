import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function WorkoutTypeChart({ data }) {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: [
          'rgba(250, 84, 0, 0.8)',   // Orange (Nike)
          'rgba(0, 0, 0, 0.8)',      // Black
          'rgba(66, 66, 66, 0.8)',   // Dark Grey
          'rgba(128, 128, 128, 0.8)', // Grey
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Workout Distribution',
        font: {
          size: 16,
          weight: '600',
          family: 'Inter',
        },
      },
    },
    cutout: '65%',
  };

  return (
    <div className="workout-type-chart">
      <Doughnut data={chartData} options={options} />
    </div>
  );
}

export default WorkoutTypeChart; 