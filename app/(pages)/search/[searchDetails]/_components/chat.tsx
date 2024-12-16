'use client';
import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { HiCheckBadge } from 'react-icons/hi2';
import { usePathname } from 'next/navigation';
import { SearchImg } from '@/data/search/search';
import { MenuDetails } from './menu';
import { FaGlobeAmericas } from 'react-icons/fa';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { TbMoodBoy } from 'react-icons/tb';
import { PiBagSimpleFill } from 'react-icons/pi';


const ChatDetails = () => {
    const pathname = usePathname();
    const chartid = parseInt(pathname.split('/')[2], 10);
    const chartData = SearchImg[chartid];
    if (!chartData) {
        return <div>Chart not found!</div>;
    }
    return (
        <div className='flex flex-col gap-y-2  w-full'>
            <div className='flex w-full justify-between items-center'>
                <div className='flex gap-1 items-center text-base lg:text-2xl font-semibold '>
                    <HiCheckBadge className='text-[#2e73fb]' />
                    <p>{chartData.name},</p>
                    <p>{chartData.age}</p>
                    <GoDotFill className='text-[#41cc89]' />
                </div>
                <div>
                    <MenuDetails />
                </div>
            </div>

            <div className='flex flex-wrap gap-4 justify-between items-center w-full text-lg text-bold mt-4 text-[#676767]'>
                <div className='flex items-center gap-1 border-[2px] px-3 rounded-full '>
                <FaGlobeAmericas />
                    <p>{chartData.location}</p>
                </div>
                <div className='flex items-center gap-1 border-[2px] px-3 rounded-full '>
                <LiaBirthdayCakeSolid />
                    <p>{chartData.dob}</p>
                </div>
                <div className='flex items-center gap-1 border-[2px] px-3 rounded-full '>
                <TbMoodBoy />
                    <p>{chartData.relationship}</p>
                </div>
                <div className='flex items-center gap-1 border-[2px] px-3 rounded-full '>
                <PiBagSimpleFill />
                    <p>{chartData.occupation}</p>
                </div>
            </div>
        </div>
    );
};

export default ChatDetails;