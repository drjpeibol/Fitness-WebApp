import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function TrainingHoursGraph({ data }) {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Training Hours',
        color: '#111111',
        font: {
          size: 16,
          weight: '600',
          family: 'Inter'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Hours',
          color: '#666666'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        data: data.map(item => item.hours),
        borderColor: '#fa5400',
        backgroundColor: 'rgba(250, 84, 0, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#fa5400',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };

  return (
    <div className="training-hours-graph">
      <Line options={chartOptions} data={chartData} />
    </div>
  );
}

export default TrainingHoursGraph; 