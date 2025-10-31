'use client';
import Customer from "@/app/components/register/Customer";
import DeliveryDriver from "@/app/components/register/DeliveryDriver";
import Restaurant from "@/app/components/register/Restaurant";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [activeButton, setActiveButton] = useState<string>("customer");

  const buttons = [
    { id: "customer", label: "Customer" },
    { id: "driver", label: "Delivery Driver" },
    { id: "restaurant", label: "Restaurant" },
  ];

  const renderForm = () => {
    if (activeButton === "customer") return <Customer />;
    if (activeButton === "driver") return <DeliveryDriver />;
    if (activeButton === "restaurant") return <Restaurant />;
  };

  const getFormImage = () => {
    if (activeButton === "customer") return "/register/customer.png";
    if (activeButton === "driver") return "/register/driver.png";
    if (activeButton === "restaurant") return "/register/restaurant2.png";
  }

  return (
    <div className="flex min-h-screen">
      {/* LEFT SIDE - Image */}
      <div className="relative flex-1 bg-[var(--color-bg-orange)] hidden md:block">
        <Image
          src={getFormImage()}
          alt="Customer Registration"
          width={800}
          height={600}
          className="object-cover relative my-20"
          priority
        />
      </div>

      {/* RIGHT SIDE - Form */}
      <div className="flex flex-col flex-1 bg-[var(--color-bg-primary)] p-10 justify-center items-center">
        <h1 className="text-black font-bold text-2xl mb-2">ASTU Food Hub</h1>
        <h2 className="text-[var(--color-bg-orange)] font-black text-2xl mb-6">
          Create Your Account
        </h2>

        {/* Toggle Buttons */}
        <div className="flex justify-between bg-[var(--color-bg-tertiary)] rounded-full p-1 w-full max-w-md mb-6">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveButton(btn.id)}
              className={`flex-1 px-4 py-2 rounded-full transition-colors duration-200 text-sm font-semibold
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

        {/* Dynamic Form */}
        <div className="w-full max-w-md">{renderForm()}</div>

        {/* Login Link */}
        <p className="text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-[var(--color-bg-orange)] font-bold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
