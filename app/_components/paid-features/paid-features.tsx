import { Button } from '@/components/ui/button'
import { PaidItem } from '@/data/paid-features/paid-features'
import React from 'react'

const PaidFeatures = () => {
  return (
    <div className='flex flex-col gap-y-4 '>
      <div className='flex flex-col gap-y-4 shadow-lg bg-white py-4 px-4'>
        <p className='text-[18px] font-semibold'>Get More with Credits</p>
        <div className='flex flex-col '>
          {PaidItem.map((item, index) => (
            <div key={index} className='flex gap-2 items-center py-2'>
              <div className='bg-[#F5FAFF] w-8 h-8 rounded-full flex justify-center items-center'>
                {item.icon}
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <Button variant="secondary" size="secondary" className='w-full' >
          Get Credits
        </Button>
      </div>

      <div className='flex flex-col text-[#595959]  shadow-lg bg-white py-4 '>
      <p className='py-2 px-4 text-[18px] text-black font-semibold'>My Activity </p>
      <div className='flex px-4 hover:bg-[#f5f5f5] py-2 justify-between items-center'>
        <p>Chat</p>
        <p className='bg-[#F77705] px-3 h-4 pb-[1px] rounded-md flex justify-center items-center text-white'>2</p>
      </div>
      <p className='py-2 px-4 hover:bg-[#f5f5f5]'>Email
      </p>
      <p className='py-2 px-4 hover:bg-[#f5f5f5]'>Following</p>
      </div>
    </div>
  )
}
export default PaidFeatures