import {z} from "zod"

export const signUpSchema = z.object({
    email : z.string().email().trim(),
    password : z.string().min(8, "password must be at least 8 characters").trim(),
    username : z.string().min(3, "username must be at least 3 character").max(25, "username is too long").trim().toLowerCase()
})

export const signInSchema = z.object({
    email : z.string().email().trim(),
    password : z.string().min(8, "password must be at least 8 characters").trim()
})