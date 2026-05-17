import {z} from "zod"

export const messageSchema = z.object({
    text : z.string().min(5, "message must be at least character").trim(),
    reply : z.string().trim().optional()
})