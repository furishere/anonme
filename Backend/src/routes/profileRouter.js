import { Router } from "express";
import { userMiddleware } from "../middleware/userMiddleware.js";
import { getProfilePrivate, publicProfile, updateProfile } from "../controllers/profileControllers.js";

const profileRouter = Router()

profileRouter.patch("/",userMiddleware, updateProfile)
profileRouter.get("/", userMiddleware,getProfilePrivate )
profileRouter.get("/:username",publicProfile)

export {
    profileRouter
}