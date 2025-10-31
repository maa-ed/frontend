//src/app/components/register/DeliveryDriver.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { Driver, driverSchema } from "@/lib/zod/register/Driver";

const DeliveryDriver = () => {
  const form = useForm<Driver>({ resolver: zodResolver(driverSchema) });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: Driver) => {
    console.log("Form Data:", data);
    toast.success("Registration successful!");
    // router.push("/dashboard");
  };

  return (
    <div className="mt-6 my-2 overflow-y-auto max-h-[85vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        encType="multipart/form-data"
      >
        {/* Full Name */}
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

        {/* Vehicle Type Dropdown */}
        <div className="flex flex-col text-left">
          <label htmlFor="vehicle_type" className="font-medium text-sm">
            Vehicle Type
          </label>
          <select
            id="vehicle_type"
            {...register("vehicle_type", {
              required: "Please select your vehicle type",
            })}
            className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-[var(--color-bg-orange)]"
          >
            <option value="">Select Vehicle Type</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Bajaj">Bajaj</option>
            <option value="Taxi">Taxi</option>
          </select>
          <p className="text-red-600 text-sm">{errors.vehicle_type?.message}</p>
        </div>

        {/* License Plate */}
        <div className="flex flex-col text-left">
          <label htmlFor="license_plate" className="font-medium text-sm">
            License Plate
          </label>
          <input
            type="text"
            id="license_plate"
            placeholder="Enter your license plate number"
            {...register("license_plate", {
              required: "Please enter your license plate number",
            })}
            className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-[var(--color-bg-orange)]"
          />
          <p className="text-red-600 text-sm">{errors.license_plate?.message}</p>
        </div>

        {/* License ID (Image Upload) */}
        <div className="flex flex-col text-left">
          <label htmlFor="license_Id" className="font-medium text-sm">
            License ID (Upload Image)
          </label>
          <input
            type="file"
            id="license_Id"
            accept="image/*"
            {...register("license_Id", { required: "Please upload your license ID" })}
            className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-[var(--color-bg-orange)] file:mr-3 file:py-1 file:px-3 file:border-0 file:rounded-md file:bg-[var(--color-bg-orange)] file:text-white file:cursor-pointer hover:file:bg-orange-600"
          />
          <p className="text-red-600 text-sm">
            {typeof errors.license_Id?.message === "string" && errors.license_Id.message}
          </p>
        </div>

        {/* Password & Confirm Password */}
        <div className="flex gap-2">
          {/* Password */}
          <div className="flex flex-col text-left flex-1 relative">
            <label htmlFor="password" className="font-medium text-sm">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", {
                  required: "Please enter your password",
                })}
                placeholder="Enter your password"
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
                {...register("comfirm_password", {
                  required: "Please confirm your password",
                })}
                  placeholder="Confirm your password"
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

export default DeliveryDriver;
