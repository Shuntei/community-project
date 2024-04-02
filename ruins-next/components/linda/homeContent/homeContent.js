import React from "react";
import Image from "next/image";
import styles from "./homeContent.module.css";
import home1 from "@/public/images/home1.jpg";
import home2 from "@/public/images/home2.jpg";
import home3 from "@/public/images/home3.jpg";
import arrowPng from "@/public/images/arrow.png";
import product1 from "@/public/images/product1.jpeg";

export default function HomeContent() {
  return (
    <>
      <div
        className={styles["homeSectionOne"]}
        style={{
          backgroundImage: `url(${home1.src})`,
          width: "100%",
        }}
      >
        {/* card start */}
        <div className={`${styles["card1"]}`}>
          <div className={styles["card-info"]}>
            <span className={styles["title"]}>NEW POST!</span>
            <span className="font-medium md:text-[24px]">
              Something <br />
              Special For
              <br />
              Compulsive Hoarder:
              <br />
              Whimsical Pet
            </span>
          </div>
          <button className={`${styles["card-button"]} cursor-pointer hover:bg-[#7A7A7A]`}>READ NOW</button>
        </div>
        {/* card end  */}
      </div>
      <div
        className={styles.homeSectionTwo}
        style={{
          backgroundImage: `url(${home2.src})`,
          width: "100%"
        }}
      >
        {/* card start */}
        <div className={styles.card2}>
          <div className={styles["card-info"]}>
            <span className={styles.title}>NEW POST!</span>
            <span className={styles.text}>
              Something <br />
              Special For
              <br />
              Compulsive Hoarder:
              <br />
              Whimsical Pet
            </span>
          </div>
          <button className={`${styles["card2-button"]} hover:bg-[#7A7A7A]`}>READ NOW</button>
        </div>
        {/* card end  */}
      </div>
      <div className={styles.homeSectionThree}>
        <div>
          <div className={styles.rowThreeContainer}>
            <div className={styles["sec3-img-container"]}>
              <Image src={home3} className="rounded-xl" />
            </div>
            <div className={styles.sec3TextContainer}>
              <div className={styles["sec3-text"]}>
                <div className="text-sm">NEW!</div>
                <div className="text-2xl">
                  Something <br />
                  Special For <br />
                  Compulsive Hoarder: <br />
                  Whimsical Pet
                </div>
                <div className="text-sm">$480</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.ps5}>
              <p className={styles["cards-container-title"]}>RECENTLY ADDED</p>
            </div>
            <div className={styles["cards-container"]}>
              <div>
                <div className="max-h=[315px]">
                <Image src={product1}  className={styles.cards}/>
                </div>
                <div className={styles["item-info"]}>
                  <p className={styles["item-name"]}>Item Name</p>
                  <p className={styles["item-price"]}>$12</p>
                </div>
              </div>
              <div>
                <div className="max-h=[315px]">
                <Image src={product1} className={styles.cards}/>

                </div>
                <div className={styles["item-info"]}>
                  <p className={styles["item-name"]}>Item Name</p>
                  <p className={styles["item-price"]}>$12</p>
                </div>
              </div>
              <div>
                <div className="max-h=[315px]">
                <Image src={product1} className={styles.cards}/>

                </div>
                <div className={styles["item-info"]}>
                  <p className={styles["item-name"]}>Item Name</p>
                  <p className={styles["item-price"]}>$12</p>
                </div>
              </div>
              <div>
                <div className="max-h=[315px]">
                 <Image src={product1} className={styles.cards}/>

                </div>
                <div className={styles["item-info"]}>
                  <p className={styles["item-name"]}>Item Name</p>
                  <p className={styles["item-price"]}>$12</p>
                </div>
              </div>
              <Image src={arrowPng} className={`${styles['arrow-png']} z-50`}
               />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
