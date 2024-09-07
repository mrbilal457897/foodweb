import React from 'react';
import Image from "next/image";

function Back() {
  return ( 
    <div className=''>
        <Image src={require("../../../public/back.jpg")} alt="" width={300} height={300} />
    </div>
  )
        
  
}

export default Back