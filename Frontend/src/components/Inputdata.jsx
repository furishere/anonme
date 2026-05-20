import React, { useState } from 'react'

export const Inputdata = ({
  Name, 
  placeholderName,
  value,
  onChange,
  type = "text"
  }) => {
  return <div className="mt-5">
      <label>
        <div className="font-roboto tracking-wider text-xs text-gray-500">
        {Name}
        </div>

        <input 
        value={value}
        onChange={onChange}
        type = {type}
        placeholder={placeholderName}
        className="border border-[#e5e5e5] w-full  rounded-sm mt-1 py-2 outline-none focus:outline focus:outline-1 focus:outline-black placeholder:font-roboto px-2 text-xs" />
      </label>
    </div>
}
