import React from 'react'
import Logo from "../assets/Logo.png"
import { ChevronDown, ChevronsUpDown, ClipboardList, FolderOpenDot, Goal, House, PanelsTopLeft, Plus, Search, Settings, User } from 'lucide-react'
import { NavLink } from 'react-router'

const Sidebar = () => {
  return (
    <div className='py-2 space-y-5' >
      <div className='px-3.5'>
        <div className='flex justify-between items-center'>
          <img src={Logo} alt='logo' className='w-[50px] h-[50px]' />
          <PanelsTopLeft className='text-[#7f7f89]' />
        </div>

        <div className='bg-white rounded-md shadow-xs text-[14px] p-2 px-6 flex items-center gap-2 mt-4'>
          <Search className='text-[#7f7f89] text-[10px]' />
          <input type="text"
            placeholder='Search...'
            className='text-[#7f7f89] outline-none w-full' />
        </div>
      </div>

      <hr className='text-gray-200' />

      <div className='px-3.5 '>
        <div className='bg-white flex shadow-xs rounded-xl p-2 justify-between items-center'>
          <div className='flex items-center gap-3'>
            <div className='bg-white rounded-xl p-3 border border-gray-200 '>
              <User className='w-[20px] h-[20px]' />
            </div>
            <div>
              <h1 className='text-[14px] font-medium'>Creative Core</h1>
              <h2 className='text-[12px] text-[#7f7f89]'>23 Members</h2>
            </div>
          </div>

          <ChevronsUpDown  className='text-[#7f7f89]' size={16} />
        </div>

        <h3 className='text-[#7f7f89] pt-5 text-[14px] font-medium '>GENERAL</h3>

        <div className='mt-4 space-y-1.5'>
          <NavLink to="/workspace/dashboard" className={({ isActive }) =>
            `flex items-center gap-2  font-medium text-[15px] p-2 rounded-md ${isActive ? 'shadow-xs' : ''} ${isActive ? "text-[#7575C6]" : "text-gray-500"} ${isActive ? "bg-white" : "bg-none"}`}>
            <House size={18} /> <span>Dashboard</span>
          </NavLink>


          <NavLink to="/workspace/tasks" className={({ isActive }) =>
            `flex items-center gap-2  font-medium text-[15px] p-2 rounded-md ${isActive ? 'shadow-xs' : ''} ${isActive ? "text-[#7575C6]" : "text-gray-500"} ${isActive ? "bg-white" : "bg-none"}`}
          ><ClipboardList size={18} /> <span>My tasks</span>
          </NavLink>

          <NavLink to="/workspace/goals"  className={({ isActive }) =>
            `flex items-center gap-2  font-medium text-[15px] p-2 rounded-md ${isActive ? 'shadow-xs' : ''} ${isActive ? "text-[#7575C6]" : "text-gray-500"} ${isActive ? "bg-white" : "bg-none"}`}>
            <Goal size={18} /> <span>Goals</span>
          </NavLink>

          <NavLink to="/workspace/setting"  className={({ isActive }) =>
            `flex items-center gap-2  font-medium text-[15px] p-2 rounded-md  ${isActive ? "text-[#7575C6]" : "text-gray-500"} 
            ${isActive ? "bg-white" : "bg-none"} ${isActive ? 'shadow-xs' : ''}`}>
            <Settings size={18} /> <span>Settings</span>
          </NavLink>
        </div>
      </div>

      <hr className='text-gray-200' />

      <div className='px-3.5 '>
        <div className='flex items-center justify-between'>
          <h3 className='text-[#7f7f89] text-[14px] font-medium'>PROJECTS</h3>
          <Plus className='text-[#7f7f89]' size={20} />
        </div>

        <div className='my-4 flex items-center gap-2'>
          <FolderOpenDot  size={19} className='text-amber-400' />
          <h5 className='text-[#7f7f89] text-[14px] '>Aerotech Web design</h5>
        </div>

        <div className='my-4 flex items-center gap-2'>
          <FolderOpenDot size={19} className='text-red-600' />
          <h5 className='text-[#7f7f89] text-[14px] '>Climtown Web design</h5>
        </div>

        <div className='my-4 flex items-center gap-2'>
          <FolderOpenDot size={19} className='text-green-600' />
          <h5 className='text-[#7f7f89] text-[14px] '>Uwo dashboard design</h5>
        </div>
      </div>

    </div>
  )
}

export default Sidebar