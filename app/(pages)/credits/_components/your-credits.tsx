import { Button } from "@/components/ui/button";

import React from "react";

const YourCredits = () => {
  return (
    <div className="bg-white shadow-md mt-4  ">
      <p className="text-2xl font-semibold mb-6 px-6 pt-6">Your Credits</p>
      <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 py-4">
          <div className="py-4 lg:py-6  text-center bg-smoke-mmm">
            <p className="lg:py-6 font-semibold text-[#262626] llg:text-[20px] ">
              Complimentary
            </p>
            <p className=" lg:py-6 sm:py-2 font-medium text-[#f77705] text-[46px]">20</p>
            <p className="lg:py-6  sm:py-2 lg:text-[18px] mt-2 px-6">
              Credits you get as your Welcome Credits or with a special offer.
            </p>
          </div>

          <div className="py-4 lg:py-6  text-center bg-smoke-mmm">
            <p className="lg:py-6  font-semibold text-[#262626] lg:text-[20px]">
              Purchased
            </p>
            <p className=" lg:py-6 sm:py-2 font-medium text-[#f77705] text-[46px] ">0</p>
            <p className="lg:py-6  sm:py-2 lg:text-[18px] mt-2 px-6 ">
              Credits you additionally purchase and can use anytime.
            </p>
            <div className="bg-[#f5f5f5]">
              <Button
                variant="dark"
                size="secondary"
                className="mt-4 py-6 lg:w-[232px] bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                <a href="http://localhost:3000/credits/feture">Get Credits</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default YourCredits;
