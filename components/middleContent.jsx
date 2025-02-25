"use client";
import Link from "next/link";
import React from "react";
import { ArrowRight, Rocket, Book, DollarSign } from "lucide-react";

export default function HomeSection() {
  return (
    <div className="bg-gray-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-700 to-purple-600 shadow-xl">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg animate-fadeIn">
          Welcome to <span className="text-yellow-400">Study Fuel</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl animate-fadeIn delay-200">
          All your study resources 👉 notes, question papers, books, and more
          ...
        </p>
        <Link
          href="/study-material"
          className="mt-6 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-lg flex items-center gap-2 transition transform hover:scale-105"
        >
          Get Started <ArrowRight size={22} />
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<Rocket size={40} className="text-yellow-400" />}
            title="Anytime, Anywhere"
            description="Access all resources available online."
          />
          <FeatureCard
            icon={<Book size={40} className="text-yellow-400" />}
            title="Study Material"
            description="Access all study materials, question papers, and books."
          />
          <FeatureCard
            icon={<DollarSign size={40} className="text-yellow-400" />}
            title="Completely Free"
            description="High-quality content without any hidden charges."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">
            What Our Students Say
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Hear from students who have transformed their skills with Study
            Fuel.
          </p>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            <TestimonialCard
              name="Prem Tavaniya"
              feedback="This platform has everything I need – notes, previous year papers, and even practical files. It made my exam preparation so much easier!"
              image="/images/john.jpg"
            />
            <TestimonialCard
              name="Narayan Kachawa"
              feedback="I love how I can access study materials anytime, anywhere. It’s a game-changer for students!"
              image="/images/jane.jpg"
            />
            <TestimonialCard
              name="Priyanshu Chanwariya"
              feedback="Finally, a one-stop solution for all my study needs. Highly recommend to all students!"
              image="/images/mike.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col justify-center items-center py-20 px-6 text-center bg-gradient-to-r from-purple-700 to-blue-600 shadow-xl">
        <h2 className="text-4xl font-bold text-white">
          Start Your Journey Today
        </h2>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Prepare better, score higher, and stay ahead in your studies.
        </p>
        <button className="mt-6 px-8 py-3 bg-yellow-400  hover:bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-lg flex items-center gap-2 transition transform hover:scale-105">
          Get Started Now <ArrowRight size={22} />
        </button>
      </section>
    </div>
  );
}

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-gray-400">{description}</p>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ name, feedback, image }) => (
  <div className="bg-gray-700 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition">
    <img
      src={image}
      alt={name}
      className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-yellow-400"
    />
    <p className="text-gray-300 italic">"{feedback}"</p>
    <h4 className="mt-4 text-lg font-semibold text-white">{name}</h4>
  </div>
);
