import React, { useState } from 'react'
import { User, Images, Eye, EyeOff } from 'lucide-react';
import TextInput from '@/components/textInput/TextInput';
import { useAuthContext } from '@/context/AuthContext';

const StepProfileInfo = ({onContinue}) => {

    const [showPassword, setShowPassword] = useState(false)
    const {setEmail, 
        setfirstName, 
        setlastName, 
        setPhoneNumber, 
        setPassword,
    } = useAuthContext()

    return (
        <div className='bg-white max-md:mx-4 p-4 rounded-2xl space-y-2 lg:w-[550px] sm:w-[450px] w-full py-6 px-4.5' >
            <h1 className='text-[22px] font-medium '>Complete your information</h1>
            <p className='text-gray-600  text-[14px]'>Enter your personal data/information, from name until phone number, make sure everything is filled in completely.</p>

            <div className='border border-gray-200 py-4 px-4 rounded-md flex md:flex-row flex-col  items-center  justify-between mt-6'>
                <div className='flex md:flex-row flex-col gap-2.5 items-center'>
                    <div className='bg-gray-100 rounded-full p-5 border border-gray-200 '>
                        <User className='w-[30px] h-[30px]' />
                    </div>

                    <div className='max-md:text-center'>
                        <h1 className='text-[16px] font-medium '>Add profile image</h1>
                        <p className='text-gray-600  text-[12px] '>Add your profile image with min size</p>
                        <p className='text-gray-600  text-[12px]'>400 <span>x</span> 400 px, max file size10 MB</p>
                    </div>
                </div>

                <button className='flex items-center gap-1.5 border max-md:w-full max-md:justify-center max-md:mt-5 border-gray-300 p-2 rounded-md px-3 cursor-pointer shadow'>
                    <Images className='w-[20px] h-[20px]' />
                    <span className='font-medium text-[14px]'>Upload</span>
                </button>
            </div>

            <div className='space-y-4.5 mt-5'>
                <TextInput
                    label="First name"
                    placeholder="Enter your first name"
                    type="text"
                    onChange={(e) => setfirstName(e.target.value)}
                />

                <TextInput
                    label="Last name"
                    placeholder="Enter your last name"
                    type="text"
                    onChange={(e) => setlastName(e.target.value)}
                />

                <TextInput
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextInput
                    label="Phone number"
                    placeholder="Enter your phone number"
                    type="number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <label className='font-medium text-[14px]'>Create Password</label>
                <div className='border border-gray-200 p-[8px] rounded-md flex items-center justify-between pr-3 mt-1 '>
                    <input
                        className='outline-none text-[14px] w-full px-1'
                        placeholder='Create password'
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                    <button className='cursor-pointer'
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <Eye className='w-[20px] h-[20px]' /> : <EyeOff className='w-[20px] h-[20px]' />}
                    </button>

                </div>

                <button onClick={onContinue} className='secondary-btn text-white mt-3'>
                    Continue
                </button>

            </div>


        </div>
    )
}

export default StepProfileInfo
