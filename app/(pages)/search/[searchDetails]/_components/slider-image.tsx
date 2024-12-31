"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FaRegEyeSlash, FaRegHeart, FaRegStar } from "react-icons/fa";
import { FaRegFaceGrinTongueWink } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { SearchImg } from "@/data/search/search";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
        <Card>
          <Image
            src={chartData.image}
            width={1000}
            height={296}
            className="xl:min-w-[296px] xl:w-[296px] w-full h-full object-cover"
            alt={chartData.image}
          />
        </Card>
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
                  <DialogContent className="sm:max-w-[800px]  ">
                    <DialogHeader>
                      <DialogTitle>
                        <div className="grid grid-cols-2 items-center border-1 shadow-md rounded-sm w-full">
                          <Image
                            className="w-16 h-16 rounded-full"
                            src={img.image}
                            width={100}
                            height={100}
                            alt={`search-image-${index}`}
                          />

                          <p>Photos:{index + 3}</p>
                        </div>
                      </DialogTitle>
                      <DialogDescription>
                        {/* Explore the image in more detail. */}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="flex justify-between items-center">
                      {/* Vertical Carousel */}
                      <div className="h-full">
                        <div className="border h-full mt-10">
                          <Carousel
                            opts={{ align: "start" }}
                            orientation="vertical"
                            className="w-full max-w-xs"
                          >
                            <CarouselContent className="h-[300px]">
                              {getVisibleImages().map((img, index) => (
                                <CarouselItem key={index} className="pt-1">
                                  <div className="p-1">
                                    <Card>
                                      <CardContent className="flex items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">
                                          {startIndex + index + 1}
                                        </span>
                                        <Image
                                          src={img.image}
                                          alt={`carousel-image-${
                                            startIndex + index + 1
                                          }`}
                                          width={80}
                                          height={100}
                                          className="rounded-md"
                                        />
                                      </CardContent>
                                    </Card>
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious onClick={handlePrevious} />
                            <CarouselNext onClick={handleNext} />
                          </Carousel>
                        </div>
                      </div>

                      {/* Horizontal Carousel */}
                      <div>
                        <Carousel className="w-full max-w-xs mx-auto flex">
                          <CarouselContent>
                            {chartData.mutipleImages.map((img, idx) => (
                              <CarouselItem key={img.id}>
                                <div className="p-1">
                                  <Card>
                                    <div className="flex aspect-square items-center justify-center">
                                      <Image
                                        src={img.image}
                                        alt={`carousel-image-${idx}`}
                                        width={300}
                                        height={350}
                                      />
                                    </div>
                                  </Card>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious onClick={handlePrevious} />
                          <CarouselNext onClick={handleNext} />
                        </Carousel>
                      </div>

                      <div className="h-full">Zoom</div>
                    </div>

                    <DialogFooter>
                      <div className="flex items-center justify-center   itme gap-4 py-4 w-full border-t-4 shadow-2xl ">
                        <Button>Like</Button>
                        <Button>Chart now</Button>
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
