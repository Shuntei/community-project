import React from "react";
import { RiSearchLine, RiCloseLine } from "@remixicon/react";
import Image from "next/image";
import profileImg from "./img/72.jpg";
import { useToggles } from "@/contexts/use-toggles";

export default function SeeMoreNotification() {
  const { toggles, setToggles } = useToggles();

  return (
    <>
      {" "}
      <div
        className="flex justify-end bg-neutral-300 mt-5 rounded-t-lg pt-5 px-5 cursor-pointer"
        onClick={() => {
          setToggles({ ...toggles, notification: false });
        }}
      >
        <RiCloseLine />
      </div>
      <div className="flex justify-center pb-5 px-10 mb-5 rounded-b-lg bg-neutral-300">
        <div className="flex-col items-center">
          {" "}
          <div className="text-center py-3 text-[20px]">NOTIFICATION</div>
          <div className="flex justify-center py-5">
            <input className="flex p-[6px] items-center outline-none h-[32px] pc:w-[250px] w-full pc:shadow1 rounded-l-lg pl-5" />
            <button className="px-2 bg-white flex items-center h-[32px] p-[6px] translate-x-[-5px] pc:translate-x-0 pc:shadow1 rounded-r-lg">
              <RiSearchLine />
            </button>
          </div>
          <div className="flex justify-center gap-20 pc:gap-40">
            <ul className="rounded-full">
              {Array(5)
                .fill(1)
                .map((v, i) => {
                  return (
                    <li className="  py-2 flex justify-center items-center w-[50px] pc:w-[100px]">
                      <Image
                        className="w-[100px] rounded-full mr-3 pc:mr-5"
                        src={profileImg}
                        alt=""
                      />
                      <div>Lisa</div>
                    </li>
                  );
                })}
            </ul>
            <ul>
              {Array(5)
                .fill(1)
                .map((v, i) => {
                  return (
                    <li className="  py-2 flex justify-center items-center w-[50px] pc:w-[100px]">
                      <Image
                        className="w-[100px] rounded-full mr-3 pc:mr-5"
                        src={profileImg}
                        alt=""
                      />
                      <div>Lisa</div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
