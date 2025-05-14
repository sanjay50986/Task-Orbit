import Header from '@/components/auth/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const RegisterLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}

export default RegisterLayout
