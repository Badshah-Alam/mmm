import React from 'react'

import PaidFeatures from '@/app/_components/paid-features/paid-features'
import PeopleMain from './_components/people-main'


const page = () => {
  return (
    <div className="max-w-[1560px] min-h-screen w-full lg:w-[90%] lg:py-4  mx-auto">
    
      <div className="flex justify-between items-start w-full ">
        <div className="w-full flex flex-col mt-3 lg:mt-0 lg:mr-4">
      <PeopleMain/>
          </div>
        <div className="hidden  xl:block min-w-[312px] w-[312px]">
          <PaidFeatures />
        </div>
      </div>
    </div>
  )
}

export default page