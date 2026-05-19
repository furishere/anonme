import { JWT_USER_SECRET } from "../config/db.js"
import { User } from "../model/user.js"
import { signInSchema, signUpSchema } from "../schemas/authSchema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signUpController = async(req, res) => {
    try{
      const parsedData = signUpSchema.safeParse(req.body)
    if(!parsedData.success){
        return res.status(400).json({
            message : "Incorrect Inputs",
            error : parsedData.error.issues   
        })
    }

    const {username, email, password} = parsedData.data

    const existingUser = await User.findOne({
        email :  email,
        username : username
    })

    if(existingUser){
        return res.status(400).json({
            message : "user already exists"
        })
    }

    const hashPassword = await bcrypt.hash(password, 8)

    
    const user = await User.create({
            email : email,
            password : hashPassword,
            username : username
    })

    res.json({
        message : "sign up completed",
        user : {
            id : user._id,
            username : user.username,
            email : user.email
        }
    })   
    }catch(e){
        return res.status(500).json({
            message : "Internal server error",
            error :e.message
        })
    }

}

export const signInController = async(req, res) => {
    try{
        const parsedData = signInSchema.safeParse(req.body)
        if(!parsedData.success){
        return res.status(400).json({
            message : "Incorrect Inputs"
        })
        }

        const {email, password} = parsedData.data
        
        const user = await User.findOne({
            email : email
        })

        if(!user){
            return res.status(400).json({
                message : "user not found"
            })
        }
        
        const comparePassword = await bcrypt.compare(password, user.password)

        if(!comparePassword){
            return res.status(400).json({
                message : "wrong password"
            })
        }

        const token = jwt.sign({
            userId : user._id
        }, JWT_USER_SECRET,{
            expiresIn : "30d"
        })

        res.json({
            token,
            user : {
                id : user._id,
                username : user.username,
                email : user.email
            }
        })


    } catch(e){
        return res.status(500).json({
            message : "Internal server error"
        })
    }

}