import React from 'react'
import { GoDotFill } from 'react-icons/go'

const JoinDetails = () => {
  return (
   <div className='flex flex-col gap-4 lg:px-2 px-0  w-full h-full'>
     <div className='flex items-center gap-2 text-red-500'>
  <GoDotFill className='text-3xl' />
    <p className='text-2xl font-semibold'>WHY JOIN</p>
  </div>
     <div className='flex flex-col gap-10 w-full h-full'>
 
  <div className='flex flex-col gap-6'>
    <p className='text-2xl text-dark-mmm font-semibold'>Quality service</p>
    <p className='text-[18px]'>We have an extensive membership base, various communication features, and a convenient search tool so you could discover and chat with like-minded individuals.</p>
  </div>
  <div className='flex flex-col gap-6'>
    <p className='text-2xl text-dark-mmm font-semibold'>24/7 customer support</p>
    <p className='text-[18px]'>The BestDates online social platform has a friendly support team ready to answer all your questions and resolve any issues in time.</p>
  </div>
    </div>
   </div>
  )
}

export default JoinDetails
