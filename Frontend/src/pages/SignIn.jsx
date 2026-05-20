import { useState } from "react";
import { Inputdata } from "../components/Inputdata";
import { Paragraph } from "../components/Paragraph";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [backendError, setBackendError] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignin = async () => {
    setBackendError("");

    let Error = false;

    if (!email.trim()) {
      setEmailError("email is required");
      Error = true;
    }

    if (!password.trim()) {
      setPasswordError("password is required");
      Error = true;
    }

    if (Error) return;

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/signin`,
        { email, password }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setEmail("");
      setPassword("");

      navigate("/dashboard");
    } catch (e) {
      setBackendError(
        e.response?.data?.message || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0EFEB] flex justify-center items-center px-4 py-8">

      <div className="w-full max-w-xl bg-white border border-[#ebebeb] rounded-sm">

        <div className="px-6 sm:px-10 py-10 sm:py-16">
          <div className="font-hero italic text-3xl sm:text-5xl leading-tight">
            Welcome back.
          </div>

          <div className="mt-3">
            <Paragraph Paragraph={"Sign in to your inbox."} />
          </div>

          <div className="mt-8">
            <Inputdata
              Name={"EMAIL"}
              placeholderName={"enter your email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
            />

            {emailError && (
              <div className="text-red-500 text-xs mt-2">
                {emailError}
              </div>
            )}
          </div>

          <div className="mt-5">
            <Inputdata
              Name={"PASSWORD"}
              placeholderName={"enter your password"}
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
            />

            {passwordError && (
              <div className="text-red-500 text-xs mt-2">
                {passwordError}
              </div>
            )}
          </div>
          {backendError && (
            <div className="text-red-500 text-sm mt-4">
              {backendError}
            </div>
          )}

          <button
            onClick={handleSignin}
            disabled={loading}
            className="w-full mt-6 bg-black text-white py-3 rounded-sm text-sm font-roboto hover:opacity-90 transition cursor-pointer disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <div className="mt-5 text-center">
            <Paragraph Paragraph="Your messages are end-to-end private. We never read them" />
          </div>

        </div>
      </div>
    </div>
  );
}