import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GoalDoughnutChart = () => {
  const data = {
    labels: ['On track', 'At risk', 'Off track'],
    datasets: [
      {
        data: [12, 8, 4],
        backgroundColor: ['#0BAF7C', '#F6B426', '#ED5E68'],
        borderWidth: 4,
        cutout: '80%',
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw} Tasks`,
        },
      },
    },
  };

  return (
    <>
      <div className="relative">
        <Doughnut data={data} options={options} width={100} height={100} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm text-gray-500">Total</span>
          <span className="text-lg font-semibold text-[#151523]">15 Open Goals</span>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm text-[#151523]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#0BAF7C]"></span>
            <span>On track</span>
          </div>
          <span>12 Tasks</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F6B426]"></span>
            <span>At risk</span>
          </div>
          <span>8 Tasks</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ED5E68]"></span>
            <span>Off track</span>
          </div>
          <span>4 Tasks</span>
        </div>
      </div>
    </>
  );
};

export default GoalDoughnutChart;
