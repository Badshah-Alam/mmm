
import React from 'react'

import SearchFilter from './search-filter'

const SearchNav = () => {
    return (
        <div className='flex justify-between items-end lg:items-center shadaw-xl  bg-[#ffffff] px-4 py-3'>
            <div className='flex flex-col lg:flex-row   gap-x-4 items-start lg:items-center'>
                <p className='text-xl text-[#525252] font-semibold'>Profiles</p>
                <div className='flex '>
                    <p className='text-[#525252] px-4 py-2 rounded-full text-base font-semibold'>All</p>
                    <p className='text-[#f77709] bg-[#fff4e9] px-4 py-2 rounded-full text-base font-semibold'>Online</p>
                    <p className='text-[#525252] px-4 py-2 rounded-full text-base font-semibold'>Following</p>
                </div>
            </div>
            <SearchFilter/>
        </div>
    )
}

export default SearchNav 