"use client";
import React, { useState } from 'react'
import { IoMdStar } from 'react-icons/io';

const NewsFeedNav = () => {
    const [activeNav,setActiveNav]=useState(0);
    const Navitems= [{name:"All Posts"}, {name:"Following" ,icon:<IoMdStar />}];

  return (
    <div>
    <div className='bg-white flex w-full items-center shadow-lg px-3'>
       <p className='text-xl font-semibold text-dark-mmm'>Feed</p> 
       <div className='flex gap-2 justify-center  py-3 w-full'>
        {Navitems.map((item,index)=>(
            <div key={index} >
                <button 
                 key={index}
                 className={`flex justify-center w-[300px] py-2 rounded-full   ${activeNav === index? "bg-[#FFF4E9] border text-orange-mmm font-semibold border-orange-mmm" : "bg-smoke-mmm border-smoke-mmm  text-dark-mmm hover:bg-orange-mmm border hover:text-white font-semibold hover:border-orange-mmm "}`}
                 onClick={()=>setActiveNav(index)}>
                <p className='flex items-center text-center gap-2'>{item.icon} {item.name}</p>
                </button>
            </div>
        ))}
       </div>
    </div>
    </div>
  )
}

export default NewsFeedNav
