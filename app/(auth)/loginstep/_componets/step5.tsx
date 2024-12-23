"use client";

import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { ProcessStep } from "./process-step";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const Step5 = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-[1560px] w-[90%] mx-auto py-16 flex justify-center">
      <div className="bg-white flex flex-col justify-center lg:min-w-[600px] lg:w-[600px] mx-auto rounded-lg shadow-md">
        <div className="py-3 flex items-center w-full">
        <Link href="/loginstep/step4" >
        <button className="border flex items-center justify-center rounded-r-full py-2 px-3">
            <FaAngleLeft />
          </button>
          </Link>
          <div className="flex items-center w-[90%] justify-center text-base text-gray-600 font-semibold">
            <p className="pr-2">Part</p>
            <p>5</p>
            <span className="px-1">/</span>
            <p>7</p>
          </div>
        </div>

        <ProcessStep />

        <div className="flex justify-center flex-col items-center gap-1">
          <p className="text-2xl font-semibold text-dark-mmm text-center pt-2">
            Complete your profile with a photo
          </p>
          <p className="text-base text-gray-600 lg:px-24 px-6 text-center">
           {` Profiles with photos catch more attention. Don't hesitate to upload
            yours!`}
          </p>
        </div>

        <div className="flex flex-col gap-2 overflow-y-auto h-[330px] mb-10 ">
          <div className="flex gap-2 pt-4  justify-center px-10 flex-wrap">
            <Card className="w-[200px] aspect-square flex items-center justify-center">
              {preview ? (
                <Image
                  src={preview}
                  alt="Selected preview"
                  width={400}
                  height={400}
                  className="w-full h-full rounded-xl object-cover"
                />
              ) : (
                <Image
                  src="/assets/images/login/avatar.jpg"
                  alt="Default avatar"
                  width={400}
                  height={400}
                  className="w-full h-full aspect-square rounded-xl"
                />
              )}
            </Card>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label
                htmlFor="picture"
                className="block text-sm font-medium mx-auto  w-[200px] bg-gradient-to-r  from-[#F05A8E] to-[#ED1C24] text-white  py-2 rounded cursor-pointer text-center hover:bg-blue-600"
              >
                Take a photo
              </label>
              <input
                id="picture"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          <div className="bg-smoke-mmm rounded-md mx-14 px-3 py-4">
            <p className="text-lg text-dark-mmm  text-center py-2 font-semibold">
              Rules for profile picture
            </p>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 pt-2">
                <div className="col-span-2 ">
                  <p className=" text-dark-mmm text-base">
                    01. Good quality portrait photo
                  </p>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-2">
                  <Image
                    src="/assets/images/login/good.jpg"
                    alt="Default avatar"
                    width={200}
                    height={200}
                    className="w-full h-full rounded-xl aspect-square"
                  />
                  <Image
                    src="/assets/images/login/good.jpg"
                    alt="Default avatar"
                    width={400}
                    height={400}
                    className="w-full h-full rounded-xl aspect-square"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 border-t-2 pt-2">
                <div className="col-span-2 ">
                  <p className=" text-dark-mmm text-base">
                    02. Only you are on it
                  </p>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-2">
                  <Image
                    src="/assets/images/login/car.avif"
                    alt="Default avatar"
                    width={200}
                    height={200}
                    className="w-full h-full rounded-xl aspect-square"
                  />
                  <Image
                    src="/assets/images/login/group.png"
                    alt="Default avatar"
                    width={400}
                    height={400}
                    className="w-full h-full rounded-xl aspect-square"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 border-t-2 pt-2">
                <div className="col-span-2 ">
                  <p className=" text-dark-mmm text-base">
                    02. Your face is not Covered
                  </p>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-2">
                  <Image
                    src="/assets/images/login/cover.jpeg"
                    alt="Default avatar"
                    width={200}
                    height={200}
                    className="w-full h-full rounded-xl aspect-square"
                  />
                  <Image
                    src="/assets/images/login/cover.jpeg"
                    alt="Default avatar"
                    width={400}
                    height={400}
                    className="w-full h-full rounded-xl aspect-square"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 border-t-2 pt-2">
                <div className="col-span-2 ">
                  <p className=" text-dark-mmm text-base">
                    04. You are not doing anything illicit
                  </p>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-2">
                  <Image
                    src="/assets/images/login/drink.jpg"
                    alt="Default avatar"
                    width={200}
                    height={200}
                    className="w-full h-full rounded-xl aspect-square"
                  />
                  <Image
                    src="/assets/images/login/drink.jpg"
                    alt="Default avatar"
                    width={400}
                    height={400}
                    className="w-full h-full rounded-xl aspect-square"
                  />
                </div>
           
              </div>
              <div className="col-span-4 border-t-2 pt-2">
                  <p>
                   {` Latter on, on a website, you'll have a change to upload
                    other types of photos that show your interests and make your
                    profile stand out.`}
                  </p>
                </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t-2 gap-2 px-8 py-2">
          <button className="border border-gray-300 w-[50%] px-2 py-3">
          <Link href="/loginstep/step6" className="w-full">
            Skip
            </Link>
          </button>
          <Link href="/loginstep/step6" className="w-full">
            <button className="bg-gradient-to-r w-full from-[#F05A8E] to-[#ED1C24] hover:bg-gradient-to-r hover:to-[#F05A8E] hover:from-orange-mmm text-white px-6 py-3">
              Upload photo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step5;
