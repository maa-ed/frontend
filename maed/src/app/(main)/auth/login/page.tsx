"use client";
import LoginCard from "@/app/components/Login/LoginCard";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [activeButton, setActiveButton] = useState<string>("customer");

  const buttons = [
    { id: "customer", label: "Customer" },
    { id: "driver", label: "Delivery Driver" },
    { id: "restaurant", label: "Restaurant" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--color-bg-primary)]">
      <div className="w-110 p-6 rounded-2xl bg-white shadow-md flex flex-col gap-6 text-center">
        <h1 className="text-2xl font-semibold text-[var(--color-bg-orange)]">Welcome Back!</h1>
        <p className="text-gray-600 text-sm">
          Order your favorite meal in minutes!
        </p>

        <div className="flex justify-between bg-[var(--color-bg-tertiary)] rounded-full p-1">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveButton(btn.id)}
              className={`px-3 py-2 rounded-full transition-colors duration-200 
                ${
                  activeButton === btn.id
                    ? "bg-white text-[var(--color-bg-orange)] shadow"
                    : "bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)]"
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <LoginCard />
        <div>
          <p className="text-gray-600">Don&apos;t have an account?<Link href="/auth/register" className="text-[var(--color-bg-orange)] font-bold">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Page;
