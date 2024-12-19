import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,

  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import JoinDetails from "./join-details";
const LandingForm = () => {
  return (
    <div className="bg-smoke-mmm lg:w-full py-10 lg:py-0 w-[96%] mx-auto ">
      <div className="flex flex-col lg:flex-row justify-center items-start w-full gap-y-10 lg:gap-x-10 p-0 lg:p-24 ">
        <div className="">
            <JoinDetails/>
        </div>
       <div className="lg:min-w-[450px] lg:max-w-[450px] flex flex-col justify-center items-center gap-4 ">
       <div className="w-full bg-white rounded-xl shadow-xl md:p-6 p-4 ">
        <form action="">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-red-500 text-md font-semibold">
              It’s free to join!
            </p>
          </div>
            <Select>
              <SelectTrigger className="w-full border-b-2 text-base hover:border-red-600 font-semibold rounded-none p-0 shadow-none  focus:ring-0  focus:outline-none">
                <SelectValue
                  className="text-base text-gray-500"
                  placeholder="Select your gender preference"
                />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1" className="text-base">
                    I am a man looking for a woman
                  </SelectItem>
                  <SelectItem value="2" className="text-base">
                    {" "}
                    I am a man looking for a man
                  </SelectItem>
                  <SelectItem value="3" className="text-base">
                    I am a man looking for everyone
                  </SelectItem>
                  <SelectItem value="4" className="text-base">
                    I am a man looking for everyone
                  </SelectItem>
                  <SelectItem value="5" className="text-base">
                    I am a woman looking for a man
                  </SelectItem>
                  <SelectItem value="6" className="text-base">
                    I am a woman looking for everyone
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <div>
              <p>Name:</p>
              <input
                type="text"
                placeholder="Enter Your name"
                className="w-full placeholder:text-base py-1 border-b-2 text-base hover:border-red-600 font-semibold rounded-none p-0 shadow-none  focus:ring-0  focus:outline-none"
              />
            </div>

            <div className="flex  gap-2">
              <Select>
                <SelectTrigger className="w-full border-b-2 text-base hover:border-red-600 font-semibold rounded-none p-0 shadow-none  focus:ring-0  focus:outline-none">
                  <SelectValue
                    className="text-base text-gray-500"
                    placeholder="Month"
                  />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1" className="text-base">
                      January
                    </SelectItem>
                    <SelectItem value="2" className="text-base">
                      February
                    </SelectItem>
                    <SelectItem value="3" className="text-base">
                      March
                    </SelectItem>
                    <SelectItem value="4" className="text-base">
                      April
                    </SelectItem>
                    <SelectItem value="5" className="text-base">
                      May
                    </SelectItem>
                    <SelectItem value="6" className="text-base">
                      June
                    </SelectItem>
                    <SelectItem value="7" className="text-base">
                      July
                    </SelectItem>
                    <SelectItem value="8" className="text-base">
                      August
                    </SelectItem>
                    <SelectItem value="9" className="text-base">
                      September
                    </SelectItem>
                    <SelectItem value="10" className="text-base">
                      October
                    </SelectItem>
                    <SelectItem value="11" className="text-base">
                      November
                    </SelectItem>
                    <SelectItem value="12" className="text-base">
                      December
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full border-b-2 text-base hover:border-red-600 font-semibold rounded-none p-0 shadow-none  focus:ring-0  focus:outline-none">
                  <SelectValue
                    className="text-base text-gray-500"
                    placeholder="Day"
                  />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1" className="text-base">
                      Sunday
                    </SelectItem>
                    <SelectItem value="2" className="text-base">
                      Monday
                    </SelectItem>
                    <SelectItem value="3" className="text-base">
                      Tuesday
                    </SelectItem>
                    <SelectItem value="4" className="text-base">
                      Wednesday
                    </SelectItem>
                    <SelectItem value="5" className="text-base">
                      Thursday
                    </SelectItem>
                    <SelectItem value="6" className="text-base">
                      Friday
                    </SelectItem>
                    <SelectItem value="7" className="text-base">
                      Saturday
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full border-b-2 text-base hover:border-red-600 font-semibold rounded-none p-0 shadow-none  focus:ring-0  focus:outline-none">
                  <SelectValue
                    className="text-base text-gray-500"
                    placeholder="Year"
                  />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="2020" className="text-base">
                    2020
                  </SelectItem>
                  <SelectItem value="2021" className="text-base">
                    2021
                  </SelectItem>
                  <SelectItem value="2022" className="text-base">
                    2022
                  </SelectItem>
                  <SelectItem value="2023" className="text-base">
                    2023
                  </SelectItem>
                  <SelectItem value="2024" className="text-base">
                    2024
                  </SelectItem>
                  <SelectItem value="2025" className="text-base">
                    2025
                  </SelectItem>
                  <SelectItem value="2026" className="text-base">
                    2026
                  </SelectItem>
                  <SelectItem value="2027" className="text-base">
                    2027
                  </SelectItem>
                  <SelectItem value="2028" className="text-base">
                    2028
                  </SelectItem>
                  <SelectItem value="2029" className="text-base">
                    2029
                  </SelectItem>
                  <SelectItem value="2030" className="text-base">
                    2030
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <p>Email:</p>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full placeholder:text-base py-1 border-b-2 text-base hover:border-red-600 font-semibold rounded-none p-0 shadow-none  focus:ring-0  focus:outline-none"
              />
            </div>

            <div>
              <p>password:</p>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full placeholder:text-base py-1 border-b-2 text-base hover:border-red-600 font-semibold rounded-none p-0 shadow-none  focus:ring-0  focus:outline-none"
              />
            </div>
            <div className="flex items-start gap-3">
                <input  type="checkbox" className='pt-1 w-10 h-10'/>
                <p className="text-base underline">I have read, understand and agree to Terms of Use, Privacy Policy, Payment and Refund Policy, Misconduct Prevention Policy.</p>
            </div>
            <button className="text-xl w-full py-3 bg-red-600 text-white font-semibold text-center rounded-md">Register</button>
          </div>
        </form>
        
        </div>

        <div className="bg-white rounded-xl p-5 shadow-xl">
            <p className="text-xs text-center">You affirm that you are at least 18 years of age or the age of majority in the jurisdiction you are accessing BestDates from, and are fully able and competent to enter BestDates and comply with the BestDates Terms of Use & Service.</p>
         </div>
       </div>
      </div>
    </div>
  );
};

export default LandingForm;
