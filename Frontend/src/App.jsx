import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import RegisterLayout from './pages/auth/register/RegisterLayout'
import RegisterStepOne from './pages/auth/register/StepEmail'
import VerifyOtp from './pages/auth/register/StepVerificationCode'
import RightSlider from './pages/auth/register/RightSlider'
import Login from './pages/auth/login/Login'
import ForgetPassword from './pages/auth/login/ForgetPassword'
import AuthProvider from './context/AuthContext'
import { Toaster } from 'sonner'
import Layout from './components/Layout'
import Dashboard from './pages/Home/Dashboard'



const App = () => {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Navigate to="auth/login" replace />
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
    },

    {
      path: '/workspace',
      element: <Layout />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />
        }
      ]
    }
  ])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position='top-center' richColors duration={3000} />
    </AuthProvider>
  )
}

export default App
