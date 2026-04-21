import jwt from "jsonwebtoken"
import { JWT_SECRET_USER } from "../config/secret.js"

export const userMiddleware = (req, res, next) => {
try{
    const authHeader  = req.headers.authorization
    if(!authHeader){
        return res.status(401).json({
            message : "no token provided"
        })
    }

    const token = authHeader.split(" ")[1]

    const decoded = jwt.verify(token, JWT_SECRET_USER)
    if(decoded){
        req.userId = decoded.id
        next()
    } else {
        res.status(483).json({
            message: "you're not signed in"
        })
    }
} catch(e){
    return res.status(401).json({
        message : "Invalid or expired token"
    })
}
}

