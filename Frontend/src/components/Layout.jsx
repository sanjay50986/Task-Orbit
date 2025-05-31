
import React from 'react'
import Topbar from './Topbar'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <div className='flex h-screen'>
            <div className='xl:w-[18rem] md:w-[14rem] max-md:hidden' >
                <Sidebar />
            </div>
            <div className='flex flex-col flex-1 overflow-hidden bg-white rounded-xl md:my-2.5 md:mr-2.5 '>
                <Topbar />
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout
