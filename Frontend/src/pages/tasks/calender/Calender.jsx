import { ChevronLeft, ChevronRight, FunnelX, Plus, Search } from 'lucide-react'
import React from 'react'
import { Tab, TabList, Tabs } from 'react-tabs'
import WeeklyCalender from './WeeklyCalender'

const Calender = () => {
  return (
    <div className='p-4 px-4 border-t border-gray-200'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <span className='bg-[#f8f8f8] border border-[#e5e5e5] font-medium px-2.5 py-1 rounded-full  text-[12px] text-[#4B4F5C]'>Today</span>
          <h2 className='font-medium text-[16px]'>January 2025</h2>
          <ChevronLeft size={16} />
          <ChevronRight size={16} />
        </div>
      </div>

      <div className='overflow-x-auto mt-6  hide-scrollbar'>
        <div className='min-w-[1000px]'>
          <WeeklyCalender />
        </div>
      </div>
    </div>
  )
}

export default Calender
