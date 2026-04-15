"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { PiChartLine } from "react-icons/pi";
import { RiHome2Line } from "react-icons/ri";

const Navbar = () => {
  const pathName = usePathname();
//   console.log(pathName);
  const links = (
    <>
    
      <Link
        href={"/"}
        className={`flex items-center gap-1 ${pathName === "/" ? "bg-[#244D3F] text-white font-semibold px-3 py-1 rounded-xl " : ""}`}
      >
        <RiHome2Line /> Home
      </Link>
      <Link
        href={"/timeline"}
        className={`flex items-center gap-1 ${pathName === "/timeline" ? "bg-[#244D3F] text-white font-semibold px-3 py-1 rounded-xl " : ""}`}
      >
        <IoMdTime />
        Timeline
      </Link>
      <Link
        href={"/stats"}
        className={`flex items-center gap-1 ${pathName === "/stats" ? "bg-[#244D3F] text-white font-semibold px-3 py-1 rounded-xl " : ""}`}
      >
        <PiChartLine />
        Stats
      </Link>
    </>
  );
  return (
    <div>
      <div className="bg-gray-300 ">
        <div className="max-w-[1440px] w-[100%] mx-auto p-2 flex justify-between items-center gap-11">
          <Link href={"/"}>
            <div>
              <span className="font-semibold">Keen</span>Keeper
            </div>
          </Link>
          <div className="flex justify-between items-center gap-5">{links}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
