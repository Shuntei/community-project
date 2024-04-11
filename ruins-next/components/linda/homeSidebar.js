import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomeSidebar() {
  const [activeLink, setActiveLink] = useState(null);
  const router = useRouter();

  const handleLinkClick = (link) => {
    setActiveLink(link);
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
            <Link
              href="/shop/my-order"
              onClick={(e) => {
                handleLinkClick("Order History");
              }}
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === "Order History" ? "bg-white text-black" : ""
              }`}
            >
              Order History
            </Link>
            <div className="self-stretch pl-5 text-sm font-medium">
              Favorite Products
            </div>
          </div>
          <div className="self-stretch h-auto py-[11px] flex-col justify-start items-start gap-[11px] flex">
            <div className="text-xs font-bold">TOUR</div>
            <Link
              href="/member/account-settings/my-trips"
              onClick={(e) => {
                handleLinkClick("My Trips");
              }}
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === "My Trips" ? "bg-white text-black" : ""
              }`}
            >
              My Trips
            </Link>
            <Link
              href="/member/account-settings/fav-tours"
              onClick={(e) => {
                handleLinkClick("Favorite Tours");
              }}
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === "Favorite Tours" ? "bg-white text-black" : ""
              }`}
            >
              Favorite Tours
            </Link>
            <Link
              href="/member/account-settings/my-posts"
              onClick={(e) => {
                handleLinkClick("My Posts");
              }}
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === "My Posts" ? "bg-white text-black" : ""
              }`}
            >
              My Posts
            </Link>
          </div>
          <div className="self-stretch h-auto py-[11px] flex-col justify-start items-start gap-[11px] flex">
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
          <div className="self-stretch h-auto py-[11px] flex-col justify-start items-start gap-[11px] flex">
            <div className="text-xs font-bold">GENERAL</div>
            <Link
              href="/member/account-settings/account"
              onClick={(e) => {
                handleLinkClick("profile");
              }}
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === "profile" ? "bg-white text-black" : ""
              }`}
            >
              Profile
            </Link>
            <Link
              href="/member/account-settings/email-and-password"
              onClick={(e) => {
                handleLinkClick("emailAndPassword");
              }}
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === "emailAndPassword" ? "bg-white text-black" : ""
              }`}
            >
              Email & Password
            </Link>
          </div>
          <div className="self-stretch h-auto py-[11px] flex-col justify-start items-start gap-[11px] flex">
            <div className="text-xs font-bold">SYSTEM</div>
            <Link
              href="/member/account-settings/notifications"
              onClick={(e) => {
                handleLinkClick("notifications");
              }}
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === "notifications" ? "bg-white text-black" : ""
              }`}
            >
              Notifications
            </Link>
            <Link
              href="/member/account-settings/preference"
              onClick={(e) => {
                handleLinkClick("preference");
              }}
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === "preference" ? "bg-white text-black" : ""
              }`}
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
