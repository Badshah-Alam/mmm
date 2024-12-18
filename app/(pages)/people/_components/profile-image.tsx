import { ProfileImg } from "@/data/profile/profile";
import Image from "next/image";

import React from "react";
import { FaRegEyeSlash } from "react-icons/fa";

const ProfileImage = () => {
  return (
    <div className="xl:w-[400px] mx-auto">
      {/* public photo  */}
      <div className="mt-3">
        <p className="text-base uppercase font-semibold">Public Photos</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
          {ProfileImg.map((img, index) => (
            <Image
              key={index}
              src={img.image}
              width={100}
              height={100}
              className="w-full h-full aspect-square object-cover"
              alt={`search-image-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-3">
        <p className="text-base uppercase font-semibold">Private Photos</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
          {ProfileImg.slice(0, 3).map((img, index) => (
            <div className="relative" key={index}>
              <Image
                src={img.image}
                width={100}
                height={100}
                className="w-full h-full aspect-square object-cover blur-sm"
                alt={`search-image-${index}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <p className="   absolute inset-0 uppercase flex items-center gap-2 justify-center text-white font-bold text-xl">
                <FaRegEyeSlash className="text-xl" />
                Private
              </p>
            </div>
          ))}
        
        </div>
      </div>
      <p className="mt-3 text-base text-dark-mmm">* Viewing one video costs 50 credits</p>
    </div>
  );
};

export default ProfileImage;
