
export default function App(){

  return <div className="min-h-screen w-full relative">
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
      WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
  <div className="flex justify-center items-center flex-col relative z-10 w-full">
    <div className="mt-30 text-center">
       <div className="font-hero text-7xl italic">Anon</div>
    <div className="font-hero text-5xl w-full max-w-74">Me.</div>
    <div className="w-max max-w-sm font-roboto text-[#828997] mt-3 text-sm">
      Anon Me helps you collect honest feedback, anonymous, quick, and private.
    </div>
    <div>
     <div className="mt-3">
      <button className="bg-black text-white px-4 py-1 rounded-sm font-roboto cursor-pointer">Register</button>
    </div>
    <div className="mt-3">
    <button className=" font-roboto text-black px-4 py-1 rounded-sm border border-black cursor-pointer">Login</button>
    </div>
    </div>
    </div>
  </div>
</div>
}