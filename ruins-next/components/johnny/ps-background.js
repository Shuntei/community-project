import React from "react";
import Image from "next/image";
import img from "./img/1868140_screenshots_20240116015852_1.jpg";

export default function PersonalBackground() {
  return (
    <>
      <div>
        <Image
          className="h-[256px] w-full object-cover rounded-lg"
          src={img}
          alt=""
        />
      </div>
    </>
  );
}
