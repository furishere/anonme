import { Router } from "express";
import { getRepliedMessage } from "../controllers/messageControllers";

const messageRouter = Router()

messageRouter.get("/public/:userId",getRepliedMessage)
messageRouter.get("/private",)

export {
    messageRouter
}

// Method	Route	Purpose
// POST	/api/message/:username	send anonymous msg
// GET	/api/message/private	get all own msgs
// GET	/api/message/public/:username	public replied msgs
// PATCH	/api/message/:id/reply	reply to msg
// DELETE	/api/message/:id	delete msg