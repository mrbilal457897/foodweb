import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"



function Navbar() {
  return (
    <div className='roboto py-3 drop-shadow-2xl bg-transparent flex justify-between items-center sticky z-50 top-0'>
        {/*Left Side */}
        <div className='flex ml-40  '>
            <h1 className='font-bold text-2xl  '>BILAL <span className='text-[#d4af37] '>FOOD</span></h1>
            <hr className='ml-5 h-8 w-0.5 bg-black '/>
        </div>
       
         {/*Right Side */}
         <div className=''>
         <ul className='  text-[15px] my-4 text-white flex items-start gap-4 mr-16 '>
                <Link className="hover:underline hover:underline-offset-4 hover:text-yellow-300 font-bold " href="#hero"><li>Home</li></Link> 
                <Link className="hover:underline hover:underline-offset-4 hover:text-[#d4af37] font-semibold" href={"#about"}><li>About</li></Link>
                <Link className="hover:underline hover:underline-offset-4 hover:text-[#d4af37] font-semibold" href="#menu"><li>Menu</li></Link>
                <Link className="hover:underline hover:underline-offset-4 hover:text-[#d4af37] font-semibold" href="#shop"><li>Shop</li></Link>
                <Link className="hover:underline hover:underline-offset-4 hover:text-[#d4af37] font-semibold" href={'#contact'}><li>Contact</li></Link>
                
            </ul>   
           
         </div>
         <Button className='mr-6 rounded-3xl bg-[#d4af37] text-white'>Book a Table</Button>
    </div>
  )
}

export default Navbar