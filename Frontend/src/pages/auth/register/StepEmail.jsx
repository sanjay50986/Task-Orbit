import TextInput from '@/components/textInput/TextInput';
import React from 'react'
import { FaGoogle } from "react-icons/fa";

const RegisterStepOne = () => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div className='bg-white rounded-2xl p-2  max-sm:mx-4'>
                <div className='p-2  space-y-3'>
                    <h1 className='text-[20px] font-medium'>Get Started now!</h1>
                    <h2 className='text-gray-600 text-[14px]'>Register with your email, and we will send you a codes for <br /> authentication, and you can create your account!</h2>
                    <button className='primary-btn'> <FaGoogle /><span className=' font-medium'>Sign up with Google</span></button>
                    <h4 className='text-center text-gray-600 text-[14px] font-medium pt-2'>Or continue with</h4>
                    <TextInput
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                    />

                    <button className='secondary-btn text-[16px] font-medium text-white mt-1'>Login now</button>
                </div>

                <div className='bg-[#f5f5f5] rounded-lg p-3 mt-2'>
                    <h5 className='text-gray-600 text-center text-[14px]'>Already have an account? <span className='text-[#11326d]'>Login</span></h5>
                </div>
            </div>
        </div>
    )
}

export default RegisterStepOne
