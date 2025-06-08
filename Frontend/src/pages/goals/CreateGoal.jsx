import TextInput from '@/components/textInput/TextInput'
import React from 'react'

const CreateGoal = ({ closeGoal, createGoal }) => {
    return (
        <>
            {/* Backdrop Overlay */}
            {createGoal && (
                <div
                    className="fixed inset-0 bg-gray-800/30 bg-opacity-50 backdrop-blur-[2px] transition-opacity "
                    onClick={closeGoal}
                />
            )}

            <div
                className={`
    fixed top-1/2 left-1/2 z-20 bg-white shadow-xs
    transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out
    xl:w-[30%] lg:w-[40%] sm:w-[60%] w-full
    ${createGoal ? "scale-100 opacity-100" : "scale-0 opacity-0"}
    overflow-y-auto max-h-screen hide-scrollbar px-4 rounded-xl py-5
  `}
            >
                <h1 className='text-[18px] font-medium'>Create new goals</h1>
                <h2 className='text-[14px] text-[#7f7f89] pt-1'>Enter goal name, period, owner, and member details</h2>

                <TextInput
                label="Goal name"
                placeholder="Enter name"/>

            </div>

        </>
    )
}

export default CreateGoal
