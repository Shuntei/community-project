import CountNumber from "@/components/kevin/count-number";
import Image from "next/image";
import React from "react";
import Process0 from "@/components/common/process0";
import Link from "next/link";
import Navbar from "@/components/linda/navbar/navbar";
import Footer from "@/components/linda/footer/footer";

export default function Cart() {
  return (
    <>
      <div className=" bg-gray-100 flex flex-col justify-center items-center pt-28">
        {/* header開始 */}
        <Navbar navColor={""} />
        {/* header結束 */}

        <div className="md:w-10/12  w-full flex  flex-col justify-center items-center bg-gradient-to-t from-gray-400 to-gray-100 md:px-24 px-4 py-5 mb-5">
          {/* 進度條開始 */}
          <Process0 name1={"購物車　"} name2={"填寫資料"} name3={"確認訂單"} />
          {/* 進度條結束 */}
          {/* 內頁開始 */}
          <div className="md:w-9/12 w-full md:p-10 p-3 m-10 flex flex-col bg-white items-center space-y-12">
            {/* title */}
            <div className="text-black text-xl font-semibold font-['IBM Plex Mono'] border-b-2 border-b-black ">
              SHOPPING CART
            </div>
            {/* 購物細項 */}
            <div className="flex md:w-10/12 w-full justify-between">
              <div className="md:w-1/5  ">
                <Image
                  src="/images/rock.jpg"
                  alt="Picture of camp"
                  width={100}
                  height={100}
                  className="aspect-square rounded-xl"
                />
              </div>
              <div className="md:w-4/5 w-full md:px-5 px-2  space-y-5">
                <div className="text-black text-base font-semibold font-['Noto Sans TC']">
                  登山健行諾羊毛頭巾
                </div>
                <div className="flex justify-between">
                  <div className="text-neutral-400 text-xs font-medium font-['Noto Sans']">
                    深空灰
                  </div>
                  <div className="t text-neutral-300 text-xs font-extralight font-['IBM Plex Mono']">
                    $1,998
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <CountNumber />
                  </div>
                  <div className="text-black text-base font-normal font-['IBM Plex Mono']">
                    $ 1,998
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:w-10/12 w-full justify-between">
              <div className="md:w-1/5  ">
                <Image
                  src="/images/camp.jpg"
                  alt="Picture of camp"
                  width={100}
                  height={100}
                  className="aspect-square rounded-xl"
                />
              </div>
              <div className="md:w-4/5 w-full md:px-5 px-2  space-y-5">
                <div className="text-black text-base font-semibold font-['Noto Sans TC']">
                  登山健行諾羊毛頭巾
                </div>
                <div className="flex justify-between">
                  <div className="text-neutral-400 text-xs font-medium font-['Noto Sans']">
                    深空灰
                  </div>
                  <div className="t text-neutral-300 text-xs font-extralight font-['IBM Plex Mono']">
                    $1,998
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <CountNumber />
                  </div>
                  <div className="text-black text-base font-normal font-['IBM Plex Mono']">
                    $ 1,998
                  </div>
                </div>
              </div>
            </div>

            {/* 分隔線 */}
            <div className="w-10/12 border-dotted border-black border-b border-t h-1"></div>

            <div className="flex w-10/12 justify-between">
              <div className="text-black text-[13px] font-semibold font-['IBM Plex Mono']">
                合計 (TWD)
              </div>
              <div className="text-black text-xl font-semibold font-['IBM Plex Mono']">
                $ 3,996
              </div>
            </div>
            <Link
              href="/shop/cart/fill-doc"
              className="md:w-[280px] md:h-[75px] w-[315px] h-[47px] bg-black border justify-center items-center gap-2.5 flex "
            >
              <div className="text-white text:[15px] md:text-2xl font-semibold font-['IBM Plex Mono']">
                CONFIRM
              </div>
            </Link>
          </div>
          {/* 內頁結束 */}
        </div>

        {/* footer開始 */}
        <Footer />
        {/* FOOTER結束 */}
      </div>
    </>
  );
}
