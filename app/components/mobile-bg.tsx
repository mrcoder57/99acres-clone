import React from "react";
import Image from "next/image";
const MobileBackground = () => {
  return (
    <div className="relative lg:hidden flex w-full h-[310px] mt-2 mx-3 overflow-hidden">
      <div className=" rounded-lg ">
        <Image
          src="/mobileback.jpeg"
          alt="backgrounnd"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default MobileBackground;
