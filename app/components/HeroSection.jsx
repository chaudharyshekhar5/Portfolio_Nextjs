"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className=" text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold ">
            <span className="text-white text-2xl sm:text-3xl lg:text-5xl ">Hello, I'm </span><br></br>
            Shekhar
            <br></br>
            <span className="text-[#b18546] mb-4 text-4xl sm:text-3xl lg:text-5xl lg:leading-normal font-bold   ">Front-end Developer</span>
          </h1>
          
          <p className="text-[#43c6ca] text-base sm:text-lg mb-6 lg:text-xl  ">
          Working on Front-end Technologies, building fast responsive web apps. Using open source at core. Always excited to build for unknown sectors.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full text-bold border-2 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 hover:text-red-600 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1WSc0g2LfhboJsXslYD6W0a_R3fAkgvJT/view?usp=drive_link"
              className="px-1 inline-block py-1 w-full  sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 hover:text-red-600 text-white mt-3"
            >
              <span className="block bg-[#121212] border-2  border-gray-600 hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-lg  bg-gradient-to-b from-black mt-6 ml-12 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/hero-image.jpg" priority
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={280}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;