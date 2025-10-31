import * as z from "zod";

export const driverSchema = z.object({
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
        vehicle_type: z.string().min(1, "Vehicle type is required"),
        license_plate: z.string().min(1, "License plate is required"),
        license_Id: z
            .any()
            .refine((file) => file instanceof File, {
                message: "Licence ID must be a file",
            })
            .refine((file) => file?.size <= 5 * 1024 * 1024, {
                message: "File size must be less than 5MB",
            })
            .refine(
                (file) =>
                ["image/jpeg", "image/png", "image/jpg"].includes(file?.type),
                { message: "Only .jpg, .jpeg, and .png formats are supported" }
            ),
        password: z.string().min(5, "Password must be at least 8 characters"),
        comfirm_password: z.string(),
        role: z.string()
        
        
})

export type Driver = z.infer<typeof driverSchema>;