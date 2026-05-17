import { Router } from "express";
import { signInController, signUpController } from "../controllers/authControllers.js";

const authRouter = Router()

authRouter.post("/signup", signUpController)
authRouter.post("/signin",signInController )

export {
    authRouter
}