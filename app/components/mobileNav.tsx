import React from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const MobileNav = () => {
  return (
    <div className=" flex lg:hidden flex-row items-center justify-between mx-3 mt-3">
      <div className="flex flex-row gap-5 items-center justify-center">
        <div className="flex hover:cursor-pointer items-center">
          <Image src="/menu-mob.svg" alt="icons" height={28} width={28} />
        </div>
        <div className="h-9 w-24 flex items-center">
          <Image
            src="/99acresLogo.webp"
            alt="99acres"
            height={36}
            width={105}
          />
        </div>
      </div>
      <div className=" items-center justify-center">
          <button
            className={`  h-8 text-[14px] font-semibold bg-white rounded-lg items-center  text-[#0078db] ${openSans.className} `}
          >
            Post property
            <span className=" w-11 h-4 custom-gradient  text-white items-center m-1 text-[9px] rounded-md p-1 bg-green-600 mx-1 animate-pulse">
              free{" "}
            </span>
          </button>
        </div>
    </div>
  );
};

export default MobileNav;
