import { z } from "zod"
import bcrypt from "bcrypt"
import { userModel } from "../model/user.js"
import jwt from "jsonwebtoken"
import { JWT_SECRET_USER } from "../config/secret.js"

export const signup = async (req, res) => {
  try {
    const requiredBody = z.object({
      username: z.string().trim().min(4),
      email: z.string().email(),
      password: z.string().min(8),
      name: z.string()
    })

    const result = requiredBody.safeParse(req.body)

    if (!result.success) {
      return res.status(400).json({
        message: "Invalid Input",
        error: result.error.issues
      })
    }

    const { username, email, password, name } = result.data

    const existingUser = await userModel.findOne({
      username
    })

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await userModel.create({
      username,
      email,
      password: hashedPassword,
      name
    })

    return res.status(201).json({
      message: "User signup completed"
    })

  } catch (e) {
    console.error(e)
    return res.status(500).json({
      message: "Internal server error"
    })
  }
}

export const signin  = async(req, res) => {
try{
    const requiredBody = z.object({
        username : z.string(),
        password : z.string().min(8)
    })

    const result = requiredBody.safeParse(req.body)
    if(!result.success){
        return res.status(400).json({
            message : "Invalid Input"
        })
    }

    const{username, password} = result.data
    
    const respose = await userModel.findOne({
        username
    })

    if(!respose){
        return res.status(400).json({
            message : "username not found"
        })
    }

    const passwordMatch = await bcrypt.compare(password, respose.password)

    const token = jwt.sign({
        id : respose._id
     }, JWT_SECRET_USER)

    return res.json({
        token : "sucessfull",
        token : `Bearer ${token}`
    })


} catch(e){
    console.error(e)
    return res.status(400).json({
        message :"smoething went wrong"
    })
}
}