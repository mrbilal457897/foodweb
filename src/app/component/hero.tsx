"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const Scroll: Variants = {
  hidden: {
    opacity:0,
    x: 0,
    
  },
  show: {
    opacity: 1,
    x: 40,
    transition: {
    staggerChildren: 0.6,
    duration: 1.5,
    },
  },
};

function Hero() {

const [change , setChange]= useState ("default")

  return (
    <div className="roboto flex justify-between pt-56 items-center h-screen" id="hero">
      {/*Left Side */}

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={Scroll}
        className="mb-48"
      >
        <motion.h1
          variants={Scroll}
          className="text-[32px] sm:text-[42px] md:text-[52px] items-start space font-semibold lg:text-[52px] text-white  "
        >
          Ready for a<span className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] font-bold text-[#d4af37]"> Juicy </span> one
        </motion.h1>

        <motion.p variants={Scroll} className=" ml-2 lg:w-[560px] md:w-[540px] sm:w-[400px] w-[310px] 
        text-[12px] lg:text-base md:text-[14px] text-gray-400">
          Delicious burgers made from high-quality Fresh and Halaal beef and
          chicken, carefully processed to create a juicy and flavorful taste
        </motion.p>

        <Button
          variant={"destructive"}
          className="mt-10 ml-14  rounded-full bg-[#d4af37] hover:bg-[#d4af04] text-white"
        >
          Order now
        </Button>

        <Link href={"#menu"}>
        <Button
          variant={"destructive"}
          className=" mt-10 ml-8 rounded-full bg-[#d4af37] hover:bg-[#d4af04] text-white"
        >
          See menu
        </Button>
        </Link>

        <div className="flex justify-center  items-center py-20 ">
 
        <div className="lg:h-32 lg:w-48 md:h-28 md:w-44 sm:h-24 sm:w-40 h-20 w-36 ">
          <Image  
          src={require("../../../public/zinger.png")}
          width={300}
          height={300}
          alt="zinger"
          className="lg:w-[90px] lg:h-[100px] md:w-[70px] md:h-[80px] sm:w-[60px] sm:h-[70px] w-[55px] h-[65px] 
          lg:hover:h-[105px] lg:hover:w-[95px] md:hover:h-[90px] md:hover:w-[80px] sm:hover:h-[75px] sm:hover:w-[65px]
           hover:h-[70px] hover:w-[60px] "
          />
          <p className="lg:text-[16px] md:text-[15px] sm:text-[13px] text-[12px] font-semibold text-center text-[#d4af37] ">Crispy Zinger Burger</p>
        </div>
        
        <div className="lg:h-32 lg:w-48 md:h-28 md:w-44 sm:h-24 sm:w-40 h-20 w-36 ">
          <Image  
          src={require("../../../public/bl.png")}
          width={300}
          height={300}
          alt="zinger"
          className="lg:w-[90px] lg:h-[100px] md:w-[70px] md:h-[80px] sm:w-[60px] sm:h-[70px] w-[55px] h-[65px] 
          lg:hover:h-[105px] lg:hover:w-[95px] md:hover:h-[90px] md:hover:w-[80px] sm:hover:h-[75px] sm:hover:w-[65px]
           hover:h-[70px] hover:w-[60px]"
          />
         <p className="lg:text-[16px] md:text-[15px] sm:text-[13px] text-[12px]  font-semibold text-center text-[#d4af37]">Black Seed Burger</p>
        </div>
        <div className="lg:h-32 lg:w-48 md:h-28 md:w-44 sm:h-24 sm:w-40 h-20 w-36">
          <Image  
          src={require("../../../public/s2.png")}
          width={300}
          height={300}
          alt="zinger"
          className="lg:w-[90px] lg:h-[100px] md:w-[70px] md:h-[80px] sm:w-[60px] sm:h-[70px] w-[55px] h-[65px] 
          lg:hover:h-[105px] lg:hover:w-[95px] md:hover:h-[90px] md:hover:w-[80px] sm:hover:h-[75px] sm:hover:w-[65px]
           hover:h-[70px] hover:w-[60px]"
          />
          <p className="lg:text-[16px] md:text-[15px] sm:text-[13px] text-[12px] font-semibold text-center text-[#d4af37] ">Shawarma</p>
        </div>

        </div>
      </motion.div>

      {/*Right Side */}

      <div className="relative lg:h-[420px] lg:w-[470px] md:h-[370px] md:w-[420px] sm:h-[320px] sm:w-[370px]
         h-[170px] w-[330px] drop-shadow-full flex justify-center flex-wrap mb-48">
      <Image
        src={require("../../../public/b2.png")}
        width={300}
        height={300}
        alt="Burger"
        className="relative flex-wrap justify-start "
      />
      </div>
    </div>
  );
}

export default Hero;
