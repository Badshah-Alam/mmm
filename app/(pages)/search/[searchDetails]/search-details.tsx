'use client';
import React from 'react';

import { usePathname } from 'next/navigation';
import { SearchImg } from '@/data/search/search';
import SliderImage from './_components/slider-image';
import ChatDetails from './_components/chat';
import ChatInbox from './_components/chat-inbox';
import Information from './_components/information';
import ProfileDetails from './_components/profile';

const SearchDetails = () => {
    const pathname = usePathname();
    const chartid = parseInt(pathname.split('/')[2], 10);
    const chartData = SearchImg[chartid];
    if (!chartData) {
        return <div>Chart not found!</div>;
    }
    return (
        <div className='flex flex-col gap-y-4 lg:flex-row'>
          <SliderImage/>
            <div className='flex flex-col bg-[#ffffff] shadow-xl ml-2 w-full px-3 py-3'>
                   <ChatDetails/>
                   <ChatInbox/>
                   <Information/>
                   <ProfileDetails/>
                
            </div>

        </div>
    );
};

export default SearchDetails;