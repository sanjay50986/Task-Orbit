import TextInput from '@/components/textInput/TextInput'
import { Eye, EyeOff, Images, User } from 'lucide-react'
import React, { useState } from 'react'

const SetupCompanyInfo = () => {

    const [showPassword, setShowPassword] = useState(false)
  return (
     <div className='bg-white p-4 rounded-2xl space-y-2 lg:w-[550px] sm:w-[450px] py-6 px-4.5' >
            <h1 className='text-[22px] font-medium '>Tell about yourself</h1>
            <p className='text-gray-600  text-[14px]'>Share some details about yourself like your role, work, etc, and your preferences to personalize your experience</p>

            <div className='space-y-4.5 mt-5'>
                <TextInput
                    label="Company/organization"
                    placeholder="Enter name"
                    type="text"
                />

                <TextInput
                    label="Industry/field"
                    placeholder="Select company type"
                    type="text"
                />

                <TextInput
                    label="Your role"
                    placeholder="Select role"
                    type="email"
                />

                <TextInput
                    label="Your work"
                    placeholder="Select work"
                    type="text"
                />

                <button className='secondary-btn text-white mt-3'>
                    Continue
                </button>

                 <button className='primary-btn text-black'>
                    Skip for now
                </button>

            </div>


        </div>
  )
}

export default SetupCompanyInfo
