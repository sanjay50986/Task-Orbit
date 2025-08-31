import OnboardingSidebar from '@/components/auth/OnboardingSidebar'
import React, { useState } from 'react'
import StepProfileInfo from './StepProfileInfo'
import SetupCompanyInfo from './SetupCompanyInfo'
import SetupWorkspace from './Workspace/SetupWorkspace'
import SetupTeammates from './SetupTeammates'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuthContext } from '@/context/AuthContext'
import { toast } from 'sonner'
import SetupSuccessShow from './SetupSuccessShow'

const OnBoarding = () => {

  const { email, firstName, password, phoneNumber, lastName, role, industry, company } = useAuthContext()

  const setups = [
    StepProfileInfo,
    SetupCompanyInfo,
    SetupWorkspace,
    SetupTeammates,
    SetupSuccessShow
  ]

  const [currentStep, setCurrentStep] = useState(0)

  const StepComponent = setups[currentStep]


  const next = () => {
    if (currentStep === 0) {
      if (!email || !firstName || !lastName || !password || !phoneNumber) {
        return toast.info("Please complete your profile")
      }
    }

    if (currentStep == 1) {
      if (!role || !industry || !company) {
        return toast.info("Add your company details")
      }
    }

    if (currentStep < setups.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className="flex h-screen p-4 ">
      <div className=" bg-white rounded-2xl md:block hidden xl:w-[18%] md:w-[30%]">
        <OnboardingSidebar currentStep={currentStep} />
      </div>

      <div className='flex justify-center items-center  xl:w-[82%] md:w-[80%]'>
        <StepComponent onContinue={next}/>
      </div>
    </div>
  )
}

export default OnBoarding
