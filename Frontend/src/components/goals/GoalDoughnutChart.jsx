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
    maintainAspectRatio: false,
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
      <div className="relative ">
        <div className='flex items-center justify-center'>
          <Doughnut data={data} options={options} height={120} />

        </div>

        <div className="absolute inset-0 flex flex-col top-16 items-center justify-center">
          <span className="text-[12px] text-[#7f7f89]">Total</span>
          <span className="text-[14px] font-medium text-[#151523]">15 Open Goals</span>
        </div>
      </div>

      <div className="text-sm text-[#151523] mt-7 space-y-2.5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#0BAF7C]"></span>
            <span className='font-medium text-[12px] md:text-[14px] text-[#7f7f89]'>On track</span>
          </div>
          <span className=' text-[11px] md:text-[13px] text-[#7f7f89]'>12 Tasks</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F6B426]"></span>
            <span className='font-medium text-[12px] md:text-[14px] text-[#7f7f89]'>At risk</span>
          </div>
          <span className=' text-[11px] md:text-[13px] text-[#7f7f89]'>8 Tasks</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ED5E68]"></span>
            <span className='font-medium text-[12px] md:text-[14px] text-[#7f7f89]'>Off track</span>
          </div>
          <span className=' text-[11px] md:text-[13px] text-[#7f7f89]'>4 Tasks</span>
        </div>
      </div>
    </>
  );
};

export default GoalDoughnutChart;
