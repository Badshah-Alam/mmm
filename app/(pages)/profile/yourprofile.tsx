"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import { TbCameraPlus } from "react-icons/tb";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineModeEdit } from "react-icons/md";
import YourProfileInput from "./yourprofileinput";


const YourProfile = () => {
  const [selectInputFiled, setSelectedInputField] = useState(true);

  return (
    <div className="">
      {selectInputFiled ? (
        <div>
          <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-0">
            <div className="w-full lg:w-[450px]">
              <div className="py-4 bg-[#fdfdfd]">
                <div className="w-full">
                  <Image
                    src="/assets/images/yourprofile/profile.png"
                    alt="profile"
                    width={450}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="px-4">
                  <Button className="w-full py-6 flex items-center justify-center gap-2">
                    <TbCameraPlus />
                    Add Profile photo
                  </Button>
                </div>
              </div>

              <div className="py-2">
                <p className="text-black font-semibold py-2">Public Photos</p>
                <div className="font-semibold w-32 h-32 flex items-center flex-col justify-center gap-4 border rounded bg-[#fdfdfd] text-[#f67704] hover:bg-[#f67704] hover:text-white">
                  <div className="bg-[#f67704] text-white font-bold text-3xl rounded-full">
                    <CiCirclePlus />
                  </div>
                  <p>Add photo</p>
                </div>
              </div>
              <div className="py-2">
                <p className="text-black font-semibold py-2">Public Photos</p>
                <div className="font-semibold w-32 h-32 flex items-center flex-col justify-center gap-4 border rounded bg-[#fdfdfd] text-[#f67704] hover:bg-[#f67704] hover:text-white">
                  <div className="bg-[#f67704] text-white font-bold text-3xl rounded-full">
                    <CiCirclePlus />
                  </div>
                  <p>Private Photos</p>
                </div>
              </div>
            </div>

            <div className="w-full space-y-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-2">
                <div>
                  <p className="text-lg font-semibold">kjdh, 86</p>

                  <div className="">
                    <p className="text-sm text-gray-700">
                      Profile ID: 105167461
                    </p>
                  </div>
                </div>
                <Button
                  className="mt-4 lg:mt-0 border  flex items-center gap-2 text-xl bg-white text-[#f67704] py-6 font-semibold hover:text-white"
                  onClick={() => setSelectedInputField(false)}
                >
                  <MdOutlineModeEdit /> Edit Profile
                </Button>
              </div>

              <div className="bg-white shadow-md rounded-md space-y-6">
                <div className="bg-[#fafafa] px-6 py-3">
                  <h2 className="text-lg font-semibold">Bio</h2>
                </div>
                <div className="space-y-6 bg-white px-6 ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-gray-700">Name</p>
                      <p className="text-sm">John Doe</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">Birthday</p>
                      <p className="text-sm">05/05/2000</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">Marital Status</p>
                      <p className="text-sm">Not Married</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 bg-[#fafafa] px-6 py-3 ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-gray-700">Country</p>
                      <p className="text-sm">United States</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">City</p>
                      <p className="text-sm">Los Angeles</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">Field of Work</p>
                      <p className="text-sm">Not Specified</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 bg-white px-6 ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-gray-700">English</p>
                      <p className="text-sm">Not Specified</p>
                    </div>
                    <div className="pb-4">
                      <p className="text-sm text-gray-700">Languages</p>
                      <p className="text-sm">Not Specified</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-md">
                <div className="bg-[#fafafa] px-4 py-2 rounded-t-md">
                  <h2 className="text-lg font-semibold text-gray-800">ABOUT</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="flex items-center  justify-start  gap-8 px-6 py-4">
                    <p className="text-sm font-medium text-gray-700 w-48">
                      Traits
                    </p>
                    <p className="text-sm text-gray-700">Not specified</p>
                  </div>
                  <div className="flex items-center  justify-start  gap-8 px-6 py-4">
                    <p className="text-sm font-medium text-gray-700 w-48">
                      Interests
                    </p>
                    <p className="text-sm text-gray-700">Not specified</p>
                  </div>
                  <div className="flex items-center  justify-start  gap-8 px-6 py-4">
                    <p className="text-sm font-medium text-gray-700 w-48">
                      Movies
                    </p>
                    <p className="text-sm text-gray-700">Not specified</p>
                  </div>
                  <div className="flex items-center  justify-start  gap-8 px-6 py-4">
                    <p className="text-sm font-medium text-gray-700 w-48">
                      Music
                    </p>
                    <p className="text-sm text-gray-700">Not specified</p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-md">
                <div className="bg-[#fafafa] px-4 py-2 rounded-t-md">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Looking for
                  </h2>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="flex items-center  justify-start  gap-8 px-6 py-4">
                    <p className="text-sm font-medium text-gray-700 w-48">
                      Goal
                    </p>
                    <p className="text-sm text-gray-700">Not specified</p>
                  </div>
                  <div className="flex items-center  justify-start  gap-8 px-6 py-4">
                    <p className="text-sm font-medium text-gray-700 w-48">
                      Age range
                    </p>
                    <p className="text-sm text-gray-700">from 18 to 90</p>
                  </div>
                  <div className="flex items-center  justify-start  gap-8 px-6 py-4">
                    <p className="text-sm font-medium text-gray-700 w-48">
                      Movies
                    </p>
                    <p className="text-sm text-gray-700">Not specified</p>
                  </div>
                  <div className="flex items-center  justify-start  gap-8 px-6 py-4">
                    <p className="text-sm font-medium text-gray-700 w-48">
                      Gender
                    </p>
                    <p className="text-sm text-gray-700">
                      I am a man looking for a woman
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-md">
                <div className="bg-[#fafafa] px-4 py-2 rounded-t-md ">
                  <h2 className="text-lg font-semibold text-gray-800">STORY</h2>
                </div>
                <div className="flex items-center  justify-start  gap-8 px-6 py-4">
                  <p className="text-sm font-medium text-gray-700 ">
                    Start typing here..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <YourProfileInput />
        </div>
      )}
    </div>
  );
};

export default YourProfile;
