import ProgressSidebar from '@/components/auth/ProgressSidebar'
import React, { useState } from 'react'
import StepProfileInfo from './StepProfileInfo'
import SetupCompanyInfo from './SetupCompanyInfo'
import SetupWorkspace from './SetupWorkspace'
import SetupProject from './SetupProject'
import SetupTeammates from './SetupTeammates'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuthContext } from '@/context/AuthContext'
import { toast } from 'sonner'
import SetupSuccessShow from './SetupSuccessShow'

const rightSlider = () => {

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
    <div className="flex h-screen max-md:justify-center">
      <div className="xl:w-[20%] md:w-[33%] sm:w-[40%] bg-white m-4 rounded-2xl hidden md:block">
        <ProgressSidebar currentStep={currentStep} />
      </div>

      <div className="md:w-[80%] w-full flex items-center justify-center relative overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{
              opacity: 0,
              x: 150,
              scale: 0.7,
              rotateY: 45,
              skewY: 5,
              filter: 'blur(4px)',
              transformOrigin: 'center right'
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              rotateY: 0,
              skewY: 0,
              filter: 'blur(0px)',
              transformOrigin: 'center center'
            }}
            exit={{
              opacity: 0,
              x: -150,
              scale: 0.7,
              rotateY: -45,
              skewY: -5,
              filter: 'blur(4px)',
              transformOrigin: 'center left'
            }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 20,
              mass: 0.8,
              duration: 0.7,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <StepComponent onContinue={next} />
          </motion.div>
        </AnimatePresence>
      </div>



    </div>
  )
}

export default rightSlider
