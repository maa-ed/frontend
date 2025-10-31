import * as z from "zod";

export const restaurantSchema = z.object({
        ownername: z
            .string()
            .min(1, "Full name is required")
            .refine((name) => name.trim().split(" ").length >= 2, {
                message: "Please enter your full name (at least two words)",
            }),
        restaurantname: z
            .string()
            .min(1, "rastaurant name is required"),
        email: z
            .string()
            .email("Invalid email address"),
        phone_number: z.number().min(1000000000, "Phone number must be at least 10 digits"),
        address: z.string().min(1, "Address is required"),
        logo: z
            .any()
            .refine((file) => file instanceof File, {
                message: "Logo must be a file",
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

export type RestaurantL = z.infer<typeof restaurantSchema>;