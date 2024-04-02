import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomeSidebar() {
  const [activeLink, setActiveLink] = useState(null);
  const router = useRouter()

  const handleLinkClick = (link) => {
    setActiveLink(link);
    switch (link) {
      case "notifications":
        router.push("/member/account-settings/notifications");
        break;
      case "preference":
        router.push("/member/account-settings/preference");
        break;
      // Add more cases for other links if needed
      default:
        break;
    }
  };

  return (
    <>
      {/* --------- Sidebar start ------------ */}
      <div className="overflow-auto md:inline-flex hidden w-[277px] h-full fixed z-10 px-[23px] pb-[200px] py-10 bg-[#343434] flex-col gap-8 flex">
        <div className="flex-col w-full justify-start items-start gap-2.5 flex">
          <div className="self-stretch pb-2.5 border-b-2 border-white font-semibold">
            Account
          </div>
          <div className="self-stretch h-full py-[11px] flex-col justify-start items-start gap-[11px] flex">
            <div className="text-xs font-bold">SHOP</div>
            <div className="self-stretch pl-5 text-sm font-medium">
              Order History
            </div>{" "}
            <div className="self-stretch pl-5 text-sm font-medium">
              Favorite Products
            </div>
          </div>
          <div className="self-stretch h-24 py-[11px] flex-col justify-start items-start gap-[11px] flex">
            <div className="text-xs font-bold">TOUR</div>
            <div className="self-stretch pl-5 text-sm font-medium">
              My Trips
            </div>
            <div className="self-stretch pl-5 text-sm font-medium">
              Favorite Tours
            </div>
          </div>
          <div className="self-stretch h-[98px] py-[11px] flex-col justify-start items-start gap-[11px] flex">
            <div className="text-xs font-bold">SOCIAL</div>
            <div className="self-stretch pl-5 text-sm font-medium">
              Saved posts
            </div>
            <div className="self-stretch pl-5 text-sm font-medium">
              Saved draft
            </div>
          </div>
        </div>
        <div className="flex-col w-full justify-start items-start gap-2.5 flex">
          <div className="self-stretch pb-2.5 border-b-2 border-white font-semibold">
            Settings
          </div>
          <div className="self-stretch h-[127px] py-[11px] flex-col justify-start items-start gap-[11px] flex">
            <div className="text-xs font-bold">GENERAL</div>
            <Link
              href="/member/account-settings/account"
              className="self-stretch pl-5 text-sm font-medium"
            >
              Profile
            </Link>
            <Link
              href="/member/account-settings/emailAndPassword"
              className="self-stretch pl-5 text-sm font-medium"
            >
              Email & Password
            </Link>
            <div className="self-stretch pl-5 text-sm font-medium">
              Account validation
            </div>
          </div>
          <div className="self-stretch h-[98px] py-[11px] flex-col justify-start items-start gap-[11px] flex">
            <div className="text-xs font-bold">SYSTEM</div>
            <Link
              href="/member/account-settings/notifications"
              onClick={(e)=>{
                e.preventDefault()
                handleLinkClick('notifications')}}
              className={`self-stretch pl-5 text-sm font-medium ${activeLink === 'notifications' ? 'bg-white text-black' : ''}`}
            >
              Notifications
            </Link>
            <Link
              href="/member/account-settings/preference"
              onClick={(e)=>{
                e.preventDefault()
                handleLinkClick('preference')}}
              className={`self-stretch pl-5 text-sm font-medium ${activeLink === 'preference' ? 'bg-white text-black' : ''}`}
            >
              Preference
            </Link>
          </div>
        </div>
      </div>
      {/* --------- Sidebar end -------------  */}
    </>
  );
}
