import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"




function Navbar() {
  return (
    <div className=' roboto py-3 drop-shadow-2xl bg-transparent flex justify-between items-center sticky z-50 top-0'>
        {/*Left Side */}
        <div className='flex ml-40  '>
            <h1 className='font-bold lg:text-2xl md:text-xl sm:text-[19px] text-[14px]  '>BILAL <span className='text-[#d4af37] '>FOOD</span></h1>
            <hr className='ml-5 h-9 w-0.5 bg-white '/>
            <hr className='ml-2 h-9 w-0.5 font-extralight bg-white '/>
        </div>
       
         {/*Right Side */}
         <div className='md:block hidden'>
         <ul className='text-[15px] my-4 text-white flex items-start gap-4 mr-16 '>
                <Link className="hover:underline hover:underline-offset-4 hover:text-yellow-300 font-bold " href="#hero"><li>Home</li></Link> 
                <Link className="hover:underline hover:underline-offset-4 hover:text-[#d4af37] font-semibold" href={"#about"}><li>About</li></Link>
                <Link className="hover:underline hover:underline-offset-4 hover:text-[#d4af37] font-semibold" href="#menu"><li>Menu</li></Link>
                <Link className="hover:underline hover:underline-offset-4 hover:text-[#d4af37] font-semibold" href="#shop"><li>Shop</li></Link>
                <Link className="hover:underline hover:underline-offset-4 hover:text-[#d4af37] font-semibold" href={'#contact'}><li>Contact</li></Link>
                
            </ul>   
           
         </div>
         <Sheet >
  <SheetTrigger className='text-white  md:hidden'><Menu /></SheetTrigger>
  <SheetContent className='grid  grid-cols-1  items-center text-white'>
  <ul className=' '>
                <Link className="flex justify-center text-[25px]  hover:text-[#d4af37] font-semibold " href="#hero"><li>Home</li></Link>
                <Link className="flex justify-center text-[25px]  hover:text-[#d4af37] font-semibold" href={"#about"}><li>About</li></Link>
                <Link className="flex justify-center text-[25px]  hover:text-[#d4af37] font-semibold" href="#menu"><li>Menu</li></Link>
                <Link className="flex justify-center text-[25px]  hover:text-[#d4af37] font-semibold" href="#shop"><li>Shop</li></Link>
                <Link className="flex justify-center text-[25px]  hover:text-[#d4af37] font-semibold" href={'#contact'}><li>Contact</li></Link>
                
                
            </ul> 
    <SheetHeader>
      
    </SheetHeader>
  </SheetContent>
</Sheet>

         
         <div>
         <Button className=' mr-6 rounded-3xl bg-[#d4af37] text-white'>Book a Table</Button>
         </div>
    </div>
    
  )
}

export default Navbar