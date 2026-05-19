import { Router } from "express";
import { userMiddleware } from "../middleware/userMiddleware.js";

import { deleteProfile, getProfilePrivate, publicProfile, updateProfile } from "../controllers/profileControllers.js";

import { upload } from "../middleware/uploadMiddleware.js";
import multer from "multer";

const profileRouter = Router()

profileRouter.patch("/",userMiddleware,  upload.single("avatar"), updateProfile)
profileRouter.get("/", userMiddleware,getProfilePrivate )
profileRouter.get("/:username",publicProfile)
profileRouter.delete("/", userMiddleware, deleteProfile)

export {
    profileRouter
}

