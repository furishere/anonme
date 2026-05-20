import { Message } from "../model/message.js"
import { User } from "../model/user.js"
import { userSchema } from "../schemas/userSchema.js"

export const updateProfile = async (req, res) => {
  try {

    console.log(req.body)
    console.log(req.file)

    const updatedData = {}

    if(req.body.username){
      updatedData.username = req.body.username
    }

    if(req.body.bio){
      updatedData.bio = req.body.bio
    }

    if(req.file){
      updatedData.avatar = `/uploads/${req.file.filename}`
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      updatedData,
      {
        new: true
      }
    )

    if(!user){
      return res.status(404).json({
        message: "user not found"
      })
    }

    res.status(200).json({
      message: "profile updated",
      user
    })

  } catch(e){
    console.log(e)

    res.status(500).json({
      message: "internal server error"
    })
  }
}

export const getProfilePrivate = async (req, res) => {
  try {
    const userId = req.userId

    const user = await User.findById(userId).select(
      "username email bio avatar createdAt"
    )

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      })
    }

    res.json({
      user
    })

  } catch (e) {
    return res.status(500).json({
      message: "Internal server error",
      error: e.message
    })
  }
}

export const publicProfile = async(req, res) => {
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

    res.json({
        user : {
            username : user.username,
            avatar : user.avatar,
            bio : user.bio
        }
    })
    } catch(e){
    return res.status(500).json({
      message: "Internal server error",
      error: e.message
    })
}
}

export const deleteProfile = async(req, res) => {
  try{
    const user = req.userId

    const deleteUser = await User.findByIdAndDelete(user)

    if(!deleteUser){
      return res.status(404).json({
        message : "user not found"
      })
    }

    await Message.deleteMany({
      userId:user
    })

    return res.status(200).json({
        message : "user deleted"
    })

  } catch(e){
    return res.status(500).json({
    message: "Internal server error",
    error: e.message
  })
}
}