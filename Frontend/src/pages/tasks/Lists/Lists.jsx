import { ChevronUp, Ellipsis, FunnelX, Plus, Search } from 'lucide-react'
import React, { useState } from 'react'
import CreateTask from '../CreateTask'

const Lists = () => {

    return (
        <div className='px-4'>
            <div className='bg-[#f5f5f5] px-4 py-2 border border-gray-200 rounded-md mb-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex  gap-3 items-center'>
                        <ChevronUp size={16} className='text-[#7f7f89]' />
                        <span className='bg-[#7f7f89] w-2.5 h-2.5 rounded-full ml-2'></span>
                        <h1 className='font-semibold text-[13px]'>Not Started</h1>
                        <div className='bg-white px-3 rounded-2xl shadow-xs'>
                            <span className='text-[11px] text-[#7f7f89] font-medium'>3 tasks</span>
                        </div>
                    </div>

                    <button className='bg-white border border-gray-200 p-2 rounded-md cursor-pointer'>
                        <Plus size={16} />
                    </button>
                </div>
            </div>

            <div className="w-full overflow-hidden rounded-md border border-gray-200 ">
                <div className="overflow-x-auto hide-scrollbar">
                    <table className="w-full min-w-[1200px]">
                        <thead>
                            <tr className="text-[13px] text-[#7f7f89] border-b border-gray-200 ">
                                <th className="font-medium py-3 px-4 text-start pl-4">Task name</th>
                                <th className="font-medium py-3 px-4 text-start">Due date</th>
                                <th className="font-medium py-3 px-4 text-start">Progress</th>
                                <th className="font-medium py-3 px-4 text-start">Projects</th>
                                <th className="font-medium py-3 px-4 text-start">People</th>
                                <th className="font-medium py-3 px-4 text-start">Priority</th>
                                <th className="font-medium py-3 px-4 text-center">
                                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                                        <Plus className="text-[#7f7f89]" size={16} />
                                    </button>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white">
                            <tr className="text-[12px]  hover:bg-gray-50 transition-colors">
                                <td className="py-3 px-4 text-start truncate max-w-[60px] whitespace-nowrap overflow-hidden">Design homepage layout</td>
                                <td className="py-3 px-4 text-start">Mon, 12 Jan 2025</td>
                                <td className="py-3 px-4 text-start">0%</td>
                                <td className="py-3 px-4 text-start">Aerotech Web design</td>
                                <td className="py-3 px-4 text-start">People</td>
                                <td className="py-3 px-4 text-start">
                                    <span className="bg-red-100 border border-red-400 px-4 py-1 
                                    rounded-full text-[12px] text-red-600 font-medium">
                                        High
                                    </span>
                                </td>
                                <td className="py-3 px-4  text-center">
                                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                                        <Ellipsis className="text-[#7f7f89]" size={16} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Lists
