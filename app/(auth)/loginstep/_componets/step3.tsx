"use client";

import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";


const Step3 = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="max-w-[1560px] w-[90%] mx-auto py-16 flex justify-center ">
      <div className="bg-white  flex flex-col  justify-center lg:min-w-[600px] lg:w-[600px] mx-auto rounded-lg ">
        
        <div className="py-4 flex items-center w-full  border-b">
        <Link href="/loginstep/step2" >
        <button className="border flex items-center justify-center rounded-r-full py-2 px-3">
            <FaAngleLeft />
          </button>
          </Link>
        
          <div className="flex items-center w-[90%] justify-center text-sm lg:text-base text-gray-600 font-semibold">
            <p className="pr-2">Part</p>
            <p>3</p>
            <span className="px-1">/</span>
            <p>7</p>
          </div>
        </div>

       
        <div className="flex flex-col justify-center items-center py-6 lg:py-8">
          <p className="text-xl lg:text-2xl  font-bold text-gray-800 text-center">
            Who can we help you meet?
          </p>
        </div>

        
        <div className="flex flex-col gap-2 px-6 lg:px-12 py-4 lg:py-8">
          {["Men", "Women", "Everyone"].map((option, index) => (
            <label
              key={index}
              className={`flex items-center gap-4 py-3 px-4 lg:py-4 lg:px-6 border rounded-lg cursor-pointer transition-all ${
                selectedOption === option
                  ? "border-orange-500 bg-gradient-to-r  from-[#F05A8E] to-[#ED1C24] text-white"
                  : "bg-gray-50 border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="meet"
                value={option}
                className="w-4 h-4 lg:w-5 lg:h-5 accent-green-600 border-white"
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
              />
              <p
                className={`text-sm lg:text-lg ${
                  selectedOption === option
                    ? "text-white font-semibold"
                    : "text-gray-700"
                }`}
              >
                {option}
              </p>
            </label>
          ))}
        </div>

       
        <div className="flex justify-center items-center border-t-2 px-6 lg:px-12 py-4 lg:py-6">
          <Link href="/loginstep/step4" className="w-full">
            <button className="bg-gradient-to-r  from-[#F05A8E] to-[#ED1C24] hover:bg-gradient-to-r  hover:to-[#F05A8E] hover:from-orange-mmm text-white px-4 py-3 lg:px-6 lg:py-4 font-semibold w-full rounded-md">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step3;