import React, { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { usePathname } from 'next/navigation';

import { PiListHeartFill } from 'react-icons/pi';
import { Button } from '@/components/ui/button';
import { FaGift } from 'react-icons/fa';
import { SearchGifts, SearchImg } from '@/data/search/search';
import Image from 'next/image';
const Information = () => {
    const [isshow, setIsshow] = useState(false);
    const pathname = usePathname();
    const chartid = parseInt(pathname.split('/')[2], 10);
    const chartData = SearchImg[chartid];
    if (!chartData) {
        return <div>Chart not found!</div>;
    }


    return (
        <div className='flex flex-col gap-y-3'>
            <div className='bg-white flex flex-col gap-y-3 mt-3 shadow-lg px-4 py-2 rounded-lg'>
                <div className='flex gap-1   items-center text-[#333333]'>
                    <BsStars className='text-xl' />
                    <p className='text-xl font-semibold'>Interests</p></div>
                <div className='flex flex-wrap gap-2'>
                    {chartData.interests.map((item, index) => (
                        <div key={index} className=' text-[#333333] bg-[#F5F5F5] px-4 py-1 rounded-lg'>

                            <p className='text-sm font-semibold'>{item.interest}</p></div>
                    ))}
                </div>
            </div>
            <div className='bg-white flex flex-col gap-y-3 mt-3 shadow-lg px-4 py-2 rounded-lg'>
                <div className='flex gap-1   items-center text-[#333333]'>
                    <PiListHeartFill className='text-xl' />
                    <p className='text-xl font-semibold'>Looking For</p></div>
                <div className='flex flex-wrap gap-2'>
                    {chartData.Looking.map((item, index) => (
                        <div key={index} className=' text-[#333333] bg-[#F5F5F5] px-4 py-1 rounded-lg'>

                            <p className='text-sm font-semibold'>{item.Looking}</p></div>
                    ))}
                </div>
            </div>

            <div className='bg-white flex flex-col gap-y-3 mt-3 shadow-lg px-4 py-2 rounded-lg'>
                <div className='flex gap-1   items-center text-[#333333]'>
                    <PiListHeartFill className='text-xl' />
                    <p className='text-xl font-semibold'>About Me</p></div>
                <div className='flex flex-wrap gap-2'>
                    {chartData.About.map((item, index) => (
                        <div key={index} className=' text-[#333333] bg-[#F5F5F5] px-4 py-1 rounded-lg'>

                            <p className='text-sm font-semibold'>{item.About}</p></div>
                    ))}

                </div>

                <div>
                    <p>
                        {isshow
                            ? chartData.AboutDescription
                            : `${chartData.AboutDescription.slice(0, 200)}...`} <button onClick={() => setIsshow(!isshow)}>
                            {isshow ? <p className='text-[#DA6A05] font-medium text-base underline'>Show Less</p> : <p className='text-[#DA6A05] font-medium text-base underline'>Show More</p>}
                        </button>
                    </p>

                </div>

                <div className='bg-[#EFF6FB] items-center flex flex-col lg:flex-row gap-8 py-4 px-4 rounded-lg border border-[#cae4f7]' >
                    <div className=''>
                        <p className='text-xl text-nowrap text-[#333333] font-semibold'>Virtual Gifts for Special Ones</p>
                        <p className='text-[#333333] mt-1 text-base'>Liven up your chat with Alina</p>
                        <Button className='mt-3'><FaGift /> Choose a virtual gift </Button>
                    </div>
                    <div className='grid grid-cols-4 gap-2 '>
                        {Object.values(SearchGifts).map((item, index) => (
                            <div key={index} className='flex gap-2 '>
                                <Image src={item.image} width={100} height={100} className='w-full h-full hover:border-2 hover:border-[#DA6A05] hover:border-rounded-md  rounded-md aspect-square' alt={item.id} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Information