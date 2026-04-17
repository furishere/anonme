import React from 'react'
import { Navbar } from '../Navbar'
import { WhyChoose } from './WhyChoose'
import { Information } from './Information'

export const Hero = () => {

  return   <div className="flex justify-center items-center flex-col relative z-10 w-full ">
   <Navbar />
    <div className="mt-35 text-center">
    
     <div className="font-hero text-8xl italic">Anon Me.</div>
   
    <div className="w-max max-w-sm font-roboto text-[#828997] text-md">
      Anon Me helps you collect honest feedback, anonymous, quick, and private.
    </div>

    <div className="mt-35 flex gap-4 items-center justify-center">
      <button className="bg-blue-700 text-white px-8 py-2  rounded-sm font-roboto cursor-pointer shadow-sm hover:opacity-90 transition-all">Register</button>
      <button className="text-blue-700 border px-8 py-2 rounded-md font-roboto cursor-pointer hover:opacity-90 shadow-sm">Login</button>
    </div>
     
    </div>
  </div>
}
