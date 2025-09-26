import { ChevronDown, ChevronRight, Inbox, LogOut, Menu } from 'lucide-react'
import React, { useState } from 'react'
import Profile from '../assets/profile.png'
import Cookies from "js-cookie";
import { useAuthContext } from '@/context/AuthContext';


const Topbar = ({isExpendedSideBar, setIsExpendedSideBar}) => {

  const {UserDetails} = useAuthContext()
  const [topMenu, setTopMenu] = useState(false)

  console.log(UserDetails)

  const logOut = () => {
    Cookies.remove("userToken");
    window.location.href = "/auth/login";
  };

  return (
    <div className='flex items-center py-2.5 px-4 justify-between border-b border-gray-200'>
      <div className='flex items-center gap-1'>
        { isExpendedSideBar && <button onClick={setIsExpendedSideBar} className='p-1.5 cursor-pointer border rounded-md border-gray-300 mr-2'>
          <Menu size={18}/>
        </button> }
        <h1 className='text-[#7f7f89] text-[14px]'>General</h1>
        <ChevronRight className='text-[#7f7f89]' size={14} />
        <h2 className='text-[14px] font-medium'>Dashboard</h2>
      </div>

      <div className='flex items-center gap-4 relative'>
        <button className='flex items-center py-1.5 border shadow-xs border-gray-300 gap-1.5 rounded-md px-3 cursor-pointer max-md:hidden'>
          <Inbox size={18} />
          <span className='text-[14px] font-medium'>Inbox</span>
        </button>

        <div className='flex items-center gap-2'>
          <img src={Profile} alt="profile" className='w-8.5 h-8.5' />
          <button onClick={() => setTopMenu(!topMenu)} className='cursor-pointer'><ChevronDown size={18}/></button>
        </div>

        <button onClick={logOut} className={`${topMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"} cursor-pointer 
          transition-all duration-300 ease-in-out absolute top-10 right-0 shadow-md bg-white border border-gray-300 rounded-md px-4 py-2`}>
          <h2 className='text-[13px] font-medium text-red-600 flex items-center gap-2'><LogOut size={16} /><span>Logout</span></h2>
        </button>
      </div>
    </div>
  )
}

export default Topbar
