import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import defaultImage from "../assets/defaultImage.jpg"
import API from "../app.js";

export default function Dashboard() {
  useEffect(() => {
  API.get("/api")
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}, []);
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [message, setMessage] = useState([])
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(true)

  const [replyText, setReplyText] = useState("")
  const [selectedMessage, setSelectedMessage] = useState(null)

  function updateProfile() {
    navigate("/updateProfile")
  }

  async function getProfile() {
    try {
      const token = localStorage.getItem("token")

      const response = await axios.get(
        "http://localhost:3000/api/profile/",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setUser(response.data.user)
    } catch (e) {
      console.log(e)
    }
  }

  async function getMessage() {
    try {
      const token = localStorage.getItem("token")

      const response = await axios.get(
        "http://localhost:3000/api/message/private",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setMessage(response.data.message)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  function copyLink() {
    navigator.clipboard.writeText(
      `${window.location.origin}/u/${user?.username}`
    )

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  function logOut() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    navigate("/signin")
  }

  async function deleteMessage(id) {
    try {
      const token = localStorage.getItem("token")

      await axios.delete(
        `http://localhost:3000/api/message/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setMessage((prev) =>
        prev.filter((msg) => msg._id !== id)
      )

    } catch (e) {
      console.log(e)
    }
  }

  function openReplyModal(msg) {
    setSelectedMessage(msg)
    setReplyText(msg.reply || "")
  }

  function closeReplyModal() {
    setSelectedMessage(null)
    setReplyText("")
  }

  async function sendReply() {
    try {
      const token = localStorage.getItem("token")

      await axios.patch(
        `http://localhost:3000/api/message/${selectedMessage._id}/reply`,
        {
          reply: replyText
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setMessage((prev) =>
        prev.map((msg) =>
          msg._id === selectedMessage._id
            ? {
                ...msg,
                reply: replyText
              }
            : msg
        )
      )

      closeReplyModal()

    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getProfile()
    getMessage()
  }, [])

  return (
    <div className="min-h-screen bg-[#F0EFEB] flex justify-center px-4 py-6">

      <div className="w-full max-w-2xl">

        <div className="mb-6">

          <div className="font-hero italic text-5xl sm:text-6xl text-black">
            Dashboard.
          </div>

          <div className="text-sm text-gray-400 mt-2">
            manage your profile, replies and anonymous messages.
          </div>

        </div>


        <div className="bg-white border border-[#ebebeb] rounded-sm p-5 sm:p-7 mb-5 flex flex-col sm:flex-row gap-5 sm:items-center">

          <div className="w-[62px] h-[62px] rounded-full overflow-hidden bg-black flex-shrink-0">
            <img
              src={
                user?.avatar
                  ? `http://localhost:3000${user.avatar}`
                  : defaultImage
              }
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="font-hero italic text-[24px] leading-tight">
              {user?.username || "unknown user"}
            </div>

            <div className="text-[11px] text-gray-400 mt-1">
              @{user?.username}
            </div>

            <div className="text-[13px] text-[#888] mt-2 break-words">
              {user?.bio || "no bio added yet"}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={updateProfile}
              className="border border-[#e0e0e0] bg-white text-[#555] rounded-sm px-4 py-2 text-[12px] hover:bg-black hover:text-white hover:border-black transition cursor-pointer"
            >
              Edit Profile
            </button>

            <button
              onClick={logOut}
              className="border border-[#e0e0e0] bg-white text-[#555] rounded-sm px-4 py-2 text-[12px] hover:bg-black hover:text-white hover:border-black transition cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>


        <div className="bg-black rounded-sm p-5 sm:p-7 mb-6">

          <div className="font-hero italic text-white text-[22px] mb-1">
            Your anonymous link
          </div>

          <div className="text-[#666] text-[12px] mb-5">
            Share this anywhere, anyone can send you messages.
          </div>

          <div className="flex flex-col sm:flex-row gap-2">

            <div className="flex-1 bg-[#111] border border-[#1e1e1e] rounded-sm px-4 py-3 text-[12px] text-[#777] font-mono truncate">
              {window.location.origin}/u/{user?.username}
            </div>

            <button
              onClick={copyLink}
              className={`px-5 py-3 rounded-sm text-[12px] transition cursor-pointer ${
                copied
                  ? "bg-green-400 text-black"
                  : "bg-white text-black hover:bg-[#e5e5e5]"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>

          </div>
        </div>

        <div className="flex justify-between items-end mb-4">

          <div className="flex items-end gap-3">
            <div className="font-hero italic text-3xl sm:text-4xl">
              Messages.
            </div>

            <div className="text-xs text-gray-400 mb-1">
              {message.length} messages
            </div>
          </div>

          <button
            onClick={getMessage}
            className="text-xs text-gray-400 hover:text-black transition cursor-pointer"
          >
            Refresh
          </button>

        </div>

        {loading && (
          <div className="bg-white border border-[#ebebeb] rounded-sm p-10 text-center text-sm text-gray-400">
            loading messages...
          </div>
        )}

        {!loading && message.length === 0 && (
          <div className="bg-white border border-dashed border-[#e0e0e0] rounded-sm p-12 sm:p-16 text-center">

            <div className="font-hero italic text-2xl text-gray-300 mb-2">
              no messages yet.
            </div>

            <div className="text-sm text-gray-400">
              share your anonymous link to receive messages
            </div>

          </div>
        )}

        {!loading &&
          message.map((msg) => (
            <div
              key={msg._id}
              className="bg-white border border-[#ebebeb] rounded-sm p-5 sm:p-6 mb-3"
            >

              <div className="text-[14px] text-[#222] leading-7 mb-5 break-words">
                {msg.text}
              </div>

              {msg.reply ? (
                <div className="bg-black rounded-sm p-5 mb-5">

                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-2">
                    Your reply
                  </div>

                  <div className="text-[13px] text-gray-300 leading-6 break-words">
                    {msg.reply}
                  </div>

                </div>
              ) : (
                <div className="text-xs italic text-gray-300 mb-5">
                  no reply yet
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-[#f5f5f5]">

                <div className="text-[11px] text-gray-400">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </div>

                <div className="flex gap-2 flex-wrap">

                  <button
                    onClick={() => openReplyModal(msg)}
                    className="bg-black text-white px-4 py-1.5 rounded-sm text-[11px] hover:opacity-70 transition cursor-pointer"
                  >
                    {msg.reply ? "Edit Reply" : "Reply"}
                  </button>

                  <button
                    onClick={() => deleteMessage(msg._id)}
                    className="border border-[#ebebeb] px-4 py-1.5 rounded-sm text-[11px] text-gray-400 hover:border-red-300 hover:text-red-500 transition cursor-pointer"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))}


        {selectedMessage && (
          <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center p-4">

            <div className="bg-white w-full max-w-lg rounded-sm p-5 sm:p-7">

              <div className="font-hero italic text-3xl mb-5">
                Reply.
              </div>

              <div className="bg-[#f8f8f8] border-l-2 border-[#e5e5e5] p-4 text-sm text-gray-500 leading-6 mb-5 break-words">
                {selectedMessage.text}
              </div>

              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="write your reply..."
                className="w-full h-32 border border-[#e5e5e5] rounded-sm p-4 text-sm outline-none resize-none focus:border-black"
              />

              <div className="flex justify-end gap-2 mt-5">

                <button
                  onClick={closeReplyModal}
                  className="border border-[#e5e5e5] px-5 py-2 rounded-sm text-sm hover:border-black transition cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  onClick={sendReply}
                  className="bg-black text-white px-5 py-2 rounded-sm text-sm hover:opacity-80 transition cursor-pointer"
                >
                  Send Reply
                </button>

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  )
}