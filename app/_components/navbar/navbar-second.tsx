import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const NavbarSecond = () => {
  return (
    <div className='sticky top-0 z-50 bg-[#ffffff] shadow-md'>   
            <div className='' >
            <div className='max-w-[1560px]  w-[90%] mx-auto flex justify-between items-center '>
               
                         <Image
                           src="/assets/images/login/logo.png"
                           alt="logo"
                           width={200}
                           height={30}
                           className='md:w-[200px] w-[150px]'
                         />
              <div className='hidden lg:block'>
              <div className='flex gap-4'>
                    <p className='text-dark-mmm font-semibold'>Not a member?</p>
                    <div className='flex gap-2 text-orange-mmm font-semibold  items-center'>
                    <p>Match Meet n Marry </p>
                    <FaArrowRightLong />
                    </div>
                    
                </div>
              </div>
              <div className=' lg:hidden'>
               <p className='border px-3 py-2 shadow-md bg-white rounded-xl text-orange-mmm font-semibold'> Sign up</p>
              </div>
             
                </div> 
            </div>
            </div>

     
  )
}

export default NavbarSecond
