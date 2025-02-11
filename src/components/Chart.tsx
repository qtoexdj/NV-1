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
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Actividad del mes',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const data = {
  labels: ['1 Marzo', '2 Marzo', '3 Marzo', '4 Marzo', '5 Marzo', '6 Marzo', '7 Marzo'],
  datasets: [
    {
      label: 'Contactos',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      tension: 0.4,
    },
    {
      label: 'Conversaciones',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: 'rgb(34, 197, 94)',
      backgroundColor: 'rgba(34, 197, 94, 0.5)',
      tension: 0.4,
    },
  ],
};

const Chart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
