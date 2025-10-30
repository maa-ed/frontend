import * as z from "zod";

export const userSchema = z.object({
        email: z
            .string()
            .email("Invalid email address"),
        password: z.string().min(5, "Password must be at least 8 characters"),
        role: z.string()
        
        
})

export type User = z.infer<typeof userSchema>;