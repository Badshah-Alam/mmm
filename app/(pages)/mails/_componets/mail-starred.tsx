import React from 'react'
import { LuUserSearch } from "react-icons/lu";
import { FcSearch } from "react-icons/fc";
const MailStarRed = () => {
  return (
    <div>
         <div className="flex flex-col min-h-screen justify-center items-center text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <FcSearch className="text-7xl" />
                  </div>
                  <h2 className="mt-4 py-25 text-xl  font-bold">
                  You have no Starred Letters
                  </h2>
                  <p className="text-gray-500">{`Let's change that!`}</p>
                  <div className="mt-4 flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 cursor-pointer">
                    <p>Go to search</p>
                    <LuUserSearch />
                  </div>
                 </div>
    </div>
  )
}

export default MailStarRed