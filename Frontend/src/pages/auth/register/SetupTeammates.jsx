import TextInput from '@/components/textInput/TextInput'
import React from 'react'
import { Plus } from 'lucide-react'

const SetupTeammates = ({onContinue}) => {
  return (
      <div className='bg-white rounded-xl p-2 w-[460px]'>
        <div className='p-2 space-y-3'>
          <h1 className='text-[20px] font-medium'>Add your teammates</h1>
          <h2 className='text-gray-600 text-[14px]'>Encourage your members or friends to collaborate on your  projects and tasks, the more the better</h2>

          <div className='space-y-1.5'>
            <TextInput
              placeholder="Teammates email 1"
            />

            <TextInput
              placeholder="Teammates email 2"
            />

            <TextInput
              placeholder="Teammates email 3"
            />
          </div>

          <div className='flex justify-center'>
            <button className='flex items-center gap-1.5 py-3 cursor-pointer'>
              <Plus className='w-4 h-4' />
              <span className='font-medium text-[14px]'>Add member</span>
            </button>
          </div>

          <button onClick={onContinue} className='secondary-btn text-[16px] font-medium text-white mt-2'>Continue</button>
          <button className='primary-btn'> Skip for now</button>

        </div>
      </div>
  )
}

export default SetupTeammates
