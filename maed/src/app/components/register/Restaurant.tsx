//src/app/components/register/DeliveryDriver.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { RestaurantL, restaurantSchema } from "@/lib/zod/register/Restaurant";

const Restaurant = () => {
  const form = useForm<RestaurantL>({ resolver: zodResolver(restaurantSchema) });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: RestaurantL) => {
    console.log("Form Data:", data);
    toast.success("Registration successful!");
    // router.push("/dashboard");
  };

  return (
    <div className="mt-6 my-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        encType="multipart/form-data"
      >
        {/* Owner's Name */}
        <div className="flex flex-col text-left">
          <label htmlFor="ownername" className="font-medium text-sm">
            Owner&apos;s Name
          </label>
          <input
            type="text"
            id="ownername"
            placeholder="Enter the owner's full name"
            {...register("ownername", { required: "Please enter your owner name" })}
            className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-[var(--color-bg-orange)]"
          />
          <p className="text-red-600 text-sm">{errors.ownername?.message}</p>
        </div>

        {/* Restaurant's Name */}
        <div className="flex flex-col text-left">
          <label htmlFor="restaurantname" className="font-medium text-sm">
            Restaurant&apos;s Name
          </label>
          <input
            type="text"
            id="restaurantname"
            placeholder="Enter the restaurant's name"
            {...register("restaurantname", { required: "Please enter your owner name" })}
            className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-[var(--color-bg-orange)]"
          />
          <p className="text-red-600 text-sm">{errors.restaurantname?.message}</p>
        </div>

        {/* Email + Phone */}
        <div className="flex gap-2">
          <div className="flex flex-col text-left flex-1">
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

          <div className="flex flex-col text-left flex-1">
            <label htmlFor="phone_number" className="font-medium text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone_number"
              placeholder="09XXXXXXXX/07XXXXXXXX"
              {...register("phone_number", {
                required: "Please enter your phone number",
              })}
              className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-[var(--color-bg-orange)]"
            />
            <p className="text-red-600 text-sm">{errors.phone_number?.message}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col text-left">
          <label htmlFor="address" className="font-medium text-sm">
            Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter your restaurant address"
            {...register("address", { required: "Please enter your owner name" })}
            className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-[var(--color-bg-orange)]"
          />
          <p className="text-red-600 text-sm">{errors.address?.message}</p>
        </div>


        {/* Logo (Image Upload) */}
        <div className="flex flex-col text-left">
          <label htmlFor="logo" className="font-medium text-sm">
            Restaurant Logo/ Image
          </label>
          <input
            type="file"
            id="logo"
            accept="image/*"
            {...register("logo", { required: "Please upload your license ID" })}
            className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-[var(--color-bg-orange)] file:mr-3 file:py-1 file:px-3 file:border-0 file:rounded-md file:bg-[var(--color-bg-orange)] file:text-white file:cursor-pointer hover:file:bg-orange-600"
          />
          <p className="text-red-600 text-sm">
            {typeof errors.logo?.message === "string" && errors.logo.message}
          </p>
        </div>

        
        {/* Password */}
        <div className="flex flex-col text-left flex-1 relative">
          <label htmlFor="password" className="font-medium text-sm">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Please enter your password",
              })}
              className="p-2 border border-gray-300 rounded-2xl w-full focus:outline-none focus:border-[var(--color-bg-orange)]"
            />
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

        {/* Confirm Password */}
        <div className="flex flex-col text-left flex-1 relative">
          <label htmlFor="comfirm_password" className="font-medium text-sm">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="comfirm_password"
              placeholder="Confirm your password"
              {...register("comfirm_password", {
                required: "Please confirm your password",
              })}
              className="p-2 border border-gray-300 rounded-2xl w-full focus:outline-none focus:border-[var(--color-bg-orange)]"
            />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Restaurant;
