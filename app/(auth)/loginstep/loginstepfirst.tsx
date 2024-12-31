
import React from "react";
import Image from "next/image";
import { loginStepData } from "@/data/loginstep/loginstep";
import Link from "next/link";

const LoginStepFirst = () => {
  return (
    <div className="w-full max-w-[1560px] mx-auto p-4   ">
      <div className="relative w-full lg:h-[515px] xl:h-[700px] flex  items-end   to-smoke-mmm">
        <div className="absolute lg:top-0 bottom-0 z-10 left-1/2 transform -translate-x-1/2 lg:text-center w-full  bg-gradient-to-b from-transparent to-white lg:bg-none ">
          <p className="text-xl font-bold sm:text-2xl md:text-3xl text-[36px] text-black  ">
            Welcome to  Match Meet & Marry!
          </p>
          <p className="text-[#525252]  text-sm sm:text-base md:text-lg font-normal leading-6 lg:py-4 ">
            Please take this quiz to complete your profile <br/> and use our
            site to its fullest.
          </p>
          <div className=" w-full">
          

            <Link href="/loginstep/step2">
            <button className="text-[16px] font-semibold sm:px-8 text-nowrap w-full lg:w-[300px] md:px-28 lg:w-px-28 py-4 sm:py-4 md:py-4 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]  text-white text-sm sm:text-base md:text-lg rounded hover:bg-orange-600 border-none">
              {`Let's do it!`}
            </button>
        </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 ">
          {loginStepData.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden w-full flex items-end rounded-md shadow-md 
                  aspect-squre
                  ${index % 2 === 0 ? "mt-4" : ""}`}
            >
              <Image
                className="w-full h-full object-cover rounded-md"
                src={item.image}
                alt="loginstep-img"
                width={400}
                height={700}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginStepFirst;



