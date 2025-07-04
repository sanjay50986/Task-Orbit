import { Ellipsis, Plus } from 'lucide-react'
import React from 'react'

const Board = () => {
  return (
    <div className='px-4 mt-4'>
            {/*-----Cards-------*/}
            <div className="overflow-x-auto hide-scrollbar">
                <div className='grid grid-cols-4 gap-3 mb-3 min-w-[1100px]'>
                    {/*-----Not Started Card-------*/}
                    <div className='border border-gray-200 rounded-md p-2 bg-[#f5f5f5]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex  gap-3 items-center'>
                                <span className='bg-[#7f7f89] w-2.5 h-2.5 rounded-full ml-2'></span>
                                <h1 className='font-semibold text-[13px]'>Not Started</h1>
                                <div className='bg-white px-3 rounded-full shadow-xs'>
                                    <span className='text-[11px] font-medium text-[#7f7f89] '>3</span>
                                </div>
                            </div>

                            <button className='bg-white border border-gray-200 p-2 rounded-md cursor-pointer'>
                                <Plus size={16} />
                            </button>
                        </div>

                        <div className='mt-2.5 mb-1 bg-white  rounded-md'>
                            <div className='p-3  space-y-2.5'>
                                <div className='flex items-center justify-between'>
                                    <span className="bg-red-100 border border-red-400 px-4 py-1 
                                    rounded-full text-[10px] text-red-600 font-medium">
                                        High
                                    </span>
                                    <Ellipsis className="text-[#7f7f89]" size={16} />
                                </div>
                                <h1 className='text-[13px] font-semibold text-nowrap overflow-hidden'>Design homepage layout</h1>
                                <div className='flex items-center gap-4 text-[12px] text-[#7f7f89]'>
                                    <span>Due date</span>
                                    <span>Mon, 12 Jan 2025</span>
                                </div>

                                <div className='flex items-center gap-7 text-[12px] text-[#7f7f89]'>
                                    <span>People</span>
                                    <span>people photo</span>
                                </div>

                                <div className='bg-[#f5f5f5] border border-gray-200 py-2 px-2 rounded-md'>
                                    <h2 className='text-[13px] '>Aerotech Web Design</h2>
                                </div>
                            </div>

                            <div className='border-t border-gray-200'>
                                <h3 className='text-[14px] font-medium text-center py-3'>0%</h3>
                            </div>
                        </div>
                    </div>

                    {/*-----On Progress Card-------*/}
                    {/* <div className='border border-gray-200 rounded-md p-2 bg-[#f5f5f5]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex  gap-3 items-center'>
                                <span className='bg-yellow-500 w-3 h-3 rounded-full ml-2'></span>
                                <h1 className='font-semibold text-[14px]'>On Pogress</h1>
                                <div className='bg-white px-3 rounded-full shadow-xs'>
                                    <span className='text-[12px] '>3</span>
                                </div>
                            </div>

                            <button className='bg-white border border-gray-200 p-2 rounded-md cursor-pointer'>
                                <Plus size={18} />
                            </button>
                        </div>

                        <div className='mt-2.5 mb-1 bg-white  rounded-md'>
                            <div className='p-3  space-y-3'>
                                <div className='flex items-center justify-between'>
                                    <span className="bg-red-100 border border-red-400 px-3 py-1 
                                    rounded-full text-[10px] text-red-600 font-medium">
                                        High
                                    </span>
                                    <Ellipsis className="text-[#7f7f89]" size={16} />
                                </div>
                                <h1 className='text-[14px] font-medium text-nowrap overflow-hidden'>Design homepage layout</h1>
                                <div className='flex items-center gap-4 text-[12px] text-[#7f7f89]'>
                                    <span>Due date</span>
                                    <span>Mon, 12 Jan 2025</span>
                                </div>

                                <div className='flex items-center gap-7 text-[12px] text-[#7f7f89]'>
                                    <span>People</span>
                                    <span>people photo</span>
                                </div>

                                <div className='bg-[#f5f5f5] border border-gray-200 py-2 px-2 rounded-md'>
                                    <h2 className='text-[14px] '>Aerotech Web Design</h2>
                                </div>
                            </div>

                            <div className='border-t border-gray-200'>
                                <h3 className='text-[14px] font-medium text-center py-3'>0%</h3>
                            </div>
                        </div>
                    </div> */}

                    {/*-----On Review Card-------*/}
                    {/* <div className='border border-gray-200 rounded-md p-2 bg-[#f5f5f5]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex  gap-3 items-center'>
                                <span className='bg-[#7575C6] w-3 h-3 rounded-full ml-2'></span>
                                <h1 className='font-semibold text-[14px]'>On Review</h1>
                                <div className='bg-white px-3 rounded-full shadow-xs'>
                                    <span className='text-[12px] '>3</span>
                                </div>
                            </div>

                            <button className='bg-white border border-gray-200 p-2 rounded-md cursor-pointer'>
                                <Plus size={18} />
                            </button>
                        </div>

                        <div className='mt-2.5 mb-1 bg-white  rounded-md'>
                            <div className='p-3  space-y-3'>
                                <div className='flex items-center justify-between'>
                                    <span className="bg-red-100 border border-red-400 px-3 py-1 
                                    rounded-full text-[10px] text-red-600 font-medium">
                                        High
                                    </span>
                                    <Ellipsis className="text-[#7f7f89]" size={16} />
                                </div>
                                <h1 className='text-[14px] font-medium text-nowrap overflow-hidden'>Design homepage layout</h1>
                                <div className='flex items-center gap-4 text-[12px] text-[#7f7f89]'>
                                    <span>Due date</span>
                                    <span>Mon, 12 Jan 2025</span>
                                </div>

                                <div className='flex items-center gap-7 text-[12px] text-[#7f7f89]'>
                                    <span>People</span>
                                    <span>people photo</span>
                                </div>

                                <div className='bg-[#f5f5f5] border border-gray-200 py-2 px-2 rounded-md'>
                                    <h2 className='text-[14px] '>Aerotech Web Design</h2>
                                </div>
                            </div>

                            <div className='border-t border-gray-200'>
                                <h3 className='text-[14px] font-medium text-center py-3'>0%</h3>
                            </div>
                        </div>
                    </div> */}

                    {/*-----On Completed Card-------*/}
                    {/* <div className='border border-gray-200 rounded-md p-2 bg-[#f5f5f5]'>
                        <div className='flex items-center justify-between'>
                            <div className='flex  gap-3 items-center'>
                                <span className='bg-green-600 w-3 h-3 rounded-full ml-2'></span>
                                <h1 className='font-semibold text-[14px]'>On Completed</h1>
                                <div className='bg-white px-3 rounded-full shadow-xs'>
                                    <span className='text-[12px] '>3</span>
                                </div>
                            </div>

                            <button className='bg-white border border-gray-200 p-2 rounded-md cursor-pointer'>
                                <Plus size={18} />
                            </button>
                        </div>

                        <div className='mt-2.5 mb-1 bg-white  rounded-md'>
                            <div className='p-3  space-y-3'>
                                <div className='flex items-center justify-between'>
                                    <span className="bg-red-100 border border-red-400 px-3 py-1 
                                    rounded-full text-[10px] text-red-600 font-medium">
                                        High
                                    </span>
                                    <Ellipsis className="text-[#7f7f89]" size={16} />
                                </div>
                                <h1 className='text-[14px] font-medium text-nowrap overflow-hidden'>Design homepage layout</h1>
                                <div className='flex items-center gap-4 text-[12px] text-[#7f7f89]'>
                                    <span>Due date</span>
                                    <span>Mon, 12 Jan 2025</span>
                                </div>

                                <div className='flex items-center gap-7 text-[12px] text-[#7f7f89]'>
                                    <span>People</span>
                                    <span>people photo</span>
                                </div>

                                <div className='bg-[#f5f5f5] border border-gray-200 py-2 px-2 rounded-md'>
                                    <h2 className='text-[14px] '>Aerotech Web Design</h2>
                                </div>
                            </div>

                            <div className='border-t border-gray-200'>
                                <h3 className='text-[14px] font-medium text-center py-3'>0%</h3>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>


        </div>
  )
}

export default Board
