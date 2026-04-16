import { Hero } from "./components/dashboard/Hero";
import { Information } from "./components/dashboard/Information";
import { WhyChoose } from "./components/dashboard/WhyChoose";

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
  <Hero />
  <div className="flex justify-center items-center flex-col">
    <div className="bg-[oklch(55.4% 0.046 257.417)]">
    <WhyChoose  />
    </div>
    <div className='flex gap-8'>
  <Information heading={"Fully Anonymous"}
  paragraph={"You will receive feedback completely anonymously no names, no identities revealed."}
   />
  <Information heading={"Quick Setup"}
  paragraph={"Get started quickly with easy registration and create your unique profile in just a few simple steps"}
   />
  </div>
  </div>
</div>
}