"use client"
import Image from 'next/image'
import React from 'react'
import { motion, Variants } from "framer-motion";

const Scroll: Variants = {
    hidden: {
        opacity: 0,
        y: 0,

    },
    show: {
        opacity: 1,
        y: 70,
        transition: {
            staggerChildren: 1,
            duration: 3,
        },
    },
};


function Menu() {
    return (
        <motion.div
        className='roboto'
            id='menu'
            initial="hidden"
            whileInView="show"
            variants={Scroll}
        >

            <motion.h1 className='text-[40px] font-semibold text-white text-center'>Your <span
                className='text-[#d4af37]'> Menu</span></motion.h1>
            <motion.p className='w-[520px] mx-auto leading-relaxed text-base text-gray-400'>Tasty, delicious, and has me craving more on the first bite. to Juicy, mouthwatering, tasty,
                and everything you had ever want to savor.</motion.p>
            <motion.div className='grid grid-cols-3 justify-center items-center h-screen px-2 py-6 ml-32'>



                <motion.div className=' flex relative bg-slate-600 h-[220px] w-[240px] '>
                    <Image
                        src={require("../../../public/hamburger.jpg")}
                        width={300}
                        height={300}
                        alt='gallery'
                        className='absolute h-full w-full '

                    />
                    <motion.div className='px-2 py-10 relative z-10  w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-60  '>

                        <motion.h1 className='title-font tracking-widest relative
                          text-indigo-700 text-base font-bold hover:opacity-60 focus:bg-slate-100'>Double Decker Burger</motion.h1>
                        <motion.p className='title-font tracking-widest relative
                          text-black text-[12px] font-bold hover:opacity-60 focus:bg-slate-100'>This homemade Double Decker
                            Burger has two grilled beef patties layered up with all the classic fixings and a secret sauce on top. Its perfect for summer grilling </motion.p>
                    </motion.div>
                </motion.div>

                <motion.div className=' flex relative bg-slate-600 h-[220px] w-[240px] '>
                    <Image
                        src={require("../../../public/seed.jpg")}
                        width={300}
                        height={300}
                        alt='gallery'
                        className='absolute h-full w-full '

                    />
                    <motion.div className='px-2 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-60'>

                        <motion.h1 className='title-font tracking-widest relative text-indigo-700 text-base font-bold hover:opacity-40 focus:bg-slate-100'>Black Seed Burger</motion.h1>
                        <motion.p className="title-font tracking-widest relative text-black text-[11px] font-bold hover:opacity-40 focus:bg-slate-100">This soft, springy bun is unique and original thanks
                            to its cross shape and sprinkling of black sesame seeds. Its hand-crafted,
                            rustic appearance is sure to delight your customers. A bun with a strong personality
                            to support your most inspired creations.

                        </motion.p>
                    </motion.div>
                </motion.div>

                <motion.div className=' flex relative bg-slate-600 h-[220px] w-[240px] '>
                    <Image
                        src={require("../../../public/mayo.jpg")}
                        width={300}
                        height={300}
                        alt='gallery'
                        className='absolute h-full w-full '

                    />
                    <motion.div className='px-2 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-50'>

                        <motion.h1 className='title-font tracking-widest relative text-indigo-700 text-base font-bold hover:opacity-40 focus:bg-slate-100'>Mayo Burger</motion.h1>
                        <motion.p className='title-font tracking-widest relative text-black text-[11px] font-bold hover:opacity-40 focus:bg-slate-100'>A burger is a patty 
                            of ground beef grilled and placed between two halves of a bun. 
                            Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world </motion.p>
                    </motion.div>
                </motion.div>

                <motion.div className=' flex relative bg-slate-600 h-[220px] w-[240px] '>
                    <Image
                        src={require("../../../public/shawarma.jpg")}
                        width={300}
                        height={300}
                        alt='gallery'
                        className='absolute h-full w-full '

                    />
                    <div className='px-2 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-60'>

                        <motion.h1 className='title-font tracking-widest relative text-indigo-700 text-base font-bold hover:opacity-40 focus:bg-slate-100'>Shawarma</motion.h1>
                        <motion.p className='title-font tracking-widest relative text-balck text-[11px] font-bold 
                        hover:opacity-40 focus:bg-slate-100'>shawarma, popular street food in the Middle East, which
                         originated in Turkey and is made of spit-roasted layers of lamb, beef, or other meat that are 
                         sliced and often wrapped in or served with pita. Shawarma is similar to Greek gyros, seasoned with more spices and the latter with more herbs</motion.p>
                    </div>
                </motion.div>

                <motion.div className=' flex relative bg-slate-600 h-[220px] w-[240px] '>
                    <Image
                        src={require("../../../public/french.jpg")}
                        width={300}
                        height={300}
                        alt='gallery'
                        className='absolute h-full w-full '

                    />
                    <div className='px-2 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-60'>

                        <motion.h1 className='title-font tracking-widest relative text-indigo-700 text-base font-bold hover:opacity-40 focus:bg-slate-100'>Chilli Cheese Burger</motion.h1>
                        <motion.p className='title-font tracking-widest relative text-black text-[11px] font-bold hover:opacity-40 focus:bg-slate-100'>Our Chilli Cheese Double burger is a spicy hot favourite. It features two 100% pure beef patties topped with nacho cheese sauce, spicy hot sauce, jalapeño pieces and a slice of cheese on a freshly toasted bun.</motion.p>
                    </div>
                </motion.div>

                <motion.div className=' flex relative bg-slate-600 h-[220px] w-[240px] '>
                    <Image
                        src={require("../../../public/red.jpg")}
                        width={300}
                        height={300}
                        alt='gallery'
                        className='absolute h-full w-full '

                    />
                    <motion.div className='px-2 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-60'>

                        <motion.h1 className='title-font tracking-widest relative text-indigo-700 text-base font-bold hover:opacity-40 focus:bg-slate-100'>Dynamic Lava Burger</motion.h1>
                        <motion.p className='title-font tracking-widest relative text-black text-[11px] 
                        font-bold hover:opacity-40 focus:bg-slate-100'>Juicy, big, loaded with toppings of my choice.
                        High quality beef medium to well with cheese and bacon on a multigrain bun.A huge single or triple burger 
                            with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise</motion.p>
                    </motion.div>
                </motion.div>


            </motion.div>
        </motion.div>
    )
}

export default Menu