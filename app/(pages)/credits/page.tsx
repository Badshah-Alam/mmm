

import React from "react";
import Credits from "./_components/credits";
import PaidFeatures from "@/app/_components/paid-features/paid-features";



const page = () => {

  
  return (
    <div className="max-w-[1560px] min-h-screen w-full lg:w-[90%] lg:py-4  mx-auto">
      <div className="flex justify-between items-start w-full ">
        <div className="w-full flex lg:mr-4 ">
          <Credits />
        </div>
        <div className="hidden lg:block  xl:min-w-[312px] xl:w-[312px] min-w-[280px] w-[280px]">
          <PaidFeatures />
        </div>
      </div>
    </div>
  );
};
export default page;
