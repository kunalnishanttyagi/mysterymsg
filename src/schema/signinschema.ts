import {z} from "zod";

// lets check if signup data is perfect or not

export const signin= z.object({
    // username: z.string().min(3,{message:"username should be atleast 3 characters"}).max(12,{message:"username cannot exceed 12 characters"}).regex(/^[a-zA-Z0-9_]{3,16}$/),
    // password: z.string().min(3,{message:"username should be atleast 3 characters"}).max(20,{message:"username cannot exceed 20 characters"}),
    // email: z.string().min(3,{message:"username should be atleast 3 characters"}).max(12,{message:"username cannot exceed 12 characters"}).regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    
    
})