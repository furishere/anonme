import { useState } from "react";
import { Inputdata } from "../components/Inputdata";
import { Paragraph } from "../components/Paragraph";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp(){
  const [username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const[passwordError, setPassowrdError] = useState("")

  const navigate = useNavigate()

  const handleSignup = async() => {

    let Error = false

    if(!email.trim()){
      setEmailError("email is required")
      Error = true
    }

    if(!username.trim()){
      setUsernameError("username is required")
      Error = true
    }

    if(!password.trim()){
      setPassowrdError("password is required")
      Error = true
    }

    if(Error) return

    setLoading(true)
    try{
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",{
          username,
          email,
          password
        }
      )
      console.log(response.data);

      navigate("/signin")

      setEmail("")
      setPassword("")
      setUsername("")
      
    } catch(e){
      console.log(e);
      
    } finally{
      setLoading(false)
    }
  }

  return <div className="flex justify-center  items-center">
    <div  className="w-full max-w-xl  h-screen bg-white ">
    <div className="mt-28 ml-10">
    <div className="font-hero italic text-4xl">
      Create your Profile.
    </div>

    <Paragraph
    Paragraph={"Get your anonymous inbox in seconds."}/>

    <Inputdata 
    Name={"USERNAME"}
    placeholderName={" enter your username"}
    value={username}
    onChange={(e) => {
      setUsername(e.target.value)
      setUsernameError("")
    }}
    />
    {
      usernameError && (
        <div className="text-red-500 mt-1 text-xs">
          {usernameError}
        </div>
      )
    }

    <Inputdata 
    Name={"EMAIL"}
    placeholderName={"enter your email"}
    value={email}
    onChange={(e) => {
      setEmail(e.target.value)
      setEmailError("")}
    }
    />
    {
      emailError && (
        <div className="text-red-500 text-xs mt-1">
          {emailError}
        </div>
      )
    }

    <Inputdata 
    Name={"PASSWORD"}
    placeholderName={"enter your password"}
    type="password"
    value={password}
    onChange={(e) => {
    setPassword(e.target.value)
    setPassowrdError("")
    }}/>
    {
      passwordError&& (
        <div className="text-xs text-red-500 mt-1">
          {passwordError}
        </div>
      )
    }

    <div className="bg-black text-white py-1 w-full max-w-xs text-center font-roboto mt-4 rounded-sm">
      <button onClick={handleSignup}
      className="cursor-pointer"> 
      {loading ? "Creating account..." : "Create an account"} 
      </button>
    </div>
    <div  className="mt-4 items-center">
    <Paragraph 
    Paragraph={"By signing up you agree to our terms. No spam, ever."}/>
    </div>
    </div>
    </div>
  </div>
  
}
