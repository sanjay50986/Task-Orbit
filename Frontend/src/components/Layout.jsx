
import React from 'react'
import Topbar from './Topbar'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <div className='flex h-screen'>
            <div className='' >
                <Sidebar />
            </div>
            <div className='flex flex-col flex-1 overflow-hidden bg-white rounded-xl my-2.5 mr-2.5'>
                <Topbar />
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout
