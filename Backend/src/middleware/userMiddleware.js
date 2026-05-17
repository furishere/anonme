import jwt from "jsonwebtoken"
import { JWT_USER_SECRET } from "../config/db.js"

export const userMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided"
      })
    }

    const token = authHeader.split(" ")[1]

    const decoded = jwt.verify(token, JWT_USER_SECRET)

    req.userId = decoded.userId

    next()

  } catch (e) {
    return res.status(401).json({
      message: "Invalid or expired token"
    })
  }
}