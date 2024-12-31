import { BiMessageDetail, BiSolidCoinStack } from "react-icons/bi";
import { FaNewspaper } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { MdPersonSearch } from "react-icons/md";
import { RiContactsBook2Fill } from 'react-icons/ri';
interface MenuItem {
    id: number;
    label: string;
    icon: React.ReactNode;
    notificationCount?: number; 
    url?: string | undefined;
  }

export const MenuItems: MenuItem[] = [
    { id: 1, label: "Search", url:"/search" , icon: <MdPersonSearch className=" text-xl" /> },
    { id: 2, label: "Chat", url:"/chat" , icon: <BiMessageDetail className="text-xl" />, notificationCount: 0 },
    { id: 3, label: "Email", url:"/mails" , icon: <IoMdMail className="text-xl" /> },
    { id: 4, label: "feeds", url:"news-feed" , icon: <FaNewspaper className="text-xl" /> },
    { id: 5, label: "People", url:"/people" , icon: <RiContactsBook2Fill className="text-xl" /> },
    { id: 6, label: "Credits", url:"/credits" , icon: <BiSolidCoinStack className="text-xl" /> },
  ];