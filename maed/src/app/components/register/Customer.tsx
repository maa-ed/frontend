//src/app/components/register/Customer.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { CustomerL, customerSchema } from "@/lib/zod/register/Customer";

const Customer = () => {
  const form = useForm<CustomerL>({ resolver: zodResolver(customerSchema) });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const router = useRouter();

  // 👇 State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: CustomerL) => {
    console.log("Form Data:", data);
    toast.success("Login successful!");
    // router.push("/dashboard");
  };

  return (
    <div className="mt-6 w-115 my-2 overflow-y-auto max-h-[85vh]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Name Field */}
        <div className="flex flex-col text-left">
          <label htmlFor="username" className="font-medium text-sm">
            Full Name
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your full name"
            {...register("username", { required: "Please enter your username" })}
            className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-[var(--color-bg-orange)]"
          />
          <p className="text-red-600 text-sm">{errors.username?.message}</p>
        </div>

        {/* Email Field */}
        <div className="flex flex-col text-left">
          <label htmlFor="email" className="font-medium text-sm">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            {...register("email", { required: "Please enter your email" })}
            className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-[var(--color-bg-orange)]"
          />
          <p className="text-red-600 text-sm">{errors.email?.message}</p>
        </div>

                {/* Phone Field */}
        <div className="flex flex-col text-left">
          <label htmlFor="phone_number" className="font-medium text-sm">
            Phone Number
          </label>
          <input
            type="number"
            id="phone_number"
            placeholder="09XXXXXXXX/07XXXXXXXX"
            {...register("phone_number", { required: "Please enter your phone_number" })}
            className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-[var(--color-bg-orange)]"
          />
          <p className="text-red-600 text-sm">{errors.phone_number?.message}</p>
        </div>

        {/* Password Field */}
        <div className="flex flex-col text-left relative">
          <label htmlFor="password" className="font-medium text-sm">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // 👈 toggle visibility
              id="password"
              placeholder="Enter your password"
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

        {/* Comfirm Password Field */}
        <div className="flex flex-col text-left relative">
          <label htmlFor="comfirm_password" className="font-medium text-sm">
            Comfirm Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="comfirm_password"
              placeholder="Comfirm your password"
              {...register("comfirm_password", {
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

          <p className="text-red-600 text-sm">{errors.comfirm_password?.message}</p>
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

export default Customer;
