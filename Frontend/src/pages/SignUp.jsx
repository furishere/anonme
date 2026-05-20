import { useState } from "react";
import { Inputdata } from "../components/Inputdata";
import { Paragraph } from "../components/Paragraph";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [backendError, setBackendError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    setBackendError("");

    let Error = false;

    if (!username.trim()) {
      setUsernameError("username is required");
      Error = true;
    }

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
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
        {
          username,
          email,
          password
        }
      );

      console.log(response.data);

      setUsername("");
      setEmail("");
      setPassword("");

      navigate("/signin");

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
            Create your Profile.
          </div>

          <div className="mt-3">
            <Paragraph
              Paragraph={"Get your anonymous inbox in seconds."}
            />
          </div>


          <div className="mt-8">
            <Inputdata
              Name={"USERNAME"}
              placeholderName={"enter your username"}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setUsernameError("");
              }}
            />

            {usernameError && (
              <div className="text-red-500 text-xs mt-2">
                {usernameError}
              </div>
            )}
          </div>


          <div className="mt-5">
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
            onClick={handleSignup}
            disabled={loading}
            className="w-full mt-6 bg-black text-white py-3 rounded-sm text-sm font-roboto hover:opacity-90 transition cursor-pointer disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create an account"}
          </button>


          <div className="mt-5 text-center">
            <Paragraph
              Paragraph={
                "By signing up you agree to our terms. No spam, ever."
              }
            />
          </div>

        </div>
      </div>
    </div>
  );
}