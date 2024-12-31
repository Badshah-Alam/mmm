"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { FaRegEyeSlash, FaRegHeart, FaRegStar } from "react-icons/fa";
import { FaRegFaceGrinTongueWink } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { SearchImg } from "@/data/search/search";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoChevronUp } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { LuFileChartLine } from "react-icons/lu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AiOutlineLike } from "react-icons/ai";

interface ImageData {
  id?: number;
  image: string;
}

interface ChartData {
  image: string;
  mutipleImages: ImageData[];
  camera: number;
}

const SliderImage: React.FC = () => {
  const pathname = usePathname();

  const chartid = parseInt(pathname.split("/")[2], 10);
  const chartData: ChartData | undefined = SearchImg[chartid];

  const [carouselState, setCarouselState] = useState({
    startIndex: 0,
    visibleImagesCount: 5,
  });

  if (!chartData || !chartData.mutipleImages) {
    return <div>Chart not found!</div>;
  }

  const { startIndex, visibleImagesCount } = carouselState;
  const images = chartData.mutipleImages;

  const handleNext = () => {
    setCarouselState((prevState) => ({
      ...prevState,
      startIndex: (prevState.startIndex + 1) % images.length,
    }));
  };

  const handlePrevious = () => {
    setCarouselState((prevState) => ({
      ...prevState,
      startIndex: (prevState.startIndex - 1 + images.length) % images.length,
    }));
  };

  const getVisibleImages = () => {
    return images
      .slice(startIndex, startIndex + visibleImagesCount)
      .concat(
        images.slice(
          0,
          Math.max(0, startIndex + visibleImagesCount - images.length)
        )
      );
  };

  if (!chartData) {
    return <div>Chart not found!</div>;
  }

  return (
    <div className="flex">
      <div className="flex flex-col gap-y-3">
        <Dialog>
          <DialogTrigger asChild>
            <Card>
              <Image
                src={chartData.image}
                width={1000}
                height={296}
                className="xl:min-w-[296px] xl:w-[296px] w-full h-full object-cover cursor-pointer"
                alt={chartData.image}
              />
            </Card>
            {/* <Image
                      src={img.image}
                      width={100}
                      height={100}
                      className="w-full h-full aspect-square object-cover cursor-pointer"
                      alt={`search-image-${index}`}
                    /> */}
          </DialogTrigger>
          <DialogContent className="max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto">
            <DialogHeader>
              <DialogTitle>
                <div className="grid grid-cols-2 items-center border shadow-md w-full p-2">
                  {/* <Image
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full"
                            src={img.image}
                            width={50}
                            height={50}
                            alt={`search-image-${index}`}
                          /> */}
                  <p className="text-sm md:text-base">
                    Photos: {startIndex + 1}
                  </p>
                </div>
              </DialogTitle>
              <DialogDescription>
                {/* Explore the image in more detail. */}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col sm:flex-row justify-center  px-2 md:gap-20 ">
              {/* Thumbnail Navigation */}
              <div className="hidden sm:flex flex-col items-center">
                <button
                  onClick={handlePrevious}
                  className="mb-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                >
                  <IoChevronUp />
                </button>
                <div className="sm:h-[300px] sm:w-[80px] md:w-[100px] overflow-hidden border border-gray-300 flex flex-col items-center gap-2">
                  {getVisibleImages().map((img, index) => (
                    <Image
                      key={index}
                      src={img.image}
                      alt={`carousel-image-${startIndex + index}`}
                      width={60}
                      height={60}
                      className="rounded-md object-cover"
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="mt-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                >
                  <FaAngleDown />
                </button>
              </div>

              {/* Main Image Display */}
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={handlePrevious}
                  className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                >
                  <FaChevronLeft />
                </button>
                <Image
                  src={images[startIndex].image}
                  alt={`main-carousel-image`}
                  width={200}
                  height={300}
                  className="rounded-md border aspect-square sm:aspect-auto sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] border-gray-300"
                />
                <button
                  onClick={handleNext}
                  className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Zoom Button */}
              <div className="hidden sm:block">
                <div className="flex items-center justify-center w-[50px] h-[50px] md:w-[70px] md:h-[70px] border border-gray-300">
                  <MdZoomOutMap className="text-2xl md:text-4xl font-bold" />
                </div>
              </div>
            </div>

            <DialogFooter>
              <div className="flex justify-center gap-4 w-full border-t border-gray-300 py-3">
                <Button className="bg-white text-[#f67704] hover:bg-[#f67704] hover:text-white flex items-center gap-2">
                  <AiOutlineLike /> Like
                </Button>
                <Button className="flex items-center gap-2">
                  Chat Now <LuFileChartLine />
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="flex justify-between items-center gap-2">
          {["Like", "Wink", "Follow"].map((action, idx) => (
            <div
              key={idx}
              className="flex items-center w-full flex-col shadow-xl bg-white py-3 text-base text-[#F77705] hover:bg-[#F77705] hover:text-white rounded-md border-2 hover:border-[#F77705] font-semibold"
            >
              {idx === 0 && <FaRegHeart className="text-xl" />}
              {idx === 1 && <FaRegFaceGrinTongueWink className="text-xl" />}
              {idx === 2 && <FaRegStar className="text-xl" />}
              {action}
            </div>
          ))}
        </div>

        {/* Public Photos */}
        <div>
          <p className="text-base uppercase font-semibold">Public Photos</p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {chartData.mutipleImages.slice(0, 3).map((img, index) => (
              <div key={img.id}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src={img.image}
                      width={100}
                      height={100}
                      className="w-full h-full aspect-square object-cover cursor-pointer"
                      alt={`search-image-${index}`}
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto">
                    <DialogHeader>
                      <DialogTitle>
                        <div className="grid grid-cols-2 items-center border shadow-md w-full p-2">
                          <Image
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full"
                            src={img.image}
                            width={50}
                            height={50}
                            alt={`search-image-${index}`}
                          />
                          <p className="text-sm md:text-base">
                            Photos: {startIndex + 1}
                          </p>
                        </div>
                      </DialogTitle>
                      <DialogDescription>
                        {/* Explore the image in more detail. */}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col sm:flex-row justify-center  px-2 md:gap-20 ">
                      {/* Thumbnail Navigation */}
                      <div className="hidden sm:flex flex-col items-center">
                        <button
                          onClick={handlePrevious}
                          className="mb-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                        >
                          <IoChevronUp />
                        </button>
                        <div className="sm:h-[300px] sm:w-[80px] md:w-[100px] overflow-hidden border border-gray-300 flex flex-col items-center gap-2">
                          {getVisibleImages().map((img, index) => (
                            <Image
                              key={index}
                              src={img.image}
                              alt={`carousel-image-${startIndex + index}`}
                              width={60}
                              height={60}
                              className="rounded-md object-cover"
                            />
                          ))}
                        </div>
                        <button
                          onClick={handleNext}
                          className="mt-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                        >
                          <FaAngleDown />
                        </button>
                      </div>

                      {/* Main Image Display */}
                      <div className="flex justify-center items-center gap-4">
                        <button
                          onClick={handlePrevious}
                          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                        >
                          <FaChevronLeft />
                        </button>
                        <Image
                          src={images[startIndex].image}
                          alt={`main-carousel-image`}
                          width={200}
                          height={300}
                          className="rounded-md border aspect-square sm:aspect-auto sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] border-gray-300"
                        />
                        <button
                          onClick={handleNext}
                          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                        >
                          <FaChevronRight />
                        </button>
                      </div>

                      {/* Zoom Button */}
                      <div className="hidden sm:block">
                        <div className="flex items-center justify-center w-[50px] h-[50px] md:w-[70px] md:h-[70px] border border-gray-300">
                          <MdZoomOutMap className="text-2xl md:text-4xl font-bold" />
                        </div>
                      </div>
                    </div>

                    <DialogFooter>
                      <div className="flex justify-center gap-4 w-full border-t border-gray-300 py-3">
                        <Button className="bg-white text-[#f67704] hover:bg-[#f67704] hover:text-white flex items-center gap-2">
                          <AiOutlineLike /> Like
                        </Button>
                        <Button className="flex items-center gap-2">
                          Chat Now <LuFileChartLine />
                        </Button>
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
            <div className="relative">
              <Image
                src={chartData.image}
                width={100}
                height={100}
                className="w-full h-full aspect-square object-cover"
                alt="static-image"
              />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <p className="text-white font-bold text-2xl">
                  +{chartData.camera}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Private Photos */}
        <div>
          <p className="text-base uppercase font-semibold">Private Photos</p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {chartData.mutipleImages.slice(0, 3).map((img, index) => (
              <div className="relative" key={img.id}>
                <Image
                  src={img.image}
                  width={100}
                  height={100}
                  className="w-full h-full aspect-square object-cover blur-sm"
                  alt={`private-image-${index}`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="uppercase text-white font-bold text-xl flex items-center gap-2">
                    <FaRegEyeSlash className="text-xl" />
                    Private
                  </p>
                </div>
              </div>
            ))}
            <div className="relative">
              <Image
                src={chartData.image}
                width={100}
                height={100}
                className="w-full h-full aspect-square object-cover blur-sm"
                alt="private-image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <p className="text-white font-bold text-2xl">
                  +{chartData.camera}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderImage;
