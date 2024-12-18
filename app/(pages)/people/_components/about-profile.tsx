import { SearchImg } from "@/data/search/search";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaGlobeAmericas } from "react-icons/fa";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { PiBagSimpleFill, PiListHeartFill } from "react-icons/pi";
import { TbMoodBoy } from "react-icons/tb";

const AboutProfile = () => {
  const [isshow, setIsshow] = useState(false);
  const pathname = usePathname();
  const chartid = parseInt(pathname.split("/")[2], 10);
  const chartData = SearchImg[chartid] || SearchImg[1];
  if (!chartData) {
    return <div>Chart not found!</div>;
  }
  return (
    <div>
      <div className="py-5 bg-gradient-to-b from-[#DFDFDF] to-smoke-mmm rounded-2xl flex px-4 flex-wrap gap-4  items-center w-full text-lg text-bold  text-[#676767]">
        <div className="flex items-center gap-1 bg-gradient-to-b from-[#DFDFDF] to-smoke-mmm shadow-lg border-[2px] px-3 rounded-full ">
          <FaGlobeAmericas />
          <p>{chartData.location}</p>
        </div>
        <div className="flex items-center gap-1 bg-gradient-to-b from-[#DFDFDF] to-smoke-mmm shadow-lg border-[2px] px-3 rounded-full ">
          <LiaBirthdayCakeSolid />
          <p>{chartData.dob}</p>
        </div>
        <div className="flex items-center gap-1 bg-gradient-to-b from-[#DFDFDF] to-smoke-mmm shadow-lg border-[2px] px-3 rounded-full ">
          <TbMoodBoy />
          <p>{chartData.relationship}</p>
        </div>
        <div className="flex items-center gap-1 bg-gradient-to-b from-[#DFDFDF] to-smoke-mmm shadow-lg border-[2px] px-3 rounded-full ">
          <PiBagSimpleFill />
          <p>{chartData.occupation}</p>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-y-3 mt-3 shadow-lg px-4 py-2 rounded-lg">
        <div className="flex gap-1   items-center text-[#333333]">
          <BsStars className="text-xl" />
          <p className="text-xl font-semibold">Interests</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {chartData.interests.map((item, index) => (
            <div
              key={index}
              className=" text-[#333333] bg-[#F5F5F5] px-4 py-1 rounded-lg"
            >
              <p className="text-sm font-semibold">{item.interest}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white flex flex-col gap-y-3 mt-3 shadow-lg px-4 py-2 rounded-lg">
        <div className="flex gap-1   items-center text-[#333333]">
          <PiListHeartFill className="text-xl" />
          <p className="text-xl font-semibold">Looking For</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {chartData.Looking.map((item, index) => (
            <div
              key={index}
              className=" text-[#333333] bg-[#F5F5F5] px-4 py-1 rounded-lg"
            >
              <p className="text-sm font-semibold">{item.Looking}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white flex flex-col gap-y-3 mt-3 shadow-lg px-4 py-2 rounded-lg">
        <div className="flex gap-1   items-center text-[#333333]">
          <CgProfile className="text-xl" />
          <p className="text-xl font-semibold">About Me</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {chartData.About.map((item, index) => (
            <div
              key={index}
              className=" text-[#333333] bg-[#F5F5F5] px-4 py-1 rounded-lg"
            >
              <p className="text-sm font-semibold">{item.About}</p>
            </div>
          ))}
        </div>

        <div>
          <p>
            {isshow
              ? chartData.AboutDescription
              : `${chartData.AboutDescription.slice(0, 200)}...`}{" "}
            <button onClick={() => setIsshow(!isshow)}>
              {isshow ? (
                <p className="text-[#DA6A05] font-medium text-base underline">
                  Show Less
                </p>
              ) : (
                <p className="text-[#DA6A05] font-medium text-base underline">
                  Show More
                </p>
              )}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
