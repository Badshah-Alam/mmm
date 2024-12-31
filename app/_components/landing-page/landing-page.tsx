import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const LandingPage: React.FC<{ handleScrollToForm: () => void }> = ({ handleScrollToForm }) => {


  return (
    <div className="lg:min-h-screen  bg-[url('/assets/images/login/imgpsh_fullsize_anim.png')]  bg-cover bg-center ">
      <div className="p-10">
        <Image
          src="/assets/images/login/logo.png"
          alt="logo"
          width={200}
          height={30}
          className="md:w-[200px] w-[150px] md:h-[70px] bg-white "
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-5 lg:h-screen h-[500px] ">
        <h1 className="text-white text-2xl md:text-5xl font-bold uppercase">
          MEMBERS ON Match Meet & Marry
        </h1>
        <p className="text-white text-base md:text-2xl font-semibold uppercase">
          Believe in Strong Connections Online
        </p>
        <button onClick={handleScrollToForm} className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white py-2 px-4 rounded-full uppercase">
          Join for free
        </button>
        <Link href="/login">
          <button className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24]  text-white py-2 px-4 rounded-full uppercase">
            Login
          </button>
        </Link>
      </div>
      <button onClick={handleScrollToForm} className="flex flex-col items-center pb-1 justify-center mx-auto ">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05A8E] to-[#ffffff]  text-base font-bold ">
          scroll Down
        </p>
        <FaArrowDownLong className="text-white  text-2xl  " />
      </button >
    </div>
  );
};

export default LandingPage;
