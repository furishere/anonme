import React from 'react'
import { Box } from '../components/Box'

export const LandingPage = () => {
const STEPS = [
  {
    n:     "01",
    title: "Create your account",
    desc:  "Sign up in seconds, just a username and password.",
  },
  {
    n:     "02",
    title: "Share your link",
    desc:  "Get your unique link like anonme.app/u/yourname and share it anywhere.",
  },
  {
    n:     "03",
    title: "Receive messages",
    desc:  "Anyone can send you an anonymous message. Only you can read them.",
  },
];


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
      <div className='bg-black w-full items-center flex justify-center flex-col h-90'>
      <div className='text-white font-roboto  text-3xl mt-13'>
        Why Choose 
        <span className='font-hero italic ml-2'>
            Anon Me.
        </span>
    </div>
    <div className='text-[#505555] text-sm font-roboto'>
        Simple by design. Honest by nature.
    </div>
    <div className='flex mt-13 gap-10'>
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
    <div className="bg-white px-12 py-12">
        <h2 className="text-[20px] font-light text-black mb-8">How it works</h2>

        <div className="flex flex-col gap-6">
          {STEPS.map((s) => (
            <div key={s.n} className="flex items-start gap-5">
              <span
                className="italic text-[48px] text-[#e5e5e5] leading-none shrink-0 w-14 font-hero"
              >
                {s.n}
              </span>
              <div className="pt-1">
                <div className="text-[14px] font-medium text-black mb-1">{s.title}</div>
                <div className="text-[13px] text-[#888] leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="mt-8 bg-black text-white px-7 py-[11px] rounded-[2px] text-[13px] hover:bg-neutral-800 transition-colors border-none cursor-pointer"
        >
          Create your profile →
        </button>
      </div>
    </div>
  </div>
}