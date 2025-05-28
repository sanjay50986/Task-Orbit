import TextInput from '@/components/textInput/TextInput';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div className='bg-white rounded-2xl p-2  max-sm:mx-4 w-[450px]'>
                <div className='p-2  space-y-3'>
                    <h1 className='text-[20px] font-medium'>Hi, welcome back!</h1>
                    <h2 className='text-gray-600 text-[14px]'>Login with your email and password you have been created  before, or you can create new Tackito account</h2>
                    <button className='primary-btn'> <FaGoogle /><span className=' font-medium'>Sign up with Google</span></button>
                    <h4 className='text-center text-gray-600 text-[14px] font-medium pt-2'>Or continue with</h4>
                    <TextInput
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                    />

                    <label className='font-medium text-[14px]'>Password</label>
                    <div className='border border-gray-200 p-[8px] rounded-md flex items-center justify-between pr-3 mt-1 '>
                        <input
                            className='outline-none text-[14px] w-full px-1'
                            placeholder='Enter password'
                            type={showPassword ? "text" : "password"}

                        />
                        <button className='cursor-pointer'
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <Eye className='w-[20px] h-[20px]' /> : <EyeOff className='w-[20px] h-[20px]' />}
                        </button>

                    </div>

                    <div className='flex justify-end'>
                    <Link to="/auth/forget-password" className='font-medium text-[14px] text-[#7575C6]'>Forget password?</Link>

                    </div>

                    <button className='secondary-btn text-[16px] font-medium text-white mt-1'>Login now</button>
                </div>

                <div className='bg-[#f5f5f5] rounded-lg p-3 mt-2'>
                    <h5 className='text-gray-600 text-center text-[14px]'>Don't have an account? <Link to="/auth/register" className='text-[#7575C6]'>Create account</Link></h5>
                </div>
            </div>
        </div>
    )
}

export default Login
