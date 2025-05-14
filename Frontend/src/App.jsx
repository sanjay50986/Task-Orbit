import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RegisterLayout from './pages/auth/register/RegisterLayout'
import RegisterStepOne from './pages/auth/register/RegisterStepOne'
import VerifyOtp from './pages/auth/register/VerifyOtp'


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
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
