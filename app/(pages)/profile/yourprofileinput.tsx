"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import { TbCameraPlus } from "react-icons/tb";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineModeEdit } from "react-icons/md";
import { DualRangeSlider } from "@/components/ui/expension/dual-range-slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import { interestsData, lookingForData, moviesData, traitsData } from "./data";
import { formSchema } from ".";
import { FormErrors, ProfileFormData } from "./type";


// type FormData = z.infer<typeof formSchema>;
const YourProfileInput = () => {
  const [values, setValues] = useState([18, 100]);
  const [from, setFrom] = useState(18);
  const [to, setTo] = useState(100);

  const [formData, setFormData] = useState<ProfileFormData>({
    name: "",

    month: "",
    day: "",
    year: "",

    country: "",
    city: "",
    englishLevel: "",
    languages: "",
    maritalStatus: "",
    fieldOfWork: "",
    traits: [],
    interests: [],
    movies: [],
    music: [],
    lookingFor: [],
    ageRange: [18, 100],
    gender: "",
    personality: "",
    story: "",
  });

  // const [errors, setErrors] = useState<{
  //   [key in keyof ProfileFormData]?: string;
  // }>({});

  const [errors, setErrors] = useState<FormErrors>({
    name: "Name is required",
    month: "Month is required",
    day: "Day is required",
    year: "Year is required",
    country: "Country is required",
    city: "City is required",
    englishLevel: "English level is required",
    languages: "Languages are required",
    maritalStatus: "Marital status is required",
    fieldOfWork: "Field of work is required",
    traits: "You can select up to 3 traits",
    interests: "You can select up to 5 interests",
    movies: "You can select up to 3 movies",
    music: "You can select up to 3 music genres",
    lookingFor: "You can select up to 3 goals",
    ageRange: "Age range is required",
    gender: "Gender is required",
    personality: "Personality is required",
  });
  // Range to select

  const [selecttraits, setTraits] = useState<string[]>([]);
  const [selectInterest, setSelectIntrest] = useState<string[]>([]);
  const [selectedRange, setSelectedRange] = useState<string[]>([]);
  const [selectedMovies, setSelectedMovies] = useState<string[]>([]);
  const [selectedMusic, setSelectedMusic] = useState<string[]>([]);

  const handleSelectMusic = (music: string) => {
    if (selectedMusic.includes(music)) {
      setSelectedMusic((prev) => prev.filter((item) => item !== music));
    } else if (selectedMusic.length < 3) {
      setSelectedMusic((prev) => [...prev, music]);
    } else {
      alert("You can only select up to 3 items.");
    }
  };

  const handleSelectMovie = (movie: string) => {
    if (selectedMovies.includes(movie)) {
      setSelectedMovies((prev) => prev.filter((item) => item !== movie));
    } else if (selectedMovies.length < 3) {
      setSelectedMovies((prev) => [...prev, movie]);
    } else {
      alert("You can only select up to 3 items.");
    }
  };

  const handleSelectInterest = (interest: string) => {
    if (selectInterest.includes(interest)) {
      setSelectIntrest((prev) => prev.filter((item) => item !== interest));
    } else if (selectInterest.length < 5) {
      setSelectIntrest((prev) => [...prev, interest]);
    } else {
      alert("You can only select up to 5 items.");
    }
  };

  const handleTraitSelect = (trait: string) => {
    if (selecttraits.includes(trait)) {
      setTraits((prev) => prev.filter((item) => item !== trait));
    } else if (selecttraits.length < 3) {
      setTraits((prev) => [...prev, trait]);
    } else {
      alert("You can only select up to 5 items.");
    }
  };

  const handleSelect = (goal: string) => {
    if (selectedRange.includes(goal)) {
      setSelectedRange((prev) => prev.filter((item) => item !== goal));
    } else if (selectedRange.length < 3) {
      setSelectedRange((prev) => [...prev, goal]);
    } else {
      alert("You can only select up to 3 items.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form data using Zod
    const result = formSchema.safeParse(formData);
    if (result.success) {
      console.log("Form Data:", formData);
      setErrors({});
    } else {
      const newErrors: { [key in keyof ProfileFormData]?: string } = {};
      result.error.errors.forEach((err) => {
        const path = err.path[0] as keyof ProfileFormData;
        newErrors[path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  // Update dropdowns when the slider changes
  const handleSliderChange = (newValues: number[]) => {
    setValues(newValues);
    setFrom(newValues[0]);
    setTo(newValues[1]);
  };

  // const handleFromChange = (value: number | string) => {
  //   const newValue = parseInt(value, 10);
  //   setFrom(newValue);
  //   setValues([newValue, Math.max(newValue, values[1])]);
  // };

  // const handleToChange = (value: any) => {
  //   const newValue = parseInt(value, 10);
  //   setTo(newValue);
  //   setValues([Math.min(newValue, values[0]), newValue]);
  // };

  const handleFromChange = (value: number | string): void => {
    const newValue = parseInt(value.toString(), 10); // Ensure value is converted to string for parsing
    setFrom(newValue);
    setValues([newValue, Math.max(newValue, values[1])]);
  };
  
  const handleToChange = (value: number | string): void => {
    const newValue = parseInt(value.toString(), 10); // Ensure value is converted to string for parsing
    setTo(newValue);
    setValues([Math.min(newValue, values[0]), newValue]);
  };
  
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-0">
        <div className="w-full lg:w-[450px]">
          <div className="py-4 bg-[#fdfdfd]">
            <div className="w-full">
              <Image
                src="/assets/images/yourprofile/profile.png"
                alt="profile"
                width={450}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="px-4">
              <Button className="w-full py-6 flex items-center justify-center gap-2">
                <TbCameraPlus />
                Add Profile photo
              </Button>
            </div>
          </div>
          <div className="py-2">
            <p className="text-black font-semibold py-2">Public Photos</p>
            <div className="font-semibold w-32 h-32 flex items-center flex-col justify-center gap-4 border rounded bg-[#fdfdfd] text-[#f67704] hover:bg-[#f67704] hover:text-white">
              <div className="bg-[#f67704] text-white font-bold text-3xl rounded-full">
                <CiCirclePlus />
              </div>
              <p>Add photo</p>
            </div>
          </div>
          <div className="py-2">
            <p className="text-black font-semibold py-2">Public Photos</p>
            <div className="font-semibold w-32 h-32 flex items-center flex-col justify-center gap-4 border rounded bg-[#fdfdfd] text-[#f67704] hover:bg-[#f67704] hover:text-white">
              <div className="bg-[#f67704] text-white font-bold text-3xl rounded-full">
                <CiCirclePlus />
              </div>
              <p>Private Photos</p>
            </div>
          </div>
        </div>
        <div className="w-full space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-2">
            <div>
              <p className="text-lg font-semibold">kjdh, 86</p>

              <div className="">
                <p className="text-sm text-gray-700">Profile ID: 498272309</p>
              </div>
            </div>
            <Button className="mt-4 lg:mt-0 border  flex items-center gap-2 text-xl bg-white text-[#f67704] py-6 font-semibold hover:text-white">
              <MdOutlineModeEdit /> Edit Profile
            </Button>
          </div>
          <form action="">
            <div className="bg-white shadow-md rounded-md">
              {/* Header Section */}
              <div className="bg-[#fafafa] border-gray-300 px-6 py-3">
                <h2 className="text-lg font-semibold">Bio</h2>
              </div>

              {/* Form Sections */}
              <div className="divide-y divide-gray-100">
                {/* Section 1: Name and Birthday */}
                <div className="space-y-6 bg-white px-6 py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-gray-700  mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className=" w-full p-2 border border-gray-300 rounded-md shadow-sm "
                      />
                      {formData.name == "" ? (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                      ) : (
                        ""
                      )}
                    </div>

                    {/* Birthday Field */}
                    <div>
                      <label
                        htmlFor="birthday"
                        className="block text-sm text-gray-700  mb-1"
                      >
                        Birthday
                      </label>
                      <div className="flex space-x-2">
                        <select
                          className="w-1/3 p-2 border border-gray-300 rounded-md shadow-sm "
                          name="month"
                          value={formData.month}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Month</option>
                          <option value="January">January</option>
                          <option value="February">February</option>
                          <option value="March">March</option>
                        </select>

                        <select
                          className="w-1/3 p-2 border border-gray-300 rounded-md shadow-sm "
                          value={formData.day}
                          onChange={handleInputChange}
                          name="day"
                        >
                          <option value="">Select day</option>
                          <option value="25">25</option>
                          <option value="20">20</option>
                        </select>

                        <select
                          className="w-1/3 p-2 border border-gray-300 rounded-md shadow-sm  "
                          value={formData.year}
                          onChange={handleInputChange}
                          name="year"
                        >
                          <option value="">select year</option>
                          <option value="1938">1938</option>
                          <option value="1999">1999</option>
                        </select>
                      </div>
                      <div className="flex  justify-between items-center">
                        {formData.month == "" ? (
                          <p className="text-red-500 text-sm">{errors.month}</p>
                        ) : (
                          ""
                        )}

                        {formData.day == "" ? (
                          <p className="text-red-500 text-sm">{errors.day}</p>
                        ) : (
                          ""
                        )}

                        {formData.year == "" ? (
                          <p className="text-red-500 text-sm">{errors.year}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Country and City */}
                <div className="space-y-6 px-6 py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Country Field */}
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm text-gray-700 mb-1"
                      >
                        Country
                      </label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm "
                        value={formData.country}
                        onChange={handleInputChange}
                        name="country"
                      >
                        <option>Select your Country</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="canada">canada</option>
                        <option value="India">India</option>
                      </select>

                      {formData.country == "" ? (
                        <p className="text-red-500 text-sm">{errors.country}</p>
                      ) : (
                        ""
                      )}
                    </div>

                    {/* City Field */}
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm text-gray-700 mb-1"
                      >
                        City
                      </label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm "
                        value={formData.city}
                        onChange={handleInputChange}
                        name="city"
                      >
                        <option>Select your city</option>
                        <option value="Aiea">Aiea</option>
                        <option value="Abbeville">Abbeville</option>
                      </select>

                      {formData.city == "" ? (
                        <p className="text-red-500 text-sm">{errors.city}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 3: English Level and Languages */}
                <div className="space-y-6 px-6 py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* English Level Field */}
                    <div>
                      <label
                        htmlFor="englishLevel"
                        className="block text-sm text-gray-700 mb-1"
                      >
                        English Level
                      </label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm "
                        value={formData.englishLevel}
                        onChange={handleInputChange}
                        name="englishLevel"
                      >
                        <option value="">Select your Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced"> Advanced</option>
                        <option value="Beginner">Beginner</option>
                        <option value="native">native</option>
                      </select>

                      {formData.englishLevel == "" ? (
                        <p className="text-red-500 text-sm">
                          {errors.englishLevel}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>

                    {/* Languages Field */}
                    <div>
                      <label
                        htmlFor="languages"
                        className="block text-sm text-gray-700 mb-1"
                      >
                        Languages
                      </label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm "
                        value={formData.languages}
                        onChange={handleInputChange}
                        name="languages"
                      >
                        <option>Select other languages</option>
                        <option value="chines">chines</option>
                        <option value="English">English</option>
                        <option value="spanish">spanish</option>
                      </select>

                      {formData.languages == "" ? (
                        <p className="text-red-500 text-sm">
                          {errors.languages}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 4: Marital Status and Field of Work */}
                <div className="space-y-6 px-6 py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Marital Status Field */}
                    <div>
                      <label
                        htmlFor="maritalStatus"
                        className="block text-sm text-gray-700 mb-1"
                      >
                        Marital Status
                      </label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm "
                        value={formData.maritalStatus}
                        onChange={handleInputChange}
                        name="maritalStatus"
                      >
                        <option>Not married</option>
                        <option value="Married">Married</option>
                        <option value="divorced">divorced</option>
                        <option value="widowed">widowed</option>
                      </select>

                      {formData.maritalStatus == "" ? (
                        <p className="text-red-500 text-sm">
                          {errors.maritalStatus}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>

                    {/* Field of Work */}
                    <div>
                      <label
                        htmlFor="fieldOfWork"
                        className="block text-sm text-gray-700 mb-1"
                      >
                        Field of Work
                      </label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm "
                        value={formData.fieldOfWork}
                        onChange={handleInputChange}
                        name="fieldOfWork"
                      >
                        <option>Select your field</option>
                        <option>Communication</option>
                        <option>engineer</option>
                        <option>Healthcare</option>
                      </select>

                      {formData.fieldOfWork == "" ? (
                        <p className="text-red-500 text-sm">
                          {errors.fieldOfWork}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md  ">
              <div className="bg-[#fafafa] px-4 py-2 rounded-t-md">
                <h2 className="text-lg font-semibold text-gray-800">About</h2>
              </div>

              <div className="px-4 py-2">
                <p className="text-sm text-gray-700">Traits</p>
                <p className="text-sm text-gray-700">
                  You may select up to 3 options
                </p>
              </div>

              <div className="px-4 py-2 pb-6">
                <div className="flex flex-wrap gap-4">
                  {traitsData.map((trait, index) => (
                    <div
                      key={index}
                      className={`border bg-gray-100 rounded-3xl p-3 text-center  hover:bg-orange-200 transition hover:text-[#f67704] ${
                        selecttraits.includes(trait)
                          ? "bg-orange-200 border-2 border-[#f67704]"
                          : ""
                      }`}
                      onClick={() => handleTraitSelect(trait)}
                    >
                      <p
                        className={` ${
                          selecttraits.includes(trait)
                            ? "text-[#f67704]"
                            : "text-gray-700"
                        }`}
                      >
                        {trait}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white border-t  pb-4">
                {/* Header Section */}
                <div className=" px-4 py-2 rounded-t-md">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Interests
                  </h2>
                </div>

                {/* Description Section */}
                <div className="px-4 py-2">
                  <p className="text-sm text-gray-700">
                    You may select up to 5 options
                  </p>
                </div>

                {/* Interests Section */}
                <div className="px-4 py-2">
                  <div className="flex flex-wrap gap-4">
                    {interestsData.map((interest, index) => (
                      <div
                        key={index}
                        className={`border bg-gray-100 rounded-3xl p-3 text-center  hover:bg-orange-200 transition hover:text-[#f67704] ${
                          selectInterest.includes(interest)
                            ? "bg-orange-200 border-2 border-[#f67704]"
                            : ""
                        }`}
                        onClick={() => handleSelectInterest(interest)}
                      >
                        <p
                          className={` ${
                            selectInterest.includes(interest)
                              ? "text-[#f67704]"
                              : "text-gray-700"
                          }`}
                        >
                          {interest}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white  border-t pb-4">
                {/* Header Section */}
                <div className=" px-4 py-2 rounded-t-md">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Movies
                  </h2>
                </div>

                {/* Description Section */}
                <div className="px-4 py-2">
                  <p className="text-sm text-gray-700">
                    You may select up to 3 options
                  </p>
                </div>

                {/* Movies Section */}
                <div className="px-4 py-2 pb-4 ">
                  <div className="flex flex-wrap gap-4">
                    {moviesData.map((movie, index) => (
                      <div
                        key={index}
                        className={`border bg-gray-100 rounded-3xl p-3 text-center  hover:bg-orange-200 transition hover:text-[#f67704] ${
                          selectedMovies.includes(movie)
                            ? "bg-orange-200 border-2 border-[#f67704]"
                            : ""
                        }`}
                        onClick={() => handleSelectMovie(movie)}
                      >
                        <p
                          className={`  ${
                            selectedMovies.includes(movie)
                              ? "text-[#f67704]"
                              : "text-gray-700"
                          }`}
                        >
                          {movie}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white  border-t  pb-4">
                {/* Header Section */}
                <div className=" px-4 py-2 rounded-t-md">
                  <h2 className="text-lg font-semibold text-gray-800">Music</h2>
                </div>

                {/* Description Section */}
                <div className="px-4 py-2">
                  <p className="text-sm text-gray-700">
                    You may select up to 3 options
                  </p>
                </div>

                {/* Music Section */}
                <div className="px-4 py-2">
                  <div className="flex flex-wrap gap-4">
                    {moviesData.map((music, index) => (
                      <div
                        key={index}
                        className={`border bg-gray-100 rounded-3xl p-3 text-center hover:bg-orange-200 transition hover:text-[#f67704] ${
                          selectedMusic.includes(music)
                            ? "bg-orange-200 border-2 border-[#f67704]"
                            : ""
                        }`}
                        onClick={() => handleSelectMusic(music)}
                      >
                        <p
                          className={`${
                            selectedMusic.includes(music)
                              ? "text-[#f67704]"
                              : "text-gray-700 "
                          }`}
                        >
                          {music}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md mt-5">
              {/* Header Section */}
              <div className=" px-4 py-2 rounded-t-md">
                <h2 className="text-lg font-semibold text-gray-800">
                  Looking for
                </h2>
              </div>

              {/* Description Section */}
              <div className="px-4 py-2">
                <p className="text-sm text-gray-700">
                  You may select up to 3 options
                </p>
              </div>

              {/* Goal Section */}
              <div className="px-4 py-2">
                <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
                  {lookingForData.map((goal, index) => (
                    <div
                      key={index}
                      className={`border bg-gray-100 rounded-3xl hover:bg-orange-200  p-3 text-center cursor-pointer ${
                        selectedRange.includes(goal)
                          ? "bg-orange-200 border-2 border-[#f67704] text-[#f67704]"
                          : "bg-gray-100"
                      }`}
                      onClick={() => handleSelect(goal)}
                    >
                      <p
                        className={` ${
                          selectedRange.includes(goal)
                            ? "text-[#f67704]"
                            : "text-gray-700"
                        }`}
                      >
                        {goal}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Age Range Section */}

              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">
                  Age range
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <span className="text-gray-600">From</span>
                  <Select value={`${from}`} onValueChange={handleFromChange}>
                    <SelectTrigger className="w-full sm:w-32 px-8 border">
                      <SelectValue placeholder="From" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Age</SelectLabel>
                        {[...Array(83)].map((_, i) => (
                          <SelectItem key={i} value={`${i + 18}`}>
                            {i + 18}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <div className="w-full sm:px-10 py-4">
                    <DualRangeSlider
                      className="text-[#f67704]"
                      label={(value) => value}
                      value={values}
                      onValueChange={handleSliderChange}
                      min={18}
                      max={100}
                      step={1}
                    />
                  </div>

                  <Select value={`${to}`} onValueChange={handleToChange}>
                    <SelectTrigger className="w-full sm:w-32 px-8 border">
                      <SelectValue placeholder="To" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Age</SelectLabel>
                        {[...Array(83)].map((_, i) => (
                          <SelectItem key={i} value={`${i + 18}`}>
                            {i + 18}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Gender and Personality Section */}
              <div className="px-4 lg:pb-6 py-4">
                <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
                  {/* Gender Section */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Gender</p>
                    <select
                      className="w-full border border-gray-300 rounded-md p-2 text-gray-600"
                      value={formData.gender}
                      onChange={handleInputChange}
                      name="gender"
                    >
                      <option value="1">I am a man looking for a woman</option>
                      <option value="2">I am a woman looking for a man</option>
                      <option value="3">I am a man looking for a man</option>
                      <option value="4">
                        I am a woman looking for a woman
                      </option>
                      <option value="5">Other</option>
                    </select>
           

                     {formData.gender===""? (
                      <p className="text-red-500 text-sm ">{errors.gender}</p>):""}
                  </div>

                  {/* Personality Section */}
                  <div>
                    <h2 className=" text-sm text-gray-600 mb-2">Personality</h2>
                    <select
                      className="w-full border border-gray-300 rounded-md p-2 text-gray-600"
                      value={formData.personality}
                      onChange={handleInputChange}
                      name="personality"
                    >
                      <option>Career chaser</option>
                      <option value="1">Adventurer</option>
                      <option value="2">Creative thinker</option>
                      <option value="3">Family-focused</option>
                    </select>
                 

                    {
                      formData.personality===""? (
                        <p className="text-red-500 text-sm">{errors.personality}</p>
                        
                      ):""
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md mt-4 ">
              {/* Header Section */}
              <div className="bg-[#fafafa] px-4 py-2 rounded-t-md">
                <h2 className="text-lg font-semibold text-gray-800">STORY</h2>
              </div>

              {/* Input Section */}
              <div className="px-6 py-4">
                <textarea
                  placeholder="Start typing here..."
                  className="w-full h-32 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-2 focus:border-[#F77705] focus:outline-none"
                ></textarea>
              </div>
            </div>
            <div className="bg-white shadow-md lg:bottom-0 bottom-8 rounded-md p-6 sticky py-6">
              <div className="flex justify-center space-x-6">
                <button
                  className="px-10 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-black hover:text-white  font-semibold"
                  type="button"
                  aria-label="Cancel"
                >
                  Cancel
                </button>
                <button
                  className="px-10 py-2 text-white  bg-[#F77705] border border-[#F77705] rounded-md  font-semibold "
                  type="button"
                  aria-label="Save"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default YourProfileInput;
