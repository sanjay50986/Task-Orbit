import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RegisterLayout from './pages/auth/register/RegisterLayout'
import RegisterStepOne from './pages/auth/register/StepEmail'
import VerifyOtp from './pages/auth/register/StepVerificationCode'
import StepUserInfo from './pages/auth/register/StepUserInfo'


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/auth',
      element: <RegisterLayout/>,
      children: [
        {
          path: 'register',
          element : <RegisterStepOne/>
        },
        {
          path: 'verify',
          element : <VerifyOtp/>
        },
      ]
    },

    {
      path: 'auth/create-profile',
      element: <StepUserInfo/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
