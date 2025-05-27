import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import RegisterLayout from './pages/auth/register/RegisterLayout'
import RegisterStepOne from './pages/auth/register/StepEmail'
import VerifyOtp from './pages/auth/register/StepVerificationCode'
import RightSlider from './pages/auth/register/RightSlider'
import Login from './pages/auth/login/Login'
import ForgetPassword from './pages/auth/login/ForgetPassword'
import AuthProvider from './context/AuthContext'


const App = () => {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Navigate to="/auth/login" replace /> // ✅ Default redirect to login
    },

    {
      path: '/auth',
      element: <RegisterLayout />,
      children: [
        {
          path: 'register',
          element: <RegisterStepOne />
        },
        {
          path: 'verify',
          element: <VerifyOtp />
        },

        {
          path: 'login',
          element: <Login />
        },

        {
          path: 'forget-password',
          element: <ForgetPassword />
        }
      ]
    },

    {
      path: 'auth/create-profile',
      element: <RightSlider />
    }
  ])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
