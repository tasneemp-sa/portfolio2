"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");

  const handleMoBileNav = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/assests/TasneemLogo1.png" alt="/" width="75" height="40" />

        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 uppercase text-sm hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 uppercase text-sm hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 uppercase text-sm hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 uppercase text-sm hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 uppercase text-sm hover:border-b">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="ml-10 uppercase text-sm hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>

          {/* Mobile Menu Hamburger Icon */}
          <div
            className="md:hidden hover:cursor-pointer"
            onClick={handleMoBileNav}
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay*/}

      <div
        className={
          mobileOpen
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        {/* Mobile Menu Side Drawer */}
        <div
          className={
            mobileOpen
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full justify-between items-center">
              <Image
                src="/assests/TasneemLogo1.png"
                alt="/"
                width="80"
                height="45"
              />
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleMoBileNav}
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              {/* <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something legendary together
              </p> */}
            </div>
          </div>

          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/resume">
                <li className="py-4 text-sm">Resume</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>

            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#365ea4]">
                Let&apos;s connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
