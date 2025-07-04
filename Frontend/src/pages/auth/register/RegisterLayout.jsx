import Header from '@/components/auth/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const RegisterLayout = () => {
    return (
        <div className="flex flex-col ">
            <div className='border-b border-gray-200'>
                <Header />
            </div>
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}

export default RegisterLayout
