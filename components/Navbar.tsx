"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMoBileNav = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/assests/TasneemLogo1.png" alt="/" width="80" height="45" />

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 uppercase text-sm hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 uppercase text-sm hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 uppercase text-sm hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 uppercase text-sm hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 uppercase text-sm hover:border-b">
                Contact
              </li>
            </Link>
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
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
              <p className="w-[90%] md:w-[75%] py-4">
                Let&apos;s build something legendary together
              </p>
            </div>

            <div className="flex flex-col py-4">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>

              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#365ea4]">
                  Let&apos;s connect
                </p>
              </div>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Navbar;
