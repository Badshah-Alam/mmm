
import PaidFeatures from '@/app/_components/paid-features/paid-features';
import React from 'react';
import MessageInbox from './_components/message-inbox';
import InboxFilter from './_components/inbox-filter';

const ChartPage = () => {
  return (
    <div className="max-w-[1560px] min-h-screen w-full lg:w-[90%] lg:py-4  mx-auto">
    
    <div className="flex justify-between items-start w-full ">
      <div className="w-full flex lg:mr-4 ">
     
      <InboxFilter/>
      <MessageInbox/>
        </div>
      <div className="hidden xl:block min-w-[312px] w-[312px]">
        <PaidFeatures />
      </div>
    </div>
  </div>
  );
};

export default ChartPage;
