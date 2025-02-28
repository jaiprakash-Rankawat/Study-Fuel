"use client";
import React, { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import Image from "next/image";
export default function CollegesPage() {
  // College Data
  const colleges = {
    IIT: [
      {
        name: "IIT Bombay",
        location: "Mumbai, Maharashtra",
        image: "colleges/iitBombay.jpg",
        info: "One of the premier engineering institutes in India, known for its excellent faculty and research.",
        link: "#",
      },
      {
        name: "IIT Delhi",
        location: "New Delhi",
        image: "colleges/iitDelhi.jpg",
        info: "A top-ranked institute offering world-class education and research facilities.",
        link: "#",
      },
      {
        name: "IIT Madras",
        location: "Chennai, Tamil Nadu",
        image: "colleges/iitMadras.jpg",
        info: "Great for research and development projects.",
        link: "#",
      },
    ],
    NIT: [
      {
        name: "NIT Trichy",
        location: "Tiruchirappalli, Tamil Nadu",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/NIT_Trichy_Main_Building.jpg",
        info: "A leading NIT known for its strong industry connections and academic excellence.",
        link: "#",
      },
      {
        name: "NIT Warangal",
        location: "Warangal, Telangana",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/NIT_Warangal_Main_Building.jpg",
        info: "Among the oldest NITs, offering top-quality education in engineering and sciences.",
        link: "#",
      },
    ],
    Engineering: [
      {
        name: "BITS Pilani",
        location: "Pilani, Rajasthan",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/09/BITS_Pilani_Campus.jpg",
        info: "A private institute known for its flexible academic structure and entrepreneurship focus.",
        link: "#",
      },
      {
        name: "VIT Vellore",
        location: "Vellore, Tamil Nadu",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/87/VIT_Vellore_Campus.jpg",
        info: "Ranked among India's best private universities with strong global recognition.",
        link: "#",
      },
    ],
  };

  // State for Search
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered College List
  const filteredColleges = Object.entries(colleges).reduce(
    (acc, [category, collegeList]) => {
      acc[category] = collegeList.filter((college) =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return acc;
    },
    {}
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-6 ">
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto flex items-center bg-gray-800 p-3 rounded-lg shadow-md ">
        <input
          type="text"
          placeholder="Search for a college..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent text-white w-full px-3 focus:outline-none"
        />
        <button className="bg-blue-600 px-4 py-2 rounded-md ml-2 hover:bg-blue-700 transition">
          <Search size={20} />
        </button>
      </div>

      {/* College Sections */}
      {Object.entries(filteredColleges).map(([category, collegeList]) => (
        <CollegeSection
          key={category}
          title={`Best ${category} Colleges`}
          colleges={collegeList}
        />
      ))}
    </div>
  );
}

// College Section Component
const CollegeSection = ({ title, colleges }) => {
  if (colleges.length === 0) return null; // Hide section if no colleges match search

  return (
    <section className="mt-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college, index) => (
          <CollegeCard key={index} {...college} />
        ))}
      </div>
    </section>
  );
};

// College Card Component
const CollegeCard = ({ name, location, image, info, link }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden">
    <img
      src={image}
      alt={name}
      className="w-full h-40 object-cover rounded-md"
    />
    <div className="mt-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-400 text-sm">{location}</p>
      <p className="text-gray-300 mt-2">{info}</p>
      <a
        href={link}
        className="mt-3 inline-flex items-center text-blue-400 hover:text-blue-500 transition"
      >
        Read More <ExternalLink size={18} className="ml-2" />
      </a>
    </div>
  </div>
);
