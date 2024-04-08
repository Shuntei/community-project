import React from "react";
import Navbar from "@/components/linda/navbar/navbar";
import HomeSidebar from "@/components/linda/homeSidebar";
import NavbarMobile from "./navbar/navbar-mobile";

export default function AccountLayout({ children }) {
  return (
    <>
      <Navbar className="border-b border-white bg-[var(--main-bg)]" />
      <NavbarMobile />
      <div className="flex text-white md:pt-[108px] pt-[50px]">
        <HomeSidebar className="overflow-scroll" />
        <div className="flex w-full flex-col md:pl-[277px]">{children}</div>
      </div>
    </>
  );
}
