import React from "react";

export default function NavbarPopup() {
  return (
    <nav className="absolute z-20 top-0 left-0 bg-black w-full flex-col items-center px-11 py-9 space-y-[93px]">
      <div id="headerReplace" className="h-8"></div>
      <div
        id="catalogueBox"
        className="w-full text-white flex justify-between space-x-[46px]"
      >
        <div className="w-1/5 text-[13px] font-semibold">
          <p className="border-b mb-5 font-['IBM Plex Mono']"><a href="#">SHOP</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">ALL GOODS</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">ORDER LIST</a></p>
        </div>
        <div className="w-1/5 text-[13px] font-semibold">
          <p className="border-b mb-5 font-['IBM Plex Mono']"><a href="#">COMMUNITIES</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">HOME</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">ALL GOODS</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">ARCHIVE</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">MEMBERSHIP</a></p>
        </div>
        <div className="w-1/5 text-[13px] font-semibold">
          <p className="border-b mb-5 font-['IBM Plex Mono']"><a href="#">LIVE</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">HOME</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">ALL GOODS</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">ARCHIVE</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">MEMBERSHIP</a></p>
        </div>
        <div className="w-1/5 text-[13px] font-semibold">
          <p className="border-b mb-5 font-['IBM Plex Mono']"><a href="#">TOUR</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">SEARCH FOR TRIPS</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">FAVORITE TOURS</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">MY POSTS</a></p>
        </div>
        <div className="w-1/5 text-[13px] font-semibold">
          <p className="border-b mb-5 font-['IBM Plex Mono']"><a href="#">GAME</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">ACHIEVEMENT</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">NOTE</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">SCREENSHOT</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">MISSION</a></p>
        </div>
      </div>
      <div className="w-full text-gray-500 font-medium text-[10px] flex justify-between space-x-12">
        <div className="w-auto">
          <a href="#" className="aspect-video">
            <img
              src="https://via.placeholder.com/600x400"
              alt="pic"
              className="w-full"
            ></img>
            <p>GIFTS UNDER $380</p>
          </a>
        </div>
        <div className="w-auto">
          <a href="#" className="aspect-video">
            <img
              src="https://via.placeholder.com/600x400"
              alt="pic"
              className="w-full"
            ></img>
            <p>COLLECTION</p>
          </a>
        </div>
        <div className="w-auto">
          <a href="#" className="aspect-video">
            <img
              src="https://via.placeholder.com/600x400"
              alt="pic"
              className="w-full"
            ></img>
            <p>FOR KIDS</p>
          </a>
        </div>
      </div>
    </nav>
  );
}
