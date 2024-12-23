"use client";

import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { ProcessStep } from "./process-step";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const Step6 = () => {


 

  return (
    <div className="max-w-[1560px] w-[90%] mx-auto py-16 flex justify-center">
      <div className="bg-white flex flex-col justify-center lg:min-w-[600px] lg:w-[600px] mx-auto rounded-lg shadow-md">
        <div className="py-3 flex items-center w-full">
        <Link href="/loginstep/step5" >
        <button className="border flex items-center justify-center rounded-r-full py-2 px-3">
            <FaAngleLeft />
          </button>
          </Link>
          <div className="flex items-center w-[90%] justify-center text-base text-gray-600 font-semibold">
            <p className="pr-2">Part</p>
            <p>6</p>
            <span className="px-1">/</span>
            <p>7</p>
          </div>
        </div>

        <ProcessStep />

        <div className="flex justify-center flex-col items-center gap-1">
          <p className="text-2xl font-semibold text-dark-mmm text-center pt-2">
            You have done well!
          </p>
          <p className="text-base text-gray-600 lg:px-24 px-6 text-center">
            Before you proceed, please get familiar with how our site works.
          </p>
        </div>

        <div className="flex flex-col gap-5 overflow-y-auto h-[330px] mb-10  rounded-md mx-auto lg:mx-14  px-3 py-4 ">
          <div className="flex flex-col lg:flex-row  gap-2 justify-between lg:justify-center    ">
            <div className="flex  flex-col gap-2 ">
              <p className=" text-dark-mmm text-base">
                1. Sign up and browsing the website are free. To use some
                services like chats and mails you will need to buy credits.
              </p>
              <p className=" text-dark-mmm text-base pb-2">
                2. We provide a communication platform and cannot guarantee a
                successful romantic outcome.
              </p>
            </div>

           <div>
           <Card className="w-[200px] mx-auto aspect-square flex items-center justify-center">
              <Image
                src="/assets/images/login/avatar.jpg"
                alt="Default avatar"
                width={400}
                height={400}
                className="w-full h-full aspect-square rounded-xl mx-auto"
              />
            </Card>
           </div>
          </div>
          <div>
            <p className=" text-dark-mmm text-base">
              3. You will be connected with Top Users who are using the website
              free of charge as long as they are staying active on the platform
              and creating engaging content.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row  gap-2 justify-between lg:justify-center    ">
            <div className="flex  flex-col gap-2 ">
              <p className=" text-dark-mmm text-base">
             {`   4. Be aware of our Misconduct Prevention Policy . Let's make our
                community safe together.`}
              </p>
              <p className=" text-dark-mmm text-base pb-2">
             {`   5. We prioritize the privacy of each member. To know how your
                data is processed, please read our Privacy Policy .`}
              </p>
            </div>

            <div>
           <Card className="w-[200px] mx-auto aspect-square flex items-center justify-center">
              <Image
                src="/assets/images/login/avatar.jpg"
                alt="Default avatar"
                width={400}
                height={400}
                className="w-full h-full aspect-square rounded-xl mx-auto"
              />
            </Card>
           </div>
          </div>

          <div>
            <p className=" text-dark-mmm text-base">
              6. Remember that you may change your individual cookies
              preferences in our Cookie Policy .
            </p>
          </div>
          <div>
            <p className=" text-dark-mmm text-base">
              Read more on FAQ for Newbies .
            </p>
          </div>
        </div>

        <div className="flex  items-center border-t-2 gap-2 px-8 py-2">
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

export default Step6;
