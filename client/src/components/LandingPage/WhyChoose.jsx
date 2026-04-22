import React from 'react'
import { Box } from './Box'

export const WhyChoose = () => {
  return <div className='bg-black w-full h-screen max-h-90 mt-4 flex flex-col items-center'>
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
}
