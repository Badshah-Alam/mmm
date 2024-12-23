import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { ProcessStep } from './process-step'
import Link from 'next/link'

const Step4 = () => {
  return (
    <div className="max-w-[1560px] w-[90%] mx-auto py-16 flex justify-center  bg-smoke-mmmrounded-lg rounded-lg  ">
      <div className="bg-white  flex flex-col  justify-center lg:min-w-[600px] lg:w-[600px] mx-auto rounded-lg ">
        <div className="py-3 flex items-center  w-full ">
        <Link href="/loginstep/step31" >
        <button className="border flex items-center justify-center rounded-r-full py-2 px-3">
            <FaAngleLeft />
          </button>
          </Link>
          <div className="flex items-center w-[90%] justify-center text-base text-gray-600 font-semibold">
            <p className="pr-2">Part</p>
            <p>4</p>
            <span className="px-1">/</span>
            <p>7</p>
          </div>
        </div>

        <ProcessStep />
        <div className="flex justify-center flex-col items-center gap-1">
          <p className="text-2xl font-semibold text-dark-mmm text-center pt-2">
            Tell others a little about yourself
          </p>
          <p className="text-base text-wrap text-gray-600   lg:px-24 px-6 ">
        {`E.g., I love my job. But for me, there's nothing better than resting at a bar with my friends.`}
          </p>
        </div>
        <div className="flex gap-2 pt-4 pb-20 justify-center  flex-wrap lg:px-24 px-6">
        <textarea id="w3review" name="" rows={7} className="w-full border border-gray-300 p-2 outline-none rounded-md"  placeholder='Start typing here...'/>
        </div>
        <div className="flex justify-between items-center border-t-2  gap-2 px-8  py-2">
          <button className="border border-gray-300 w-[50%] px-2 py-3">
          <Link href="/loginstep/step5" className="w-full">
            Skip
            </Link>
          </button>
        
          <Link href="/loginstep/step5" className="w-full">
          <button className="bg-gradient-to-r w-full from-[#F05A8E] to-[#ED1C24] hover:bg-gradient-to-r  hover:to-[#F05A8E] hover:from-orange-mmm text-white px-6 py-3">
            continue
          </button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Step4
