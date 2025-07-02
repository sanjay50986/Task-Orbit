import { Bolt, UserRound, Settings } from 'lucide-react'
import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Profile from './Profile'


const Setting = () => {
  return (
    <div className=' w-full '>
      <div className='p-4 px-4 flex items-center justify-between'>
        <div>
          <h1 className='text-[18px] font-medium'>Setting and preferences</h1>
          <h2 className='text-[12px] text-[#7f7f89] font-medium pt-1'>Set the settings according to your preferences</h2>
        </div>
      </div>

      <Tabs className="mt-1.5 overflow-auto">
        <div className="overflow-x-auto sm:overflow-visible hide-scrollbar">
          <TabList className="flex w-max min-w-full text-[13px] font-medium border-b px-4 border-gray-200 cursor-pointer">
            {['Settings'].map((label) => (
              <Tab
                key={label}
                className="flex items-center gap-2 px-3.5 py-2.5 border-b-2 border-transparent text-[#7f7f89] rounded-t-md transition-all duration-200"
                selectedClassName="text-[#7575C6] border-[#7575C6] bg-gradient-to-b from-[#f5f5ff] to-white  outline-none"
              >
                {{
                  ['Settings']: <Settings size={16} />,
                }[label]}
                {label}
              </Tab>
            ))}
          </TabList>
        </div>
        {/*-----Profile-----*/}
        <TabPanel>
            <Profile/>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Setting
