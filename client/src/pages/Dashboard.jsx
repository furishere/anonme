import React from 'react'

export const Dashboard = () => {
  return (
    <div className='flex justify-center items-center  bg-[#f7f7f5]'>
      <div className='w-full max-w-xl'>
        
        <div className='bg-black w-full rounded-md p-6'>
          
          <div className='font-hero text-white italic text-xl'>
            Your anonymous link
          </div>

          <div className='text-xs font-roboto text-gray-400 mt-1'>
            Share this anywhere anyone can send you a message anonymously.
          </div>

          <div className='mt-4 flex items-center justify-between bg-white rounded px-3 py-2'>
            <span className='text-sm text-gray-700'>
              username
            </span>

            <button className='text-sm font-roboto text-blue-600 hover:underline'>
              Copy
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}