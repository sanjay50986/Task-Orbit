import ProjectTasksChart from '@/components/Home/TaskCompletedChart';
import TeamPerformaceChart from '@/components/Home/TeamPerformaceChart';
import UpcomingDeadlinesGraph from '@/components/Home/UpcomingDeadlinesGraph';

import { Ellipsis, LineChart, MoveUpRight } from 'lucide-react'
import React from 'react'

const Dashboard = () => {

  return (
    <div className='p-4 px-4 w-full'>
      <h1 className='text-[22px] font-medium'>Lets start today, Bagus!</h1>
      <h2 className='text-[14px] text-[#7f7f89] font-medium pt-1'><span className='text-gray-600'>8 pending</span> tasks across <span className='text-gray-600'>2 projects</span> today!</h2>

      <div className='grid grid-cols-3 grid-rows-3 mt-4 gap-3.5'>
        {/**--Team Performance--- */}
        <div className='border border-gray-200  rounded-2xl max-h-[260px]'>
          <div className='border-b px-4 py-2   border-gray-200 flex justify-between items-center'>
            <h1 className='font-medium text-[16px]'>Team performace</h1>
            <Ellipsis className='text-[#7f7f89]' />
          </div>

          <div className='px-4 py-3'>
            <div className='flex gap-3 items-center'>
              <h2 className='text-[32px] font-medium'>85%</h2>
              <h3 className='text-[#7f7f89] pt-3 text-[14px]'><span className='text-[#0FA15D] font-semibold text-[16px]'>2.55</span> Increased vs last week</h3>
            </div>
          </div>

          <TeamPerformaceChart />
        </div>

        {/**--Upcoming deadlines--- */}
        <div className='border border-gray-200 rounded-2xl max-h-[260px]'>
          <div className='border-b px-4 py-2 border-gray-200 flex justify-between items-center'>

            <h1 className='font-medium text-[16px]'>Upcoming deadlines</h1>
            <Ellipsis className='text-[#7f7f89]' />
          </div>

          <div className='px-4 py-3'>
            <div className='flex gap-3 items-center'>
              <h2 className='text-[32px] font-medium'>96</h2>
              <h3 className='text-[#7f7f89] pt-3 text-[14px]'><span className='text-red-600 font-semibold text-[16px]'>12</span> Decreased vs last week</h3>
            </div>
          </div>

          <UpcomingDeadlinesGraph />

        </div>

        {/**--Task completed--- */}
        <div className='border border-gray-200 rounded-2xl max-h-[260px] flex flex-col'>
          <div className='border-b px-4 py-2 border-gray-200 flex justify-between items-center'>
            <h1 className='font-medium text-[16px]'>Task completed</h1>
            <Ellipsis className='text-[#7f7f89]' />
          </div>

          <div className='px-4 py-3'>
            <div className='flex gap-3 items-center'>
              <h2 className='text-[32px] font-medium'>48</h2>
              <h3 className='text-[#7f7f89] pt-3 text-[14px]'>
                <span className='text-[#0FA15D] font-semibold text-[16px]'>8</span> Increased vs last week
              </h3>
            </div>
          </div>

          <div className="overflow-y-auto px-4 pb-3 flex-1 hide-scrollbar">
            <ProjectTasksChart />
          </div>
        </div>

        {/**--My Tasks--- */}
        <div className='border border-gray-200 rounded-2xl col-span-2 row-span-2'>
         
          
        </div>

        {/**--Goals--- */}
        <div className='border border-gray-200 rounded-2xl row-span-2'>
         
          
        </div>


        
      </div>
    </div>
  )
}

export default Dashboard
