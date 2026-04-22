import React from 'react'

export const Hero = () => {
  return <div>
    <div  className='flex justify-center items-center flex-col'>
      <div className='bg-[#F5F5F5] py-1 px-6 border border-[#E5E5E5] rounded-4xl mt-5 text-sm font-roboto text-[#777777] flex items-center gap-2' >
      <div className='bg-[#4ade80] h-[7px] w-[7px] rounded-full'></div>
      <div>
       Anonymous feedback, done right 
       </div>
      </div>
      <div className='font-hero text-8xl italic mt-12 '>
        Anon Me.
      </div>
      <div className='text-sm font-roboto text-[#828997] mt-2 text-center'>
        Collect honest, anonymous feedback from anyone <br/> quick, private, and beautifully simple.
      </div>
      <div className='flex gap-5 items-center'>
        <button className='bg-black py-2 px-3 text-white rounded-sm font-roboto cursor-pointer'>
        Get started free
        </button>
        <button className='bg-white py-2 px-5 text-black rounded-md border cursor-pointer font-roboto border-[#E5E5E5]'>
        Sign in
        </button>
      </div>
    </div>
  </div>
}
