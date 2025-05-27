import TextInput from '@/components/textInput/TextInput';
import { useAuthContext } from '@/context/AuthContext';
import { authApi } from '@/services/authAPI';
import { baseUrl } from '@/services/baseUrl';
import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const RegisterStepOne = () => {

    const { email, setEmail } = useAuthContext()
  
    const navigate = useNavigate();
    
    const sendOtpApi = async () => {
        try {
            const response = await fetch(`${baseUrl}/auth/${authApi.SEND_OTP}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email
                }),
            });

            const data = await response.json();            

            if (response.status === 200) {
                console.log("OTP sent to email successfully");
                console.log("Server Response:", data);
                navigate('/auth/verify')
            } else {
                console.error("Failed to send OTP:", data.message || "Unknown error");
            }

        } catch (error) {
            console.error("Error sending OTP:", error.message);
        }
    };


    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div className='bg-white rounded-2xl p-2  max-sm:mx-4 w-[450px]'>
                <div className='p-2  space-y-3'>
                    <h1 className='text-[20px] font-medium'>Get Started now!</h1>
                    <h2 className='text-gray-600 text-[14px]'>Register with your email, and we will send you a codes for authentication, and you can create your account!</h2>
                    <button className='primary-btn'> <FaGoogle /><span className=' font-medium'>Sign up with Google</span></button>
                    <h4 className='text-center text-gray-600 text-[14px] font-medium pt-2'>Or continue with</h4>
                    <TextInput
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button onClick={sendOtpApi} className='secondary-btn text-[16px] font-medium text-white mt-1'>Login now</button>
                </div>

                <div className='bg-[#f5f5f5] rounded-lg p-3 mt-2'>
                    <h5 className='text-gray-600 text-center text-[14px]'>Already have an account? <span className='text-[#11326d]'>Login</span></h5>
                </div>
            </div>
        </div>
    )
}

export default RegisterStepOne
