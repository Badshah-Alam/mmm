'use client';
import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { FaRegEyeSlash, FaRegHeart, FaRegStar } from 'react-icons/fa';
import { FaRegFaceGrinTongueWink } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { SearchImg } from '@/data/search/search';

const SliderImage = () => {
    const pathname = usePathname();
    const chartid = parseInt(pathname.split('/')[2], 10);
    const chartData = SearchImg[chartid];
    if (!chartData) {
        return <div>Chart not found!</div>;
    }
    return (
        <div className='flex'>
            <div className='flex flex-col gap-y-3'>
                <Card className="">
                    <Image
                        src={chartData.image}
                        width={1000}
                        height={296}
                        className="xl:min-w-[296px] xl:w-[296px] w-full  h-full object-cover"
                        alt={chartData.image}
                    />
                </Card>
                <div className='flex justify-between items-center gap-2'>
                    <div className='flex items-center w-full flex-col  shadow-xl bg-white py-3 text-base text-[#F77705] hover:bg-[#F77705] hover:text-white rounded-md border-2 hover:border-[#F77705] font-semibold'>
                        <FaRegHeart className='text-xl' />
                        Like
                    </div>
                    <div className='flex items-center w-full flex-col  shadow-xl bg-white py-3 text-base text-[#F77705] hover:bg-[#F77705] hover:text-white rounded-md border-2 hover:border-[#F77705] font-semibold'>
                        <FaRegFaceGrinTongueWink className='text-xl' />
                        Wink
                    </div>
                    <div className='flex items-center w-full flex-col  shadow-xl bg-white py-3 text-base text-[#F77705] hover:bg-[#F77705] hover:text-white rounded-md border-2 hover:border-[#F77705] font-semibold'>
                        <FaRegStar className='text-xl' />
                        Follow
                    </div>
                </div>
                {/* public photo  */}
                <div>
                    <p className='text-base uppercase font-semibold'>Public Photos</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        {chartData.mutipleImages.slice(0, 3).map((img, index) => (
                            <Image
                                key={index}
                                src={img.image}
                                width={100}
                                height={100}
                                className="w-full h-full aspect-square object-cover"
                                alt={`search-image-${index}`}
                            />
                        ))}
                        <div className="relative">
                            <Image
                                key="static-image"
                                src={chartData.image}
                                width={100}
                                height={100}
                                className="w-full h-full aspect-square object-cover "
                                alt="static-image"
                            />
                            <div className="absolute inset-0 bg-black/70"></div>

                            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                                +{chartData.camera}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Private Photos  */}
                <div>
                    <p className='text-base uppercase font-semibold'>Private Photos</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        {chartData.mutipleImages.slice(0, 3).map((img, index) => (
                            <div className='relative'  key={index}>
                                <Image
                                   
                                    src={img.image}
                                    width={100}
                                    height={100}
                                    className="w-full h-full aspect-square object-cover blur-sm"
                                    alt={`search-image-${index}`}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                                <p className="   absolute inset-0 uppercase flex items-center gap-2 justify-center text-white font-bold text-xl">
                                <FaRegEyeSlash className='text-xl' />
                                Private
                            </p>
                            </div>
                        ))}
                        <div className="relative">
                           <Image
                                key="private-image"
                                src={chartData.image}
                                width={100}
                                height={100}
                                className="w-full h-full aspect-square object-cover blur-sm"
                                alt="private-image"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                            +{chartData.camera}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderImage;