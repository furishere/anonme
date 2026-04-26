import React from 'react'

export const Box = ({emoji, heading, paragraph}) => {
  return <div className='w-full max-w-55 text-xl'>
    <div>
    {emoji}
    </div>
    <div className='text-white font-roboto mt-1 text-lg'>
        {heading}
    </div>
    <div className='bg-[#505555] h-[1px] w-full max-w-9 mt-1'>

    </div>
    <div className='text-[#505555] mt-2 text-base'>
       {paragraph}
    </div>
  </div>
}