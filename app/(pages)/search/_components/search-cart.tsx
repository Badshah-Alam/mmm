import React from 'react'
import Image from 'next/image'
import { Card } from "@/components/ui/card"
// import { SearchImg } from '@/data/search/search'
import { Button } from '@/components/ui/button'
import { GoDotFill } from 'react-icons/go'
import { CiHeart } from 'react-icons/ci'
import { FaCamera, FaRegHeart } from 'react-icons/fa'
import Link from 'next/link'
import { PaginationDemo } from './pagination'
import { SearchImg } from '@/data/search/search'


const SearchCart = () => {
    return (
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4 px-4 lg:px-0 '>
                {Object.values(SearchImg).map((item: any, index: number) => (
                    <div key={index} >
                        <div className='relative'>
                            <Card >
                                <Image
                                    src={item.image}
                                    width={296}
                                    height={296}
                                    className="w-full h-full aspect-square relative"
                                    alt={`search-image-${index}`}

                                />
                            </Card>
                            <div className='absolute cursor-pointer bottom-0 w-full gap-1 text-base lg:text-[18px] text-semibold flex py-2 px-2 lg:px-4  items-center left-0 bg-[#14141466] '>
                                <FaCamera className='text-lg md:text-2xl text-white' />
                                <p className='text-[#ffffff]'>{item.camera}</p>
                            </div>
                            <div className='absolute cursor-pointer top-2 right-2 w-8 h-8 md:h-10 md:w-10 rounded-full flex justify-center items-center bg-[#14141466] '>
                                <FaRegHeart className='text-xl' style={{ color: "#ffffff" }} />
                            </div>

                        </div>
                        <div className=' flex flex-col xl:flex-row justify-between gap-2 items-start xl:items-center text-base lg:text-[18px] font-semibold px-2 lg:px-4 py-2 shadow-xl bg-[#ffffff] '>
                            <div className='flex gap-1 items-center'>
                                <p>{item.name},</p>
                                <p>{item.age}</p>
                                <GoDotFill className='text-[#41cc89]' />
                            </div>
                            <Link className='w-full lg:w-auto' href={{
                                pathname: `/search/${item.id}`,
                              
                            }} >
                                <Button className=' w-full lg:w-auto'>View Profile </Button></Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-8 mb-4'>
                <PaginationDemo />
            </div>
        </div>
    )
}

export default SearchCart