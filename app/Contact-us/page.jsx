"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 md:px-12 bg-gray-900 text-white w-full   ">
      {/* Contact Section */}
      <div className="w-full md:max-w-6xl flex flex-col md:flex-row bg-gray-800 shadow-xl rounded-lg overflow-hidden mt-16">
        {/* Left Section - Contact Info */}
        <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold">Get in Touch</h2>
          <p className="mt-3 text-lg text-gray-200">
            We’d love to hear from you! Contact us with any questions or
            feedback.
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-6">
            <div className="flex items-center space-x-4">
              <Mail size={28} />
              <p className="text-lg">support@studyfuel.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone size={28} />
              <p className="text-lg">+91 9876543210</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin size={28} />
              <p className="text-lg">Bikaner, Rajasthan</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/2 p-8 bg-gray-800">
          <h3 className="text-2xl font-semibold text-center text-gray-100">
            Send Us a Message
          </h3>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 focus:ring-2 focus:ring-blue-500 text-white"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition text-lg font-semibold"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="mt-8 w-full">
        <iframe
          title="Location Map"
          className="w-full h-60 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28248.20908300347!2d73.2943643!3d28.0277311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDAxJzM5LjkiTiA3M8KwMTgnNTMuMSJF!5e0!3m2!1sen!2sin!4v1599929048042!5m2!1sen!2sin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
