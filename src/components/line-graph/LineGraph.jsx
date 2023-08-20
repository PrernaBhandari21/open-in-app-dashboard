import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';

// Register the required components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const LineGraph = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Wavy Line',
        data: [100, 150, 200, 250],
        borderColor: 'blue',
        borderWidth: 2,
        tension: 0.3, 
        fill: false,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category', // Set the x-axis scale type
        display: true,
      },
      y: {
        display: true,
        beginAtZero: true,
      },
    },
  };

  return (
    <div  style={{ width: '980px', height: '200px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
