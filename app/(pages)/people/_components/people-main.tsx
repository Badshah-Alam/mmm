import React from 'react';
import ImageCarousel from './image-carousel';
import ProfileImage from './profile-image';
;
import { GrClose } from 'react-icons/gr';
import { IoMdChatboxes } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';

const PeopleMain = () => {
  return (
    <div className='px-2 lg:px-0'>
    <ImageCarousel/>
    <ProfileImage/>
    <div className='lg:w-[400px] my-4  flex justify-center items-center gap-5 md:gap-8 mx-auto md:bottom-2 bottom-16 sticky'>
   <div className=' h-14 w-14 shadow-lg border bg-white rounded-full flex justify-center items-center'>
   <GrClose className='text-3xl'/>
   </div>
   <div>
  <div className='h-10 w-10 shadow-lg border bg-white rounded-full flex justify-center items-center'>
  <IoMdChatboxes className='text-xl text-orange-mmm'/>
  </div>
   </div>
   <div>
    <div className='h-14 w-14 shadow-lg  bg-red-700 rounded-full flex justify-center items-center'>
    <FaHeart className='text-3xl text-white'/>
    </div>
   </div>
</div>

    </div>
  )
}

export default PeopleMain;
