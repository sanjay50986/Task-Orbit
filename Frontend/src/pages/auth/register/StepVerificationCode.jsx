import TextInput from '@/components/textInput/TextInput';
import React, { useRef } from 'react'
import { FaGoogle } from "react-icons/fa";


const VerifyOtp = () => {

    const inputsRef = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value.toUpperCase();
        e.target.value = value;

        if (value && index < 5) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    return (
        <div className='flex justify-center items-center h-[80vh] max-sm:mx-4'>
            <div className='bg-white rounded-2xl p-2'>
                <div className='p-2  space-y-3'>

                    <h1 className='text-[20px] font-medium'>We send you a code</h1>
                    <h2 className='text-gray-600 text-[14px]'>We already sent five digit code to bagus_cahyo@gmail.com, <br /> please check your email and enter the code bellow</h2>
                    <div className="flex justify-between">
                        {Array(6).fill().map((_, i) => (
                            <input
                                key={i}
                                ref={el => inputsRef.current[i] = el}
                                maxLength={1}
                                onChange={(e) => handleChange(e, i)}
                                onKeyDown={(e) => handleKeyDown(e, i)}
                                className="sm:w-13 sm:h-13 w-11 h-11 text-xl text-center border border-gray-300 rounded-lg outline-[#7575C6]"
                            />
                        ))}
                    </div>
                    <button className='secondary-btn text-[16px] font-medium text-white mt-4'>Continue</button>
                    <button className='primary-btn text-[16px] font-medium text-gray-600 bg-white'>Resend code</button>
                    <h4 className='text-center text-gray-600 text-[14px] pt-2 font-medium'>Or continue with</h4>
                    <button className='primary-btn'> <FaGoogle /><span className=' font-medium'>Sign up with Google</span></button>

                </div>

                <div className='bg-[#f5f5f5] rounded-lg p-3 mt-2'>
                    <h5 className='text-gray-600 text-center text-[14px]'>Enter wrong email? <span className='text-[#7575C6]'>Change</span></h5>

                </div>

            </div>
        </div>
    )
}

export default VerifyOtp
