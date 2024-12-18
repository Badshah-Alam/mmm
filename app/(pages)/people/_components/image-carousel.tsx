"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import AboutProfile from "./about-profile";
import { ProfileImg } from "@/data/profile/profile";




const ImageCarousel = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % ProfileImg.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? ProfileImg.length - 1 : prev - 1));
  };

  return (
    <div className="flex  justify-center">
      <div className="flex flex-col justify-center items-center">

        {/* Image Carousel */}
        <div className="w-full lg:w-[95%] mx-auto xl:w-[400px]  relative">
        <button
            onClick={handlePrev}
            className="px-4 py-4 absolute left-0 top-1/2  bg-[#bebebe] text-dark-smoke rounded-r-full"
          >
            <FaAngleLeft />
          </button>
          <Card className="aspect-[2/3] flex justify-center items-center">
            <Image
              src={ProfileImg[active].image}
              width={600}
              height={296}
              className="w-full h-full rounded-xl"
              alt={`Profile Image ${ProfileImg[active].id}`}
            />
          </Card>
          <button
            onClick={handleNext}
            className="px-4 py-4 absolute top-1/2 right-0 bg-[#bebebe] text-dark-smoke  rounded-l-full"
          >
          <FaAngleRight />
          </button>
          {/* Indicators for active image */}
          <div className="absolute px-4 z-30 top-2 left-0 flex gap-2 justify-center w-full">
            {ProfileImg.map((item, index) => (
              <div
                key={item.id}
                className={`w-full h-1  rounded-full ${
                  active === index ? "bg-white" : "bg-[#bebebe]"
                }`}
              />
            ))}
          </div>
          <div className="absolute flex items-center gap-2 top-5 left-4 ">
          <BsPatchCheckFill className="text-xl text-blue-600 bg-white rounded-full" />
            <p className="text-white font-bold text-xl underline">Alina</p>
          </div>
          
          
        </div>

        {/* Navigation Buttons */}
        <div className=" xl:w-[400px]   -mt-4    ">
            <AboutProfile />
          </div>
      </div>
    </div>
  );
};

export default ImageCarousel;


