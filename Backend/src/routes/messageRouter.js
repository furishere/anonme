import { Router } from "express";
import { deleteMessage, getAllOwnMessage, publicRepliedMsg, replyToMessage, sendAnonoymousMessage } from "../controllers/messageControllers.js";
import { userMiddleware } from "../middleware/userMiddleware.js";

const messageRouter = Router()

// private
messageRouter.get("/private", userMiddleware,getAllOwnMessage)
messageRouter.patch("/:id/reply",userMiddleware,replyToMessage)
messageRouter.delete("/:id", userMiddleware,deleteMessage)

// public
messageRouter.post("/:username",sendAnonoymousMessage)
messageRouter.get("/:username",publicRepliedMsg)

export {
    messageRouter
}
