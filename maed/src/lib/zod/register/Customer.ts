import * as z from "zod";

export const customerSchema = z.object({
        username: z
            .string()
            .min(1, "Full name is required")
            .refine((name) => name.trim().split(" ").length >= 2, {
                message: "Please enter your full name (at least two words)",
            }),
        email: z
            .string()
            .email("Invalid email address"),
        phone_number: z.number().min(1000000000, "Phone number must be at least 10 digits"),
        password: z.string().min(5, "Password must be at least 8 characters"),
        comfirm_password: z.string(),
        role: z.string()
        
        
})

export type CustomerL = z.infer<typeof customerSchema>;