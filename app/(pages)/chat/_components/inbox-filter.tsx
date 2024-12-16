"use client"
import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import AllChats from './all-chats'

const InboxFilter = () => {
    const [activeInbox,setActiveInbox]=useState(0)
    const chat=["All chats", "Active", "Requests"]
  return (
    <div className='hidden xl:block min-w-[295px] w-[295px] bg-white shadow-xl '>
        <div className='px-3 py-3 '>

           {/* Search input */}

           <div className='flex bg-[#FEFEFE] gap-2 text-[#8f8f8f] hover:border-black border border-rounded-md rounded-md items-center px-2 py-3 w-full'>
           <IoSearchSharp className='text-xl '/>
           <input type="text" className='placeholder:text-[#8f8f8f] w-full outline-none' placeholder='Search by name' />
           </div>

       
        </div>
        <div>
        <div className="flex justify-between items-center mt-4">
          {chat.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer pb-1 w-full  text-center ${
                activeInbox === index ? "text-orange-mmm font-semibold border-b-2 border-orange-mmm" : "text-dark-mmm border-b-2 border-[#8f8f8f] font-semibold"
              }`}
              onClick={() => setActiveInbox(index)}
            >
              <div className='flex items-center gap-1 w-full justify-center'><p className='text-md'>{item}</p> {index === 1 && <p className='w-5 h-5 bg-orange-mmm text-white rounded-full text-xs flex items-center  justify-center'>1</p> }  {index === 2 && <p className='w-5 h-5 bg-[#8f8f8f] text-white rounded-full text-xs flex items-center  justify-center'>2</p> }</div>
            </div>
            
          ))}
      
        </div>
        <div className="">
        {activeInbox === 0 && (
            <AllChats/>
        ) }
        {activeInbox === 1 && <p>Welcome</p>}
        {activeInbox === 2 && <p>Welcome to requests</p>}
      </div>
        </div>
    </div>
  )
}

export default InboxFilter