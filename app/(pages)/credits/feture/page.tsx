


import PaidFeatures from "@/app/_components/paid-features/paid-features";
import { LiaCoinsSolid } from "react-icons/lia";
import React from "react";

import Image from "next/image";
const CreditsFeatures = () => {
  const features = [
    { icon: "👋", text: "Chat with anyone you like" },
    { icon: "🔓", text: "View hidden private content" },
    { icon: "🤩", text: "Reply with stickers in chats" },
  ];

  return (
    <div className="py-6">
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-[90%] mx-auto items-center justify-center rounded-md">
        <div className="flex flex-col items-center w-full bg-white shadow-md rounded-md space-y-6">
          <p className="text-[24px] font-bold text-[#333] pt-6 text-center">
            Get credits to unlock all features!
          </p>
          <Image src="/assets/images/credits/credit.png" width={380} height={300} alt="credit"/>

          <div className="space-y-2 text-center">
            <p className="text-[20px] text-[#333] font-bold">
              With 65 credits you can:
            </p>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-start px-2 gap-2 space-x-2"
              >
                <span className="flex justify-center items-center bg-[#fffad6] h-8 w-8 rounded-full">
                  {feature.icon}
                </span>
                <p className="text-[#525252] text-[16px]">{feature.text}</p>
              </div>
            ))}
            <div className=" flex justify-center">
            <Image src="/assets/images/credits/security.png" width={140} height={140} alt="security" className="h-8"/>

            </div>
          </div>

          <div className="w-full flex justify-center items-center py-6 border-2 relative group">
            <div className="h-12 lg:w-52 w-40 rounded-full bg-green-500 opacity-75 absolute group-hover:animate-none animate-ping mx-4"></div>
           
           
            <button className=" flex items-center justify-center gap-2 py-4 mx-4 bg-[#009e52] text-white rounded-lg w-full max-w-[336px] shadow-xl z-10 relative transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:bg-[#007f42]">
            <LiaCoinsSolid/> Get 65 Credits
            </button>
           
            
          </div>
        </div>
        <div className="w-full lg:w-[40%]">
          <PaidFeatures />
        </div>
      </div>
    </div>
  );
};

export default CreditsFeatures;

