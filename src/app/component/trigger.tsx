"use client"
import { motion } from "framer-motion"
import Image from "next/image"


function Trigger(){
    return(
       <div>
         <motion.div
        initial={{opacity: 0, scale: 0 , x:0}}
        whileInView={{opacity: 1, scale: 1, x:100}}
        transition={{duration: 0.6}}
        className="flex justify-center bg-blue-500 h-24 w-24"
        >

        </motion.div>
       </div>

        
    )
}
export default Trigger