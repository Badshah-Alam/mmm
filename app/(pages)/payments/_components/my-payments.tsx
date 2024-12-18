
import Image from "next/image";

const Payment = () => {
  return (
    <div className="mb-4 lg:mb-0 ">
      <p className=" text-[#333] font-semibold text-[24px] py-2">My Payments</p>
      <div className="flex justify-between gap-8  ">
        <div className=" w-full shadow-md bg-[#fff]  ">
            <div>
          <div className="flex  gap-4 pl-4 justify-start items-center border-b-2 py-4">
            <div className="text-[#525252] text-2xl">
            
            </div>
            <div>
              <p className="text-[#525252] font-semibold text-xl">
                Billing history
              </p>
            </div>      
          </div>
        </div>
        <div className=" flex justify-center items-center my-16  w-full ">
           <div className="flex flex-col justify-center items-center ">
            <Image src="https://bestdates.com/static/img/svg/empty/emptyBillingHistory.svg" alt="billing" width={244} height={244} className=" h-[150px] w-[150px] lg:h-[244px] lg:w-[244px]  "/>
            <p className="text-[#333] text-[20px]  font-semibold mt-4 text-center mx-2">No billing history</p>
            <p className="text-[#525252] text-center mx-2 ">Your transactions will appear here.</p>
           </div>

            </div>
            </div>
     
      </div>
    </div>
  );
};
export default Payment;