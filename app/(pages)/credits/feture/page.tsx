


import PaidFeatures from "@/app/_components/paid-features/paid-features";
import { Button } from "@/components/ui/button";
import React from "react";

const CreditsFeatures = () => {
  const features = [
    { icon: "👋", text: "Chat with anyone you like" },
    { icon: "🔓", text: "View hidden private content" },
    { icon: "🤩", text: "Reply with stickers in chats" },
  ];

  return (
    <div className="py-6 ">
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-[80%] mx-auto items-center justify-center rounded-md">
        <div className="flex flex-col items-center w-full  bg-white shadow-md rounded-md p-6 space-y-6">
          <p className="text-[24px] font-bold text-[#333] text-center">
            Get credits to unlock all features!
          </p>
          <img
            src="/assets/images/credits-img/img-credits.png"
            alt="Unlock premium features with credits"
            className="w-full max-w-[300px] h-auto"
          />
          <div className="space-y-4 text-center">
            <p className="text-[20px] text-[#333] font-bold">
              With 65 credits you can:
            </p>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2"
              >
                <span className="text-[24px]">{feature.icon}</span>
                <p className="text-[#525252] text-[16px]">{feature.text}</p>
              </div>
            ))}
            <div className="py-4">
              <img
                className="w-[120px] h-auto mx-auto"
                src="https://bestdates.com/static/img/securityChecks.a2d04d29.png"
                alt="Security checks"
              />
            </div>
          </div>
          <Button
            variant="dark"
            size="secondary"
            className="py-4 px-8 bg-green-800 text-white rounded w-full max-w-[200px]"
          >
            Get 65 Credits
          </Button>
        </div>
        <div className="">
          <PaidFeatures />
        </div>
      </div>
    </div>
  );
};

export default CreditsFeatures;
