import React from 'react'

const TextInput = ({label, placeholder, type}) => {
    return (
        <div className='flex flex-col'>
            <label className='font-medium text-[14px]'>{label}</label>
            <input className='border border-gray-200 p-2 rounded-md outline-none mt-1 text-[14px]'
                placeholder={placeholder}
                type={type}
            />
        </div>
    )
}

export default TextInput
