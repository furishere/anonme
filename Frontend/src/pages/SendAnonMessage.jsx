import React from 'react'

export const SendAnonMessage = () => {
  return <div className="bg-[#f7f7f5] px-6 py-12 flex justify-center">
        <div className="bg-white border border-[#ebebeb] rounded-[4px] px-7 py-8 w-full max-w-[360px] text-center">
          <div
            className="w-[52px] h-[52px] rounded-full bg-black text-white flex items-center justify-center mx-auto mb-[14px] italic text-[22px] shrink-0 font-hero"
          >
            H
          </div>
          <h2
            className="italic text-[26px] text-black mb-[3px] font-hero"
          >
            Harnam Mandal
          </h2>
          <p className="text-[12px] text-[#bbb] mb-[22px]">@harnam</p>
          <p className="text-[13px] text-[#666] mb-[14px]">
            Send <strong className="text-black font-medium">@harnam</strong> an
            anonymous message
          </p>
          <textarea
            className="w-full border border-[#e5e5e5] rounded-[2px] px-[14px] py-3 text-[13px] text-[#333] placeholder:text-[#bbb] resize-none h-[90px] text-left leading-relaxed focus:outline-none focus:border-black transition-colors"
            placeholder="Write something honest…"
          />

          <p className="text-right text-[11px] text-[#ddd] mt-[5px] mb-[14px]">
          </p>
          <button
            className="w-full bg-black text-white py-[13px] rounded-[2px] text-[13px] hover:bg-neutral-800 transition-colors border-none cursor-pointer"
          >
            Send anonymously →
          </button>
          <p className="text-[11px] text-[#bbb] mt-3">
            100% anonymous. Your identity is never shared.
          </p>
        </div>
      </div>
}
