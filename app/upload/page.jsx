"use client";
import React, { useState } from "react";
import { UploadCloud, User, CheckCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setError("File size should be less than 5MB.");
      return;
    }
    setError(null);
    setFormData({ ...formData, file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.file) {
      setError("Please select a file to upload.");
      return;
    }
    setError(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess("File uploaded successfully!");
      setTimeout(() => setSuccess(null), 3000);
    }, 2000);
  };

  const contributors = [
    { name: "Aman Sharma", college: "IIT Delhi", uploads: 15 },
    { name: "Priya Verma", college: "NIT Trichy", uploads: 10 },
    { name: "Ravi Kumar", college: "BITS Pilani", uploads: 8 },
    { name: "Sneha Gupta", college: "VIT Vellore", uploads: 6 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
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
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl"
      >
        <h3 className="text-2xl font-semibold text-center mb-4">
          Upload Files
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "name",
            "location",
            "mobile",
            "college",
            "branch",
            "stream",
            "semester",
            "subject",
          ].map((field, index) => (
            <InputField
              key={index}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
          ))}
        </div>

        {/* File Upload */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-400">
            Upload File (Max: 5MB)
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-2 w-full text-gray-400 file:bg-blue-600 file:border-none file:px-4 file:py-2 file:rounded-md file:text-white file:cursor-pointer file:hover:bg-blue-700"
          />
        </div>

        {error && (
          <p className="text-red-400 mt-2 flex items-center">
            <AlertTriangle size={18} className="mr-2" /> {error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className={`mt-6 bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-md w-full hover:scale-105 transition-all flex items-center justify-center ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload File"}
        </button>

        {success && (
          <p className="text-green-400 mt-4 flex items-center">
            <CheckCircle size={18} className="mr-2" /> {success}
          </p>
        )}
      </motion.form>

      {/* Top Contributors Section */}
      <section className="py-20 px-6 w-full bg-gray-800 mt-20 shadow-xl rounded-xl">
        <h2 className="text-5xl font-extrabold text-center text-yellow-400 mb-12">
          🏆 Top Contributors 🏆
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {contributors.map((student, index) => (
            <ContributorCard
              key={index}
              name={student.name}
              college={student.college}
              uploads={student.uploads}
            />
          ))}
        </div>
      </section>
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

// Top Contributor Card
const ContributorCard = ({ name, college, uploads }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="bg-gradient-to-br from-yellow-500 to-orange-600 p-10 rounded-xl shadow-lg text-center transform transition-all hover:shadow-2xl"
  >
    <User size={50} className="mx-auto text-white mb-4" />
    <h3 className="text-2xl font-bold text-white">{name}</h3>
    <p className="mt-1 text-gray-200 text-lg">{college}</p>
    <p className="mt-3 text-white font-semibold text-xl">
      Uploads: {uploads} 📂
    </p>
  </motion.div>
);
