import React from 'react'
import Profile from '../../../assets/profile.png'
import { Ellipsis } from 'lucide-react'
import GoalDoughnutChart from '@/components/goals/GoalDoughnutChart'

const TeamGoal = () => {
  return (
    <div className='flex flex-col max-md:flex-col-reverse md:flex-row w-full px-4 gap-4'>
      <div className='border  border-gray-200 rounded-lg md:w-[70%] w-full bg-[#f5f5f5]'>
        {/*----------Main goal--------*/}
        <div className='bg-white px-4 py-4 rounded-lg'>
          <span className='text-green-600 text-[11px] border border-green-200 bg-green-100 px-3 py-1 font-medium rounded-full '>On track</span>
          <h1 className='text-[13px] font-medium pt-3'>Finalize MVP for social media integration feature</h1>
          <span className='text-[11px] text-[#7f7f89]'>FY25 2025</span>

          <div className='bg-[#f5f5f5] border border-gray-200 py-1.5 px-2 rounded-md mt-2 flex items-center gap-3'>
            <img src={Profile} alt="" height={34} width={34} />
            <div >
              <h5 className='text-[11px] text-[#7f7f89]'>Owner</h5>
              <h6 className='text-[12px] font-medium'>Sanjay Jangid</h6>
            </div>
          </div>

          <div className='flex items-center gap-3 mt-2'>
            <div className='bg-green-600 h-1 rounded-full w-full'></div>
            <span className='text-[12px] font-medium'>75%</span>
          </div>

          <div className='flex justify-between items-center mt-2'>
            <button className='flex items-center py-1.5 border shadow-xs text-[12px] font-medium border-gray-300 gap-1.5 rounded-md px-3 cursor-pointer'>
              2 Sub goals
            </button>
            <img src={Profile} alt="" height={25} width={25} />
          </div>
        </div>

        {/*----------Sub goal--------*/}
        <div className='my-5 md:mx-10 mx-3.5 px-4 py-4 rounded-lg bg-white border border-gray-200'>
          <span className='text-amber-500 text-[11px] border border-amber-200 bg-amber-100 px-3 py-1 font-medium rounded-full '>At risk</span>
          <h1 className='text-[13px] font-medium pt-3'>Finalize MVP for social media integration feature</h1>
          <span className='text-[11px] text-[#7f7f89]'>FY25 2025</span>

          <div className='bg-[#f5f5f5] border border-gray-200 py-1.5 px-2 rounded-md mt-2 flex items-center gap-3'>
            <img src={Profile} alt="" height={34} width={34} />
            <div >
              <h5 className='text-[11px] text-[#7f7f89]'>Owner</h5>
              <h6 className='text-[12px] font-medium'>Sanjay Jangid</h6>
            </div>
          </div>

          <div className='flex items-center gap-3 mt-2'>
            <div className='bg-amber-500 h-1 rounded-full w-full'></div>
            <span className='text-[12px] font-medium'>75%</span>
          </div>

          <div className='flex justify-between items-center mt-2'>
            <button className='flex items-center py-1.5 border shadow-xs text-[12px] font-medium border-gray-300 gap-1.5 rounded-md px-3 cursor-pointer'>
              2 Sub goals
            </button>
            <img src={Profile} alt="" height={25} width={25} />
          </div>
        </div>
      </div>


      <div className="border border-gray-200 rounded-lg md:w-[30%] w-full  bg-white md:max-h-[320px]">
        <div className="border-b px-4 py-3 border-gray-200 flex justify-between items-center">
          <h1 className="font-medium text-[14px]">Status goals update</h1>
          <Ellipsis className="text-[#7f7f89]" size={18} />
        </div>

        <div className="p-4">
          <GoalDoughnutChart />
        </div>
      </div>
    </div>
  )
}

export default TeamGoal
