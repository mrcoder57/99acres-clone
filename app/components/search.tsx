"use client";
import React, { useState } from "react";
import { searchFilters } from "../utils/constants";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const Search = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index:number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative hidden mx-auto top-[226px] shadow-xl transform -translate-y-1 lg:flex flex-col w-[994px] h-[135px] rounded-xl bg-white">
      <div className="flex  flex-row gap-14 items-center justify-center">
        {searchFilters.map((filter, index) => (
          <a
            key={index}
            onClick={() => handleClick(index)}
            className={`first-letter:capitalize mt-6 hover:cursor-pointer text-[16px] font-semibold ${
              openSans.className
            } 
              ${
                activeIndex === index
                  ? "text-[#041533] font-bold pb-1 border-b-2 border-blue-500"
                  : "text-[#42526E]"
              }`}
          >
            {filter.name}
          </a>
        ))}
      </div>
      <hr className="mt-4" />
      <div className="flex flex-row items-center gap-2">
        <div className=" w-40 items-center justify-center">
          <p
            className={` text-[14px] text-[#42526E] font-semibold text-center mt-[-4px]  ${openSans.className}`}
          >
            Residential Project{" "}
          </p>
        </div>
        <div className="w-[1px] h-[68px] bg-gray-300"></div>
        <div className=" flex flex-row items-center mx-3 gap-36">
          <div className=" flex flex-row gap-4">
          <Image src="/search.svg" alt="search" width={20} height={20}/>
          <input type="text" name="" id="" placeholder=" Search Residential " className= {` ${openSans.className} w-80 h-10 focus:outline-none text-xs `}/>
          </div>
          <div className=" flex flex-row gap-5">
          <div className=" flex h-9 w-9 items-center justify-center bg-blue-100 rounded-full p-2 hover: cursor-pointer">
              <Image
                src="/location.svg"
                alt="icons"
                height={20}
                width={20}
              />
            </div>
            <div className=" flex h-9 w-9 items-center justify-center bg-blue-100 rounded-full p-2 hover: cursor-pointer">
              <Image
                src="/mic.svg"
                alt="icons"
                height={20}
                width={20}
              />
            </div>
            <button className={ `w-20 h-9 bg-[#0078db] items-center justify-center ${openSans.className} font-bold text-white text-[14px] rounded-md`}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
