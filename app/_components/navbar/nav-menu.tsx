
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,

  
  DropdownMenuSeparator,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { CgProfile } from "react-icons/cg"

export function NavMenu() {
  return (
    <DropdownMenu  >
      <DropdownMenuTrigger  asChild>
      <DropdownMenuTrigger  asChild>
        <div className='flex flex-col justify-center items-center py-4 w-[75px] xl:w-[90px] gap-y-1 cursor-pointer'>
          <CgProfile className='text-4xl text-[#aeadb3]' />
          <p className='hidden lg:block text-sm xl:text-base font-semibold text-[#5e6266]'>My profile</p>
        </div>
      </DropdownMenuTrigger>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56  ">
       
        <DropdownMenuSeparator className="p-0" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="py-2 font-semibold">
           
            <Link href="/profile">Your Profile</Link>
          
          </DropdownMenuItem>
          <DropdownMenuItem className="py-2 font-semibold">
         
            <Link href="/settings">  Settings</Link>
        
          </DropdownMenuItem>
          <DropdownMenuItem className="py-2 font-semibold">
          
            <Link href="/payments">    My Payments</Link>
         
          </DropdownMenuItem>
          <DropdownMenuItem className="py-2 font-semibold text-orange-mmm">
         
        <Link href="/logout">Log out</Link> 

          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

