import React from "react";
import Link from "next/link";

export default function LogoutModal({isVisible}) {
    if (!isVisible) return null
  return (
    <>
      {/* mobile pop up logout */}
      <div className="md:hidden w-full absolute top-[47px] left-0 bg-black flex-col items-center">
        <div className="flex-col text-xs items-center flex">
          <div className="px-[19px] py-3 border-b border-white flex-col justify-start items-center flex">
            ACCOUNT
          </div>
        </div>
        <div className="py-[15px] flex-col justify-start items-center gap-1.5 flex">
          <Link href="/member/account-settings/account" className="text-base">
            PROFILE
          </Link>
          <Link href="/member/account-settings/account" className="text-base">
            SETTINGS
          </Link>
          <Link href="/member/account/logout" className="text-rose-400 text-base">
            LOGOUT
          </Link>
        </div>
      </div>
    </>
  );
}
