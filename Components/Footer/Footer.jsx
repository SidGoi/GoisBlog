import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0118D8] text-gray-300 py-8 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo and Name */}
        <div>
          <Link href="/">
            <Image
              src={"/Assets/fullLogoForDark.svg"}
              width={200}
              height={200}
              alt="GoisBlog Logo"
              className="w-32 sm:w-40 cursor-pointer"
            />
          </Link>
          <p className="mt-2 text-sm flex items-center gap-1">
            Developed with{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
            </svg>{" "}
            by <span className="font-semibold">SidGoi</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Follow Me</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-white"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-white"
            >
              <Linkedin />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              className="hover:text-white"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-white text-sm mt-6 border-t border-white pt-4">
        © {new Date().getFullYear()} Gois Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
