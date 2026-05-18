import { useState } from "react";
import { Inputdata } from "../components/Inputdata";
import { Paragraph } from "../components/Paragraph";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signin(){
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const[password, setPassword] = useState("")
  const[passwordError, setPasswordError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleSignin(){
    try{
      let Error = false

    if(!email.trim()){
      setEmailError("email is required")
      Error = true
    }

    if(!password.trim()){
      setPasswordError("password is required")
      Error = true
    }

    if(Error) return

    setLoading(true)
    const response = await axios.post(
      "http://localhost:3000/api/auth/signin",{
        email,
        password
      }
    )

    const token = response.data.token

    localStorage.setItem("token", token)

    console.log(response.data)

    setEmail("")
    setPassword("")

    } catch(e){
      console.error(e)
    } finally {
      setLoading(false)
    }

  }

  return <div className="flex justify-center  items-center">
    <div  className="w-full max-w-xl  h-screen bg-white ">
    <div className="mt-28 ml-10">
    <div className="font-hero italic text-4xl">
      Welcome back.
    </div>
    <Paragraph 
    Paragraph={"Sign in to your inbox."}/>

    <Inputdata 
    Name={"Email"}
    placeholderName={"enter your email"}
    value={email}
    onChange={(e) => {
      setEmail(e.target.value)
      setEmailError("")
    }}/>
    {
      emailError && (
        <div className="text-red-500 text-xs mt-1">
          {emailError}
        </div>
      )
    }

    <Inputdata 
    Name={"PASSWORD"}
    placeholderName={" enter your password"}
    value={password}
    type="password"
    onChange={(e) => {
      setPassword(e.target.value)
      setPasswordError("")
    }}
    />{
      passwordError && (
        <div className="text-red-500 text-xs mt-1">
          {passwordError}
        </div>
      )
    }

    <div className="bg-black text-white py-1 w-full max-w-xs text-center font-roboto mt-4 rounded-sm">
    <button
    className="cursor-pointer"
    onClick={handleSignin}
    >{loading ?"sign in..." : "Sign in"}</button>
    </div>
    <div  className="mt-4">
    <Paragraph 
    Paragraph={"Your message are end-to-end private. We never read them"}/>
    </div>
    </div>
    </div>
  </div>
  
}
