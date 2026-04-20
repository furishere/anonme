import {z} from "zod"
import bcrypt from  "bcrypt"
import { userModel } from "../model/user.js"

export const signup = async (req, res) => {
try  {
    const requiredBody = z.object({
        username : z.string().trim().min(4),
        email : z.string().email(),
        password : z.string().min(8),
        name : z.string()
    })

    const result  = requiredBody.safeParse(req.body)

    if(!result.success){
        return res.status(400).json({
            message : "Invalid Input",
            error : result.error.issues
        })
    }

    const {username, email, password, name} = result.data

    const hashpassword = await bcrypt.hash(password,8)

    await userModel.create({
        email,
        password : hashpassword,
        name,
        username
    })

    res.status(200).json({
        message : "user sign up completed"
    })

} catch(e){

    res.status(400).json({
        message : "incorrect condentials"
    })
}
}

export const signin = async (req, res) => {

}