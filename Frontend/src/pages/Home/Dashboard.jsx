import ProjectTasksChart from '@/components/Home/TaskCompletedChart';
import TeamPerformaceChart from '@/components/Home/TeamPerformaceChart';
import UpcomingDeadlinesGraph from '@/components/Home/UpcomingDeadlinesGraph';
import Profile from '../../assets/profile.png'
import { Ellipsis } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '@/context/AuthContext';

const Dashboard = () => {

  const { fetchUserDetails } = useAuthContext()
  const tabs = ["Upcoming", "Incomplete", "Overdue", "Complete"];
  const [activeTab, setActiveTab] = useState("Upcoming");


  useEffect(() => {
    fetchUserDetails()
  }, [])
  

  return (
    <div className='p-4 px-4 w-full'>
      <h1 className='text-[18px] font-medium'>Lets start today, Bagus!</h1>
      <h2 className='text-[12px] text-[#7f7f89] font-medium pt-1'><span className='text-gray-600'>8 pending</span> tasks across <span className='text-gray-600'>2 projects</span> today!</h2>

      <div className='grid xl:grid-cols-3 grid-cols-1  md:grid-cols-2 mt-4 gap-2.5'>
        {/**--Team Performance--- */}
        <div className='border border-gray-200  rounded-xl max-h-[260px]'>
          <div className='border-b px-4 py-2 border-gray-200 flex justify-between items-center'>
            <h1 className='font-medium text-[14px]'>Team performace</h1>
            <Ellipsis className='text-[#7f7f89]' size={18} />
          </div>

          <div className='px-4 py-4'>
            <div className='flex gap-3 items-center'>
              <h2 className='text-[26px] font-medium'>85%</h2>
              <h3 className='text-[#7f7f89] pt-1.5 text-[13px]'><span className='text-[#0FA15D] font-semibold text-[14px]'>2.55</span> Increased vs last week</h3>
            </div>
          </div>

          <TeamPerformaceChart />
        </div>

        {/**--Upcoming deadlines--- */}
        <div className='border border-gray-200 rounded-xl max-h-[260px]'>
          <div className='border-b px-4 py-2 border-gray-200 flex justify-between items-center'>

            <h1 className='font-medium text-[14px]'>Upcoming deadlines</h1>
            <Ellipsis className='text-[#7f7f89]' size={18} />
          </div>

          <div className='px-4 py-3'>
            <div className='flex gap-3 items-center'>
              <h2 className='text-[26px] font-medium'>96</h2>
              <h3 className='text-[#7f7f89] pt-1.5 text-[13px]'><span className='text-red-600 font-semibold text-[14px]'>12</span> Decreased vs last week</h3>
            </div>
          </div>

          <UpcomingDeadlinesGraph />

        </div>

        {/**--Task completed--- */}
        <div className='border border-gray-200 rounded-xl max-h-[260px] flex flex-col md:col-span-2 xl:col-span-1 '>
          <div className='border-b px-4 py-2 border-gray-200 flex justify-between items-center'>
            <h1 className='font-medium text-[14px]'>Task completed</h1>
            <Ellipsis className='text-[#7f7f89]' size={18} />
          </div>

          <div className='px-4 py-3'>
            <div className='flex gap-3 items-center'>
              <h2 className='text-[26px] font-medium'>48</h2>
              <h3 className='text-[#7f7f89] pt-1.5 text-[13px]'>
                <span className='text-[#0FA15D] font-semibold text-[14px]'>8</span> Increased vs last week
              </h3>
            </div>
          </div>

          <div className="overflow-y-auto px-4 pb-3 flex-1 hide-scrollbar">
            <ProjectTasksChart />
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 mt-2.5 gap-2.5'>
        {/**--My Task--- */}
        <div className='border border-gray-200 rounded-xl md:col-span-2 h-[500px] flex flex-col'>
          <div className=' px-4 py-2  flex justify-between items-center'>
            <h1 className='font-medium text-[14px]'>My tasks</h1>
            <Ellipsis className='text-[rgb(127,127,137)]' size={18} />
          </div>

          <div className="px-4 py-3 border-t border-b border-gray-200 overflow-auto hide-scrollbar">
            <div className="bg-gray-100 rounded-full w-[400px] flex">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 text-[13px] py-2 rounded-full
              ${activeTab === tab
                      ? "bg-white text-black font-medium border border-gray-200"
                      : "text-gray-500"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto hide-scrollbar">
            <div className=" w-full overflow-x-auto hide-scrollbar">
              <table className="w-full min-w-[600px] overflow-y-auto">
                <thead className='border-b border-gray-200'>
                  <tr className="text-[13px] text-[#7f7f89]  ">
                    <th className="font-medium py-3 px-4 text-start pl-4">Task name</th>
                    <th className="font-medium py-3 px-4 text-start">Due date</th>
                    <th className="font-medium py-3 px-4 text-start">Progress</th>
                    <th className="font-medium py-3 px-4 text-start">Priority</th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  <tr className="text-[12px] border-b border-gray-200  hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-start truncate max-w-[60px] whitespace-nowrap overflow-hidden">Design homepage layout</td>
                    <td className="py-3 px-4 text-start">Mon, 12 Jan 2025</td>
                    <td className="py-3 px-4 text-start">0%</td>
                    <td className="py-3 px-4 text-start">
                      <span className="bg-red-100 border border-red-400 px-4 py-1 
                      rounded-full text-[12px] text-red-600 font-medium">
                        High
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/**--Goals--- */}
        <div className='border border-gray-200 rounded-xl h-[500px] flex flex-col'>
          <div className='border-b px-4 py-2 border-gray-200 flex justify-between items-center'>
            <h1 className='font-medium text-[14px]'>Goals</h1>
            <Ellipsis className='text-[#7f7f89]' size={18} />
          </div>

          <div className='overflow-auto hide-scrollbar p-4 space-y-3'>
            <div className='border border-gray-200 p-3 rounded-md'>
              <div className='flex items-center justify-between'>
                <span className='text-green-600 text-[11px] border border-green-200 bg-green-100 px-3 py-1 font-medium rounded-full '>On track</span>
                <div className='flex items-center gap-2'>
                  <div className='border-2 border-green-600 rounded-full h-5 w-5'></div>
                  <h2 className='font-medium text-[15px]'>40%</h2>
                </div>
              </div>

              <h1 className='text-[13px] font-medium pt-3'>Completeting 80 tasks every month</h1>
              <span className='text-[13px] text-[#7f7f89]'>FY25 2025</span>
              <div className='flex items-center gap-3 mt-2.5 border-t border-gray-200 pt-3'>
                <img src={Profile} alt="" height={34} width={34} />
                <div >
                  <h5 className='text-[11px] text-[#7f7f89]'>Owner</h5>
                  <h6 className='text-[12px] font-medium'>Sanjay Jangid</h6>
                </div>
              </div>
            </div>

             <div className='border border-gray-200 p-3 rounded-md'>
              <div className='flex items-center justify-between'>
                <span className='text-green-600 text-[11px] border border-green-200 bg-green-100 px-3 py-1 font-medium rounded-full '>On track</span>
                <div className='flex items-center gap-2'>
                  <div className='border-2 border-green-600 rounded-full h-5 w-5'></div>
                  <h2 className='font-medium text-[15px]'>40%</h2>
                </div>
              </div>

              <h1 className='text-[13px] font-medium pt-3'>Completeting 80 tasks every month</h1>
              <span className='text-[13px] text-[#7f7f89]'>FY25 2025</span>
              <div className='flex items-center gap-3 mt-2.5 border-t border-gray-200 pt-3'>
                <img src={Profile} alt="" height={34} width={34} />
                <div >
                  <h5 className='text-[11px] text-[#7f7f89]'>Owner</h5>
                  <h6 className='text-[12px] font-medium'>Sanjay Jangid</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
