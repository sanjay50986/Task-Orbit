import { CalendarDays, CircleGauge, FolderOpenDot, FunnelX, List, Plus, Search, SquareChartGantt, SquareMenu, UserPen, UserRound, Users } from 'lucide-react'
import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import ProjectOverview from './projectOverview/ProjectOverview'
import Calender from './calender/Calender'
import Lists from './lists/List'
import Board from './board/Board'
import ProjectDashboard from './ProjectDashboard'

const Project = () => {
    return (
        <div className=' w-full'>
            <div className='p-4 px-4 flex items-center justify-between'>
                <div className='flex items-center gap-2.5'>
                    <FolderOpenDot size={36} className='text-amber-400' />
                    <div>
                        <h1 className='text-[18px] font-medium'>Aerotech Web design</h1>
                        <h2 className='text-[12px] text-[#7f7f89] font-medium'>Website design project</h2>
                    </div>
                </div>

                
            </div>

            <Tabs className="mt-1.5 overflow-auto">
                <div className="overflow-x-auto sm:overflow-visible hide-scrollbar">
                    <TabList className="flex w-max min-w-full text-[13px] font-medium border-b px-4 border-gray-200 cursor-pointer">
                        {['Overview', 'List', 'Board', 'Calendar', 'Dashboard'].map((label) => (
                            <Tab
                                key={label}
                                className="flex items-center gap-2 px-3.5 py-2.5 border-b-2 border-transparent text-[#7f7f89] rounded-t-md transition-all duration-200"
                                selectedClassName="text-[#7575C6] border-[#7575C6] bg-gradient-to-b from-[#f5f5ff] to-white  outline-none"
                            >
                                {{
                                    ['Overview']: <SquareChartGantt size={16} />,
                                    ['List']: <List size={16} />,
                                    ['Board']: <SquareMenu size={16} />,
                                    ['Calendar']: <CalendarDays size={16} />,
                                    ['Dashboard']: <CircleGauge size={16} />,
                                }[label]}
                                {label}
                            </Tab>
                        ))}
                    </TabList>
                </div>

                {/*----Project Overview------*/}
                <TabPanel>
                    <ProjectOverview/>
                </TabPanel>

                {/*-----Lists-----*/}
                <TabPanel>
                    <Lists/>
                </TabPanel>

                {/*-----Board-----*/}
                <TabPanel>
                    <Board/>
                </TabPanel>

                {/*-----Calender-----*/}
                <TabPanel>
                    <Calender/>
                </TabPanel>

                {/*-----Dashboard-----*/}
                <TabPanel>
                    <ProjectDashboard/>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Project
