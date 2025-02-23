"use client";
import React from "react";
import { Users, Info, Globe, Target } from "lucide-react";

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
          {/* Our Mission */}
          <div className="p-6 bg-gray-800 shadow-md rounded-lg hover:shadow-lg transition">
            <Target size={48} className="mx-auto text-blue-400" />
            <h3 className="mt-4 text-xl font-semibold">Our Mission</h3>
            <p className="mt-2 text-gray-300">
              To make education accessible, efficient, and engaging for students
              worldwide.
            </p>
          </div>

          {/* Our Vision */}
          <div className="p-6 bg-gray-800 shadow-md rounded-lg hover:shadow-lg transition">
            <Globe size={48} className="mx-auto text-purple-400" />
            <h3 className="mt-4 text-xl font-semibold">Our Vision</h3>
            <p className="mt-2 text-gray-300">
              To be the leading platform for students seeking knowledge and
              career growth.
            </p>
          </div>

          {/* Who We Are */}
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
          {/* Team Member 1 */}
          <div className="p-6 bg-gray-900 shadow-md rounded-lg text-center hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="mx-auto rounded-full w-24 h-24 border-4 border-blue-400"
            />
            <h3 className="mt-4 text-xl font-semibold text-white">John Doe</h3>
            <p className="text-gray-300">Founder & CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="p-6 bg-gray-900 shadow-md rounded-lg text-center hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="mx-auto rounded-full w-24 h-24 border-4 border-purple-400"
            />
            <h3 className="mt-4 text-xl font-semibold text-white">
              Jane Smith
            </h3>
            <p className="text-gray-300">Head of Education</p>
          </div>

          {/* Team Member 3 */}
          <div className="p-6 bg-gray-900 shadow-md rounded-lg text-center hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="mx-auto rounded-full w-24 h-24 border-4 border-green-400"
            />
            <h3 className="mt-4 text-xl font-semibold text-white">
              David Johnson
            </h3>
            <p className="text-gray-300">Tech Lead</p>
          </div>
        </div>
      </section>
    </div>
  );
}
