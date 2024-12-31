import React from "react";
import YourCredits from "./your-credits";
import CreditsPricing from "./credits-pricing";

const Credits = () => {
  const data = [
    {
      url: "https://bestdates.com/static/img/svg/credits/mails.svg",
      name: "Respond in Email",
    },
    {
      url: "https://bestdates.com/static/img/svg/credits/chats.svg",
      name: "Message in chats",
    },
    {
      url: "https://bestdates.com/static/img/svg/credits/stickers.svg",
      name: "Reply with stickers",
    },
    {
      url: "https://bestdates.com/static/img/svg/credits/profileVideo.svg",
      name: "View profile videos",
    },
    {
      url: "https://bestdates.com/static/img/svg/credits/sendPhotos.svg",
      name: "Share media in chat",
    },
    {
      url: "https://bestdates.com/static/img/svg/credits/sendVirtualGifts.svg",
      name: "Send virtual gifts",
    },
  ];
  return (
<div>

<div className="bg-white shadow-md p-6 text-[#525252]">
  <div className="flex flex-col lg:flex-row justify-start lg:gap-20 sm:gap-10">

    {/* Left Section */}
    <div className="max-w-full lg:max-w-[320px]">
      <p className="lg:text-[24px] text-[#333] font-bold mb-4">What are credits?</p>
      <ul className="list-disc ml-5 space-y-4  text-[#525252]">
        <li className="text-[16px] ">
          Credits are the internal currency used for paid services on the site.
        </li>
        <li className="text-[16px]">
          Upon signing up, you get some credits for free. Afterward, top up your balance.
        </li>
      </ul>
    </div>

    {/* Right Section */}
    <div className="max-w-full lg:max-w-[480px]">
      <p className="lg:text-[24px] text-[#333] font-bold mb-4">Why do you need credits?</p>
      <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8  text-[#525252]">
        {data.map((Item, index) => (
          <div key={index} className="flex flex-col items-center justify-between space-y-2">
            <div className="flex justify-center items-center">
              <img
                src={Item.url}
                alt={Item.name}
                className="rounded h-auto"
              />
            </div>
            <div className="text-center">
              <p className="font-medium text-[14px]">{Item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


  <YourCredits/>
  <CreditsPricing/>

</div>
  
  
  );
};

export default Credits;
