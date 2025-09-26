import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import { ChevronDown, ChevronsUpDown, ClipboardList, FolderOpenDot, Goal, House, PanelsTopLeft, Plus, Search, Settings, User } from 'lucide-react'
import { NavLink } from 'react-router'
import CreateProject from '@/pages/projects/CreateProject'

const Sidebar = ({setIsExpendedSideBar, isExpendedSideBar}) => {

  const [createProjectModel, setCreateProjectModel] = useState(false)
  const [openWorkspace, setOpenWorkspace] = useState(false)

  return (
    <div className="py-2 space-y-4">
      <div className='px-3'>
        <div className='flex py-2.5 justify-between items-center'>
          <img src={Logo} alt='logo' className='object-contain h-6.5' />
          <button className='max-lg:cursor-pointer' 
                  onClick={setIsExpendedSideBar}
                  disabled={window.innerWidth > 1024}>
            <PanelsTopLeft className='text-[#7f7f89]' size={20} />
          </button>
        </div>

        <div className='bg-white rounded-md shadow-xs text-[14px] p-1.5 px-6 flex items-center gap-2 mt-4'>
          <Search className='text-[#7f7f89] text-[10px]' size={20} />
          <input type="text"
            placeholder='Search...'
            className='text-[#7f7f89] outline-none w-full' />
        </div>
      </div>

      <hr className='text-gray-200' />

      <div className='px-3.5 '>
        <div className='bg-white flex shadow-xs rounded-lg py-1.5 px-2 justify-between items-center relative'>
          <div className='flex items-center gap-3'>
            <div className='bg-white rounded-xl p-3 border border-gray-200 '>
              <User className='w-[20px] h-[20px]' />
            </div>
            <div>
              <h1 className='text-[14px] font-medium'>Creative Core</h1>
              <h2 className='text-[12px] text-[#7f7f89]'>23 Members</h2>
            </div>
          </div>

          <button className='cursor-pointer'
                  onClick={() => setOpenWorkspace(!openWorkspace)}>
            <ChevronsUpDown className='text-[#7f7f89]' size={16} />
          </button>

          <div className={`absolute w-full bg-white left-0 right-0 top-17 rounded-lg shadow-xs p-2 max-h-[500px]:
            ${openWorkspace ? "translate-y-0 opacity-100" : "opacity-0 -translate-y-2 pointer-events-none"} transition-all duration-300`}>
            <h3 className='text-[#7f7f89] text-[13px] font-medium'>All Workspaces</h3>
            <div className='space-y-2 mt-2 border-b border-gray-200 pb-3'>
              <div className='flex items-center gap-3 hover:bg-[#f5f5f5] hover:border hover:border-gray-200 p-1.5 rounded-lg cursor-pointer '>
                <div className='bg-white rounded-lg p-2 border border-gray-200 '>
                  <User className='w-[16px] h-[16px]' />
                </div>
                <div>
                  <h1 className='text-[12px] font-medium'>Creative Core</h1>
                  <h2 className='text-[10px] text-[#7f7f89]'>23 Members</h2>
                </div>
              </div>
            </div>

            <button className='flex py-2 border shadow-xs border-gray-300 gap-1.5 rounded-md px-3 cursor-pointer w-full items-center justify-center my-2'>
              <Plus size={18} />
              <span className='text-[13px] font-medium'>Add Workspace</span>
            </button>
          </div>
        </div>

        <h3 className='text-[#7f7f89] pt-4 text-[14px] font-medium '>GENERAL</h3>

        <div className='mt-2.5 space-y-1'>
          <NavLink to="/workspace/dashboard" className={({ isActive }) =>
            `flex items-center gap-2  font-medium text-[14px] p-2 rounded-md ${isActive ? 'shadow-xs' : ''} ${isActive ? "text-[#7575C6]" : "text-gray-500"} ${isActive ? "bg-white" : "bg-none"}`}>
            <House size={16} /> <span>Dashboard</span>
          </NavLink>


          <NavLink to="/workspace/tasks" className={({ isActive }) =>
            `flex items-center gap-2  font-medium text-[14px] p-2 rounded-md ${isActive ? 'shadow-xs' : ''} ${isActive ? "text-[#7575C6]" : "text-gray-500"} ${isActive ? "bg-white" : "bg-none"}`}
          ><ClipboardList size={16} /> <span>My tasks</span>
          </NavLink>

          <NavLink to="/workspace/goals" className={({ isActive }) =>
            `flex items-center gap-2  font-medium text-[14px] p-2 rounded-md ${isActive ? 'shadow-xs' : ''} ${isActive ? "text-[#7575C6]" : "text-gray-500"} ${isActive ? "bg-white" : "bg-none"}`}>
            <Goal size={16} /> <span>Goals</span>
          </NavLink>

          <NavLink to="/workspace/setting" className={({ isActive }) =>
            `flex items-center gap-2  font-medium text-[14px] p-2 rounded-md  ${isActive ? "text-[#7575C6]" : "text-gray-500"} 
            ${isActive ? "bg-white" : "bg-none"} ${isActive ? 'shadow-xs' : ''}`}>
            <Settings size={16} /> <span>Settings</span>
          </NavLink>
        </div>
      </div>

      <hr className='text-gray-200' />

      <div className='px-3.5 '>
        <div className='flex items-center justify-between'>
          <h3 className='text-[#7f7f89] text-[14px] font-medium'>PROJECTS</h3>
          <button className='cursor-pointer' onClick={() => setCreateProjectModel(true)}>
            <Plus className='text-[#7f7f89]' size={20} />

          </button>
        </div>

         {/* <CreateProject
              closeCreateProject={() => setCreateProjectModel(false)}
              createProject={createProjectModel}
            /> */}

        <NavLink to="/workspace/project" className={({ isActive }) =>
          `flex items-center gap-2  font-medium text-[14px] p-2 rounded-md mt-2  text-gray-500
            ${isActive ? "bg-white" : "bg-none"} ${isActive ? 'shadow-xs' : ''}`}>
          <FolderOpenDot size={20} className='text-amber-400' /> <span>Aerotech Web design</span>
        </NavLink>

      </div>


    </div>
  )
}

export default Sidebar