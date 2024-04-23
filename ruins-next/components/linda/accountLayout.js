import React, { useEffect } from "react";
import Navbar from "@/components/linda/navbar/navbar";
import HomeSidebar from "@/components/linda/homeSidebar";
import NavbarMobile from "./navbar/navbar-mobile";
import { useAuth } from "@/contexts/auth-context";
import Router, { useRouter } from "next/router";

export default function AccountLayout({ children }) {
  const {auth} = useAuth()
  const router = useRouter()

  // useEffect(()=>{
  //   if(!auth.id){
  //     router.push("/")
  //   }
  // }, [auth])
  
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
