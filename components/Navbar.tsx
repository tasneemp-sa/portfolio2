import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/assests/TasneemLogo.png" alt="/" width="80" height="45" />

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
          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>

        <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
            <div>
              <div className="flex w-full justify-between items-center">
                <Image
                  src="/assests/TasneemLogo.png"
                  alt="/"
                  width="80"
                  height="45"
                />
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
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
                  </Link><Link href="/">
                    <li className="py-4 text-sm">Skills</li>
                  </Link><Link href="/">
                    <li className="py-4 text-sm">Projects</li>
                  </Link><Link href="/">
                    <li className="py-4 text-sm">Contact</li>
                  </Link>
                </ul>

                <div className="pt-40">
                    <p className="uppercase tracking-widest text-[#365ea4]">Let&apos;s connect</p>
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
