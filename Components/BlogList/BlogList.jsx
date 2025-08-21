import React, { useEffect, useRef, useState } from "react";
import BlogItem from "../BlogItem/BlogItem";
import gsap from "gsap";

import blogData from "@/app/blogData";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const BlogRef = useRef(null);

  const filteredBlogs =
    menu === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === menu);

  useEffect(() => {
    gsap.from(BlogRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 0.6,
    });
  }, []);

  return (
    <div ref={BlogRef}>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 items-center justify-center px-4 sm:px-8 md:px-16 py-4 mb-6">
        {["All", "Technology", "Health", "Travel", "Education", "Finance"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setMenu(cat)}
              className={`px-4 sm:px-5 py-1 sm:py-2 rounded-2xl cursor-pointer text-sm sm:text-base transition-colors duration-300 ${
                menu === cat
                  ? "bg-[#0118D8] text-white shadow-md"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Blog Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 pb-12">
        {filteredBlogs.map((blog) => (
          <BlogItem
            key={blog.id}
            id={blog.id}
            image={blog.image}
            category={blog.category}
            title={blog.title}
            description={blog.description}
            link={blog.link}
            date={blog.date}
            author={blog.author}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
