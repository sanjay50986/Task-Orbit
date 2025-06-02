import { CalendarDays, FileCode, List, SquareMenu } from 'lucide-react';
import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Lists from './Lists/Lists';
import Board from './Board/Board';


const Task = () => {

  return (

    <div className=' w-full'>
      <div className='p-4 px-4'>
        <h1 className='text-[22px] font-medium'>My tasks</h1>
        <h2 className='text-[14px] text-[#7f7f89] font-medium pt-1'>Manage and track your tasks effeciently</h2>
      </div>

      <Tabs className="mt-1.5 overflow-auto">
        <div className="overflow-x-auto sm:overflow-visible hide-scrollbar">
          <TabList className="flex w-max min-w-full text-[14px] font-medium border-b px-4 border-gray-200 cursor-pointer">
            {['List', 'Board', 'Calendar', 'Files'].map((label) => (
              <Tab
                key={label}
                className="flex items-center gap-2 px-4.5 py-2.5 border-b-2 border-transparent text-[#7f7f89] rounded-t-md transition-all duration-200"
                selectedClassName="text-[#7575C6] border-[#7575C6] bg-gradient-to-b from-[#f5f5ff] to-white  outline-none"
                onClick={() => setBorderTab(true)}
              >
                {{
                  List: <List size={18} />,
                  Board: <SquareMenu size={18} />,
                  Calendar: <CalendarDays size={18} />,
                  Files: <FileCode size={18} />,
                }[label]}
                {label}
              </Tab>
            ))}
          </TabList>
        </div>


        {/*-----Lists-----*/}
        <TabPanel>
          <Lists />
        </TabPanel>

        <TabPanel>
            <Board/>
        </TabPanel>
        <TabPanel>

        </TabPanel>
        <TabPanel>

        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Task
