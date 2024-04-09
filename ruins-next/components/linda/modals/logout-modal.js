import React from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";

export default function LogoutModal({isVisible}) {
  const {logout} = useAuth()
    if (!isVisible) return null
  return (
    <>
      {/* mobile pop up logout */}
      <div className="md:hidden w-full absolute top-[47px] left-0 bg-black flex-col items-center">
        <div className="flex-col text-xs items-center flex">
          <div className="text-neutral-300 px-[19px] py-3 border-b border-white flex-col justify-start items-center flex">
            ACCOUNT
          </div>
        </div>
        <div className="text-white py-[15px] flex-col justify-start items-center gap-1.5 flex">
          <Link href="/member/account-settings/account" className="text-base">
            PROFILE
          </Link>
          <Link href="#" onClick={()=>{
            e.preventDefault();
            logout()
          }} className="text-base">
            SETTINGS
          </Link>
          <Link href="#" onClick={logout} className="text-rose-400 text-base">
            LOGOUT
          </Link>
        </div>
      </div>
    </>
  );
}
