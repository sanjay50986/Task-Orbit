import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import RegisterLayout from './pages/auth/register/RegisterLayout'
import RegisterStepOne from './pages/auth/register/StepEmail'
import VerifyOtp from './pages/auth/register/StepVerificationCode'
import OnBoarding from './pages/auth/register/OnBoarding'
import Login from './pages/auth/login/Login'
import ForgetPassword from './pages/auth/login/ForgetPassword'
import AuthProvider from './context/AuthContext'
import { Toaster } from 'sonner'
import Layout from './components/Layout'
import Dashboard from './pages/Home/Dashboard'
import Task from './pages/tasks/Task'
import Goal from './pages/goals/Goal'
import Setting from './pages/setting/Setting'
import TaskProvider from './context/TaskContext'
import Project from './pages/projects/Project'



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
        },

      ]
    },

    {
      path: 'auth/create-profile',
      element: <OnBoarding />
    },

    {
      path: '/workspace',
      element: <Layout />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />
        },

        {
          path: 'tasks',
          element: <Task />
        },

        {
          path: 'goals',
          element: <Goal />
        },

        {
          path: 'setting',
          element: <Setting />
        }, 

        {
          path: 'project',
          element: <Project/>
        }
      ]
    }
  ])

  return (
    <AuthProvider>
      <TaskProvider >
        <RouterProvider router={router} />
        <Toaster position='bottom-right' richColors duration={3000} />
      </TaskProvider>
    </AuthProvider>
  )
}

export default App
