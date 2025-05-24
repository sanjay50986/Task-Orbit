import TextInput from '@/components/textInput/TextInput'
import { Images, User } from 'lucide-react'
import React from 'react'

const SetupWorkspace = () => {
    return (
        <div className="bg-white rounded-2xl w-[550px] ">
            <div className='p-6'>
                <h1 className='text-[22px] font-medium '>Setting your workspace</h1>
                <p className='text-gray-600  text-[14px] pt-2'>Name your workspace, add projects and tasks, and <br /> edit them anytime later.</p>
            </div>

            {/* Divider */}
            <div className="w-full h-1 bg-[#0077B6]" />

            {/*------Left---------*/}
            <div className="space-y-2 p-6">
                <div className="bg-[#CAF0F8] px-3 py-1.5 rounded-3xl inline-block">
                    <h2 className="text-[12px] font-medium text-[#0077B6]">Set Workspace</h2>
                </div>

                <h1 className='text-[15px] font-medium pt-2'>Organise your workspace, name it & describe it, useful when you <br />  have a team later on</h1>

                <div className='py-2.5 rounded-md flex items-center  justify-between mt-4 mb-4'>
                    <div className='flex gap-2.5 items-center'>
                        <div className='bg-gray-100 rounded-2xl p-5 border border-gray-200 '>
                            <User className='w-[30px] h-[30px]' />
                        </div>

                        <div>
                            <h1 className='text-[16px] font-medium pb-1.5'>Add workspace logo</h1>
                            <p className='text-gray-600  text-[12px] '>size 400 x 400px, max.</p>
                            <p className='text-gray-600  text-[12px]'>file size 10MB</p>
                        </div>
                    </div>

                    <button className='flex items-center gap-1.5 border border-gray-300 p-2 rounded-md px-3 cursor-pointer shadow'>
                        <Images className='w-[20px] h-[20px]' />
                        <span className='font-medium text-[14px]'>Upload</span>
                    </button>
                </div>

                <TextInput
                    label="Workspace name"
                    placeholder="Enter name"
                    type="text"
                />

                <div className='flex flex-col mt-4'>
                    <label className='font-medium text-[14px]'>Description</label>
                    <textarea
                        className='border border-gray-200 p-2 rounded-md outline-none mt-1 text-[14px] h-[150px] resize-none'
                        placeholder='Add workspace description'
                    />
                </div>

                <div className='flex justify-between items-center gap-4 mt-14'>

                    <button className='primary-btn text-black px-4 py-2 text-sm'>
                        Skip for now
                    </button>

                    <button className='secondary-btn text-white px-4 py-2 text-sm'>
                        Continue
                    </button>
                </div>

            </div>


        </div>
    )
}

export default SetupWorkspace
