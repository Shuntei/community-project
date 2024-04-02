import React from "react";
import Navbar from "@/components/linda/navbar/navbar";
import HomeSidebar from "@/components/linda/homeSidebar";

export default function AccountLayout({ children }) {
  return (
    <>
      <Navbar className="border-b border-white bg-[var(--main-bg)]" />
      <div className="flex text-white pt-[108px]">
        <HomeSidebar className="overflow-scroll" />
        <div className="flex w-full flex-col md:pl-[277px]">{children}</div>
      </div>
    </>
  );
}
