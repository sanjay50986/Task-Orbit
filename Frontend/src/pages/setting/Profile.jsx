import TextInput from '@/components/textInput/TextInput'
import { CircleUserRound, Images, User } from 'lucide-react'
import React from 'react'


const Profile = () => {
    return (

        <div className='mx-auto xl:w-[65%] md:w-[80%] w-full min-sm:mt-4'>
            <div className='bg-[#f5f5f5] rounded-lg flex sm:flex-row flex-col  min-sm:m-2.5 sm:p-2 px-4 pb-4 gap-2 '>
                <div className='xl:w-[20%] min-sm:w-[25%] max-sm:pb-2 '>
                    <h3 className='text-[#7f7f89] text-[13px] font-medium pl-2 pt-1.5 max-sm:hidden'>GENERAL</h3>
                    <button className='flex items-center max-sm:justify-center gap-1.5 bg-white min-sm:w-full max-sm:px-4 p-2 px-2 rounded-md mt-3 text-[#7575C6]'>
                        <CircleUserRound size={16} />
                        <span className='font-medium text-[13px] pt-0.5'>Profile</span>
                    </button>
                </div>


                <div className='bg-white min-sm:w-[80%] rounded-md '>
                    <div className='border-b px-4 py-2 border-gray-200'>
                        <h1 className='font-medium text-[16px]'>Profile</h1>
                        <p className='text-[#7f7f89] text-[14px]'>Edit or complete your profile</p>
                    </div>

                    <div className='px-4'>
                        <div className='border border-gray-200 sm:py-2 px-4 rounded-lg flex sm:flex-row flex-col items-center  justify-between mt-6 max-sm: space-y-4 py-4'>
                            <div className='flex sm:flex-row flex-col gap-2.5 items-center '>
                                <div className='bg-gray-100 rounded-full p-5 border border-gray-200 '>
                                    <User className='w-[30px] h-[30px]' />
                                </div>

                                <div>
                                    <h1 className='text-[14px] font-medium text-center'>Add profile image</h1>
                                    <p className='text-gray-600  text-[11px] text-center'>Add your profile image with min size</p>
                                    <p className='text-gray-600  text-[11px] text-center'>400 <span>x</span> 400 px, max file size10 MB</p>
                                </div>
                            </div>

                            <button className='flex items-center gap-1.5 border max-sm:w-full justify-center border-gray-300 p-2 rounded-md px-3 cursor-pointer shadow'>
                                <Images className='w-[16px] h-[16px]' />
                                <span className='font-medium text-[12px]'>Upload</span>
                            </button>
                        </div>

                        <div className='grid sm:grid-cols-2 grid-cols-1   mt-3 gap-3'>
                            <TextInput
                                label="First Name"
                                placeholder="Enter first name"
                                type="text" />

                            <TextInput
                                label="Last Name"
                                placeholder="Enter last name"
                                type="text" />

                            <TextInput
                                label="Email"
                                placeholder="Enter email"
                                type="email" />

                            <TextInput
                                label="Phone number"
                                placeholder="Enter phone"
                                type="phone" />

                            <div className='flex flex-col sm:col-span-2'>
                                <label className='font-medium text-[14px]'>About me</label>
                                <textarea
                                    className='border border-gray-200 p-2 rounded-md outline-none mt-1 text-[14px] h-[150px] resize-none'
                                    placeholder='Tell about yourself'
                                />
                            </div>
                        </div>

                        <div className='sm:flex justify-end my-5  '>
                            <button className='create-Btn max-sm:w-full'>
                            Save changes
                        </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Profile
