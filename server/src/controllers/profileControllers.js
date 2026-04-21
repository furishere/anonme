
import { userModel } from "../model/user.js";

export const getProfile =  async (req, res) => {
try{
    const user  = await userModel.findById(req.userId)
    
    if(!user){
        return res.status(404).json({
            message : "User not found"
        })
    }

    res.json({
        message  : "Profile",
        user
    })
} catch(e){
    return res.status(500).json({
        message : "something went wrong"
    })
}

}
export const updateProfile =  async (req, res) => {
try{
    const {username, email, name, profileImage } = req.body

    const updateProfile = await userModel.findByIdAndUpdate(
        req.userId,
        {username, email, name, profileImage},
        {new : true}
    )

    res.json({
        message : "profile updated",
        updateProfile
    })
} catch(e){
    return res.status(500).json({
        message : "something went wrong"
    })
}
}

export const deleteProfile = async(req, res) => {
try{

    const deletedUser = await userModel.findByIdAndDelete(
        req.userId
    )

    if(!deletedUser){
        return res.status(400).json({
            message : "User not found"
        })
    }

    res.json({
        message : "account deleted"
    })
} catch(e){
    return res.status(500).json({
        message : "something went wrong"
    })
}
}
