import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Header = () => {
  const nav = useRef(null);
  const heroParent = useRef(null);

  useEffect(() => {
    gsap.from(nav.current, {
      y: 10,
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
    });

    const heroElements = gsap.utils.toArray(heroParent.current.children);
    gsap.from(heroElements, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.3,
    });
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-6 sm:py-8">
      {/* NAV */}
      <div
        ref={nav}
        className="flex sm:flex-row justify-between items-center gap-4 border-b border-gray-300 pb-4 sm:pb-5"
      >
        <Link href="/">
          <Image
            src={"/Assets/fullLogoForLight.svg"}
            width={200}
            height={200}
            alt="GoisBlog Logo"
            className="w-32 sm:w-40 cursor-pointer"
          />
        </Link>

        <button className="flex items-center gap-2 bg-[#0118D8] text-white px-4 py-2 rounded-lg hover:bg-[#1B56FD] transition-colors duration-300 text-sm sm:text-base">
          Get Started{" "}
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

      {/* HERO */}
      <div
        ref={heroParent}
        className="text-center my-10 sm:my-16 space-y-4 sm:space-y-6"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mt-6 sm:mt-8">
          Welcome to GoìsBlog, <br />
          <span className="text-3xl sm:text-4xl md:text-5xl text-[#0118D8] font-semibold">
            Your Gateway to Knowledge!
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Explore a world of insightful articles, tutorials, <br className="hidden sm:block" /> 
          and resources to enhance your understanding and skills.
        </p>
        <form
          action=""
          className="flex flex-col sm:flex-row justify-center gap-3 max-w-[500px] mx-auto w-full px-2"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 sm:px-5 sm:py-3 border border-gray-400 rounded outline-none focus:border-blue-500 transition-colors duration-300 w-full text-sm sm:text-base"
          />
          <button className="flex items-center justify-center gap-2 bg-[#0118D8] text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg hover:bg-[#1B56FD] transition-colors duration-300 text-sm sm:text-base">
            Subscribe{" "}
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
        </form>
      </div>
    </div>
  );
};

export default Header;
