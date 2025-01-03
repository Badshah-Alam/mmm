
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { RiVipDiamondFill } from "react-icons/ri";
interface PaidItem{
    title: string,
    icon: React.ReactNode
}
export const PaidItem:PaidItem[]=[{title: "Chat with anyone you like", icon: <IoChatbubbleEllipsesOutline className='text-xl'/>},
    {title: "Send Virtual Gifts", icon: <RiVipDiamondFill className='text-xl'  style={{color: "#55a6ee"}}/>},
    {title: "Respond in   Message" , icon: <MdMail className="text-xl" style={{color: "fad1a8"}} />}];


  
