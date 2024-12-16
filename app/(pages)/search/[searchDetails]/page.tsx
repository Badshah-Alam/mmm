import React from 'react'
import SearchDetails from './search-details'
import PaidFeatures from '@/app/_components/paid-features/paid-features'
import CarouselViewDetails from './_components/carousel'
// import { CarouselViewDetails } from './_components/carousel'

const Page = () => {
  return (
    

<div className="max-w-[1560px] min-h-screen w-full lg:w-[81%] lg:py-4  mx-auto">
 <CarouselViewDetails/>
<div className="flex justify-between items-start w-full ">
  <div className="w-full flex flex-col lg:mr-4">
  <SearchDetails/>
    </div>
  <div className="hidden lg:block w-[312px]">
    <PaidFeatures />
  </div>
</div>
</div>
  )
}

export default Page