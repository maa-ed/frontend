"use client";

import { User, userSchema } from "@/lib/zod/login/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react"; // 👈 optional icons

const LoginCard = () => {
  const form = useForm<User>({ resolver: zodResolver(userSchema) });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const router = useRouter();

  // 👇 State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: User) => {
    console.log("Form Data:", data);
    toast.success("Login successful!");
    // router.push("/dashboard");
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Email Field */}
        <div className="flex flex-col text-left">
          <label htmlFor="email" className="font-medium text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Please enter your email" })}
            className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-[var(--color-bg-orange)]"
          />
          <p className="text-red-600 text-sm">{errors.email?.message}</p>
        </div>

        {/* Password Field with Toggle */}
        <div className="flex flex-col text-left relative">
          <label htmlFor="password" className="font-medium text-sm">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // 👈 toggle visibility
              id="password"
              {...register("password", {
                required: "Please enter your password",
              })}
              className="p-2 border border-gray-300 rounded-2xl w-full focus:outline-none focus:border-[var(--color-bg-orange)]"
            />

            {/* 👁 Toggle Button */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <p className="text-red-600 text-sm">{errors.password?.message}</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-[var(--color-bg-orange)] text-white rounded-2xl hover:bg-orange-600 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginCard;
