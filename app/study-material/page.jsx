"use client";
import React, { useState, useEffect } from "react";

const studyMaterials = [
  {
    id: 1,
    college: "XYZ College",
    branch: "CSE",
    stream: "B.Tech",
    subject: "DBMS",
    semester: "3rd",
    category: "Notes",
    file: "dbms_notes.pdf",
  },
  {
    id: 2,
    college: "XYZ College",
    branch: "CSE",
    stream: "B.Tech",
    subject: "DBMS",
    semester: "3rd",
    category: "Main Exam Pyq",
    file: "dbms_main_exam.pdf",
  },
  {
    id: 3,
    college: "ABC College",
    branch: "ECE",
    stream: "B.Tech",
    subject: "DSA",
    semester: "5th",
    category: "Books",
    file: "dsa_book.pdf",
  },
  {
    id: 4,
    college: "LMN College",
    branch: "ME",
    stream: "Diploma",
    subject: "Thermodynamics",
    semester: "2nd",
    category: "Practical File",
    file: "thermo_practical.pdf",
  },
];

const categories = [
  "Notes",
  "Main Exam Pyq",
  "Practical Exam Pyq",
  "Practical File",
  "Mid Term Exam Pyq",
  "Books",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState({
    college: "",
    branch: "",
    semester: "",
  });
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filteredData = studyMaterials.filter(
      (item) =>
        (query === "" ||
          item.subject.toLowerCase().includes(query.toLowerCase())) &&
        (filter.college === "" || item.college === filter.college) &&
        (filter.branch === "" || item.branch === filter.branch) &&
        (filter.semester === "" || item.semester === filter.semester)
    );
    setResults(filteredData);
  }, [query, filter]);

  return (
    <div className="p-6 bg-gray-900 text-white">
      {/* 🔍 Search Title */}
      <h1 className="text-3xl font-bold text-center mb-6">
        🔍 Search Study Material
      </h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Enter subject name..."
        className="w-full p-3 rounded-md bg-gray-800 text-white text-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Filters Section */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* College Dropdown */}
        <select
          className="p-3 rounded-md bg-gray-800 text-white"
          onChange={(e) => setFilter({ ...filter, college: e.target.value })}
        >
          <option value="">All Colleges</option>
          <option value="XYZ College">XYZ College</option>
          <option value="ABC College">ABC College</option>
          <option value="LMN College">LMN College</option>
        </select>

        {/* Branch Dropdown */}
        <select
          className="p-3 rounded-md bg-gray-800 text-white"
          onChange={(e) => setFilter({ ...filter, branch: e.target.value })}
        >
          <option value="">All Branches</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="ME">ME</option>
        </select>

        {/* Semester Dropdown */}
        <select
          className="p-3 rounded-md bg-gray-800 text-white"
          onChange={(e) => setFilter({ ...filter, semester: e.target.value })}
        >
          <option value="">All Semesters</option>
          <option value="1st">1st Semester</option>
          <option value="2nd">2nd Semester</option>
          <option value="3rd">3rd Semester</option>
          <option value="4th">4th Semester</option>
          <option value="5th">5th Semester</option>
          <option value="6th">6th Semester</option>
          <option value="7th">7th Semester</option>
          <option value="8th">8th Semester</option>
        </select>
      </div>

      {/* 📂 Grid Section for Categorized Study Materials */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => {
          const categoryResults = results.filter(
            (item) => item.category === category
          );

          return (
            <div key={category} className="bg-gray-800 p-4 rounded-md">
              <h2 className="text-xl font-semibold mb-3 text-blue-400">
                {category}
              </h2>
              {categoryResults.length > 0 ? (
                <ul className="space-y-2">
                  {categoryResults.map((item) => (
                    <li key={item.id} className="text-white">
                      📘 <strong>{item.subject}</strong> - {item.college} (
                      {item.branch}, {item.semester})
                      <a
                        href={item.file}
                        className="ml-2 text-blue-400 hover:underline"
                      >
                        Download
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">No materials found.</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
