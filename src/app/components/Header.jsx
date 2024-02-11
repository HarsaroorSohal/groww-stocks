"use client";
import Search from "./SearchBar";
import Image from "next/image";
import Link from "next/link";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default function Header() {
  return (
    <div className="bg-black px-48 py-4">
      <div className="mx-auto flex flex-col items-center justify-between gap-2 lg:flex-row">
        <Link href={"/"}>
          <div className="flex items-center gap-4">
            <Image
              src="/groww.png"
              width={60}
              height={60}
              alt="groww image"
            ></Image>
            <div className="text-white text-[2rem] font-bold">GrowwStonks</div>
          </div>
        </Link>
        {/* <div className="flex flex-row gap-8 items-center"> */}
        <div className="w-fit-content items-center space-x-2">
          <Search placeholder="Search Stocks & ETFs"></Search>
        </div>
        {/* <div>
            <DarkModeSwitch></DarkModeSwitch>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
