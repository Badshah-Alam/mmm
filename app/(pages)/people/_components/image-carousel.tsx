"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface ProfileImg {
  id: number;
  image: string;
}

const ProfileImg = [
  { id: 1, image: "/assets/images/people/img1.webp" },
  { id: 2, image: "/assets/images/people/img2.webp" },
  { id: 3, image: "/assets/images/people/img3.webp" },
  { id: 4, image: "/assets/images/people/img4.webp" },
  { id: 5, image: "/assets/images/search/body (9).webp" },
];

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
      <div className="flex   justify-center items-center">

        {/* Image Carousel */}
        <div className="w-[95%]  mx-auto xl:w-[400px] relative">
        <button
            onClick={handlePrev}
            className="px-4 py-4 absolute left-0 top-1/2  bg-[#bebebe] text-dark-smoke rounded-r-full"
          >
            <FaAngleLeft />
          </button>
          <Card className=" mx-auto xl:w-[400px] lg:h-[500px] flex justify-center items-center">
            <Image
              src={ProfileImg[active].image}
              width={600}
              height={296}
              className="w-full h-full rounded-lg"
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
        
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
       
      
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;


