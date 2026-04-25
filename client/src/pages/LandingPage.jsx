import React from 'react'

export const LandingPage = () => {
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
       <div className='bg-black w-full h-screen max-h-90 mt-4 flex flex-col items-center'>
    <div className='text-white font-roboto  text-3xl mt-13'>
        Why Choose 
        <span className='font-hero italic ml-2'>
            Anon Me.
        </span>
    </div>
    <div className='text-[#505555] text-sm font-roboto'>
        Simple by design. Honest by nature.
    </div>
    <div className='flex mt-13 gap-3'>
    <Box 
    emoji={"👤"}
    heading={"Fully Anonymous"}
    paragraph={"No names, no identities ever revealed to the recipient."}
    />
    <Box 
    emoji={"🔗"}
    heading={"Just One Link"}
    paragraph={"Share anywhere. Anyone can send you a message instantly."}
    />
    <Box 
    emoji={"📬"}
    heading={"Your Inbox, Private"}
    paragraph={"Only you can read what you've received. Always."}
    />
    </div>
  </div>
    </div>
  </div>
}
