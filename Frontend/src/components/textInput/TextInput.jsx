import React from 'react'


const TextInput = ({label, placeholder, type, onChange, error}) => {
    return (
      <div className="flex flex-col">
        <label className="font-medium text-[13px]">{label}</label>
        <input
          className={`border-1 hover:bg-gray-50  p-2 rounded-md outline-none mt-1  text-[14px] ${
            error ? "border-red-500" : "border-gray-200"
          } transition-all duration-200`}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
        />

        {error &&   <span className="text-red-500 text-[12px] pt-1">{error}</span>}
      </div>
    );
}

export default TextInput
