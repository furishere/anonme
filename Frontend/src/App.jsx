import SignUp from "./pages/SignUp";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signin from "./pages/SignIn";
import Dashboard from "./pages/Dashboard"

export default function App(){
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
    </BrowserRouter>
  </div>
}