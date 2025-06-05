import { CalendarDays, CircleDashed, Clock10, ClockFading, FolderOpenDot, PanelsTopLeft, ScrollText, Users } from 'lucide-react'
import React from 'react'

const CreateTask = ({ createTask, closeCreateTask }) => {
    return (
        <>
            {/* Backdrop Overlay */}
            {createTask && (
                <div
                    className="fixed inset-0 bg-gray-800/30 bg-opacity-50 backdrop-blur-[2px] transition-opacity "
                    onClick={closeCreateTask}
                />
            )}

            {/* Slide-in Panel */}
            <div
                className={`
          fixed top-0 right-0 bottom-0 z-20 left-auto bg-white shadow-xs
          transform transition-transform duration-500 ease-in-out xl:w-[30%] lg:w-[40%] sm:w-[60%] w-full
          ${createTask ? "translate-x-0" : "translate-x-full"}
          overflow-y-auto max-h-screen hide-scrollbar 
        `}>

                <div className='border-b p-5 border-gray-200 flex items-center gap-3'>
                    <h2 className='text-[16px] font-medium text-[#4B4F5C] '>Create new task</h2>
                </div>

                <div className='my-6 px-5 '>
                    <input type="text"
                        placeholder='Write task name'
                        className='w-full font-semibold text-2xl outline-none' />

                    <div className='grid grid-cols-[140px_1fr] gap-y-7 mt-6 text-[14px] text-[#4B4F5C] font-medium'>
                        <div className='flex items-center gap-2.5'>
                            <CircleDashed size={18} />
                            <span className='text-[14px]'>Status</span>
                        </div>

                        <select className='border border-gray-300 px-2 text-[14px] font-medium py-1 shadow-xs rounded-md outline-none w-[10rem]'>
                            <option className='font-medium'>Not started</option>
                            <option className='font-medium'>In process</option>
                            <option className='font-medium'>In Completed</option>
                        </select>

                        <div className='flex items-center gap-2.5'>
                            <Users size={18} />
                            <span>Assignee</span>
                        </div>

                        <select className='border border-gray-300 px-2 text-[14px] font-medium py-1 shadow-xs rounded-md outline-none w-[9rem]'>
                            <option className='font-medium'>Invite people</option>
                        </select>

                        <div className='flex items-center gap-2.5'>
                            <CalendarDays size={18} />
                            <span>Due date</span>
                        </div>

                        <input type="type"
                            className='outline-none'
                            placeholder='Enter date' />

                        <div className='flex items-center gap-2.5'>
                            <Clock10 size={18} />
                            <span>Due time</span>
                        </div>

                        <input type="type"
                            className='outline-none'
                            placeholder='Enter time' />


                        <div className='flex items-center gap-2.5'>
                            <ClockFading size={18} />
                            <span>Priority</span>
                        </div>

                        <select className='border border-gray-300 px-2 text-[14px] font-medium py-1 shadow-xs rounded-md outline-none w-[9rem]'>
                            <option className='font-medium'>Medium</option>
                        </select>

                        <div className='flex items-center gap-2.5'>
                            <FolderOpenDot size={18} />
                            <span>Priority</span>
                        </div>

                        <select className='border border-gray-300 px-2 text-[14px] font-medium py-1 shadow-xs rounded-md outline-none w-[9rem]'>
                            <option className='font-medium'>Select project</option>
                        </select>

                        <div className='flex gap-2.5'>
                            <ScrollText size={18} />
                            <span className=''>Description</span>
                        </div>

                        <textarea type="type"
                            className='outline-none border  border-gray-200 rounded-lg p-2.5'
                            placeholder='Write description' />
                    </div>

                    <div className='flex my-12 justify-end gap-3'>
                        <button onClick={closeCreateTask} className='cursor-pointer border border-gray-200 p-2 rounded-lg text-[12px] hover:bg-gray-100 duration-200 font-medium px-4'>Cancel</button>
                        <button className='cursor-pointer border border-gray-200 p-2 bg-[#212529] rounded-lg text-[12px] text-white hover:bg-[#6C757D]  duration-200 font-medium px-4'>Create Task</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTask
