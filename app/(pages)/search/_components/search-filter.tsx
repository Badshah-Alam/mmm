"use client";


import * as React from "react";
import { GrPowerReset } from "react-icons/gr";

import {
  Dialog,
  DialogContent,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AiOutlineMenuFold } from "react-icons/ai";

const SearchFilter = () => {
  return (
    <div className="">
      <div className=" ">
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex gap-x-1 items-center cursor-pointer text-[#F77705] ">
              filter
              <AiOutlineMenuFold className="text-2xl" />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] p-6">
            <DialogHeader>
              <DialogTitle className="text-xl  font-semibold text-[#333] lg:text-[20px]">
              
                Search Filters
              </DialogTitle>
            </DialogHeader>
            <div>
              <form>
                <div className="mb-4">
                  <label className="block text-[#525252] mb-2 font-medium">
                    From
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>United States</SelectLabel>
                        <SelectItem value="United_States">
                          United States
                        </SelectItem>
                        <SelectItem value="united_kingdom">
                          United Kingdom
                        </SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="canada">Australia</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <p className=" text-[#525252] mb-2 font-medium">Age </p>

                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <Select>
                        <SelectTrigger className="w-full  px-8">
                          <SelectValue placeholder="Form" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Age</SelectLabel>
                            {[...Array(73)].map((_, i) => (
                              <SelectItem key={i} value={`${i + 18}`}>
                                {i + 18}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="">
                      <p className=" text-[#525252]  text-center ">
                        To
                      </p>
                    </div>

                    <div>
                      <Select>
                        <SelectTrigger className="w-full  px-8">
                          <SelectValue placeholder="To" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Age</SelectLabel>
                            {[...Array(73)].map((_, i) => (
                              <SelectItem key={i} value={`${i + 18}`}>
                                {i + 18}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-[#525252] mb-2 font-medium">
                     {` I'm looking for`}
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Preferences</SelectLabel>
                          <SelectItem value="man-woman">
                            I am a man looking for a woman
                          </SelectItem>
                          <SelectItem value="woman-man">
                            I am looking for every one
                          </SelectItem>
                          <SelectItem value="woman-man">
                            I am a woman looking for a man
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                  <Button className="flex items-center justify-center gap-2 w-full  border bg-white font-semibold text-[#f77705] hover:text-white  py-6">
                    Reset
                    <GrPowerReset className=" text-center" />
                  </Button>
                  <Button className="w-full py-6">Show People</Button>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SearchFilter;
