"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use this for Next.js 13+
import { Menu, X } from "lucide-react"; // Import icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Router instance

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-gray-900 text-white shadow-lg transition-all border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <h1 className="text-lg md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          StudyFuel
        </h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          <li>
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/study-material"
              className="hover:text-blue-400 transition"
            >
              Study Materials
            </Link>
          </li>
          {["Colleges", "Upload", "Blog", "About"].map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="hover:text-blue-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact-us" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side: Mobile Menu & Login Button */}
        <div className="flex items-center space-x-4">
          {/* Login Button (Only on Desktop) */}
          <button className="font-bold hidden md:block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm">
            Login
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Slide-in Left) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center">
          <h1 className="text-lg font-bold text-white">Menu</h1>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-white" />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 px-6 text-white text-base">
          <li>
            <Link
              href="/"
              className="block py-2 px-4 hover:bg-blue-500 rounded-md transition text-left w-full"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/study-material"
              className="block py-2 px-4 hover:bg-blue-500 rounded-md transition text-left w-full"
              onClick={() => setIsOpen(false)}
            >
              Study Material
            </Link>
          </li>
          {["Colleges", "Upload", "Blog", "About"].map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="block py-2 px-4 hover:bg-blue-500 rounded-md transition text-left w-full"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact-us"
              className="block py-2 px-4 hover:bg-blue-500 rounded-md transition text-left w-full"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Background Overlay when Mobile Menu is Open */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}
    </nav>
  );
}
