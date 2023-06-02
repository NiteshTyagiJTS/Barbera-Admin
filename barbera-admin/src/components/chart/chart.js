import React, { useEffect } from 'react';
import { Chart, LineController, CategoryScale, LinearScale } from 'chart.js';

const WeightChart = () => {
//   const colors = {
//     purple: {
//       default: 'rgba(149, 76, 233, 1)',
//       half: 'rgba(149, 76, 233, 0.5)',
//       quarter: 'rgba(149, 76, 233, 0.25)',
//       zero: 'rgba(149, 76, 233, 0)',
//     },
//     indigo: {
//       default: 'rgba(80, 102, 120, 1)',
//       quarter: 'rgba(80, 102, 120, 0.25)',
//     },
//   };

//   const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

//   const labels = [
//     'Week 1',
//     'Week 2',
//     'Week 3',
//     'Week 4',
//     'Week 5',
//     'Week 6',
//     'Week 7',
//     'Week 8',
//     'Week 9',
//     'Week 10',
//   ];

//   useEffect(() => {
//     Chart.register(LineController, CategoryScale, LinearScale); // Register the controllers and scales

//     const ctx = document.getElementById('canvas').getContext('2d');
//     ctx.canvas.height = 100;

//     const gradient = ctx.createLinearGradient(0, 25, 0, 300);
//     gradient.addColorStop(0, colors.purple.half);
//     gradient.addColorStop(0.35, colors.purple.quarter);
//     gradient.addColorStop(1, colors.purple.zero);

//     const options = {
//       type: 'line',
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             fill: true,
//             backgroundColor: gradient,
//             pointBackgroundColor: colors.purple.default,
//             borderColor: colors.purple.default,
//             data: weight,
//             lineTension: 0.2,
//             borderWidth: 2,
//             pointRadius: 3,
//           },
//         ],
//       },
//       options: {
//         layout: {
//           padding: 10,
//         },
//         responsive: true,
//         legend: {
//           display: false,
//         },
//         scales: {
//           x: {
//             grid: {
//               display: false,
//             },
//             ticks: {
//               padding: 10,
//               autoSkip: false,
//               maxRotation: 15,
//               minRotation: 15,
//             },
//           },
//           y: {
//             scaleLabel: {
//               display: true,
//               labelString: 'Weight in KG',
//               padding: 10,
//             },
//             grid: {
//               display: true,
//               color: colors.indigo.quarter,
//             },
//             ticks: {
//               beginAtZero: false,
//               max: 63,
//               min: 57,
//               padding: 10,
//             },
//           },
//         },
//       },
//     };

//     const chart = new Chart(ctx, options);
//     return () => {
//       chart.destroy(); // Destroy the chart instance before unmounting
//     };
//   }, []);

  return (
    <div></div>
    // <div className="wrapper max-w-2xl mx-auto">
    //   <div className="canvas">
    //     <canvas id="canvas"></canvas>
    //   </div>
    //   <div className="note text-center mt-4">
    //     Made with{' '}
    //     <a
    //       href="https://www.chartjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="text-indigo-500 hover:text-indigo-700 border-b border-indigo-300 hover:border-indigo-500 transition-all"
    //     >
    //       Chart.js
    //     </a>{' '}
    //     by{' '}
    //     <a
    //       href="https://hofmannsven.com"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="text-indigo-500 hover:text-indigo-700 border-b border-indigo-300 hover:border-indigo-500 transition-all"
    //     >
    //       Sven Hofmann
    //     </a>
    //     .
    //   </div>
    // </div>
  );
};

export default WeightChart;
