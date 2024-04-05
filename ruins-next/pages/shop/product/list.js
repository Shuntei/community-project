import Image from "next/image";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/linda/navbar/navbar";
import Footer from "@/components/linda/footer/footer";
import Carousel from "@/components/kevin/carousel";

export default function Index() {
  return (
    <>
      <div className=" bg-gray-100 flex flex-col justify-center items-center w-full pt-28">
        {/* header開始 */}
        {/* header開始 */}
        <Navbar navColor={""} />
        {/* header結束 */}
        <div className=" bg-gray-100 flex flex-col justify-center items-center w-full py-7 md:py-12 space-y-6 md:space-y-12">
          {/* 輪播開始 */}
          <div className=" flex w-full md:h-[600px] h-[147px] md:px-24 px-4   justify-center">
            <Carousel  />
          </div>
          {/* 輪播結束 */}
          {/* 分類開始 */}
          <div className="w-full md:gap-[36px]  gap-[20px]  justify-between   md:px-24 px-4 items-center  flex ">
            <Link
              href="/shop/list"
              className="w-full aspect-square bg-black md:rounded-[20px] rounded-[7px] justify-center items-center flex  "
            >
              <div className="text-center text-white text-[12px] md:text-[28px] font-bold font-['Noto Sans'] tracking-[2.80px]">
                All
              </div>
            </Link>
            <div className="w-full aspect-square md:rounded-[20px] rounded-[7px] flex-col justify-center items-center  flex   bg-cover bg-center bg-no-repeat bg-rock relative">
              <Image
                src="/images/rock.jpg"
                alt="Picture of camp"
                width={500}
                height={500}
                className="aspect-square rounded-xl"
              />
              <div className=" text-white text-[12px] md:text-[28px] font-bold font-['Noto Sans Tc'] tracking-[2.80px] absolute">
                手作
              </div>
            </div>
            <div className="w-full aspect-square md:rounded-[20px] rounded-[7px] flex-col justify-center items-center  flex bg-cover bg-center bg-no-repeat bg-camp relative">
              <Image
                src="/images/camp.jpg"
                alt="Picture of camp"
                width={500}
                height={500}
                className="aspect-square rounded-xl"
              />
              <div className=" text-white text-[12px] md:text-[28px] font-bold font-['Noto Sans TC'] tracking-[2.80px] absolute">
                戶外
              </div>
            </div>
            <div className="w-full aspect-square md:rounded-[20px] rounded-[7px] flex-col justify-center items-center  flex bg-black">
              <div className="text-center text-white text-[12px] md:text-[28px] font-bold font-['Noto Sans TC'] tracking-[2.80px]">
                直播
              </div>
            </div>
          </div>
          {/* 分類結束 */}
          {/* 分類標題 */}
          <div className="w-full md:px-24 px-[16px] ">
            <div className="text-black md:text-[32px] font-semibold font-['Noto Sans TC'] ">
              所有商品
            </div>
          </div>
          {/* 搜尋與排序欄開始 */}
          <div className="w-full justify-between flex md:px-24 px-4 ">
            <div className="w-5 h-[19.50px] relative">
              {/* 搜尋 */}
              <Image src="/svgSearch.svg" alt="search" width={20} height={20} />
            </div>
            <div className="justify-start items-center gap-[15px] flex">
              <div className="text-black text-sm font-medium font-['IBM Plex Mono']">
                排序
              </div>
            </div>
          </div>
          {/* 搜尋與排序欄結束 */}
          {/* 商品欄開始 */}

          <div className="grid md:grid-cols-4  grid-cols-2 md:gap-[36px]  gap-[20px] w-full  justify-between md:px-24 px-4">
            <div className=" flex-col  gap-5 flex">
              <img
                className="w-full aspect-square  rounded-xl"
                src="https://via.placeholder.com/305x313"
                alt="pic"
              />
              <div className="md:px-10 w-full items-center md:items-start flex-col  gap-1 flex">
                <div className="text-black md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  原石擺設
                </div>
                <div className="text-zinc-500 md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  78000
                </div>
              </div>
            </div>
            <div className=" flex-col  gap-5 flex">
              <img
                className="w-full aspect-square  rounded-xl"
                src="https://via.placeholder.com/305x313"
                alt="pic"
              />
              <div className="md:px-10 w-full items-center md:items-start flex-col  gap-1 flex">
                <div className="text-black md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  4人快開防曬遮陽帳篷
                </div>
                <div className="text-zinc-500 md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  1499
                </div>
              </div>
            </div>
            <div className=" flex-col  gap-5 flex">
              <img
                className="w-full aspect-square  rounded-xl"
                src="https://via.placeholder.com/305x313"
                alt="pic"
              />
              <div className="md:px-10 w-full items-center md:items-start flex-col  gap-1 flex">
                <div className="text-black md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  咖啡豆擺飾
                </div>
                <div className="text-zinc-500 md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  5000
                </div>
              </div>
            </div>
            <div className=" flex-col  gap-5 flex">
              <img
                className="w-full aspect-square  rounded-xl"
                src="https://via.placeholder.com/305x313"
                alt="pic"
              />
              <div className="md:px-10 w-full items-center md:items-start flex-col  gap-1 flex">
                <div className="text-black md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  球型泡泡花瓶
                </div>
                <div className="text-zinc-500 md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  220
                </div>
              </div>
            </div>
            <div className=" flex-col  gap-5 flex">
              <img
                className="w-full aspect-square  rounded-xl"
                src="https://via.placeholder.com/305x313"
                alt="pic"
              />
              <div className="md:px-10 w-full items-center md:items-start flex-col  gap-1 flex">
                <div className="text-black md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  原石擺設
                </div>
                <div className="text-zinc-500 md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  78000
                </div>
              </div>
            </div>
            <div className=" flex-col  gap-5 flex">
              <img
                className="w-full aspect-square  rounded-xl"
                src="https://via.placeholder.com/305x313"
                alt="pic"
              />
              <div className="md:px-10 w-full items-center md:items-start flex-col  gap-1 flex">
                <div className="text-black md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  4人快開防曬遮陽帳篷
                </div>
                <div className="text-zinc-500 md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  1499
                </div>
              </div>
            </div>
            <div className=" flex-col  gap-5 flex">
              <img
                className="w-full aspect-square  rounded-xl"
                src="https://via.placeholder.com/305x313"
                alt="pic"
              />
              <div className="md:px-10 w-full items-center md:items-start flex-col  gap-1 flex">
                <div className="text-black md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  咖啡豆擺飾
                </div>
                <div className="text-zinc-500 md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  5000
                </div>
              </div>
            </div>
            <div className=" flex-col  gap-5 flex ">
              <img
                className="w-full aspect-square  rounded-xl"
                src="https://via.placeholder.com/305x313"
                alt="pic"
              />
              <div className="md:px-10 w-full items-center md:items-start flex-col  gap-1 flex">
                <div className="text-black md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  咖啡豆擺飾
                </div>
                <div className="text-zinc-500 md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  5000
                </div>
              </div>
            </div>
          </div>
          {/* 商品欄結束 */}
          {/* 頁碼開始 */}
          <div className="py-[60px] justify-start items-center flex">
            <div className="h-[18px] pr-[21px] justify-start items-center flex">
              <div className="text-black text-sm font-medium font-['IBM Plex Mono']">
                1{" "}
              </div>
            </div>
            <div className="px-5 py-[19px] border-l border-t border-b border-neutral-400 flex-col justify-center items-center gap-2.5 flex">
              <div className="text-neutral-400 text-sm font-medium font-['IBM Plex Mono']">
                2
              </div>
            </div>
            <div className="px-5 py-[19px] border-l border-t border-b border-neutral-400 flex-col justify-center items-center gap-2.5 flex">
              <div className="text-neutral-400 text-sm font-medium font-['IBM Plex Mono']">
                3
              </div>
            </div>
            <div className="px-5 py-[19px] border-l border-t border-b border-neutral-400 flex-col justify-center items-center gap-2.5 flex">
              <div className="text-neutral-400 text-sm font-medium font-['IBM Plex Mono']">
                ...
              </div>
            </div>
            <div className="px-5 py-[19px] border-l border-t border-b border-neutral-400 flex-col justify-center items-center gap-2.5 flex">
              <div className="text-neutral-400 text-sm font-medium font-['IBM Plex Mono']">
                9
              </div>
            </div>
            <div className="px-5 py-[19px] border border-neutral-400 flex-col justify-center items-center gap-2.5 flex">
              <div className="text-neutral-400 text-sm font-medium font-['IBM Plex Mono']">
                NEXT
              </div>
            </div>
          </div>
          {/* 頁碼結束 */}
        </div>{" "}
        {/* footer開始 */}
        <Footer />
        {/* FOOTER結束 */}
      </div>
    </>
  );
}
