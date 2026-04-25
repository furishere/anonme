import { Inputdata } from "./components/Inputdata";
import { Paragraph } from "./components/Paragraph";

export default function Signin(){
  return <div className="flex justify-center  items-center">
    <div  className="w-full max-w-xl  h-screen bg-white ">
    <div className="mt-28 ml-10">
    <div className="font-hero italic text-4xl">
      Welcome back.
    </div>
    <Paragraph 
    Paragraph={"Sign in to your inbox."}/>
    <Inputdata 
    Name={"USERNAME"}
    placeholderName={"enter your username"}/>
    <Inputdata 
    Name={"PASSWORD"}
    placeholderName={" enter your password"}/>
    <div className="bg-black text-white py-1 w-full max-w-xs text-center font-roboto mt-4 rounded-sm">
      <div>Sign in</div>
    </div>
    <div  className="mt-4">
    <Paragraph 
    Paragraph={"Your message are end-to-end private. We never read them"}/>
    </div>
    </div>
    </div>
  </div>
  
}
