import Link from "next/link";
import React from "react";
import styles from "./navbarPopup.module.css";

export default function NavbarPopup() {
  return (
    <nav className={`absolute z-20 top-0 left-0 bg-black w-full flex-col items-center py-9`}>
      <div className={styles["nav"]}>
      <div id="headerReplace" className={styles["headerReplace"]}></div>
      <div
        id="catalogueBox"
        className={styles["catalogueBox"]}
      >
        <div className={styles["title"]}>
          <p className="border-b mb-5 font-['IBM Plex Mono']"><a href="#">SHOP</a></p>
          <p className="font-['IBM Plex Mono']"><Link href="/shop">ALL GOODS</Link></p>
          <p className="font-['IBM Plex Mono']"><a href="#">ORDER LIST</a></p>
        </div>
        <div className={styles["title"]}>
          <p className="border-b mb-5 font-['IBM Plex Mono']"><a href="#">COMMUNITIES</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">HOME</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">ALL GOODS</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">ARCHIVE</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">MEMBERSHIP</a></p>
        </div>
        <div className={styles["titleMagintop"]}>
          <p className="border-b mb-5 font-['IBM Plex Mono']"><a href="#">LIVE</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">HOME</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">ALL GOODS</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">ARCHIVE</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">MEMBERSHIP</a></p>
        </div>
        <div className={styles["titleMagintop"]}>
          <p className="border-b mb-5 font-['IBM Plex Mono']"><a href="#">TOUR</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">SEARCH FOR TRIPS</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">FAVORITE TOURS</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">MY POSTS</a></p>
        </div>
        <div className={styles["titleMagintop"]}>
          <p className="border-b mb-5 font-['IBM Plex Mono']"><a href="/ruins-next/pages/game/indexGame.js">GAME</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">ACHIEVEMENT</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">NOTE</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">SCREENSHOT</a></p>
          <p className="font-['IBM Plex Mono']"><a href="#">MISSION</a></p>
        </div>
      </div>
      <div className={`${styles["pics"]} space-x-12`}>
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
      </div>
    </nav>
  );
}
