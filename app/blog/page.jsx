"use client";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt:
      "Explore the latest trends and technologies shaping the future of web development in 2025.",
    image: "https://source.unsplash.com/600x400/?technology,web",
    date: "Feb 22, 2025",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Mastering JavaScript: Tips and Tricks",
    excerpt:
      "Boost your JavaScript skills with these powerful tips and tricks used by professionals.",
    image: "https://source.unsplash.com/600x400/?javascript,code",
    date: "Feb 18, 2025",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Understanding React Hooks",
    excerpt:
      "A beginner-friendly guide to understanding and using React Hooks effectively.",
    image: "https://source.unsplash.com/600x400/?react,frontend",
    date: "Feb 10, 2025",
    author: "Alice Johnson",
  },
  {
    id: 4,
    title: "The Power of Tailwind CSS",
    excerpt:
      "Learn how Tailwind CSS simplifies styling and makes development faster.",
    image: "https://source.unsplash.com/600x400/?css,design",
    date: "Jan 28, 2025",
    author: "Michael Brown",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-80 bg-cover bg-center flex flex-col justify-center items-center text-center p-6"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x900/?blog,writing')`,
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Latest Blog Posts
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          Stay updated with the latest trends and insights.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Blog Grid */}
        <div className="md:col-span-2 grid gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold">{blog.title}</h2>
                <p className="text-gray-300 mt-2">{blog.excerpt}</p>
                <div className="mt-4 flex justify-between text-gray-400 text-sm">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">Categories</h3>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">
              Web Development
            </li>
            <li className="hover:text-blue-400 cursor-pointer">JavaScript</li>
            <li className="hover:text-blue-400 cursor-pointer">React</li>
            <li className="hover:text-blue-400 cursor-pointer">CSS & UI</li>
          </ul>

          <h3 className="mt-6 text-xl font-bold">Recent Posts</h3>
          <ul className="mt-4 space-y-3">
            {blogs.slice(0, 3).map((blog) => (
              <li key={blog.id} className="hover:text-blue-400 cursor-pointer">
                {blog.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
