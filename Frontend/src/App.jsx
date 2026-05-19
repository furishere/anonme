import SignUp from "./pages/SignUp";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signin from "./pages/SignIn";
import Dashboard from "./pages/Dashboard"
import { UpdateProfile } from "./pages/updateProfile";
import { LandingPage } from "./pages/LandingPage";

export default function App(){
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/updateProfile" element={<UpdateProfile />}/>
      <Route path="/landingPage" element={<LandingPage />}/>
    </Routes>
    </BrowserRouter>
  </div>
}