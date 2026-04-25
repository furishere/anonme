import React from 'react'

export const Inputdata = ({Name, placeholderName}) => {
  return <div className="mt-5">
      <label>
        <div className="font-roboto tracking-tighter text-xs text-gray-500">{Name}</div>
        <input className="border border-[#e5e5e5] w-full max-w-xs rounded-sm mt-1 py-2 outline-none focus:outline focus:outline-1 focus:outline-balck placeholder:font-roboto px-2 text-xs" type="text" placeholder={placeholderName} />
      </label>
    </div>
}
