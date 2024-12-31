"use client";




import React, { useState } from "react";
import MailInbox from "./mail-inbox";
import MailStarRed from "./mail-starred";
import MailOutbox from "./mail-outbox";
import MailTrash from "./mail-trash";

const Mail: React.FC = () => {
  const [activeData, setActiveData] = useState(0);
  const inboxItems = ["Inbox", "Starred", "Outbox", "Trash"];
 

  return (
 
      <div className="w-full bg-white shadow h-full  ">
      <div className="flex gap-8 items-center pb-4 pt-4 ml-8">
        <h1 className="text-2xl font-semibold">Email</h1>
        <p className="text-gray-500">0 threads found</p>
      </div>

      <div className="grid grid-cols-4 lg:gap-8 justify-between border-b-2  text-[#525252]">
        {inboxItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveData(index)}
            className={`px-4 py-2 text-lg font-medium transition-colors duration-200 border-b-2 ${
              activeData === index
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-gray-700 hover:text-gray-900"
            }`}
            aria-label={`Go to ${index}`}
          >
            {item}
          </button>
        ))}
      </div>

 
      {activeData === 0 && <MailInbox />}
      {activeData === 1 && <MailStarRed />}
      {activeData === 2 && <MailOutbox />}
      {activeData === 3 && <MailTrash />}
      
    </div>

  );
};

export default Mail;
