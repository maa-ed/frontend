//src/app/(main)/auth/register/page.tsx
'use client';
import Customer from "@/app/components/register/Customer";
import DeliveryDriver from "@/app/components/register/DeliveryDriver";
import Restaurant from "@/app/components/register/Restaurant";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
    const [activeButton, setActiveButton] = useState<string>("customer");

    const buttons = [
    { id: "customer", label: "Customer" },
    { id: "driver", label: "Delivery Driver" },
    { id: "restaurant", label: "Restaurant" },
    ];

    const renderForm = () => {
      if (activeButton == "customer") return <Customer />;
      if (activeButton == "driver") return <DeliveryDriver />;
      if (activeButton == "restaurant") return <Restaurant />;
    }
  return (
    <div className="flex flex-col items-center min-h-screen">
        <div className="flex flex-col items-center justify-center my-20 bg-[var(--color-bg-primary)] shadow-md p-6 gap-2 ">
          <h1 className="text-black font-bold position-fixed">ASTU Food Hub</h1>
          <h1 className="text-[var(--color-bg-orange)] font-black text-2xl">Create Your Account</h1>
          <div className="flex justify-between bg-[var(--color-bg-tertiary)] rounded-full p- w-110">
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
          {renderForm()}
          <div className="mb-20">
            <p className="text-gray-600">Already have an account?<Link href="/auth/login" className="text-[var(--color-bg-orange)] font-bold">Login</Link></p>
          </div>
      </div>
    </div>
  )
}

export default page