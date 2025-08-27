import { useAuthContext } from '@/context/AuthContext';
import { authApi } from '@/services/authAPI';
import { baseUrl } from '@/services/baseUrl';
import React, { useEffect, useRef, useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { toast } from 'sonner';


const VerifyOtp = () => {

    const inputsRef = useRef([]);
    const [otp, setOtp] = useState("")
    const [loader, setloader] = useState(false)
    const [timer, setTimer] = useState(0)
    const [error, setError] = useState("")
    const { email } = useAuthContext()
    const navigate = useNavigate()

    const handleChange = (e, index) => {
        const value = e.target.value.toUpperCase();
        e.target.value = value;

        let otpValue = ""
        inputsRef.current.forEach((index) => {
            otpValue += index?.value
        })

        setOtp(otpValue)

        if (value && index < 5) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const verifyOtpApi = async () => {

        if(!otp) {
            return setError("OTP is required")
        }

        try {
            setloader(true)
            const response = await fetch(`${baseUrl}/auth/${authApi.VERIFY_OTP}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    otp: otp
                }),
            });

            const data = await response.json();

            if (response.status === 200) {
                toast.success("OTP verify successfully");
                navigate('/auth/create-profile');
            } else {
                toast.error("Failed to verify OTP:", data.message || "Unknown error");
            }

        } catch (error) {
            console.error("Error verify OTP:", error.message);
        } finally {
            setloader(false)
        }
    };

    const resendOtpApi = async () => {
        try {
            setTimer(30);
            const response = await fetch(`${baseUrl}/auth/${authApi.RESEND_OTP}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                }),
            });

            const data = await response.json();

            if (response.status === 200) {
                toast.success("Resend OTP successfully");
            } else {
                toast.error("Failed to resend OTP:", data.message || "Unknown error");
            }

        } catch (error) {
            console.error("Error verify OTP:", error.message);
        }
    };


    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000)
        }

        return () => clearInterval(interval)
    }, [timer])

    return (
        <div className='flex justify-center items-center max-sm:mx-4 h-[80vh]'>
            <div className='bg-white rounded-2xl p-2 w-[440px]'>
                <div className='p-2  space-y-3'>

                    <h1 className='text-[20px] font-medium'>We send you a code</h1>
                    <h2 className='text-gray-600  text-[14px]'>{`We already sent five digit code ${email}, please check your email and enter the code bellow`}</h2>
                    <div className="flex justify-between mb-0">
                        {Array(6).fill().map((_, i) => (
                            <input
                                key={i}
                                ref={el => inputsRef.current[i] = el}
                                maxLength={1}
                                onChange={(e) => handleChange(e, i)}
                                onKeyDown={(e) => handleKeyDown(e, i)}
                                className={`sm:w-13 sm:h-13 w-11 h-11 text-xl text-center border ${error ? "border-red-500" : "border-gray-300"} rounded-lg outline-[#7575C6]`}

                            />
                        ))}
                    
                    </div>
                    {error && (
                        <span className="text-red-500 text-[12px] ">{error}</span>
                    )}
                    <button disabled={loader} onClick={verifyOtpApi} className={`secondary-btn text-[16px] ${loader ? "opacity-90" : "opacity-100"} font-medium text-white mt-4`}>{
                        loader ? <PuffLoader color='white' size={24} /> : "Login now"
                    }</button>

                    <button
                        onClick={resendOtpApi}
                        disabled={timer > 0}
                        className={`primary-btn text-[16px] font-medium text-gray-600 bg-white ${(timer > 0) ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}
                    </button>
                    <h4 className='text-center text-gray-400 text-[13px] pt-2 font-medium'>Or continue with</h4>
                    <button className='primary-btn space-x-3'> <FaGoogle  /><span className=' font-medium'>Sign up with Google</span></button>

                </div>

                <div className='bg-[#f5f5f5] rounded-lg p-3 mt-2'>
                    <h5 className='text-gray-600 text-center text-[13px]'>Enter wrong email? <Link to="/auth/register" className='text-[#7575C6] font-medium'>Change</Link></h5>
                </div>

            </div>
        </div>
    )
}

export default VerifyOtp
