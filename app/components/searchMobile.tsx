import React from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const Searchmobile = () => {
  return (
    <div className="absolute lg:hidden  top-[235px] left-[3vh] shadow-xl flex flex-col w-[320px] h-[7vh] rounded-xl bg-white">
 <div className=" flex flex-row items-center mx-3 gap-16 mt-2">
          <div className=" flex flex-row gap-4">
          <Image src="/search.svg" alt="search" width={20} height={20}/>
          <input type="text" name="" id="" placeholder=" Search Residential " className= {` ${openSans.className} w-[93px] h-10 focus:outline-none text-xs `}/>
          </div>
          <div className=" flex flex-row gap-2">
          <div className=" h-9 w-9 items-center justify-center bg-blue-100 rounded-full p-2 hover: cursor-pointer">
              <Image
                src="/location.svg"
                alt="icons"
                height={20}
                width={20}
              />
            </div>
            <div className=" h-9 w-9 items-center justify-center bg-blue-100 rounded-full p-2 hover: cursor-pointer">
              <Image
                src="/mic.svg"
                alt="icons"
                height={20}
                width={20}
              />
            </div>
                        <div className=" h-9 w-9 items-center justify-center bg-blue-100 rounded-full p-2 hover: cursor-pointer">
              <Image
                src="/search.svg"
                alt="icons"
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Searchmobile;
