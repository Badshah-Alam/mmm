"use client";
import { IoIosMenu } from "react-icons/io";
import React, { useState } from "react";
import AboutUs from "../aboutus/page";
import Image from "next/image";
import Link from "next/link";


const AboutHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="border-b-2 border-gray-300  bg-gray-100    ">
      <div className=" bg-gray-100 sticky top-0">
        <div className="w-[90%] mx-auto  ">
          {/* Header Container */}
          <div className="flex items-center justify-between py-2">
            {/* Menu Icon (Toggle Dropdown) */}
            <IoIosMenu
              className="text-xl cursor-pointer md:hidden"
              onClick={toggleMenu}
            />

            {/* Logo */}
            <Image
              src={"/assets/images/login/logo.png"}
              alt="logo"
              width={150}
              height={20}
            />

            {/* Navigation Links for Desktop */}
            <ul className="hidden md:flex items-center gap-4 md:gap-8">
              <li className="cursor-pointer hover:text-[#f67704] text-sm md:text-md lg:text-lg xl:text-xl">
                <a href="#about-us-section">Home</a>
              </li>
              <li className="cursor-pointer hover:text-[#f67704] text-sm md:text-md lg:text-lg xl:text-xl">
                <a href="#How-we-enforce-the-rules">Rules and Policies</a>
              </li>
              <li className="cursor-pointer hover:text-[#f67704] text-sm md:text-md lg:text-lg xl:text-xl">
                <a href="#Transparency-reports">Transparency</a>
              </li>
              <li className="cursor-pointer hover:text-[#f67704] text-sm md:text-md lg:text-lg xl:text-xl">
                <a href="#How-we-prevent-scam">Educational Guides</a>
              </li>
            </ul>

            {/* Footer Text for Desktop */}
            <Link href="/">
              {" "}
              <p className="hidden md:block cursor-pointer hover:bg-[#f67704] hover:text-white text-[#f67704] text-sm md:text-md lg:text-lg xl:text-xl border py-2 px-2 rounded-md">
                {/* <a href="/"> Back to Match Meet & Marry</a> */}
                Back to Match Meet & Marry
              </p>
            </Link>
          </div>

          {/* Dropdown Menu for Mobile */}
          {menuOpen && (
            <ul className="flex flex-col gap-4 bg-gray-100 p-4 md:hidden">
              <li className="cursor-pointer hover:text-[#f67704] text-sm">
                <a href="#about-us-section">Home</a>
              </li>
              <li className="cursor-pointer hover:text-[#f67704] text-sm">
                <a href="#How-we-enforce-the-rules">Rules and Policies</a>
              </li>
              <li className="cursor-pointer hover:text-[#f67704] text-sm">
                <a href="#Transparency-reports">Transparency</a>
              </li>
              <li className="cursor-pointer hover:text-[#f67704] text-sm">
                <a href="#How-we-prevent-scam">Educational Guides</a>
              </li>
              <Link href="/">
                <p className=" text-sm  hover:bg-[#f67704] hover:text-white text-[#f67704]  md:text-md lg:text-lg xl:text-xl">
                  Back to Match Meet & Marry
                </p>
              </Link>
            </ul>
          )}
        </div>
      </div>

      <AboutUs />
    </div>
  );
};

export default AboutHeader;
