"use client"
import { Button } from '@/components/ui/button'
import { SearchImg } from '@/data/search/search'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'


import { HiCircleStack, HiInformationCircle } from 'react-icons/hi2'
import { IoSend } from 'react-icons/io5'
import { MdMail } from 'react-icons/md'
import { PiChatCircleDotsLight,  } from 'react-icons/pi'

const MessageInbox = () => {
    const pathname = usePathname();
    const chartid = parseInt(pathname.split('/')[2], 10);
    const activeData = SearchImg[chartid] || SearchImg[1];
    if (!activeData) {
        return <div>Chart not found!</div>;
    }
    return (
        <div className='shadow-xl border-x rounded-md  w-full'>
            <div className='flex bg-white justify-between items-center px-4 py-2'>
                <div className='flex gap-2 items-center  w-full'>
                    <div className="relative">
                        <Image className="w-12 h-12 rounded-full" src={activeData.image} alt={activeData.image} width={60} height={60} />
                        <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <div className='w-full'>
                        <p className='text-dark-mmm font-semibold text-lg'>{activeData.name}</p>
                    </div>
                </div>
                <Button variant="secondary" size="secondary"  >
                    <MdMail className='text-xl' /> Change to   Email
                </Button>
            </div>
            <div className='bg-[#b7ddf3] h-[400px] py-20 gap-y-3 flex flex-col justify-center items-center'>
                {/* <div className='bg-[#D5E9F4] flex justify-center items-center w-[110px] h-[110px] rounded-full'>
                    <BsPhoneFlip className='text-6xl ' />
                </div>
                <p className='text-2xl font-semibold'>Dare to make a move</p>
                <div className='flex flex-col  items-center text-[#333333] text-base font-normal'>
                    <p>Wink for free or say hello to send a</p>
                    <p>ready text paid as our usual message.</p>
                    <div className='w-full flex gap-2 mt-3'>
                        <Button variant="secondary" size="secondary" className='w-full'>
                            <FaRegFaceGrinTongueWink className='text-xl' />
                            Wink
                        </Button>
                        <Button className='w-full h-11'>
                            <PiHandWavingDuotone />
                            Say hello
                        </Button>
                    </div>
                </div> */} 

                <div>
                    <p className='text-center text-white text-sm mb-2'>Dec 18, 2024</p>
                    <div className='bg-white p-3 rounded-lg mx-10'>
                        <p>Sakir I love it when men give me likes, but I love it even more when they start chatting with me. Do you want to talk to me?</p>
                        <p className='text-xs text-[#8f8f8f] mt-1'>9:37</p>
                    </div>
                </div>
                <div>
                    <p className='text-center text-white text-sm mb-2'>Dec 18, 2024</p>
                    <div className='bg-white p-3 rounded-lg mx-10'>
                        <p>HAVE YOU NOTICED HOW SOMETIMES SIMPLE THINGS MAKE US HAPPY? 🔥 Like this message. What makes you happy? 😊</p>
                        <p className='text-xs text-[#8f8f8f] mt-1'>9:37</p>
                    </div>
                </div>

            </div>

            <div>
                <div className='flex gap-2 px-2 py-3'>
                    <textarea className='w-full h-16 rounded-md shadow-md bg-[#f5f5f5] px-4 pt-1 pb-2 outline-none' placeholder='Type your message...' />
                    <Button className='h-16'>Send <IoSend /></Button>
                </div>



                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-2 ">
                    <Button variant="secondary" size="secondary" className="w-full h-11 ">
                        <PiChatCircleDotsLight /> <p>{`Let's talk`}</p>
                    </Button>
                    <Button variant="secondary" size="secondary" className="w-full h-11 ">
                        <PiChatCircleDotsLight /> Stickers
                    </Button>
                    <Button variant="secondary" size="secondary" className="w-full h-11 ">
                        <PiChatCircleDotsLight /> Send media
                    </Button>
                    <div className="w-full rounded-md flex items-center gap-1 justify-center text-xs bg-[#FAFAFA]">
                        <input type="checkbox" checked={true} className="h-5 w-5" /> Send with Enter
                    </div>
                </div>


                <div className='flex flex-col gap-y-2 py-3 px-2 lg:flex-row jyustify-between items-center gap-x-8 bg-[#FAFAFA] mt-4'>
                    <div className='flex justify-between items-center w-full '>
                        <div className='flex flex-col gap-y-1 px-2 py-1'>
                            <p className='text-[#333333] font-semibold text-xs'>Attachment</p>
                            <p className='text-xs text-[#333333] font-normal'>10 credits/picture</p>
                        </div>
                        <div className='flex flex-col gap-y-1 px-2 py-1'>
                            <p className='text-[#333333] font-semibold text-xs'>Sticker</p>
                            <p className='text-xs text-[#333333] font-normal'>5 credits/sticker</p>
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <div className='w-full h-full flex '>
                            <Button variant="secondary" className='h-auto' ><HiInformationCircle /></Button>
                            <div className='flex flex-col bg-[#FFF4E9] gap-y-1 px-2 py-1 rounded-r-md'>
                                <p className='text-[#333333] font-semibold text-xs'>Chat</p>
                                <p className='text-xs text-[#333333] font-normal'>2 credits/min</p>
                            </div>
                        </div>
                        <Button variant="secondary" className='h-auto' ><HiCircleStack />  Get creadits</Button>
                    </div>

                </div>





            </div>
        </div>

    )
}

export default MessageInbox