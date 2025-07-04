import TextInput from '@/components/textInput/TextInput';
import { authApi } from '@/services/authAPI';
import { baseUrl } from '@/services/baseUrl';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router';
import { PuffLoader } from 'react-spinners';
import { toast } from 'sonner';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setloading] = useState(false)


    const loginApi = async () => {

        if (!email || !password) {
            return toast.error("Email and password required")
        }
        try {
            setloading(true)
            const response = await fetch(`${baseUrl}/auth/${authApi.LOGIN}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);
            } else {
                toast.error(data.message || "Unknown error");
            }

        } catch (error) {
            console.error("Error create user:", error.message);
        } finally {
            setloading(false)
        }
    }

    return (
        <div className='flex justify-center items-center h-[90vh]'>
            <div className='bg-white rounded-2xl p-2  max-sm:mx-4 w-[450px]'>
                <div className='p-2  space-y-3'>
                    <h1 className='text-[20px] font-medium'>Hi, welcome back!</h1>
                    <h2 className='text-gray-600 text-[14px]'>Login with your email and password you have been created  before, or you can create new Tackito account</h2>
                    <button className='primary-btn space-x-3'> <FaGoogle /><span className=' font-medium'>Sign up with Google</span></button>
                    <h4 className='text-center text-gray-600 text-[14px] font-medium pt-2'>Or continue with</h4>
                    <TextInput
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className='font-medium text-[14px]'>Password</label>
                    <div className='border border-gray-200 p-[8px] rounded-md flex items-center justify-between pr-3 mt-1 '>
                        <input
                            className='outline-none text-[14px] w-full px-1'
                            placeholder='Enter password'
                            type={showPassword ? "text" : "password"}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                        <button className='cursor-pointer'
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <Eye className='w-[20px] h-[20px]' /> : <EyeOff className='w-[20px] h-[20px]' />}
                        </button>

                    </div>

                    <div className='flex justify-end'>
                        <Link to="/auth/forget-password" className='font-medium text-[14px] text-[#7575C6]'>Forget password?</Link>

                    </div>

                    <button disabled={loading} onClick={loginApi} className={`secondary-btn text-[16px] ${loading ? "opacity-90" : "opacity-100"} font-medium text-white mt-4`}>{
                        loading ? <PuffLoader color='white' size={24} /> : "Login now"
                    }</button>
                </div>

                <div className='bg-[#f5f5f5] rounded-lg p-3 mt-2'>
                    <h5 className='text-gray-600 text-center text-[14px]'>Don't have an account? <Link to="/auth/register" className='text-[#7575C6] font-medium'>Create account</Link></h5>
                </div>
            </div>
        </div>
    )
}

export default Login
