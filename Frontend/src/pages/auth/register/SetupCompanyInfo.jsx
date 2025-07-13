import TextInput from '@/components/textInput/TextInput'
import { useAuthContext } from '@/context/AuthContext'
import { Eye, EyeOff, Images, User } from 'lucide-react'
import React, { useState } from 'react'

const SetupCompanyInfo = ({ onContinue }) => {

    const { setCompany, setIndustry, setRole, signUpApi } = useAuthContext()

    return (
        <div className='bg-white p-4 rounded-2xl space-y-2 lg:w-[550px] sm:w-[450px] py-6 px-4.5' >
            <h1 className='text-[22px] font-medium '>Tell about yourself</h1>
            <p className='text-gray-600  text-[14px]'>Share some details about yourself like your role, work, etc, and your preferences to personalize your experience</p>

            <div className='space-y-4.5 mt-5'>
                <TextInput
                    label="Company/organization"
                    placeholder="Enter name"
                    type="text"
                    onChange={(e) => setCompany(e.target.value)}
                />


                <div className='flex flex-col'>
                    <label className='font-medium text-[14px]'>Industry/field</label>
                    <select className='border border-gray-200 p-2 rounded-md outline-none mt-1 text-[14px]'
                        onChange={(e) => setIndustry(e.target.value)}>
                        <option >Select Industry</option>
                        <option value="IT">Information Technology</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Finance">Finance</option>
                        <option value="Education">Education</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Other">Other</option>
                    </select>
                </div>


                <div className='flex flex-col'>
                    <label className='font-medium text-[14px]'>Your role</label>
                    <select className='border border-gray-200 p-2 rounded-md outline-none mt-1 text-[14px]'
                        onChange={(e) => setRole(e.target.value)}>
                        <option value="admin">Select Role</option>

                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="manager">Manager</option>

                    </select>
                </div>

                <button onClick={onContinue} className='secondary-btn text-white mt-3'>
                    Continue
                </button>

            </div>


        </div>
    )
}

export default SetupCompanyInfo
