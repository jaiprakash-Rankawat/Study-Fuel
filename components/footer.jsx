"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Social Icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10  border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Brand & About */}
          <div>
            <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              StudyFuel
            </h1>
            <p className="mt-3 text-gray-400">
              Your one-stop solution for all study materials, blogs, and
              resources.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-blue-400 transition">
                <Link href="/">Home</Link>
              </li>
              <li className="text-gray-400 hover:text-blue-400 transition">
                <Link href="/study-material">Study Materials</Link>
              </li>
              {["Colleges", "Upload", "Blog", "About", "Contact"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright Section */}
        <div className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} StudyFuel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
