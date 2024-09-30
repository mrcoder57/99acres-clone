import React from "react";
import Image from "next/image";
import { icons, navLinks } from "../utils/constants";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const Navbar = () => {
  return (
    <div className=" flex flex-row lg:mx-12 mx-3 items-center justify-between mt-4 z-[100000] ">
      <div className=" flex flex-row gap-4 items-center">
        <div className=" h-9 w-24">
          <Image src="/logo.png" alt="99acres" height={36} width={105} />
        </div>
        <p
          className={` mt-[-4px] font-semibold text-[14px] hidden lg:block text-white ${openSans.className} `}
        >
          {" "}
          All India
        </p>
      </div>
      <div className=" lg:flex flex-row gap-5 hover:cursor-pointer hidden  ">
        {navLinks.map((link, index) => (
          <a
            className={` mx-2 first-letter:capitalize font-semibold  text-[14px] text-[#909090] hover:text-white ${openSans.className}  `}
            key={index}
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className=" flex flex-row gap-5 items-center justify-center">
        <div className=" items-center justify-center">
          <button
            className={` w-40 h-8 text-[14px] font-semibold bg-white rounded-lg items-center lg:block hidden text-black ${openSans.className} `}
          >
            Post property
            <span className=" w-11 h-4 custom-gradient  text-white items-center m-1 text-[9px] rounded-md p-1 bg-green-600 mx-1 animate-pulse">
              free{" "}
            </span>
          </button>
         
        </div>
        <div className=" flex flex-row gap-3 items-center">
        <div className=" h-7 w-7 items-center justify-center bg-white rounded-full p-1 hover: cursor-pointer">
              <Image
                src="/headphone.svg"
                alt="icons"
                height={20}
                width={20}
              />
            </div>
            <div className=" h-7 w-7 items-center justify-center bg-white rounded-full p-1 hover: cursor-pointer">
              <Image
                src="/people.svg"
                alt="icons"
                height={20}
                width={20}
              />
            </div>
           
          </div>
          <div className=" hover:cursor-pointer">
          <Image
                src="/Menu.svg"
                alt="icons"
                height={28}
                width={28}
              />
              </div>
      </div>
    </div>
  );
};

export default Navbar;
