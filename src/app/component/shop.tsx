"use client"
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion";

const Scroll: Variants = {
  hidden: {
    opacity: 0,
    
    x: 0,

  },
  show: {
    opacity: 1,
    
    x: 30,
    transition: {
      staggerChildren: 0.6,
      duration: 1.5,
    },
  },
};


function Shop() {
  return (
    <div className="roboto h-screen flex justify-between items-center " id="shop">
      {/*Left Side */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={Scroll}
        className=" justify-between   ">
        <motion.h1
          className="text-[40px] font-semibold mt-16 ml-6 text-white">Online Burger 
          <span className="text-[#d4af37]"> Shop</span></motion.h1>

        <motion.p
          variants={Scroll}
          className="w-[560px] mt-16  text-gray-400">
          Welcome to Burger Heaven: Craving a juicy, mouth-watering burger without leaving the comfort of your home? At Burger Haven,
           we have redefined the burger experience with a fresh, convenient, and delicious online ordering system.
            Our menu boasts a tantalizing selection of gourmet burgers made from 100% premium, locally-sourced beef,
             and a variety of plant-based options for all tastes and dietary preferences. <br />
                Simply visit our website, browse our menu, and place your order in a few easy clicks.
              Whether you are in the mood for a classic cheeseburger or an adventurous new flavor, 
              Burger Haven is your go-to spot for burger bliss.
        </motion.p>

        <Button className="mx-auto mb-20 ml-10 mt-16 justify-center text-white rounded-full bg-[#d4af37] hover:bg-[#d4af04]">Download App</Button>
      </motion.div>
      {/*Right Side */}
      <motion.div
        initial={{ opacity: 0,rotate:0, x: 0 }}
        whileInView={{ opacity: 1, rotate: 36, x: -30 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={require("../../../public/plate.png")}
          width={400}
          height={400}
          alt="burger"
          className="h-[480px] w-[500px] drop-shadow-3xl"
        />
      </motion.div>
      
    </div>
  );
}

export default Shop;
