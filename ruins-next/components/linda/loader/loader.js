import React from "react";
import styles from "./loader.module.css"

export default function Loader({color = "white"}) {
  return (
    <>
    <div className="relative">
      <div className={styles['loadingio-spinner-rolling-2by998twmg8']}>
        <div className={styles["ldio-yzaezf3dcmj"]}>
          <div className={`border border-[10px] ${color==="white"?'border-white' : 'border-black'} `}></div>
        </div>
      </div>
      <div className={`absolute inset-0 flex items-center justify-center ${color==="white"?'text-white' : 'text-black'} font-light text-[130px]`}>R</div>
    </div>
    </>
  );
}
