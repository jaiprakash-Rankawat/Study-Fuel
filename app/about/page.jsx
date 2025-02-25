"use client";
import React from "react";
import { Users, Globe, Target } from "lucide-react";
import Link from "next/link";
import teamMembers from "@/components/teamMember";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-900 text-[#00edff]">
      {/* Header Section */}
      <section className="text-center py-12 px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          About <span className="text-blue-400">Study Fuel</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Empowering students with the best resources and guidance for their
          educational journey.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-800 shadow-md rounded-lg hover:shadow-lg transition">
            <Target size={48} className="mx-auto text-blue-400" />
            <h3 className="mt-4 text-xl font-semibold">Our Mission</h3>
            <p className="mt-2 text-gray-300">
              To make education accessible, efficient, and engaging for students
              worldwide.
            </p>
          </div>
          <div className="p-6 bg-gray-800 shadow-md rounded-lg hover:shadow-lg transition">
            <Globe size={48} className="mx-auto text-purple-400" />
            <h3 className="mt-4 text-xl font-semibold">Our Vision</h3>
            <p className="mt-2 text-gray-300">
              To be the leading platform for students seeking knowledge and
              career growth.
            </p>
          </div>
          <div className="p-6 bg-gray-800 shadow-md rounded-lg hover:shadow-lg transition">
            <Users size={48} className="mx-auto text-green-400" />
            <h3 className="mt-4 text-xl font-semibold">Who We Are</h3>
            <p className="mt-2 text-gray-300">
              A team of educators and developers passionate about helping
              students succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Meet Our Team
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Link key={member.id} href={`/team/${member.id}`} className="block">
              <div className="p-6 bg-gray-900 shadow-md rounded-lg text-center hover:shadow-lg transition cursor-pointer">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`mx-auto rounded-full w-24 h-24 border-4 ${member.borderColor}`}
                />
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-gray-300">{member.role}</p>
                <p className="mt-2 text-sm text-gray-400">{member.bio}</p>

                {/* Social Links as Buttons */}
                <div className="flex justify-center mt-4 space-x-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Email
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
