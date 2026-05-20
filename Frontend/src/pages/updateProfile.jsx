import React, { useState } from "react"
import { Inputdata } from "../components/Inputdata"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const UpdateProfile = () => {
  const [bio, setBio] = useState("")
  const [username, setUsername] = useState("")
  const [avatar, setAvatar] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function deleteYourAccount() {
    try {
      const token = localStorage.getItem("token")

      const response = await axios.delete(
        "http://localhost:3000/api/profile/",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      console.log(response.data)

      localStorage.removeItem("token")
      localStorage.removeItem("user")

      navigate("/signin")

    } catch (e) {
      console.log(e)
    }
  }

  async function saveChanges() {
    try {
      setLoading(true)

      const token = localStorage.getItem("token")

      const formData = new FormData()

      formData.append("username", username)
      formData.append("bio", bio)

      if (avatar) {
        formData.append("avatar", avatar)
      }

      const response = await axios.patch(
        "http://localhost:3000/api/profile/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      console.log(response.data)

      setUsername("")
      setBio("")
      setAvatar(null)
      setPreview(null)

      navigate("/dashboard")

    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  function handleImage(e) {
    const file = e.target.files[0]

    if (!file) return

    setAvatar(file)
    setPreview(URL.createObjectURL(file))
  }

  return (
    <div className="min-h-screen bg-[#F0EFEB] flex justify-center items-center px-4 py-10">

      <div className="w-full max-w-2xl bg-white border border-[#ebebeb] rounded-sm p-6 sm:p-10">

        <div className="mb-8">
          <div className="font-hero italic text-3xl sm:text-5xl leading-tight">
            Update Your Profile.
          </div>

          <div className="text-sm text-gray-400 mt-2">
            change your username, bio and profile picture
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start mb-8">

          <div className="w-28 h-28 rounded-full overflow-hidden border border-[#e5e5e5] bg-black">

            <img
              src={
                preview
                  ? preview
                  : "https://placehold.co/300x300?text=Profile"
              }
              alt="preview"
              className="w-full h-full object-cover"
            />

          </div>

          <label className="mt-4 w-full sm:w-auto">

            <div className="font-roboto tracking-wider text-xs text-gray-500 mb-2">
              AVATAR
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="border border-[#e5e5e5] rounded-sm py-2 px-3 text-xs cursor-pointer w-full sm:w-[260px]"
            />

          </label>

        </div>



        <div className="mb-5">
          <Inputdata
            Name={"USERNAME"}
            placeholderName={"enter your new username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <Inputdata
            Name={"BIO"}
            placeholderName={"add a bio"}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>


        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">

          <button
            onClick={saveChanges}
            disabled={loading}
            className="bg-black text-white px-5 py-3 rounded-sm text-sm hover:opacity-80 transition cursor-pointer disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>

          <button
            onClick={deleteYourAccount}
            className="border border-red-300 text-red-500 px-5 py-3 rounded-sm text-sm hover:bg-red-500 hover:text-white transition cursor-pointer"
          >
            Delete Account
          </button>

        </div>

      </div>

    </div>
  )
}