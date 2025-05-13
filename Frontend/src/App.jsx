import React from 'react'
import { BrowserRouter, Routes } from 'react-router'
import RegisterRoutes from './routes/RegisterRoutes'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {RegisterRoutes}
      </Routes>
    </BrowserRouter>
  )
}

export default App
