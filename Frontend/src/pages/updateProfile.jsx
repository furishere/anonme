import React, { useState } from 'react'
import { Inputdata } from '../components/Inputdata'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const UpdateProfile = () => {
  const[bio, setBio] = useState("")
  const[username, setUsername] = useState("")
  const[avatar, setAvatar] = useState(null)

  const navigate = useNavigate()

  async function deleteYourAccount(){
    try{
        const token = localStorage.getItem("token")

        const response = await axios.delete(
            "http://localhost:3000/api/profile/",{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }
        )

        console.log(response.data)

        localStorage.removeItem("token")
        navigate("/signin")

    } catch(e){
        console.log(e);
        
    }
  }

  async function saveChanges(){
    try{
        const token = localStorage.getItem("token")

        const formData = new FormData()

        formData.append("username", username)
        formData.append("bio", bio)
        formData.append("avatar", avatar)

        const response = await axios.patch(
            "http://localhost:3000/api/profile/",
            formData,
            {

                headers : {
                    Authorization : `Bearer ${token}`,
                }
            }
        )

        console.log(response.data)

        setUsername("")
        setBio("")
        setAvatar(null)

        navigate("/dashboard")        

    } catch(e){
        console.log(e)
    }
  }

  return <div className="flex justify-center  items-center">
    <div  className="w-full max-w-xl  h-screen bg-white ">
    <div className="mt-28 ml-10">
    <div className="font-hero italic text-4xl">
      Update Your Profile.
    </div>
    <Inputdata 
    Name={"USERNAME"}
    placeholderName={"enter your new username"}
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
    <Inputdata
    Name={"BIO"}
    placeholderName={"add a bio"}
    value={bio}
    onChange={(e) => setBio(e.target.value)}
    />
    <div className="mt-5">
      <label>
        <div className="font-roboto tracking-wider text-xs text-gray-500">
        AVATAR
        </div>

        <input 
        onChange={(e) => setAvatar(e.target.files[0])}
        className="border border-[#e5e5e5] w-full max-w-xs rounded-sm mt-1 py-2 outline-none focus:outline focus:outline-1 focus:outline-black placeholder:font-roboto px-2 text-xs cursor-pointer" type='file' accept='image/*'/>
      </label>
    </div>

    <div>
    <button className='bg-white py-1 px-4 text-black rounded-md border cursor-pointer font-roboto border-[#E5E5E5] mt-5 hover:bg-black hover:text-white'
    onClick={saveChanges}>
        Save Changes
    </button>
    </div>
    <div>
    <div>
        <button className='bg-black py-1 px-3 text-white rounded-sm font-roboto cursor-pointer mt-4 hover:bg-red-800'
        onClick={deleteYourAccount}>
        Delete your account
        </button>
    </div>
    </div>
    </div>
    </div>
    </div>
}
