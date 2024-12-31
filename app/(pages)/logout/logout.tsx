"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";


const Logout = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex justify-center h-screen items-center ">
      <div className="max-w-[504px] w-[90%] mx-auto my-8 border  rounded-lg shadow-xl shadow-slate-600">
        <div className="px-8 pt-8 bg-white rounded-t-xl">
          <p className="text-2xl font-semibold lg:tex-[24px] text-[#2b3038]  lg:mb-5 mb-4">
            Log into Match Meet & Marry
          </p>

          <div className="flex flex-col gap-y-5 max-w-[504]">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium lg:text-[16px] text-[#525252]"
              >
                Email Address:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4  py-3 border rounded-md focus:outline-none  focus:border-gray-400"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium lg:text-[16px] text-[#525252]"
              >
                Password:
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? <BiShow size={24} /> : <BiHide size={24} />}
                </button>
              </div>
            </div>
            <div className="text-center pb-5 ">
              <p className="text-[#153ca6] text-[18px] font-semibold hover:underline">
                Forgot your password?
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 ">
          <div className="">
            <Link href="/search">
              <Button className="w-full lg:text-[16px] bg-[#f77705] hover:bg-orange-600 text-white font-semibold py-6 rounded-md">
                Log in
              </Button>
            </Link>
          </div>
          <div className="flex py-3 justify-between items-center gap-2">
            <div className="w-full h-[1px] bg-gray-600"></div>
            <p className="  text-gray-500  text-sm">or</p>
            <div className="w-full h-[1px] bg-gray-600"></div>
          </div>
          <div className="py-2 mx-4">
            <button className=" w-full  flex items-center  border-2  rounded-sm  bg-blue-500 text-white border-none  ">
              <div className="bg-white m-2">
                <Image
                  className="h-full"
                  src="/assets/images/login/icon.png"
                  alt="Google Icon"
                  width={34}
                  height={34}
                />
              </div>
              <p className="flex justify-center items-center w-full">
                Sign in with Google
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Logout;
