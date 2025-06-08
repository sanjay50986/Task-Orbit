import React, { useState } from 'react'
import Logo from '../../assets/profile.png'
import { FunnelX, Inbox, List, Plus, Search, SquareMenu, UserPen, UserRound, Users } from 'lucide-react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import TeamGoal from './teamGoals/TeamGoal'
import MyGoal from './myGoals/MyGoal'
import CreateGoal from './CreateGoal'

const Goal = () => {

  const [openGoalModel, setOpenGoalModel] = useState(false)
  return (
    <div className=' w-full '>
      <div className='p-4 px-4 flex items-center justify-between'>
        <div>
          <h1 className='text-[18px] font-medium'>Creative core goals</h1>
          <h2 className='text-[12px] text-[#7f7f89] font-medium pt-1'>Create and manage properly team and your goals</h2>
        </div>

        <div className='flex items-center gap-3'>
          <img src={Logo} alt="people photo" height={30} width={30} />
          <button className='flex items-center py-1.5 border shadow-xs border-gray-300 gap-1.5 rounded-md px-3 cursor-pointer'>
            <UserPen size={18} />
            <span className='text-[14px] font-medium'>Invite</span>
          </button>
        </div>
      </div>

      <Tabs className="mt-1.5 overflow-auto">
        <div className="overflow-x-auto sm:overflow-visible hide-scrollbar">
          <TabList className="flex w-max min-w-full text-[13px] font-medium border-b px-4 border-gray-200 cursor-pointer">
            {['Teams goal', 'My goals'].map((label) => (
              <Tab
                key={label}
                className="flex items-center gap-2 px-3.5 py-2.5 border-b-2 border-transparent text-[#7f7f89] rounded-t-md transition-all duration-200"
                selectedClassName="text-[#7575C6] border-[#7575C6] bg-gradient-to-b from-[#f5f5ff] to-white  outline-none"
              >
                {{
                  ['Teams goal']: <Users size={16} />,
                  ['My goals']: <UserRound size={16} />,
                }[label]}
                {label}
              </Tab>
            ))}
          </TabList>
        </div>

        <div className=' px-4 py-4'>
          <div className='flex sm:flex-row flex-col justify-between '>
            <div className='flex flex-row gap-3 '>
              <div className='flex sm:w-[17rem] w-full border gap-2  p-1.5 shadow-xs px-4 items-center border-gray-300  rounded-md outline-none text-[14px] '>
                <Search className='text-[#7f7f89]' size={18} />
                <input
                  className='outline-none text-gray-600  w-full'
                  placeholder='Search goal'
                />
              </div>

              <button className='flex  text-[14px] font-medium items-center border px-4  p-1.5 rounded-md shadow-xs gap-2 cursor-pointer border-gray-300 '>
                <FunnelX size={18} />
                Filter
              </button>
            </div>

            <button onClick={() => setOpenGoalModel(true)} className='create-Btn  p-2 max-sm:mt-3 '>
              <Plus size={18} />
              Add goal
            </button>
          </div>
        </div>

        <CreateGoal
          closeGoal={() => setOpenGoalModel(false)}
          createGoal={openGoalModel}
        />


        {/*-----Team Goals-----*/}
        <TabPanel>
          <TeamGoal />
        </TabPanel>

        {/*-----My Goals-----*/}
        <TabPanel>
          <MyGoal />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Goal
