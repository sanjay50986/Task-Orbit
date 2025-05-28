import TextInput from '@/components/textInput/TextInput';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router';

const ForgetPassword = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [retypePassword, setRetypePassword] = useState(false)
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div className='bg-white rounded-2xl p-2  max-sm:mx-4 w-[450px]'>
                <div className='p-2  space-y-3'>
                    <h1 className='text-[20px] font-medium'>Create your new password</h1>
                    <h2 className='text-gray-600 text-[14px]'>Set a new, secure password to protect your account,  you can use it to log in once updated</h2>

                    <div className='space-y-4 mt-4'>
                        <label className='font-medium text-[14px]'>Create password</label>
                        <div className='border border-gray-200 p-[8px] rounded-md flex items-center justify-between pr-3 mt-1 '>
                            <input
                                className='outline-none text-[14px] w-full px-1'
                                placeholder='Enter your new password'
                                type={showPassword ? "text" : "password"}

                            />
                            <button className='cursor-pointer'
                                onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <Eye className='w-[20px] h-[20px]' /> : <EyeOff className='w-[20px] h-[20px]' />}
                            </button>

                        </div>

                        <label className='font-medium text-[14px] '>Retype password</label>
                        <div className='border border-gray-200 p-[8px] rounded-md flex items-center justify-between pr-3 mt-1 '>
                            <input
                                className='outline-none text-[14px] w-full px-1'
                                placeholder='Retype password'
                                type={showPassword ? "text" : "password"}

                            />
                            <button className='cursor-pointer'
                                onClick={() => setRetypePassword(!retypePassword)}>
                                {retypePassword ? <Eye className='w-[20px] h-[20px]' /> : <EyeOff className='w-[20px] h-[20px]' />}
                            </button>

                        </div>
                    </div>

                    <button className='secondary-btn text-[16px] font-medium text-white mt-1'>Resend password</button>
                    <Link to="/auth/login" className='primary-btn text-[16px] font-medium text-black'>Cancel</Link>

                    
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
