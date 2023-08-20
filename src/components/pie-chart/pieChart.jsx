import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ['#ee8484', '#f6dc7d', '#98d89e'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '450px' }}>
      <div style={{ width: '60%', height: '100px' }}>
        <Pie data={data} options={options} />
      </div>
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {data.labels.map((label, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: data.datasets[0].backgroundColor[index], marginRight: '10px' }}></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
