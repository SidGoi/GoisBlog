import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({
  image,
  category,
  title,
  description,
  link,
  date,
  author,
  id,
}) => {
  return (
    <div className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden cursor-pointer flex flex-col">
      <Link href={`/blogs/${id}`}>
        {/* Blog Image */}
        <Image
          src={image}
          width={2000}
          height={2000}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />

        {/* Blog Content */}
        <div className="p-4 flex flex-col gap-3">
          {/* Category */}
          <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-[#0118D8] text-[#FFF8F8] w-max">
            {category}
          </span>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-semibold line-clamp-2">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
            {description}
          </p>

          {/* Footer (Date + Author) */}
          <div className="flex flex-wrap justify-between items-center mt-2 text-gray-500 text-xs sm:text-sm">
            <span>{date}</span>
            <span>{author}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
