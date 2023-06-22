"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

// const MyLink = React.forwardRef(
//   (
//     { as, children, href, replace, scroll, shallow, passHref, ...rest }, // extract all next/link props and pass the rest to the anchor tag
//     ref,
//   ) => (
//     <Link as={as} href={href} passHref={passHref} replace={replace}>
//       <a {...rest} ref={ref}>
//         {children}
//       </a>
//     </Link>
//   ),
// );

const AboutPhoto = () => {
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);
  return (
    <div
      className="flex items-center flex-shrink-0 m-auto cursor-pointer rounded-xl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link href="/">
        {isHovering ? (
          <div
            style={{
              borderRadius: "5px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/assets/TasneemPhoto.jpeg"
              width={250}
              height={600}
              alt="photo"
            />
          </div>
        ) : (
          <div
            style={{
              borderRadius: "5px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/assets/noir.jpeg"
              width={250}
              height={600}
              alt="photo"
            />
          </div>
        )}
      </Link>
    </div>
  );
};

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#365ea5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            Hi! I&apos;m Tasneem and I&apos;m a software engineer. I have a
            Bachelor&apos;s of Engineering in Information Technology and I
            recently completed a Full Stack Bootcamp. I worked for Tata
            Consultancy Services and integrated enterprise applications for
            clients Macys and QuickSilver using TIBCO BusinessWorks. After
            taking a career break to raise my children, I am excited to rejoin
            the tech industry.
          </p>
          <p className="py-2 text-gray-600">
            I&apos;m self-driven and conscientious and this has allowed me to
            excel in all phases of life. I have served on the boards of local
            non-profits to provide enriching opportunities to students. I have
            always taken the initiative to create a positive impact in my
            community and I&apos;m looking forward to joining a team where I can
            continue to grow my skills and add value.
          </p>
          <p className="py-2 text-gray-600">
            My hobbies include painting, reading, hiking and building using
            power tools. I&apos;m also passionate about art, education and the environment.
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className="m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          {/* <img  src='/assests/noir.jpeg' alt='/'></img> */}
          <AboutPhoto />
        </div>
      </div>
    </div>
  );
};

export default About;
