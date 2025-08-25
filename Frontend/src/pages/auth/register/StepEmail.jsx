import TextInput from '@/components/textInput/TextInput';
import { useAuthContext } from '@/context/AuthContext';
import { authApi } from '@/services/authAPI';
import { baseUrl } from '@/services/baseUrl';
import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { PuffLoader, } from 'react-spinners';
import { toast } from 'sonner';

const RegisterStepOne = () => {

    const { email, setEmail } = useAuthContext()
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const sendOtpApi = async () => {

        if(!email) {
            return setError("Email is required")
        }
        try { 
            setLoader(true)
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
                toast.success("OTP sent successfully");
                navigate('/auth/verify')
            } else {
                toast.error(data.message || "Unknown error");
            }

        } catch (error) {
            toast.error("Error sending OTP:", error.message);
        } finally {
            setLoader(false)
        }
    };

    // const loginWithGoogle = async () => {
    //     try {
    //         const res = await fetch(`${baseUrl}/auth/${authApi.GOOGLE_LOGIN}`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 token: credentialResponse.credential,
    //             }),
    //         });

    //         const data = await res.json();

    //         if (data.success) {
    //             localStorage.setItem('token', data.token);
    //             console.log('User:', data.user);
    //         } else {
    //             console.error('Login failed:', data.message);
    //         }
    //     } catch (err) {
    //         console.error('Login failed:', err.message);
    //     }
    // };


    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div className='bg-white rounded-2xl p-2  max-sm:mx-4 w-[450px]'>
                <div className='p-2  space-y-3'>
                    <h1 className='text-[20px] font-medium'>Get Started now!</h1>
                    <h2 className='text-gray-600 text-[14px]'>Register with your email, and we will send you a codes for authentication, and you can create your account!</h2>
                    <button className='primary-btn space-x-3'> <FaGoogle /><span className=' font-medium'>Sign up with Google</span></button>
                    <h4 className='text-center text-gray-600 text-[14px] font-medium pt-2'>Or continue with</h4>
                    <TextInput
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        error={error}
                    />

                    <button disabled={loader} onClick={sendOtpApi} className={`secondary-btn text-[16px] ${loader ? "opacity-90" : "opacity-100"} font-medium text-white mt-4`}>{
                        loader ? <PuffLoader color='white' size={24} /> : "Login now"
                    }</button>
                </div>

                <div className='bg-[#f5f5f5] rounded-lg p-3 mt-2'>
                    <h5 className='text-gray-600 text-center text-[14px]'>Already have an account? <Link to="/auth/login" className='text-[#7575C6] font-medium'>Login</Link></h5>
                </div>
            </div>
        </div>
    )
}

export default RegisterStepOne
