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
    x: -30,
    transition: {
      staggerChildren: 0.6,
      duration: 1.5,
    },
  },
};


function About() {
  return (
    <div className="roboto h-screen flex justify-between " id="about">
      {/*Left Side */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 30 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={require("../../../public/burger2.png")}
          width={400}
          height={400}
          alt="burger"
          className="h-[520px] w-[510px] drop-shadow-3xl"
        />
      </motion.div>
      {/*Right Side */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={Scroll}
        className=" justify-between   ">
        <motion.h1
          className="text-[40px] font-semibold mt-16 mr-6 text-white">Lets some talk About <br />BILAL <span className="text-[#d4af37]">FOOD</span></motion.h1>

        <motion.p
          variants={Scroll}
          className="w-[560px] mt-2 p-10 text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </motion.p>

        <Button className="mx-auto mb-20 mr-14 justify-center rounded-full bg-[#d4af37] hover:bg-[#d4af04]">Read more</Button>
      </motion.div>
    </div>
  );
}

export default About;
