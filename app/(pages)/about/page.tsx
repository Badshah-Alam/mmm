

import React from "react";
import AboutUs from "../aboutus/page";

const AboutHeader = () => {
  return (
    <div className="border-b-2 border-gray-300">
      <div className="w-[90%] mx-auto ">
        <ul className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <li className="font-bold">Match Meet & Marry</li>

          <ul className="flex items-center gap-4 md:gap-10">
            <li className="cursor-pointer hover:text-[#f67704]"><a href="#about-us-section">Home</a></li>
            <li className="cursor-pointer hover:text-[#f67704]">
               <a href="#How-we-enforce-the-rules">Rules and Policies</a>
            </li>
            <li className="cursor-pointer hover:text-[#f67704]">
               <a href="#Transparency-reports">Transparency</a>
            </li>
            <li className="cursor-pointer hover:text-[#f67704]">
              <a href="#How-we-prevent-scam">Educational Guides </a>
            </li>
          </ul>

          <li className="cursor-pointer hover:text-blue-500">
            Back to Match Meet & Marry
          </li>
        </ul>
      </div>
    <AboutUs/>

    </div>
  );
};

export default AboutHeader;
