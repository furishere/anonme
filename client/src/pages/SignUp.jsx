import { Inputdata } from "../components/Inputdata";
import { Paragraph } from "../components/Paragraph";

export default function SignUp(){
  return <div className="flex justify-center  items-center">
    <div  className="w-full max-w-xl  h-screen bg-white ">
    <div className="mt-28 ml-10">
    <div className="font-hero italic text-4xl">
      Create your Profile.
    </div>
    <Paragraph
    Paragraph={"Get your anonymous inbox in seconds."}/>
    <Inputdata 
    Name={"DISPLAY NAME"}
    placeholderName={"enter your name"}/>
    <Inputdata 
    Name={"USERNAME"}
    placeholderName={" enter your username"}/>
    <Inputdata 
    Name={"EMAIL"}
    placeholderName={"enter your email"}/>
    <Inputdata 
    Name={"PASSWORD"}
    placeholderName={"enter your passoword"}/>

    <div className="bg-black text-white py-1 w-full max-w-xs text-center font-roboto mt-4 rounded-sm">
      <div> Create account </div>
    </div>
    <div  className="mt-4">
    <Paragraph 
    Paragraph={"By signing up you agree to our terms. No spam, ever."}/>
    </div>
    </div>
    </div>
  </div>
  
}
