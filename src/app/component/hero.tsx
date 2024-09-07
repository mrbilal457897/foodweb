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
    x: 50,
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
          className="items-start space font-semibold text-[65px] text-white  "
        >
          Ready for a<span className="text-[62px] font-bold text-[#d4af37]"> Juicy </span> one
        </motion.h1>

        <motion.p variants={Scroll} className=" ml-2 w-[560px] text-gray-400">
          Delicious burgers made from high-quality Fresh and Halaal beef and
          chicken, carefully processed to create a juicy and flavorful taste
        </motion.p>

        <Button
          variant={"destructive"}
          className="mt-10 ml-14 rounded-full bg-[#d4af37] hover:bg-[#d4af04] text-white"
        >
          Order now
        </Button>

        <Link href={"#menu"}>
        <Button
          variant={"destructive"}
          className="mt-10 ml-8 rounded-full bg-[#d4af37] hover:bg-[#d4af04] text-white"
        >
          See menu
        </Button>
        </Link>

        <div className="flex justify-center  items-center py-20 mx-auto  gap-4">
 
        <div className="h-32 w-48  rounded-3xl">
          <Image  
          src={require("../../../public/zinger.png")}
          width={300}
          height={300}
          alt="zinger"
          className="w-[90px] h-[100px] hover:h-[105px] hover:w-[95px] "
          />
          <p className="font-semibold text-center text-[#d4af37] ">Crispy Zinger Burger</p>
        </div>
        
        <div className="h-32 w-48  rounded-3xl">
          <Image  
          src={require("../../../public/bl.png")}
          width={300}
          height={300}
          alt="zinger"
          className="w-[90px] h-[100px] hover:h-[105px] hover:w-[95px]"
          />
         <p className="font-semibold text-center text-[#d4af37]">Black Seed Burger</p>
        </div>
        <div className="h-32 w-48  rounded-3xl">
          <Image  
          src={require("../../../public/s2.png")}
          width={300}
          height={300}
          alt="zinger"
          className="w-[90px] h-[100px] hover:h-[105px] hover:w-[95px]"
          />
          <p className=" font-semibold text-center text-[#d4af37] ">Shawarma</p>
        </div>

        </div>
      </motion.div>

      {/*Right Side */}

      <div className="flex justify-center mb-48">
      <Image
        src={require("../../../public/b2.png")}
        width={300}
        height={300}
        alt="Burger"
        className="h-[420px] w-[470px] drop-shadow-full"
      />
      </div>
    </div>
  );
}

export default Hero;
