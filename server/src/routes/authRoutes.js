import { Router } from "express";
import { signin, signup } from "../controllers/authControllers.js";

const authrouter = Router()

authrouter.post("/signup",signup)
authrouter.post("/signin",signin)

export default authrouter