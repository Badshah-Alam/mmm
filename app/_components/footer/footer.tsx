import { NavImages, NavItem } from "@/data/footer/footer";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#FFE3D1]  w-full">
      <div className="max-w-[1560px]  w-full md:w-[90%] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6   gap-y-10 lg:py-10 pt-10 pb-32">
          {/* Left Section */}
          <div className="col-span-2 text-dark-mmm lg:pr-2 xl:pr-0">
            <div className="flex flex-col justify-between gap-y-6">
              <Image
                src="/assets/images/login/logo.png"
                alt="logo"
                width={200}
                height={30}
                className="md:w-[200px] w-[150px]"
              />
              <address className="not-italic text-sm">
                <p>Bliskasoft Corp., 302 E. Carson Street, 10th floor,</p>
                <p>Las Vegas, Nevada, 89101, USA</p>
              </address>
              <div className="flex gap-4">
                {NavImages.map((item, index) => (
                  <div key={index} className="border-t-2 border-[#aeadb3] pt-4">
                    <Image
                      src={item.image}
                      alt={`Image ${index}`}
                      width={62}
                      height={32}
                      className="w-[62px] h-[40px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-4 grid md:grid-cols-2 xl:grid-cols-4  gap-y-10">
            {NavItem.map((item, index) => (
              <div key={index} className="text-dark-mmm flex flex-col gap-y-3">
                <p className="text-xl text-dark-mmm font-bold mb-2">
                  {item.navHeading}
                </p>
                {item.menuOptions.map((option, index) => (
                   
         <Link   href={option.url || "#"}  key={index}>
              
                    <p
                      
                      className="text-base font-normal text-dark-mmm leading-relaxed"
                    >
                      {option.value}
                    </p>
                
         </Link>





                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

