import React from 'react'
import { NotepadText, BriefcaseBusiness, BookText, Users  } from 'lucide-react';



const ProgressSidebar = () => {
    return (
        <div >
            <div className='border-b p-4 border-gray-200'>
                <h1 className='text-[20px] font-medium'>Create account</h1>
                <h2 className='text-gray-600 text-[14px] pt-3 '>Please fill in each step properly and correctly, make sure no data is missing</h2>
            </div>

            <div className='p-4 space-y-10'>
                <div className='flex items-center gap-4'>

                    <div className='border rounded-full border-gray-200 p-1'>
                        <div className='bg-gray-200 rounded-full p-3'>
                            <NotepadText className='text-gray-600 w-4.5 h-4.5' />
                        </div>
                    </div>

                    <div>
                        <h1 className='text-gray-600 text-[12px]'>Step 1</h1>
                        <h2 className='font-medium text-[13px]'>Create an account</h2>
                    </div>
                </div>
                <div className='flex items-center gap-4'>

                    <div className='border rounded-full border-gray-200 p-1'>
                        <div className='bg-gray-200 rounded-full p-3'>
                            <BriefcaseBusiness  className='text-gray-600 w-4.5 h-4.5' />
                        </div>
                    </div>

                    <div>
                        <h1 className='text-gray-600 text-[12px]'>Step 2</h1>
                        <h2 className='font-medium text-[13px]'>Set Preferences</h2>
                    </div>
                </div>

                <div className='flex items-center gap-4'>

                    <div className='border rounded-full border-gray-200 p-1'>
                        <div className='bg-gray-200 rounded-full p-3'>
                            <BookText className='text-gray-600 w-4.5 h-4.5' />
                        </div>
                    </div>

                    <div>
                        <h1 className='text-gray-600 text-[12px]'>Step 3</h1>
                        <h2 className='font-medium text-[13px]'>Setting workspace</h2>
                    </div>
                </div>

                <div className='flex items-center gap-4'>

                    <div className='border rounded-full border-gray-200 p-1'>
                        <div className='bg-gray-200 rounded-full p-3'>
                            <Users className='text-gray-600 w-4.5 h-4.5' />
                        </div>
                    </div>

                    <div>
                        <h1 className='text-gray-600 text-[12px]'>Step 4</h1>
                        <h2 className='font-medium text-[13px]'>Invite member</h2>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProgressSidebar
