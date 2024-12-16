import SearchCart from "./(pages)/search/_components/search-cart";
import SearchNav from "./(pages)/search/_components/search-nav";
import PaidFeatures from "./_components/paid-features/paid-features";


export default function Home() {
  return (
    <div className="max-w-[1560px] min-h-screen w-full lg:w-[81%] lg:py-4  mx-auto">
    
    <div className="flex justify-between items-start w-full ">
      <div className="w-full flex flex-col lg:mr-4">
         <SearchNav />
        <SearchCart />
        </div>
      <div className="hidden lg:block w-[312px]">
        <PaidFeatures />
      </div>
    </div>
  </div>
  );
}
