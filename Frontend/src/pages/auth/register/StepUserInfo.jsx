import ProgressSidebar from '@/components/auth/ProgressSidebar'
import React from 'react'

const StepUserInfo = () => {
  return (
    <div className="flex h-screen">
      <div className="xl:w-[20%] md:w-[33%] sm:w-[40%] bg-white m-4 rounded-2xl">
        <ProgressSidebar />
      </div>

      {/* <div className="w-[70%] m-4">
        <h1 className="text-xl">Step 1: User Info</h1>
      </div> */}
    </div>
  )
}

export default StepUserInfo
