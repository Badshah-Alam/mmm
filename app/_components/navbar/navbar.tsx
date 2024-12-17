"use client";
import { MenuItems } from '@/data/navbar/navbar';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';



const Navbar = () => {
    const [activeId, setActiveId] = useState<number | null>(1);
    return (
        <div className='sticky top-0 z-50 bg-[#ffffff] shadow-md'>   
            <div className='hidden lg:block' >
            <div className='max-w-[1560px] w-[90%] mx-auto flex justify-between items-center '>
                <div>
                    <p className='text-[18px] xl:text-2xl uppercase font-semibold'>Match Meet n Marry</p>
                </div>
                <div className="flex">
                    {MenuItems.map((item) => (
                       <Link href={item.url || "#"} 
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                            className={` flex flex-col gap-y-1 items-center  hover:bg-[#F5F5F5] py-4 w-[75px] xl:w-[90px] cursor-pointer
                             ${activeId === item.id ? "text-[#f77705]" : "text-black "} `}>
                            <div className={`relative  w-10 h-10 rounded-full flex justify-center items-center
                              ${activeId === item.id ? "bg-[#F5FAFF] text-[#f77705]" : "bg-[#f5f5f5] text-[#aeadb3] "} `} >
                                {item.icon}
                                {item.id === 2 && (
                                    <div
                                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full"
                                    >
                                        {item.notificationCount ?? 0}
                                    </div>
                                )}
                            </div>
                            <p className={`text-sm xl:text-base font-semibold ${activeId === item.id ? "text-[#f77705]" : "text-[#5e6266]"  }`} >
                                {item.label}
                            </p>
                        </Link>
                    ))}
                </div>
                <div className='flex'>
                    <div className='flex flex-col justify-center items-center  py-4 w-[75px] xl:w-[90px] gap-y-1'>
                    <BsFillQuestionCircleFill className='text-4xl  text-[#aeadb3]'/>  
                    <p className='text-base font-semibold text-[#5e6266] '>Not sure</p>
                    </div>
                   <div className='flex flex-col justify-center items-center gap-y-1   py-4 w-[75px] xl:w-[90px] gap-y-1'>
                   <CgProfile className='text-4xl text-[#aeadb3]'/>
                   <p className='text-sm xl:text-base font-semibold text-[#5e6266] '>My profile</p>
                   </div>      
                </div>
            </div>
            </div>

             {/* Mobile View */}
             <div className='block lg:hidden'>
                <div className='grid grid-cols-3 px-4'>
                <p className='text-base sm:text-xl md:text-2xl col-span-2 grid place-content-center place-items-center uppercase font-bold md:font-semibold'>Match Meet n Marry</p>
                <div className='flex justify-end '>
                    <div className='flex justify-center items-center  py-4 w-[75px] xl:w-[90px] gap-y-1'>
                    <BsFillQuestionCircleFill className='text-4xl  text-[#aeadb3]'/>  
                    </div>
               
                   <div className='flex justify-center items-center gap-y-1   py-4 w-[75px] xl:w-[90px] gap-y-1'>
                   <CgProfile className='text-4xl text-[#aeadb3]'/>
                 
                   </div>      
                </div>
                </div>

                <div className='fixed bottom-0 w-full bg-[#ffffff]'>
                <div className="flex justify-between items-center">
                    {MenuItems.slice(0, 5).map((item) => (
                        <Link href={item.url || "#"}
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                            className={` flex flex-col gap-y-1 items-center  py-2 w-full cursor-pointer
                             ${activeId === item.id ? "text-[#f77705]" : "text-black "} `}>
                            <div className={`relative   flex justify-center items-center
                              ${activeId === item.id ? "bg-[#F5FAFF] text-[#f77705]" : "bg-[#f5f5f5] text-[#aeadb3] "} `} >
                                {item.icon}
                                {item.id === 2 && (
                                    <div
                                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full"
                                    >
                                        {item.notificationCount ?? 0}
                                    </div>
                                )}
                            </div>
                            <p className={`text-xs sm:text-sm  font-normal ${activeId === item.id ? "text-[#f77705]" : "text-[#5e6266]"  }`} >
                                {item.label}
                            </p>
                        </Link>
                    ))}
                </div>
                </div>

             </div>
        </div>
    )
}

export default Navbar

