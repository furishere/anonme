import { messageModel } from "../model/message.js"
import { userModel } from "../model/user.js"

export const getMessage = async(req, res) => {
try{
    const {username} = req.params

    const profile = await userModel.findOne({
        username
    })

    if(!profile){
        return res.status(404).json({
            message : "wrong username"
        })
    }

    const messages = await messageModel.find({
        userId : profile._id
    })

    res.json({
        messages
    })

} catch(e){
    res.status(500).json({
        message : "something went wrong"
    })
}
}

export const sendMessage = async(req, res) => {
try{
    const {username} = req.params

    const profile = await userModel.findOne({
        username
    })

    if(!profile){
        return res.status(404).json({
            message : "wrong username"
        })
    }

    const {text, image} = req.body

    const newMessages = await messageModel.create({
        text,
        image,
        userId : profile._id,
    })

    res.status(201).json({
        message : "Message sent",
        newMessages
    })

} catch(e){
    res.status(500).json({
        message : "something went wrong"
    })
}
}

export const replyUpdate = async (req, res) => {
  try {
    const { messageId } = req.params
    const { reply } = req.body

    const message = await messageModel.findById(messageId)

    if (!message) {
      return res.status(404).json({
        message: "Message not found"
      })
    }

    if (message.userId.toString() !== req.userId) {
      return res.status(403).json({
        message: "Not allowed"
      })
    }

    if (message.reply !== null) {
      return res.status(400).json({
        message: "Reply already exists"
      })
    }

    message.reply = reply
    await message.save()

    res.json({
      message: "Reply added",
      data: message
    })

  } catch (e) {
    res.status(500).json({
      message: "something went wrong"
    })
  }
}