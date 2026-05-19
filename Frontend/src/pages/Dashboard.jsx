import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import defaultImage from "../assets/defaultImage.jpg"

export default function Dashboard() {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [message, setMessage] = useState([])
  const [copied, setCopied] = useState(false)

  function updateProfile(){
    navigate("/updateProfile")
  }

  async function getProfile(){
    try{
      const token = localStorage.getItem("token")

    const response = await axios.get(
      "http://localhost:3000/api/profile/",{
        headers : {
          Authorization : `Bearer ${token}`
        }
      }
    )

    setUser(response.data.user)
    } catch(e){
      console.log(e)
    }
  }

  async function getMessage(){
    try{
      const token = localStorage.getItem("token")

      const response = await axios.get(
        "http://localhost:3000/api/message/private",{
          headers : {
            Authorization : `Bearer ${token}`
          }
        }
      )

      setMessage(response.data.message)

    } catch(e){
      console.log(e);
      
    }
  }

  function copyLink(){
    navigator.clipboard.writeText(
      `${window.location.origin}/u/${user?.username}`
    )
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    },2000)
  }

  function logOut() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    navigate("/signin")
  }


  useEffect(() => {
    getProfile()
    getMessage()
  },[])

  
  return  <div className="flex justify-center  items-cente bg-[#F0EFEB]">
    <div  className="w-full max-w-xl  h-screen ">
      <div className="mt-8">
      <div className="bg-white border border-[#ebebeb] rounded-sm p-7 mb-5 flex items-center gap-5">
        <div className="w-[62px] h-[62px] rounded-full overflow-hidden bg-black flex items-center justify-center  flex-shrink-0">
        <img src={
       user?.avatar
      ? `http://localhost:3000${user.avatar}`
      : defaultImage
      }
   alt="profile picture"
        className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">

        <div className="font-hero italic text-[22px] leading-tight">
          {user?.username || "unknown user"}
        </div>
        <div className="text-[11px] text[#ccc] mt-1 mb-1">
          @{user?.username}
        </div>
        <div className="text-[13px] text-[#888] truncate">
        {user?.bio || "no bio added yet"}
        </div>
        </div>
        <button
        onClick={updateProfile}
        className="border border-[#e0e0e0] bg-white text-[#555] rounded-sm px-4 py-2 text-[12px] hover:bg-black hover:text-white hover:border-black transition cursor-pointer"
        >
          Edit Profile
        </button>
        <button
            onClick={logOut}
            className="text-[12px] border border-[#e0e0e0] bg-white text-[#555] rounded-sm px-4 py-1.5 hover:bg-black hover:text-white hover:border-black transition cursor-pointer"
          >
            Logout
          </button>
      </div>

      <div className="bg-black rounded-sm p-7 mb-5">
      <div className="font-hero italic text-white text-[20px] mb-1">
      Your anonymous link
      </div>

      <div className="text-[#555] text-[12px] mb-4">
      Share this anywhere, anyone can send you messages.
      </div>

      <div className="flex gap-2">
      <div className="flex-1 bg-[#111] border border-[#1e1e1e] rounded-sm px-4 py-3 text-[12px] text-[#666] font-mono truncate">
      {window.location.origin}/u/{user?.username}
      </div>

      <button
      onClick={copyLink}
      className={`px-5 py-3 rounded-sm text-[12px] cursor-pointer transition ${
        copied ? "bg-green-400 text-black" : "bg-white text-black hover:bg-[#e5e5e5]"
      }`}
      >
        {copied ? "copied!" : "Copy"}
      </button>
      </div>
      </div>


      </div>
      </div>
      </div>
}