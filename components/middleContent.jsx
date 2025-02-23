"use client";
import React from "react";
import { ArrowRight, Rocket, Code, Users } from "lucide-react";

export default function HomeSection() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Welcome to <span className="text-blue-500">StudyFuel</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Your go-to platform for mastering web development and staying ahead in
          the tech world.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-md flex items-center gap-2 transition">
          Get Started <ArrowRight size={20} />
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Rocket size={36} />}
            title="Learn at Your Pace"
            description="Our courses are designed to fit your schedule, allowing you to learn anytime, anywhere."
          />
          <FeatureCard
            icon={<Code size={36} />}
            title="Hands-on Coding"
            description="Get practical experience with real-world projects and coding challenges."
          />
          <FeatureCard
            icon={<Users size={36} />}
            title="Expert Community"
            description="Join a thriving community of developers and industry experts."
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">About StudyFuel</h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            StudyFuel is dedicated to empowering aspiring developers with
            high-quality learning resources. Whether you're a beginner or an
            experienced coder, we provide the tools you need to succeed.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Start Your Journey Today</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Join thousands of learners and take your web development skills to the
          next level.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-md flex items-center gap-2 transition">
          Get Started Now <ArrowRight size={20} />
        </button>
      </section>
    </div>
  );
}

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
    <div className="flex justify-center">{icon}</div>
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-300">{description}</p>
  </div>
);
