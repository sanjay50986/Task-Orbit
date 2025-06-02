import { FunnelX, Plus, Search } from 'lucide-react'
import React from 'react'

const Board = () => {
  return (
    <div className='p-4 px-4'>
       <div className='flex sm:flex-row flex-col justify-between '>
                <div className='flex flex-row gap-3 '>
                    <div className='flex sm:w-[17rem] w-full border gap-2  shadow-xs border-gray-300 p-2 px-3 rounded-md outline-none text-[14px] '>
                        <Search className='text-[#7f7f89]' size={20} />
                        <input
                            className='outline-none text-gray-600  w-full'
                            placeholder='Search task'
                        />
                    </div>

                    <button className='flex  text-[14px] font-medium items-center border px-4 p-2 rounded-md shadow-xs gap-2 cursor-pointer border-gray-300 '>
                        <FunnelX size={18} />
                        Filter
                    </button>
                </div>

                <button className='create-Btn max-sm:mt-3 '>
                    <Plus size={18} />
                    Create task
                </button>
            </div>
    </div>
  )
}

export default Board
