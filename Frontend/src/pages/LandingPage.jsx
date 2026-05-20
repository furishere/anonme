import React from 'react'
import { Box } from '../components/Box'
import { useNavigate } from 'react-router-dom'

export const LandingPage = () => {
  const navigate = useNavigate()

  const STEPS = [
    {
      n: "01",
      title: "Create your account",
      desc: "Sign up in seconds, just a username and password.",
    },
    {
      n: "02",
      title: "Share your link",
      desc: "Get your unique link like anonme.app/u/yourname and share it anywhere.",
    },
    {
      n: "03",
      title: "Receive messages",
      desc: "Anyone can send you an anonymous message. Only you can read them.",
    },
  ]

  function signUp() {
    navigate("/signup")
  }

  function signIn() {
    navigate("/signin")
  }

  return (
    <div className="w-full overflow-hidden bg-white">

      {/* HERO SECTION */}

      <div className='flex justify-center items-center flex-col px-5 sm:px-8'>

        {/* TOP BADGE */}

        <div className='bg-[#F5F5F5] py-2 px-5 border border-[#E5E5E5] rounded-full mt-10 sm:mt-16 text-xs sm:text-sm font-roboto text-[#777777] flex items-center gap-2 text-center'>
          <div className='bg-[#4ade80] h-[7px] w-[7px] rounded-full shrink-0'></div>

          <div>
            Anonymous feedback, done right
          </div>
        </div>

        {/* HERO TITLE */}

        <div className='font-hero text-5xl sm:text-7xl md:text-8xl italic mt-10 sm:mt-16 text-center leading-none'>
          Anon Me.
        </div>

        {/* HERO DESCRIPTION */}

        <div className='text-sm sm:text-base font-roboto text-[#828997] mt-4 text-center leading-7 max-w-xl'>
          Collect honest, anonymous feedback from anyone
          <br className='hidden sm:block' />
          quick, private, and beautifully simple.
        </div>

        {/* BUTTONS */}

        <div className='flex flex-col sm:flex-row gap-4 items-center mt-10 sm:mt-14 w-full sm:w-auto'>

          <button
            className='bg-black py-3 px-5 text-white rounded-sm font-roboto cursor-pointer w-full sm:w-auto hover:opacity-90 transition'
            onClick={signUp}
          >
            Get started free
          </button>

          <button
            className='bg-white py-3 px-6 text-black rounded-md border cursor-pointer font-roboto border-[#E5E5E5] w-full sm:w-auto hover:bg-black hover:text-white transition'
            onClick={signIn}
          >
            Sign in
          </button>

        </div>

        {/* WHY CHOOSE */}

        <div className='bg-black w-full flex justify-center items-center flex-col min-h-[500px] mt-16 sm:mt-20 px-5 py-14'>

          <div className='text-white font-roboto text-2xl sm:text-3xl text-center'>
            Why Choose

            <span className='font-hero italic ml-2'>
              Anon Me.
            </span>
          </div>

          <div className='text-[#505555] text-sm font-roboto mt-3 text-center'>
            Simple by design. Honest by nature.
          </div>

          {/* BOXES */}

          <div className='flex flex-col lg:flex-row mt-12 gap-6 lg:gap-10 w-full justify-center items-center'>

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

        {/* HOW IT WORKS */}

        <div className="bg-white px-5 sm:px-12 py-14 w-full max-w-5xl">

          <h2 className="text-[24px] sm:text-[28px] font-light text-black mb-10">
            How it works
          </h2>

          <div className="flex flex-col gap-8">

            {STEPS.map((s) => (
              <div
                key={s.n}
                className="flex items-start gap-4 sm:gap-5"
              >

                <span className="italic text-[40px] sm:text-[56px] text-[#e5e5e5] leading-none shrink-0 w-12 sm:w-16 font-hero">
                  {s.n}
                </span>

                <div className="pt-1">

                  <div className="text-[15px] sm:text-[16px] font-medium text-black mb-1">
                    {s.title}
                  </div>

                  <div className="text-[13px] sm:text-[14px] text-[#888] leading-relaxed max-w-xl">
                    {s.desc}
                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* CTA BUTTON */}

          <button
            className="mt-10 bg-black text-white px-7 py-3 rounded-[2px] text-[13px] hover:bg-neutral-800 transition-colors border-none cursor-pointer w-full sm:w-auto"
            onClick={signUp}
          >
            Create your profile →
          </button>

        </div>

      </div>

    </div>
  )
}