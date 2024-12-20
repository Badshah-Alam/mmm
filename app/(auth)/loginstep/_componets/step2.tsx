"use client";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { ProcessStep } from "./process-step";
import Link  from "next/link";

const Step2 = () => {
  const [active, setActive] = useState(-1);
  const data = [
    { name: "chatting" },
    { name: "finding a friend" },
    { name: "having fun" },
    { name: "get attention" },
    { name: "i am bored" },
    { name: "other" },
  ];
  return (
    <div className="max-w-[1560px] w-[90%] mx-auto py-16 flex justify-center   ">
      <div className="bg-white  flex flex-col  justify-center lg:min-w-[600px] lg:w-[600px] mx-auto  ">
        <div className="py-3 flex items-center  w-full bg-white">
          <div className="border flex items-center justify-start rounded-r-full py-2 px-3">
            <FaAngleLeft />
          </div>

          <div className="flex items-center w-[90%] justify-center text-base text-gray-600 font-semibold">
            <p className="pr-2">Part</p>
            <p>2</p>
            <span className="px-1">/</span>
            <p>3</p>
          </div>
        </div>

        <ProcessStep />
        <div className="flex justify-center flex-col items-center gap-1">
          <p className="text-2xl font-semibold text-dark-mmm text-center pt-2">
            What is your goal hear?
          </p>
          <p className="text-base text-gray-600 bg-[#FFE3D1] rounded-full  px-3 py-1 ">
            up to 3 answers
          </p>
        </div>
        <div className="flex gap-2 pt-4 pb-24 justify-center px-10 flex-wrap">
          {data.map((item, index) => (
            <button key={index} onClick={() => setActive(index)}>
              <p
                className={`py-2 rounded-3xl bg-smoke-mmm shadow-md text-dark-mmm text-base font-medium px-2 ${
                  active === index
                    ? "bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white"
                    : ""
                }`}
              >
                {item.name}
              </p>
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center border-t-2  gap-2 px-8 bg-white py-2">
          <button className="border border-gray-300 w-[50%] px-2 py-3">
            Skip
          </button>
        
          <Link href="/search" className="w-full">
          <button className="bg-gradient-to-r w-full from-[#F05A8E] to-[#ED1C24] hover:bg-gradient-to-r  hover:to-[#F05A8E] hover:from-orange-mmm text-white px-6 py-3">
            continue
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Step2;
