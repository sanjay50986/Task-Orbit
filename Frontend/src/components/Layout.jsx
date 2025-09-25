
import React, { useState } from 'react'
import Topbar from './Topbar'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'


const Layout = () => {
    const [isExpendedSideBar, setIsExpendedSideBar] = useState(false)
    return (
        <div className='flex min-h-screen'>
            <div className={`max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-full transition-transform duration-300 ease-in-out
                ${isExpendedSideBar ? "max-lg:-translate-x-full" : "max-lg:translate-x-0"}
                w-[18%] min-w-[250px] max-w-[300px]
                max-lg:bg-[#f5f5f5] z-20`} >
                <Sidebar
                    setIsExpendedSideBar = {() => setIsExpendedSideBar(true)}
                    isExpendedSideBar = {isExpendedSideBar} />
            </div>
            <div className='flex flex-col flex-1 overflow-hidden bg-white rounded-xl lg:m-2.5 w-[82%] '>
                <Topbar
                    isExpendedSideBar = {isExpendedSideBar}
                    setIsExpendedSideBar = {() => setIsExpendedSideBar(false)} />
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout
