import React from 'react'

export const HowitWorks = () => {
  return <div className='mt-12'>
    <div>
        How it Works
    </div>
    <Section />
    <div>
    <button className='bg-black py-2 px-3 text-white rounded-sm font-roboto cursor-pointer'>
    Create your profile
    </button>
    </div>
  </div>
}

const Section = () => {
    return <div className='ml-10'>
        <div className='text-hero'>
            01
        </div>
    </div>
}