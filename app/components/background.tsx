import React from 'react';
import Image from 'next/image';

const Background = () => {
  return (
    <div className="absolute w-full lg:h-[45vh] h-[50vh] z-0 hover:cursor-pointer overflow-hidden group ">
      <Image 
        src="/background.jpg" 
        alt="background" 
        layout="fill" 
        objectFit="cover" 
        className="transition-transform duration-300 ease-in-out transform group-hover:scale-110" 
        priority 
      />
    </div>
  );
}

export default Background;
