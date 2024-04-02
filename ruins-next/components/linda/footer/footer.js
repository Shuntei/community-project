import React from "react";
import styles from "./footer.module.css";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles["footer-content"]}>
          <div className={styles["footer-sec12"]}>
            <div className={styles["footer-sec1"]}>
              <div className={styles["sec1-links"]}>
                <Link href="">shop</Link>
                <Link href="">communities</Link>
                <Link href="">live</Link>
                <Link href="">tour</Link>
                <Link href="">game</Link>
              </div>
              <div className={styles["sec1-links"]}>
                <Link href="">shipping &amp; returns</Link>
                <Link href="">terms of use</Link>
                <Link href="">privacy and policy</Link>
                <Link href="">privacy reference</Link>
              </div>
            </div>
            <div className={styles["footer-sec2"]}>
              <div className={`${styles["sec2-title"]} text-[10px]`}>
                MORE Ruins
              </div>
              <div className={styles["sec2-links"]}>
                <Link href="">
                  <FaDiscord />
                  <p>ruins</p>
                </Link>
                <Link href="">
                  <FaXTwitter />
                  <p>twitter</p>
                </Link>
                <Link href="">
                  <FaFacebook />
                  <p>facebook</p>
                </Link>
                <Link href="">
                  <AiFillInstagram />
                  <p>instagram</p>
                </Link>
                <Link href="">
                  <FaYoutube />
                  <p>youtube</p>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles["footer-sec3"]}>
            <div className={`${styles["sec2-title"]} text-[10px]`}>
              WANT MORE Ruins?
            </div>
            <div className="text-[13px]">
              Get our emails. Letters from our forum administrator, new trips,
              live streams, merch, and more. Not too often - just enough.
            </div>
            <div className={styles["footer-sec3-bottom-section"]}>
              <div className={styles["email"]}>
                <div className="text-[11px] font-medium">Email</div>
                <input type="text" />
              </div>
              <div
                className={`${styles["sec3-button-container"]} p-0 flex self-stretch`}
              >
                <button
                  className={`${styles["signup"]} font-medium text-[13px]`}
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
