import { Router } from "express";
import { deleteProfile, getProfile, updateProfile } from "../controllers/profileControllers.js";
import { userMiddleware } from "../middleware/userMiddleware.js";

const userRouter = Router()

userRouter.get("/profile", userMiddleware, getProfile) 
userRouter.put("/profile", userMiddleware, updateProfile) 
userRouter.delete("/profile", userMiddleware, deleteProfile) 

export{userRouter}