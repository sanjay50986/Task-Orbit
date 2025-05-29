
import React from 'react'
import Topbar from './Topbar'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <div className='flex h-screen w-full'>
            <div className='w-[240px]'>
                <Sidebar />
            </div>
            <div className='flex flex-col flex-1 overflow-hidden bg-white m-2.5 rounded-md'>
                <Topbar />
                <main className="flex-1 overflow-y-auto bg-white">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout
