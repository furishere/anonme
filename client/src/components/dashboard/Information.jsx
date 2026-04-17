import React from 'react'

export const Information = ({heading, paragraph}) => {
  return <div className='flex justify-center items-center'>
     <div className=' w-full max-w-56 mt-10 p-8 rounded-2xl  border border-neutral-200 shadow-md bg-white'> 
    <div className='text-xl font-roboto text-center max-h-15'>
      {heading}
    </div>
    <div className='w-full bg-black h-0.5'></div>
    <div className='text-sm mt-5'>
      {paragraph}
    </div>
  </div>
  </div>
}
