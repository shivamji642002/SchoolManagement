import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Revenue',
      data: [1000, 2000, 3000, 4000],
      backgroundColor: ['rgba(75, 192, 192, 0.6)'],
    },
  ],
};

const BarChart = () => {
  return <Bar data={data} />;
};

export default BarChart;
