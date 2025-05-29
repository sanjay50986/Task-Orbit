import React from 'react'
import Logo from "../assets/Logo.png"
import { PanelsTopLeft } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='px-2 py-1'>
      <div className='flex justify-between items-center'>
        <img src={Logo} alt='logo' className='w-[50px] h-[50px]'/>
        <PanelsTopLeft className='text-gray-500'/>
      </div>
    </div>
  )
}

export default Sidebar
