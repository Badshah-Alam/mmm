import Image from "next/image";
import React from "react";

const NavbarThird = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#ffffff] shadow-md">
      <div className="max-w-[1560px]  w-[90%] mx-auto flex justify-center items-center ">
        <Image
          src="/assets/images/login/logo.png"
          alt="logo"
          width={200}
          height={30}
          className="md:w-[200px] w-[150px]"
        />
      </div>
    </div>
  );
};

export default NavbarThird;
