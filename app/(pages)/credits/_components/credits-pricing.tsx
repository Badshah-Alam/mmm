

import React from 'react';

const CreditsPricing = () => {
  return (
    <div className="bg-white shadow-md mt-4">
      <h1 className="text-2xl font-bold mb-6 px-6 pt-6">Pricing</h1>

      <div className="px-6 pb-6  border-t border-gray-200">
        
        {/* Chats Section */}
        <div className="mb-6 lg:text-[18px] text-[#333] ">
          <p className="lg:text-[18px] font-semibold mb-2 pt-6 text-[#333]">Chats</p>
          <ul className="list-disc pl-6">
            <li className='pt-2'>Live chat: <strong>2 credits</strong> per minute</li>
            <li className='pt-2'>Stickers in chat: <strong>5 credits</strong></li>
            <li className='pt-2'>Sending photos in chat: <strong>10 credits</strong></li>
            <li className='pt-2'>Opening audios in chat: <strong>10 credits</strong></li>
            <li className='pt-2'>Opening videos in chat: <strong>50 credits</strong></li>
            <li className='pt-2'>Opening exclusive post: <strong>50 credits</strong></li>
          </ul>
          <p className=" mt-2 text-[18px]">*You’ll be charged immediately after clicking on a video.</p>
        </div>
  
        {/* Mail Section */}
        <div className="mb-6 lg:text-[18px] text-[#333]">
          <p className="text-[18px]  font-semibold mb-2 text-[#333]">Mail</p>
          <ul className="list-disc pl-6 text-[18px]   " >
            <li className='pt-2'>Sending letters in mail to one particular member: first letter in a thread costs <strong>10 credits</strong>, each following letter costs <strong>30 credits</strong></li>
            <li className='pt-2'>Opening letters in mail: first letter in a thread is free, each following letter costs <strong>10 credits</strong></li>
            <li className='pt-2'> Sending photos in mail: <strong>free of charge</strong></li>
            <li className='pt-2'>Opening photos in mail: first photo in a thread is free, each following photo costs <strong>10 credits</strong></li>
            <li className='pt-2'>Opening videos in mail: <strong>50 credits</strong> per video</li>
          </ul>
          <p className=" mt-2 pt-2 text-[18px] text-[#008c48]">*You’ll be charged immediately after clicking on a photo or video.</p>
        </div>

        
        <div className='mb-6 lg:text-[18px] text-[#333]'>
          <p className="lg:text-[18px]  font-semibold mb-2 text-[#333]">Other</p>
          <ul className="list-disc pl-6 lg:text-[18px]">
            <li className='pt-2'>Opening videos in profiles: <strong>50 credits</strong></li>
          </ul>
          <p className=" mt-2 lg:text-[18px] text-[#008c48]">*You’ll be charged immediately after clicking on a video.</p>
          <ul className='list-disc pl-6 lg:text-[18px]'>
          <li className=' pt-2 lg:text-[18px]'>Virtual gifts: <strong>Find prices in the gift catalog</strong></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CreditsPricing;