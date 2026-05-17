import { Message } from "../model/message.js"
import { User } from "../model/user.js"
import { messageSchema, replySchema } from "../schemas/messageSchema.js"

export const sendAnonoymousMessage = async(req, res) => {
    try{
    const parsedData = messageSchema.safeParse(req.body)
    if(!parsedData.success){
        return res.status(400).json({
            message : "Incorrect Inputs",
            error : parsedData.error.issues   
        })
    }

    const {text} = parsedData.data

    const userUsername = req.params.username

    const user = await User.findOne({
        username : userUsername
    })
    if(!user){
        return res.status(404).json({
            message : "user not found"
        })
    }
    
    await Message.create({
        text,
        userId:user._id
    })

    res.json({
        message : "Anonmous message sent"
    })

    } catch(e){
      res.status(500).json({
      message: "Internal server error"
    })
    }
}
export const getAllOwnMessage = async(req, res) => {
    try{
    const userId = req.userId

    const message = await Message.find({
        userId
    }).sort({
      createdAt: -1
    })

    res.json({
        message
    })
    } catch(e){
      res.status(500).json({
      message: "Internal server error",
      error: e.message
    })
    }

}

export const publicRepliedMsg = async(req, res) => {
    try{
        const userUsername = req.params.username
        
        const user = await User.findOne({
            username : userUsername
        })

        if(!user){
            return res.status(404).json({
                message : "user not found"
            })
        }

        const message = await Message.find({
            userId : user._id,
            reply : {
                $ne : null
            }
        }).select("text reply createdAt")
          .sort({
           createdAt: -1
          })

        res.json({
            message
        })

    } catch(e){
      res.status(500).json({
      message: "Internal server error",
      error: e.message
    })
    }
}

export const replyToMessage = async(req, res) => {
    try{
        const userId = req.userId
        const sentMessage = req.params.id

        const parsedData = replySchema.safeParse(req.body)
        if(!parsedData.success){
            return res.status(400).json({
            message : "Incorrect Inputs",
            error : parsedData.error.issues   
        })
        }
        
        const {reply} = parsedData.data

        const messages = await Message.findByIdAndUpdate({
            _id : sentMessage
        },{
            reply : reply
        },{
            returnDocument : "after"
        })

    if (!messages) {
      return res.status(404).json({
        message: "Message not found"
      })
     }

        res.status(200).json({
            messages : "replied to message"
        })

    } catch(e){
      res.status(500).json({
      message: "Internal server error",
      error: e.message
    })
    }
}

export const deleteMessage = async(req, res) => {
    try {
        const deleteMsg = req.params.id

        const message = await Message.findOneAndDelete({
            _id : deleteMsg,
            userId : req.userId
        })

        if (!message) {
        return res.status(404).json({
        message: "Message not found"
        })
        }


        res.status(200).json({
            message : "message deleted"
        })


    } catch(e){
      res.status(500).json({
      message: "Internal server error",
      error: e.message
    })
    }
}