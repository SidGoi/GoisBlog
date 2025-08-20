"use client";

import blogData from "@/app/blogData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { id } = params;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const blog = blogData.find((b) => b.id === Number(id));
    if (blog) {
      setData(blog);
    }
    setLoading(false);
  }, [id]);

  return (
    <div className="py-6 px-4 sm:px-8 lg:px-20">
      {/* NAV */}
      <div className="flex justify-between items-center border-b border-gray-300 pb-5">
        <Link href="/">
          <Image
            src={"/Assets/fullLogoForLight.svg"}
            width={1000}
            height={1000}
            alt="GoisBlog Logo"
            className="w-32 sm:w-40 cursor-pointer"
          />
        </Link>

        <button className="flex items-center gap-2 bg-[#0118D8] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#1B56FD] transition-colors duration-300 cursor-pointer text-sm sm:text-base">
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#FFF8F8"
          >
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </button>
      </div>

      {/* ✅ Blog Content */}
      {loading ? (
        <p className="mt-6 text-gray-500 animate-pulse">Loading blog...</p>
      ) : data ? (
        <div className="mt-8 max-w-4xl mx-auto">
          {/* Category */}
          <span className="inline-block text-xs sm:text-sm px-3 py-1 rounded-full bg-[#0118D8] text-white mb-4">
            {data.category}
          </span>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
            {data.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-xs sm:text-sm mb-6">
            <span className="flex gap-2 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="#1f1f1f"
              >
                {" "}
                <path d="M320-400q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm160 0q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm160 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z" />{" "}
              </svg>{" "}
              {data.date}{" "}
            </span>{" "}
            <span className="flex gap-2 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="#1f1f1f"
              >
                {" "}
                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />{" "}
              </svg>{" "}
              {data.author}{" "}
            </span>
          </div>

          {/* Image */}
          <Image
            src={data.image}
            alt={data.title}
            width={2000}
            height={2000}
            className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-lg mb-6"
          />

          {/* Short description */}
          <p className="text-gray-600 text-base sm:text-lg italic mb-6">
            {data.description}
          </p>

          {/* Full Content */}
          <div className="text-gray-800 text-sm sm:text-base leading-relaxed space-y-4">
            {data.content
              .trim()
              .split("\n")
              .map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
          </div>
        </div>
      ) : (
        <p className="mt-6 text-red-500">Blog not found 🚨</p>
      )}
    </div>
  );
};

export default Page;
