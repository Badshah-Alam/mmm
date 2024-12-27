"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { MdEdit, MdOutlineEmail } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdOutlineDoneOutline } from "react-icons/md";
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";

import EditEmailFrom from "./editemail";

import EditPasswordFrom from "./editpassword";

const SettingsPage = () => {
  const [editEmail, setEditEmail] = useState(true);
  const [changeEmail, setChangeEmail] = useState(true);
  const [editPassword, setEditPassword] = useState(true);
  const [savedSound, setSavedSound] = useState(false);

  const [isToggled, setIsToggled] = useState(false);

  const [sendRequest, setSendRequest] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  const handleEditPassword = () => {
    setEditPassword(false);
  };

  const handleChangeEmail = () => {
    setChangeEmail(false);
  };

  return (
    <div className="sm:py-4 bg-[#ffffff] pt-4">
      {/* Header Section */}
      <div className="flex items-center justify-between px-6 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <Button className="sm:px-6 sm:py-6 border py-4  border-red-500 text-red-500 mx-2 bg-white hover:bg-red-500 hover:text-white">
          Deactivate My Account
        </Button>
      </div>

      {/* Account Settings Section */}
      <div className="px-6 sm:py-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-700 sm:mb-4 mb-2">
          Account Settings
        </h2>

        {/* Email Display */}

        <div className="sm:mb-6 mb-3">
          <p className=" text-lg font-semibold mb-2">Current email:</p>
          <div className={`flex   gap-4 ${editEmail ? "" : "flex flex-col"}`}>
            <p className="text-gray-800">king@aol.com</p>

            {editEmail ? (
              <div>
                <button
                  className="flex items-center text-[#f67704] hover:underline text-lg font-semibold"
                  onClick={() => setEditEmail(false)}
                >
                  Edit <MdEdit className="ml-2" />
                </button>
              </div>
            ) : (
              <div>
                <EditEmailFrom />
              </div>
            )}
          </div>
        </div>
        {editEmail ? (
          <div className="mb-6">
            {changeEmail ? (
              <div className="flex items-center justify-between bg-[#fef4ea] py-2 px-2 rounded-sm mt-2">
                <p className="text-sm  text-gray-600 mt-2">
                  Your email is invalid. Change it to receive crucial updates
                  and reset your password effortlessly.
                </p>
                <Button
                  className="flex items-center bg-[#f67704] py-6  text-lg font-semibold mx-2"
                  onClick={handleChangeEmail}
                >
                  Change Email <MdOutlineEmail className="" />
                </Button>
              </div>
            ) : (
              <EditEmailFrom />
            )}
          </div>
        ) : null}

        {/* Password Section */}
        <div className="sm:mb-6 mb-4">
          <p className=" text-lg font-semibold mb-2">Password:</p>
          <div
            className={` flex gap-4 } ${editPassword ? "" : "flex flex-col"}`}
          >
            <p className="text-gray-800">****************</p>
            {editPassword ? (
              <button
                className="flex items-center text-[#f67704] hover:underline text-lg font-semibold"
                onClick={handleEditPassword}
              >
                Edit <MdEdit className="ml-2" />
              </button>
            ) : (
              <EditPasswordFrom />
            )}
          </div>
        </div>

        {/* Sound Settings Section */}
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold text-gray-700   mb-4">
              Sound Settings
            </p>
            {savedSound ? (
              <p className="items-center flex text-lg font-semibold gap-2 mb-4 text-green-700">
                <MdOutlineDoneOutline /> Saved
              </p>
            ) : null}
          </div>
          <div className="flex flex-col sm:gap-4 gap-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="sound"
                value="enabled"
                className="lg:w-5 lg:h-5 accent-orange-500 border-white"
                onClick={() => setSavedSound(true)}
              />
              <span className="text-gray-800">Enabled</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="sound"
                value="disabled"
                className="lg:w-5 lg:h-5 accent-orange-500 border-white"
                onClick={() => setSavedSound(true)}
              />
              <span className="text-gray-800">Disabled</span>
            </label>
          </div>
        </div>
        <div className="border-t sm:py-4 py-2">
          <p className="text-lg font-semibold">Email Notifications</p>
          <div className="flex items-center justify-between px-4 mt-2 bg-[#fafafa] sm:w-96">
            <div className="sm:py-4 py-2 ">
              <p className="  text-base font-semibold">Receive notifications</p>
            </div>
            <div
              className="cursor-pointer flex items-center ml-4"
              onClick={handleToggle}
            >
              {isToggled ? (
                <div className="flex items-center space-x-2">
                  <FaToggleOn className="text-[#f67704]" size={32} />
                  <p className=" text-gray-400 font-medium">On</p>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <FaToggleOff className="text-gray-400" size={32} />
                  <p className="text-gray-400 font-medium">Off</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 sm:pt-4 pt-2">
        <p>DSR</p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Access my information</AccordionTrigger>
            <AccordionContent>
              <p>
                Contact our Support Team to ask for your personal information we
                process.
              </p>
              <p>
                We may send you an update by email about the progress of your
                request, and we will contact you if we need further information
                to help us to provide you with data that we may be processing
                about you.{" "}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Your request has been sent successfully. Our customer support
                will contact you via email king@aol.com within 24 hours.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Correct or update my information
            </AccordionTrigger>
            <AccordionContent>
              To correct inaccurate or incomplete personal information about
              you, go to your <span className="text-[#104482]">Profile</span> .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Restrict use of my information</AccordionTrigger>
            <AccordionContent>
              <p>
                You have the right to restrict processing in limited
                circumstances, which means you can request that processing is
                stopped while the data is retained. We can continue to store
                your data and process only what is necessary to identify the
                restriction on processing the rest.
              </p>
              <p>
                For example, we could store your name and email address to
                verify prior consent, allowing us to deny a service request on
                the grounds that you hadn<code>&apos;</code>t previously agreed
                to us providing it.
              </p>
              <p>
                If you inform us of incorrect data held about you, we will
                restrict processing until the inaccuracies are corrected or
                confirmed as accurate. You can do this in your{" "}
                <span className="text-lg font-semibold text-[#104482]">
                  Profile
                </span>{" "}
                or contact Support.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Who has received my information</AccordionTrigger>
            <AccordionContent>
              <p>
                For more information, please check out the{" "}
                <span className="text-lg font-semibold text-[#104482]">
                  “Sharing your personal data”
                </span>
                section in our Privacy Policy.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Don’t sell my personal info</AccordionTrigger>
            <AccordionContent>
              <div>
                <p>
                  This form is intended for use by: 1) California residents who
                  wish to opt out of the “sale” of their personal information
                  pursuant to the California Consumer Privacy Act (CCPA), 2)
                  Nevada consumers making requests under Nevada Senate Bill 220,
                  3) Virginia consumers making requests under the Virginia
                  Consumer Data Protection Act.
                </p>
              </div>
              <div className="py-2">
                <Button
                  onClick={() => setSendRequest(true)}
                  className={`py-6 px-6 bg-[#f6b781]`}
                >
                  Request sent
                </Button>
              </div>

              {sendRequest && (
                <p className="text-gray-500 text-sm">
                  {" "}
                  Your request has been sent successfully. Our customer support
                  will contact you via email king@aol.com within 24 hours.
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Opt-out or unsubscribe</AccordionTrigger>
            <AccordionContent>
              <p>
                Opt-out or object to our use of your personal information,
                whether it<code>&apos;</code>s based on your consent or our
                legitimate interests. You also have the option to opt-out of our
                use of your personal information that we<code>&apos;</code>ve
                either made available or disclosed to third parties for
                advertising purposes. To unsubscribe from email notifications or
                adjust their frequency, head to the{" "}
                <span className=" text-lg font-semibold text-[#104482]">
                  {" "}
                  Email Notifications
                </span>{" "}
                sector.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Delete my information</AccordionTrigger>
            <AccordionContent>
              <div className="py-2">
                <p>
                  You can delete personal information we<code>&apos;</code>ve
                  collected from you.
                </p>
              </div>
              <div className="py-2">
                <Button className="px-6 py-6 border border-red-500 text-red-500 bg-white hover:bg-red-500 hover:text-white">
                  Deactivate My Account
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SettingsPage;
