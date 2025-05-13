import RegisterStep1 from '@/pages/auth/register/RegisterStep1'
import React from 'react'
import { Route } from 'react-router'

const RegisterRoutes = () => {
    return (
        <>
            <Route path='/register' element={<RegisterStep1 />} />
        </>
    )
}

export default RegisterRoutes
