import z from "zod";

export const userSchema = z.object({
    username :  z.string().min(3, "username must be at least 3 character").max(25, "username is too long").trim().toLowerCase().optional(),
    bio : z.string().max(200).optional(),
    avatar : z.string().optional()
})