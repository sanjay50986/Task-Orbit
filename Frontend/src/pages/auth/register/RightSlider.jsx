import ProgressSidebar from '@/components/auth/ProgressSidebar'
import React from 'react'
import StepProfileInfo from './StepProfileInfo'
import SetupCompanyInfo from './SetupCompanyInfo'
import SetupWorkspace from './SetupWorkspace'

const rightSlider = () => {
  return (
    <div className="flex h-screen">
      <div className="xl:w-[20%] md:w-[33%] sm:w-[40%] bg-white m-4 rounded-2xl">
        <ProgressSidebar />
      </div>

      <div className="w-[80%] flex items-center justify-center">
        <SetupWorkspace/>
      </div>
    </div>
  )
}

export default rightSlider
