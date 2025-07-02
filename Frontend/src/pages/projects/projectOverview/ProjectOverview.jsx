import { CalendarDays, CircleGauge, Ellipsis, SquareChartGantt } from 'lucide-react'
import React from 'react'
import member from '../../../assets/profile.png'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Activites from './Activites'
import Updates from './Updates'

const ProjectOverview = () => {
    return (
        <div className='flex w-full  '>
            <div className='w-[70%] space-y-4 p-4 px-4 border-r border-gray-200'>
                <div className='border border-gray-200  rounded-xl h-[250px]'>
                    <div className='border-b px-4 py-3 border-gray-200 flex justify-between items-center'>
                        <h1 className='font-medium text-[14px]'>Project description</h1>
                        <Ellipsis className='text-[#7f7f89]' size={18} />
                    </div>

                    <textarea
                        className='w-full outline-none p-3 text-[14px] h-full resize-none'
                        placeholder='Describe this project' />
                </div>

                <div className='border border-gray-200  rounded-xl '>
                    <div className='border-b px-4 py-3 border-gray-200 flex justify-between items-center'>
                        <h1 className='font-medium text-[14px]'>Member roles</h1>
                        <Ellipsis className='text-[#7f7f89]' size={18} />
                    </div>

                    <div className=' px-4 py-3 space-y-6'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={member} alt="member" height={30} width={30} />
                                <div>
                                    <h1 className='text-[13px] font-medium'>Sanjay jangid</h1>
                                    <h2 className='text-[#7f7f89] text-[12px]'>sanjay50986@gmail.com</h2>
                                </div>
                            </div>

                            <button className='flex items-center py-1.5 border shadow-xs border-gray-300 gap-1.5 rounded-md px-4 cursor-pointer'>
                                <span className='text-[13px] font-medium'>Owner</span>
                            </button>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src={member} alt="member" height={30} width={30} />
                                <div>
                                    <h1 className='text-[13px] font-medium'>Sanjay jangid</h1>
                                    <h2 className='text-[#7f7f89] text-[12px]'>sanjay50986@gmail.com</h2>
                                </div>
                            </div>

                            <button className='flex items-center py-1.5 border shadow-xs border-gray-300 gap-1.5 rounded-md px-4 cursor-pointer'>
                                <span className='text-[13px] font-medium'>Member</span>
                            </button>
                        </div>
                    </div>


                </div>
            </div>

            <div className='w-[30%] '>
                <h1 className='text-[16px] font-medium px-4 pt-4'>History</h1>

                <Tabs className="mt-1.5 overflow-auto">
                    <div className="overflow-x-auto sm:overflow-visible hide-scrollbar">
                        <TabList className="flex w-max min-w-full text-[13px] font-medium border-b px-4 pt-2 border-gray-200 cursor-pointer">
                            {['Activities', 'Updates'].map((label) => (
                                <Tab
                                    key={label}
                                    className="flex items-center gap-2 px-3.5 py-2.5 border-b-2 border-transparent text-[#7f7f89] rounded-t-md transition-all duration-200"
                                    selectedClassName="text-[#7575C6] border-[#7575C6] bg-gradient-to-b from-[#f5f5ff] to-white  outline-none"
                                >

                                    {label}
                                </Tab>
                            ))}
                        </TabList>
                    </div>

                    {/*----------*/}
                    <TabPanel>
                        <Activites/>
                    </TabPanel>

                    {/*-----=-----*/}
                    <TabPanel>
                        <Updates/>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default ProjectOverview
