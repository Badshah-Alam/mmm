"use client";

import { Card } from "@/components/ui/card";
import { SearchImg } from "@/data/search/search";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const CarouselViewDetails = () => {
    const [active, setActive] = useState(0);
    const showItems = 14;
    const handleNext = () => {
        setActive((prev) =>
            Math.min(prev + 1, Object.values(SearchImg).length - showItems)
        );
    };
    const handlePrev = () => {
        setActive((prev) => Math.max(prev - 1, 0));
    };
    return (

       <div className="hidden lg:block">
         <div className="flex mb-3">
            <button
                onClick={handlePrev}
                className={`px-2 py-2 bg-white text-dark shadow-md ${active === 0 ? 'cursor-not-allowed opacity-50' : 'active'}`}
                disabled={active === 0}
            >
                <FaChevronLeft />
            </button>

            <div className="flex gap-2 ">

                {Object.values(SearchImg).slice(active, active + showItems).map((item, index: number) => (
                    <div key={index} >

                        <Link href={{
                            pathname: `/search/${item.id}`,

                        }}>
                            <Card className="">
                                <Image
                                    src={item.image}
                                    width={296}
                                    height={296}
                                    className="w-full h-full rounded-xl hover:opacity-50 cursor-pointer aspect-square relative"
                                    alt={`${item.index}`}
                                />
                            </Card>
                        </Link>
                    </div>
                ))}

            </div>
            <button
                onClick={handleNext}
                className={`px-2 py-2 bg-white text-dark shadow-md ${active >= Object.values(SearchImg).length - showItems ? 'cursor-not-allowed opacity-50' : 'active'}`}
                disabled={
                    active >= Object.values(SearchImg).length - showItems
                }
            >
                <FaChevronRight />
            </button>
        </div>
       </div>
    );
};

export default CarouselViewDetails;

