'use client';

import { SearchImg } from '@/data/search/search';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const AllChats = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="flex flex-col overflow-y-scroll h-[580px] w-full">
      {Object.values(SearchImg).map((item,index) => (
        <div 
          key={item.id} 
          onClick={() => setActiveItem(index)} 
          className={`cursor-pointer px-3 py-3 hover:bg-smoke-mmm w-full ${
            activeItem === index && 'bg-[#eff8fc]' 
          }`}
        >
          <Link href={`/chat/${item.id}`} className="w-full">
            <div className="flex gap-2 items-center w-full">
              <div className="relative">
                <Image
                  className="w-12 h-12 rounded-full"
                  src={item.image}
                  alt={item.image}
                  width={60}
                  height={60}
                />
                <span
                  className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
                ></span>
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full">
                  <p className="text-dark-mmm font-semibold text-lg">{item.name}</p>
                  <p className="text-xs text-dark-mmm">11.30</p>
                </div>
                <p className="text-dark-mmm font-normal">{item.aboutMe.slice(0, 20)}...</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllChats;
