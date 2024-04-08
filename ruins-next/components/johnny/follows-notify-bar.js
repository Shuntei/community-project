import React from "react";
import { RiSearchLine } from "@remixicon/react";
import Image from "next/image";
import profileImg from "./img/16.jpg";
import { useToggles } from "@/contexts/use-toggles";

export default function FollowsBar() {
  const { toggles, setToggles } = useToggles();

  return (
    <>
      <section className="fixed right-0 mt-[40px] pt-[10px] w-[260px] hidden bargone:block h-[600px] overflow-scroll pb-20 mr-10 pl-5 bg-black z-10">
        <div className="mb-5">
          <div></div>
          <div className="text-white py-1 text-[20px] ">FOLLOWS</div>
          <div className="border-b-2 mb-2 w-[200px]"></div>
          <div className="flex py-1">
            <input className="flex p-[6px] items-center outline-none h-[32px] w-[160px] rounded-l-lg pl-5" />
            <button className="iconBg px-2 bg-white flex items-center h-[32px] p-[6px] rounded-r-lg">
              <RiSearchLine />
            </button>
          </div>
          <ul>
            <a href="./others.html">
              <li className="  text-white py-2 flex items-center">
                <Image
                  className="w-[35px] rounded-full mr-5"
                  src={profileImg}
                  alt=""
                />
                David
              </li>
            </a>
            <li className="  text-white py-2 flex items-center">
              <Image
                className="w-[35px] rounded-full mr-5"
                src={profileImg}
                alt=""
              />
              Name
            </li>
            <li className="  text-white py-2 flex items-center">
              <Image
                className="w-[35px] rounded-full mr-5"
                src={profileImg}
                alt=""
              />
              Name
            </li>
            <li className="  text-white py-2 flex items-center">
              <Image
                className="w-[35px] rounded-full mr-5"
                src={profileImg}
                alt=""
              />
              Name
            </li>
          </ul>
          <div
            className="text-white flex justify-end mr-5 text-[14px] font-semibold  hover:cursor-pointer "
            onClick={() => {
              setToggles({
                ...toggles,
                notification: false,
                follows: true,
              });
            }}
          >
            SEE ALL
          </div>
        </div>

        <div className="notification rounded-xl w-[240px]">
          <div className="text-white px-6 py-1 text-[20px] ">NOTIFICATION</div>
          <div className="border-b-2 mx-6 mb-2 w-[200px]"></div>
          <ul>
            <li className="  text-white px-6 py-1 flex items-center">
              <div className="mr-5">
                <Image
                  className="w-[35px] rounded-full"
                  src={profileImg}
                  alt=""
                />
              </div>
              <div>
                <div className="">Hello,how are you?</div>
                <div className="">I'm fine.</div>
                <div className="">3 days ago</div>
              </div>
            </li>
            <li className="  text-white px-6 py-1 flex items-center">
              <div className="mr-5">
                <Image
                  className="w-[35px] rounded-full"
                  src={profileImg}
                  alt=""
                />
              </div>
              <div>
                <div className="">Hello,how are you?</div>
                <div className="">I'm fine.</div>
                <div className="">3 days ago</div>
              </div>
            </li>
            <li className="  text-white px-6 py-1 flex items-center">
              <div className="mr-5">
                <Image
                  className="w-[35px] rounded-full"
                  src={profileImg}
                  alt=""
                />
              </div>
              <div>
                <div className="">Hello,how are you?</div>
                <div className="">I'm fine.</div>
                <div className="">3 days ago</div>
              </div>
            </li>
          </ul>
          <div
            className="text-white flex justify-end mr-5 text-[14px] font-semibold  cursor-pointer"
            onClick={() => {
              setToggles({
                ...toggles,
                notification: true,
                follows: false,
              });
            }}
          >
            SEE ALL
          </div>
        </div>
      </section>
    </>
  );
}
