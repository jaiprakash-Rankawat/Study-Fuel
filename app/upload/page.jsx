"use client";
import React, { useState } from "react";
import { UploadCloud, User } from "lucide-react";

export default function UploadPage() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    mobile: "",
    college: "",
    branch: "",
    stream: "",
    semester: "",
    subject: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("File Uploaded Successfully!");
  };

  const contributors = [
    { name: "Aman Sharma", college: "IIT Delhi", uploads: 15 },
    { name: "Priya Verma", college: "NIT Trichy", uploads: 10 },
    { name: "Ravi Kumar", college: "BITS Pilani", uploads: 8 },
    { name: "Sneha Gupta", college: "VIT Vellore", uploads: 6 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4 ">
      {/* Header Message */}
      <div className="text-center mb-8 max-w-2xl">
        <h2 className="text-4xl font-bold text-blue-400 animate-pulse">
          Share Knowledge, Empower Others 📚
        </h2>
        <p className="mt-2 text-gray-300 text-lg">
          "Your small contribution can help thousands of students. Upload notes,
          question papers, and study materials to create a stronger learning
          community. Be the reason someone succeeds!" 🌟
        </p>
      </div>

      {/* Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl"
      >
        <h3 className="text-2xl font-semibold text-center mb-4">
          Upload Files
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <InputField
            label="Mobile Number"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
          />
          <InputField
            label="College Name"
            name="college"
            value={formData.college}
            onChange={handleChange}
          />
          <InputField
            label="Branch Name"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
          <InputField
            label="Stream"
            name="stream"
            value={formData.stream}
            onChange={handleChange}
          />
          <InputField
            label="Semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
          />
          <InputField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        {/* File Upload */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-400">
            Upload File
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-2 w-full text-gray-400 file:bg-blue-600 file:border-none file:px-4 file:py-2 file:rounded-md file:text-white file:cursor-pointer file:hover:bg-blue-700"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-md w-full hover:scale-105 transition-all flex items-center justify-center"
        >
          <UploadCloud size={20} className="mr-2" />
          Upload File
        </button>
      </form>

      {/* Top Contributors */}
      <div className="mt-12 w-full max-w-5xl">
        <h3 className="text-2xl font-semibold text-center mb-6">
          ✨ Top Contributors ✨
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {contributors.map((student, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all"
            >
              <User size={40} className="mx-auto text-blue-400 mb-3" />
              <h4 className="text-xl font-bold">{student.name}</h4>
              <p className="text-gray-300">{student.college}</p>
              <p className="text-blue-400 font-semibold">
                Uploads: {student.uploads}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable Input Component
const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-gray-400">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 w-full p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:outline-none"
      required
    />
  </div>
);
