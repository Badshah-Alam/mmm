import React, { useState } from "react";

import { FcSearch } from "react-icons/fc";

import { LuUserSearch } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const MailInbox = () => {
  const [activeDataInbox, setInboxData] = useState(0);
  const dataIinbox = ["All", "Unread", "Unanswered"];
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between gap-4 lg:gap-10 bg-[#fafafa] text-[#525252] p-6 ">
        <div className="flex gap-2 gap-y-4 flex-wrap sm:flex-nowrap items-center   justify-between">
          <div className="flex flex-nowrap items-center gap-2 ">
            <input
              type="checkbox"
              aria-label="Select All"
              className="h-5 w-5 rounded border-gray-300 focus:ring-2 focus:ring-[#f77705] text-white checked:bg-[#f77705] checked:border-[#f77705]"
            />
            <span className="font-medium text-nowrap text-gray-700">
              Select All
            </span>
          </div>
          <div className="flex gap-2">
            {dataIinbox.map((item, index) => (
              <div key={index} className="">
                <Button
                  variant="dark"
                  size="secondary"
                  className={`border rounded hover:bg-black hover:text-white ${
                    activeDataInbox === index ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setInboxData(index)}
                >
                  {item}
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <Button
            variant="dark"
            size="secondary"
            className="px-4 py-2 text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white"
          >
            Delete selected
          </Button>
          <Select>
            <SelectTrigger className="lg:w-[180px] border border-r-2 rounded font-medium hover:bg-black hover:text-white">
              <SelectValue placeholder="More actions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dark">Mark as Read</SelectItem>
              <SelectItem value="system">Mark as New</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        {activeDataInbox === 0 && (
          <div className="flex flex-col min-h-screen justify-center items-center text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <FcSearch className="text-7xl" />
            </div>
            <h2 className="mt-4 py-25 text-xl  font-bold">
              You have no Letters in your Inbox
            </h2>
            <p className="text-gray-500">{`Let's change that!`}</p>
            <div className="mt-4 flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 cursor-pointer">
              <p>Go to search</p>
              <LuUserSearch />
            </div>
          </div>
        )}
      </div>
      <div>
        {activeDataInbox === 1 && (
          <div className="flex flex-col min-h-screen justify-center items-center text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <FcSearch className="text-7xl" />
            </div>
            <h2 className="mt-4 py-25 text-xl  font-bold">
              You have no Letters in your Inbox
            </h2>
            <p className="text-gray-500">{`Let's change that!`}</p>
            <div className="mt-4 flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 cursor-pointer">
              <p>Go to search</p>
              <LuUserSearch />
            </div>
          </div>
        )}
      </div>
      <div>
        {activeDataInbox === 2 && (
          <div className="flex flex-col min-h-screen justify-center items-center text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <FcSearch className="text-7xl" />
            </div>
            <h2 className="mt-4 py-25 text-xl  font-bold">
              You have no Letters in your Inbox
            </h2>
            <p className="text-gray-500">{`Let's change that!`}</p>
            <div className="mt-4 flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 cursor-pointer">
              <p>Go to search</p>
              <LuUserSearch />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MailInbox;