import Image from "next/image";
import React from "react";
import Process1 from "@/components/common/process1";
import Link from "next/link";
import Navbar from "@/components/linda/navbar/navbar";
import Footer from "@/components/linda/footer/footer";
import { useCart } from "@/hooks/use-cart";

export default function FillDoc() {
  const { items, onDecreaseItem, onIncreaseItem, totalPrice} = useCart();

  return (
    <>
      <div className=" bg-gray-100 flex flex-col justify-center items-center pt-28">
        {/* header開始 */}
        <Navbar navColor={""} />
        {/* header結束 */}

        <div className="md:w-10/12  w-full flex  flex-col justify-center items-center bg-gradient-to-t from-gray-400 to-gray-100 md:px-24 px-4 py-5 mb-5">
          {/* 進度條開始 */}
          <Process1 name1={"購物車　"} name2={"填寫資料"} name3={"確認訂單"} />
          {/* 進度條結束 */}
          {/* 內頁開始 */}
          <form
            action=""
            className="md:w-9/12 w-full md:p-10 p-3 m-10 flex flex-col bg-white items-center space-y-12"
          >
            {/* title */}
            <div className="text-black text-xl font-semibold font-['IBM Plex Mono'] border-b border-b-black ">
              填寫資料
            </div>
            {/* 填寫資料 */}
            <div className="flex w-full flex-col md:flex-row justify-between">
              {/* 左側 */}
              <div className="flex md:w-5/12 flex-col space-y-10 ">
                {/* 訂購人資料 */}
                <div className="w-full space-y-4">
                  <div className="w-full text-neutral-500 text-base font-semibold font-['IBM Plex Mono']">
                    訂購人資訊{" "}
                  </div>
                  <div className="flex flex-col px-7  space-y-5">
                    <div className="flex">
                      {" "}
                      <input type="checkbox" name="" id="" />
                      <div className=" pl-2 text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        同會員資料
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        訂購人姓名
                      </div>
                      <input
                        type="text"
                        name="name"
                        className="w-full bg-zinc-100 rounded"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        電子信箱
                      </div>
                      <input
                        type="text"
                        name="email"
                        className="w-full bg-zinc-100 rounded"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        手機號碼
                      </div>
                      <input
                        type="text"
                        name="mobile"
                        className="w-full bg-zinc-100 rounded"
                      />
                    </div>
                  </div>
                </div>
                {/* 分隔線 */}
                <div className="w-full border-dotted border-gray border-b  h-1"></div>
                {/* 運送資料 */}
                <div className="w-full space-y-4 ">
                  <div className="w-full text-neutral-500 text-base font-semibold font-['IBM Plex Mono'] ">
                    運送資料{" "}
                  </div>
                  <div className="flex flex-col px-7  space-y-5">
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        請選擇運送方式
                      </div>
                      <select
                        name="transition"
                        className="w-full bg-zinc-100 rounded"
                      ></select>
                    </div>
                    <div className="flex">
                      {" "}
                      <input type="checkbox" name="" id="" />
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']  pl-2">
                        同訂購人資料
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        收件人姓名
                      </div>
                      <input
                        type="text"
                        name="name"
                        className="w-full bg-zinc-100 rounded"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        收件人手機
                      </div>
                      <input
                        type="text"
                        name="email"
                        className="w-full bg-zinc-100 rounded"
                      />
                    </div>
                  </div>
                </div>
                {/* 分隔線 */}
                <div className="w-full border-dotted border-gray border-b  h-1"></div>
                {/* 付款方式 */}
                <div className="w-full space-y-4 ">
                  <div className="w-full text-neutral-500 text-base font-semibold font-['IBM Plex Mono'] ">
                    付款方式{" "}
                  </div>
                  <div className="flex flex-col px-7  space-y-5">
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        請選擇付款方式
                      </div>
                      <select
                        name="transition"
                        className="w-full bg-zinc-100 rounded"
                      ></select>
                      <div className=" text-neutral-400 text-[12px] font-normal font-['Noto Sans TC']">
                        支援LINE PAY,信用卡,貨到付款等之支付方式
                      </div>
                    </div>
                  </div>
                </div>
                {/* 分隔線 */}
                <div className="w-full border-dotted border-gray border-b  h-1"></div>
                {/* 折價券 */}
                <div className="w-full space-y-4 ">
                  <div className="w-full text-neutral-500 text-base font-semibold font-['IBM Plex Mono'] ">
                    折價券
                  </div>
                  <div className="flex flex-col px-7  space-y-5">
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        選擇票券
                      </div>
                      <select
                        name="transition"
                        className="w-full bg-zinc-100 rounded"
                      ></select>
                    </div>
                  </div>
                </div>
                {/* 分隔線 */}
                <div className="w-full border-dotted border-gray border-b  h-1"></div>
              </div>

              {/* 右側 */}
              <div className="flex md:w-6/12 flex-col space-y-10 sticky h-min  top-20 ">
                <div>
                  {" "}
                  {/* 購物細項 */}
                  {items.map((v, i) => {
                    return(
                    <div className="flex w-full justify-between pb-4">
                      <div className="w-1/5  ">
                        <Image
                          src={v.img}
                          alt="Picture of camp"
                          width={100}
                          height={50}
                          className="aspect-square rounded-xl"
                          unoptimized={true}
                        />
                      </div>
                      <div className="w-4/5 px-5 space-y-5">
                        <div className="text-black text-small font-semibold font-['Noto Sans Tc']">
                          {v.name}
                        </div>
                        <div className="flex justify-between">
                          <div className="text-neutral-400 text-xs font-medium font-['Noto Sans']">
                            深空灰
                          </div>
                          <div className="t text-neutral-400 text-xs font-extralight font-['IBM Plex Mono']">
                            {v.qty}
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="text-black text-base font-normal font-['IBM Plex Mono']">
                            {v.price}
                          </div>
                        </div>
                      </div>
                    </div>)
                  })}
                  {/* 分隔線 */}
                  <div className="w-full border-dotted border-gray border-b  h-1"></div>
                  <div className="flex w-full items-center justify-between py-5">
                    <div className="text-black text-[13px] font-semibold font-['IBM Plex Mono']">
                      合計 (TWD)
                    </div>
                    <div className="text-black text-xl font-semibold font-['IBM Plex Mono']">
                      $ {totalPrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/shop/cart/confirm-doc"
              className="w-[280px] h-[75px] bg-black border justify-center items-center gap-2.5 flex "
            >
              <div className="text-white  text-2xl font-semibold font-['IBM Plex Mono']">
                CONFIRM
              </div>
            </Link>
          </form>
          {/* 內頁結束 */}
        </div>

        {/* footer開始 */}
        <Footer />
        {/* FOOTER結束 */}
      </div>
    </>
  );
}
