import { User } from "../model/user.js"
import { userSchema } from "../schemas/userSchema.js"

export const updateProfile = async (req, res) => {
  try {
    const parsedData = userSchema.safeParse(req.body)

    if (!parsedData.success) {
      return res.status(400).json({
        message: "Incorrect Inputs",
        error: parsedData.error.issues
      })
    }

    const { username, bio, avatar } = parsedData.data

    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        username,
        bio,
        avatar
      },{
        returnDocument : "after"
      }
    )

    if (!user) {
      return res.status(404).json({
        message: "User does not exist"
      })
    }

    return res.status(200).json({
      message: "Profile updated",
      user: {
        username: user.username,
        bio: user.bio,
        avatar: user.avatar
      }
    })

  } catch (e) {
    return res.status(500).json({
      message: "Internal server error",
      error: e.message
    })
  }
}

export const getProfilePrivate = async(req, res) => {
    const userId = req.userId

    const user = await User.find({
        userId
    })

    res.json({
        user
    })
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