import React from "react";
import Image from "next/image";

export default function Notification({
  src,
  hour,
  name,
  text,
  highlight = "",
}) {
  return (
    <>
      {/* notification */}
      <div className="flex gap-[12px] items-start">
        <div className="h-[50px] min-w-[50px] overflow-y-hidden">
          <Image alt="" width={50} height={50} src={src} className="min-w-[50px] max-w-[50px] bg-cover" />
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="font-semibold text-base">{name}</div>
          <div className="text-[13px]">
            {text}
            <span className="font-bold pl-[5px]">{highlight}</span>
            <span className="text-[#ABABAB] pl-[5px]">{hour}</span>
          </div>
        </div>
      </div>
    </>
  );
}
