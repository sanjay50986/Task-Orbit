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

const rightSlider = () => {

  const {email, firstName, password, company, role, industry, phoneNumber, lastName} = useAuthContext()

  const setups = [
    StepProfileInfo,
    SetupCompanyInfo,
    SetupWorkspace,
    SetupTeammates
  ]

  const [currentStep, setCurrentStep] = useState(0)

  const StepComponent = setups[currentStep]


  const next = () => {
    // if(!email || !firstName || !lastName || !password || !phoneNumber) {
    //   return toast.error("All fields are required")
    // }


    if (currentStep < setups.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className="flex h-screen">
      <div className="xl:w-[20%] md:w-[33%] sm:w-[40%] bg-white m-4 rounded-2xl">
        <ProgressSidebar currentStep={currentStep} />
      </div>

      <div className="w-[80%] flex items-center justify-center relative overflow-hidden">
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
