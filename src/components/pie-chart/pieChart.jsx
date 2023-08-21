import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement } from 'chart.js';
import 'chart.js/auto'; // This is required for the new version of Chart.js

Chart.register(ArcElement);

function PieChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Check if the chartRef is available before creating the chart
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      // Destroy any existing Chart instance on the canvas
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      // Create the new Chart instance
      chartRef.current.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Chart JS Pie Chart Example'
            }
          }
        }
      });
    }
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center' , width:'250px'}}>
      <div>
        <canvas ref={chartRef} width="200" height="200"></canvas>
      </div>
      
    </div>
  );
}

export default PieChart;
