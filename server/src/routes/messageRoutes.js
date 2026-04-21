import { Router } from "express";
import { getMessage, replyUpdate, sendMessage } from "../controllers/messageRotes.js";
import { userMiddleware } from "../middleware/userMiddleware.js";

const messageRouter = Router()

messageRouter.get("/:username",getMessage)
messageRouter.post("/:username", sendMessage)
messageRouter.put("/reply/:messageId",userMiddleware,replyUpdate)

export {messageRouter}