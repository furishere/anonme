import {z} from "zod"

export const messageSchema = z.object({
    text : z.string().min(5, "message must be at least character").trim(),
})

export const replySchema = z.object({
    reply : z.string().trim().optional()
})