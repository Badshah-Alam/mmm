import React from 'react'
import InboxFilter from '../_components/inbox-filter'
import MessageInbox from '../_components/message-inbox'
import PaidFeatures from '@/app/_components/paid-features/paid-features'

const page = () => {
  return (
    <div className="max-w-[1560px] min-h-screen w-full lg:w-[81%] lg:py-4  mx-auto">
    
    <div className="flex justify-between items-start w-full ">
      <div className="w-full flex lg:mr-4 ">
     
      <InboxFilter/>
      <MessageInbox/>
        </div>
      <div className="hidden lg:block w-[312px]">
        <PaidFeatures />
      </div>
    </div>
  </div>
  )
}

export default page