import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import defaultImage from "../assets/defaultImage.jpg";

export const SendAnonMessage = () => {

  const { username } = useParams();

  const [user, setUser] = useState(null);

  const [text, setText] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  async function getUserProfile() {

    try {

      const response = await axios.get(
        `http://localhost:3000/api/message/${username}`
      );

      setMessages(response.data.message);

    } catch (e) {
      console.log(e);
    }
  }

  async function getUser() {

    try {

      const response = await axios.get(
        `http://localhost:3000/api/profile/${username}`
      );

      setUser(response.data.user);

    } catch (e) {
      console.log(e);
    }
  }

  async function sendMessage() {

    try {

      setLoading(true);

      setError("");

      if (!text.trim()) {
        setError("message cannot be empty");
        return;
      }

      await axios.post(
        `http://localhost:3000/api/message/${username}`,
        {
          text
        }
      );

      setSuccess(true);

      setText("");

    } catch (e) {

      setError(
        e.response?.data?.message || "something went wrong"
      );

    } finally {

      setLoading(false);
    }
  }

  useEffect(() => {

    getUser();

    getUserProfile();

  }, []);

  return (

    <div className="min-h-screen bg-[#f7f7f5] px-4 sm:px-6 py-8 sm:py-12 flex justify-center">

      <div className="w-full max-w-xl">

        {/* USER CARD */}

        <div className="bg-white border border-[#ebebeb] rounded-[4px] px-4 sm:px-7 py-6 sm:py-8 text-center">

          <div className="w-[55px] h-[55px] sm:w-[60px] sm:h-[60px] rounded-full overflow-hidden bg-black mx-auto mb-4">

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

          <h2 className="italic text-[24px] sm:text-[28px] text-black mb-1 font-hero break-words">
            {user?.username || "unknown user"}
          </h2>

          <p className="text-[11px] sm:text-[12px] text-[#bbb] mb-5 break-all">
            @{user?.username}
          </p>

          <p className="text-[12px] sm:text-[13px] text-[#666] mb-4 leading-6">
            Send{" "}
            <strong className="text-black font-medium">
              @{user?.username}
            </strong>{" "}
            an anonymous message
          </p>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border border-[#e5e5e5] rounded-[2px] px-4 py-3 text-[13px] text-[#333] placeholder:text-[#bbb] resize-none h-[110px] sm:h-[120px] text-left leading-relaxed focus:outline-none focus:border-black transition-colors"
            placeholder="Write something honest…"
          />

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-2 mb-4">

            <p className="text-[11px] text-[#ddd] text-left">
              {text.length}/300
            </p>

            {error && (
              <p className="text-red-500 text-[11px] text-left sm:text-right break-words">
                {error}
              </p>
            )}

          </div>

          <button
            onClick={sendMessage}
            className="w-full bg-black text-white py-3 rounded-[2px] text-[13px] hover:bg-neutral-800 transition-colors border-none cursor-pointer"
          >
            {loading
              ? "sending..."
              : "Send anonymously →"}
          </button>

          <p className="text-[11px] text-[#bbb] mt-3 leading-5">
            100% anonymous. Your identity is never shared.
          </p>

        </div>


        <div className="mt-8">

          <div className="flex justify-between items-center mb-4 gap-3">

            <div className="font-hero italic text-2xl sm:text-3xl">
              Replies.
            </div>

            <div className="text-[11px] sm:text-xs text-gray-400 whitespace-nowrap">
              {messages.length} replies
            </div>

          </div>

          {messages.length === 0 && (

            <div className="bg-white border border-dashed border-[#e5e5e5] rounded-sm p-8 sm:p-10 text-center">

              <div className="text-gray-400 text-sm">
                no replied messages yet
              </div>

            </div>
          )}

          {messages.map((msg) => (

            <div
              key={msg._id}
              className="bg-white border border-[#ebebeb] rounded-sm p-4 sm:p-5 mb-3"
            >

              <div className="text-[13px] text-[#999] mb-3 leading-6 break-words">
                {msg.text}
              </div>

              <div className="bg-black rounded-sm p-4">

                <div className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-2">
                  Reply
                </div>

                <div className="text-[13px] text-gray-300 leading-6 break-words">
                  {msg.reply}
                </div>

              </div>

              <div className="text-[11px] text-gray-400 mt-4">
                {new Date(msg.createdAt).toLocaleDateString()}
              </div>

            </div>
          ))}

        </div>

      </div>
      {success && (

        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center px-4">

          <div className="bg-white w-full max-w-md rounded-sm p-6 sm:p-8 text-center">

            <div className="w-[65px] h-[65px] rounded-full bg-black text-white flex items-center justify-center mx-auto text-3xl mb-5">
              ✓
            </div>

            <div className="font-hero italic text-3xl sm:text-4xl mb-3">
              Message Sent.
            </div>

            <div className="text-sm text-[#777] leading-6 mb-6">
              your anonymous message has been delivered successfully.
            </div>

            <button
              onClick={() => setSuccess(false)}
              className="w-full bg-black text-white py-3 rounded-sm text-sm hover:opacity-80 transition cursor-pointer"
            >
              Send another message
            </button>

          </div>

        </div>

      )}

    </div>
  );
};