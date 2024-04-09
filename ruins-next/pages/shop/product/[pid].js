import Image from "next/image";
import { PRODUCT_ONE } from "@/components/config/api-path";
import { RiStarFill, RiStarLine } from "@remixicon/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/linda/navbar/navbar";
import Footer from "@/components/linda/footer/footer";
import { useRouter } from "next/router";
import { useCart } from "@/hooks/use-cart";

export default function Pid() {
  const router = useRouter();
  const { addMutiItem,onAddItem,items} = useCart();
  const [product, setProduct] = useState({
    pid: "",
    picture: "",
    stock: 0,
    name: "",
    price: 0,
    tags: "",
  });
  const getProductById = async (pid) => {
    const url = `${PRODUCT_ONE}/${pid}`;

    // 用 try...catch語法來作例外處理
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      // 設定到狀態中 ===> 觸發重新渲染(re-render)
      // 要設定到狀態前，最好先檢查資料類型是否一致
      if (typeof data === "object" && data !== null) {
        setProduct(data.row);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 2. 在useEffet中監聽isReady值為true時，才能得到網址上的pid和伺服器獲取資料
  useEffect(() => {
    if (router.isReady) {
      //確保能得到pid
      const { pid } = router.query;
      console.log(pid);
      // 有pid後，向伺服器要求資料
      getProductById(pid);
    }
  }, [router.isReady]);

  return (
    <>
      <div className=" bg-gray-100 flex flex-col justify-center items-center relative pt-28">
        {/* header開始 */}
        <Navbar navColor={""} />
        {/* header結束 */}
        {/* 標題&首圖開始 */}
        <div className="w-full flex flex-col md:flex-row justify-between md:px-24 px-4 py-5">
          <div className="flex items-start flex-col justify-end md:order-1 order-2">
            <div className="text-black  md:text-6xl text-[36px] font-semibold font-['Noto Sans TC']">
              {product.name}
            </div>
            <div className="text-black text-[20px] md:text-[32px] font-normal font-['IBM Plex Mono']">
              ${product.price}
            </div>
          </div>
          <div className="md:order-2 order-1 ">
            <Image
              src={product.img}
              alt="Picture of camp"
              width={500}
              height={500}
              className="rounded-xl"
              unoptimized={true}
            />
          </div>
        </div>
        {/* 標題&首圖 */}
        {/* 商品內容開始 */}
        <div className="flex flex-col md:flex-row w-full  justify-between px-4 md:px-24 py-5 gap-5 md:gap-0">
          {/* 左-商品敘述 */}
          <div className="md:w-1/5 md:space-y-7 space-y-2 md:sticky top-16 h-min">
            <div className="w-full text-black border-b-2 border-black  text-[13px] font-semibold font-['Noto Sans TC']">
              商品敘述
            </div>
            <div className="w-full text-black text-[15px] font-normal">
              {product.description}
            </div>
          </div>
          {/* 右-商品數量&moreInfo&addToCart&圖片 */}
          <div className="flex  flex-col md:w-4/5">
            {/* 右-商品數量&moreInfo&addToCart */}
            <div className="flex flex-col md:flex-row ">
              <div className="md:w-1/3 w-11/12  md:ms-6 md:space-y-7 fixed bottom-20 md:static bg-gray-100">
                <div className=" text-black bg-gray-100 border-black border-b-2 text-[13px] font-semibold font-['Noto Sans TC'] ">
                  數量
                </div>
                <div className="w-full flex gap-6 md:gap-0 md:justify-between">
                  <div className="text-black md:text-[26px] text-sm font-semibold font-['IBM Plex Mono']">
                    1{" "}
                  </div>
                  <div className="text-neutral-400 md:text-[26px] text-sm font-semibold font-['IBM Plex Mono']">
                    2
                  </div>
                  <div className="text-neutral-400 md:text-[26px] text-sm font-semibold font-['IBM Plex Mono']">
                    3
                  </div>
                  <div className="text-neutral-400 md:text-[26px] text-sm font-semibold font-['IBM Plex Mono']">
                    4
                  </div>
                  <div className="text-neutral-400 md:text-[26px] text-sm font-semibold font-['IBM Plex Mono']">
                    5
                  </div>
                  <div className="text-neutral-400 md:text-[26px] text-sm font-semibold font-['IBM Plex Mono']">
                    6
                  </div>
                  <div className="text-neutral-400 md:text-[26px] text-sm font-semibold font-['IBM Plex Mono']">
                    7
                  </div>
                  <div className="text-neutral-400 md:text-[26px] text-sm font-semibold font-['IBM Plex Mono']">
                    8
                  </div>
                  <div className="text-neutral-400 md:text-[26px] text-sm font-semibold font-['IBM Plex Mono']">
                    9
                  </div>
                </div>
              </div>
              <div className="md:w-1/3  md:ms-6  md:space-y-7 space-y-2 ">
                <div className=" text-black  border-black border-b-2 text-[13px] font-semibold font-['Noto Sans TC'] ">
                  more info
                </div>
                <div className="w-full text-black text-[15px] font-normal">
                  採用鈕扣一鍵式扣環，可快速裝上、快速拆下
                  <br />
                  適用市面上各種類型相機
                  <br />
                  穩固、安全的與攝影設備連接
                </div>
              </div>
              <div className="md:w-1/3  md:ms-6 md:space-y-7  fixed bottom-1 md:static">
                <button
                  onClick={() => {

                    console.log(product.pid)
                    console.log(items)

                    onAddItem(product);
                  }}
                  className="px-[80px] md:px-[46px] md:py-[43px] py-[18px] border border-black bg-black justify-center items-center flex"
                >
                  <div className="text-white italic text-[26px] font-semibold font-['IBM Plex Mono']">
                    ADD TO CART
                  </div>
                </button>
              </div>
            </div>
            {/* 右-圖片 */}
            <div className="md:px-5 md:py-10 py-5 space-y-3">
              <img
                className=" aspect-square rounded-xl"
                src="https://via.placeholder.com/919x609"
              />
              <img
                className="aspect-square  rounded-xl"
                src="https://via.placeholder.com/919x609"
              />
              <img
                className="aspect-square  rounded-xl"
                src="https://via.placeholder.com/919x609"
              />
            </div>
          </div>
        </div>
        {/* 商品內容結束 */}
        {/* 評論開始 */}
        <div className="w-full flex flex-col items-center md:px-24  md:py-5 md:space-y-10 space-y-5">
          <div className=" w-full text-black text-[26px] text-center font-medium font-['IBM Plex Mono']">
            Reviews
          </div>
          {/* 第一則評論 */}
          <div className="flex flex-col md:flex-row w-11/12 md:w-full px-[40px] md:px-0 border-black border-b py-[20px] gap-3">
            {/* 評論左側 */}
            <div className="flex flex-col md:mx-6 md:w-1/5 space-y-3">
              <div className="flex md:border-b md:border-black md:text-black">
                <div className="w-full  text-[15px]  font-['IBM Plex Mono'] ">
                  Kevin lai
                </div>
                <div className="text-black text-[12px] font-['IBM Plex Mono']">
                  01/03/24
                </div>
              </div>
              <div className="flex space-x-1 justify-between">
                <RiStarFill color="black" size="32px" />
                <RiStarFill color="black" size="32px" />
                <RiStarFill color="black" size="32px" />
                <RiStarFill color="black" size="32px" />
                <RiStarFill color="black" size="32px" />
              </div>
            </div>
            {/* 評論右側 */}
            <div className="flex flex-col md:w-3/5 md:mx-6 mx-0 space-y-3">
              <div className="md:w-1/3 border-b text-[15px]  font-['IBM Plex Mono'] border-black text-black">
                not bad!
              </div>

              <div className="text-black text-[15px] font-normal font-['notosans tc']">
                非常棒的商品！推推！包裝得很小心寄出貨超快與圖片相符，很喜歡，謝出貨速度非常的快，非常棒的賣家非常棒的商品！推推！包裝得很小心寄出貨超快與圖片相符，很喜歡，謝出貨速度非常的快，非常棒的賣家非常棒的商品！推推！包裝得很小心寄出貨超快與圖片相符，很喜歡，謝出貨速度非常的快，非常棒的賣家
              </div>
            </div>
          </div>
          {/* 第一則評論 */}
          <div className="flex flex-col md:flex-row w-11/12 md:w-full px-[40px] md:px-0 border-black border-b py-[20px] gap-3">
            {/* 評論左側 */}
            <div className="flex flex-col md:mx-6 md:w-1/5 space-y-3">
              <div className="flex md:border-b md:border-black md:text-black">
                <div className="w-full  text-[15px]  font-['IBM Plex Mono'] ">
                  Sarah N.
                </div>
                <div className="text-black text-[12px] font-['IBM Plex Mono']">
                  01/03/24
                </div>
              </div>
              <div className="flex space-x-1 justify-between">
                <RiStarFill color="black" size="32px" />
                <RiStarFill color="black" size="32px" />
                <RiStarFill color="black" size="32px" />
                <RiStarFill color="black" size="32px" />
                <RiStarFill color="black" size="32px" />
              </div>
            </div>
            {/* 評論右側 */}
            <div className="flex flex-col md:w-3/5 md:mx-6 mx-0 space-y-3">
              <div className="md:w-1/3 border-b text-[15px]  font-['IBM Plex Mono'] border-black text-black">
                not bad!
              </div>

              <div className="text-black text-[15px] font-normal font-['notosans tc']">
                非常棒的商品！推推！包裝得很小心寄出貨超快與圖片相符，很喜歡，謝出貨速度非常的快，非常棒的賣家非常棒的商品！推推！包裝得很小心寄出貨超快與圖片相符，很喜歡，謝出貨速度非常的快，非常棒的賣家非常棒的商品！推推！包裝得很小心寄出貨超快與圖片相符，很喜歡，謝出貨速度非常的快，非常棒的賣家
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-11/12 md:w-full px-[40px] md:px-0 border-black border-b py-[20px] gap-3">
            {/* 評論左側 */}
            <div className="flex flex-col md:mx-6 md:w-1/5 space-y-3">
              <div className="flex md:border-b md:border-black md:text-black">
                <div className="w-full  text-[15px]  font-['IBM Plex Mono'] ">
                  Sarah N.
                </div>
                <div className="text-black text-[12px] font-['IBM Plex Mono']">
                  01/03/24
                </div>
              </div>
              <div className="flex space-x-1 justify-between">
                <RiStarFill color="black" size="32px" />
                <RiStarFill color="black" size="32px" />
                <RiStarFill color="black" size="32px" />
                <RiStarFill color="black" size="32px" />
                <RiStarFill color="#999" size="32px" />
              </div>
            </div>
            {/* 評論右側 */}
            <div className="flex flex-col md:w-3/5 md:mx-6 mx-0 space-y-3">
              <div className="md:w-1/3 border-b text-[15px]  font-['IBM Plex Mono'] border-black text-black">
                not bad!
              </div>

              <div className="text-black text-[15px] font-normal font-['notosans tc']">
                內容商品也完整，品質很棒，很好的一次購物體驗!謝謝。
                出貨快速的好賣家!一下訂很快就出貨了，今天就收到貨，打開包裝後內容商品也完整，品質很棒，很好的一次購物體驗!謝謝。
              </div>
            </div>
          </div>

          {/* 載入按鈕 */}
          <div className="md:w-[196px] md:h-[108px]   py-[25px] w-[138px] h-[35px] border border-black justify-center items-center flex">
            <div className="text-black font-semibold text-xs md:text-[15px] font-['Noto Sans Tc'] ">
              載入更多留言
            </div>
          </div>
        </div>
        {/* 評論結束 */}

        {/* 更多推薦商品開始 */}
        <div className="flex w-full justify-between  md:px-24 px-4 py-5 flex-col space-y-5">
          <div className="text-black  text-[16px] font-semibold font-['IBM Plex Mono']">
            MORE RECOMMENDED PRODUCTS
          </div>
          <div className="flex md:gap-10 gap-5  justify-center">
            <div className="md:w-1/5 flex-col  gap-5 flex">
              <img
                className="w-full aspect-square  rounded-xl"
                src="https://via.placeholder.com/305x313"
                alt="pic"
              />
              <div className="md:px-10 flex-col  gap-1 flex">
                <div className="text-black text-sm font-medium font-['IBM Plex Mono']">
                  球型泡泡花瓶
                </div>
                <div className="text-zinc-500 text-[15px] font-medium font-['IBM Plex Mono']">
                  220
                </div>
              </div>
            </div>
            <div className="md:w-1/5 flex-col  gap-5 flex">
              <img
                className="w-full aspect-square  rounded-xl"
                src="https://via.placeholder.com/305x313"
                alt="pic"
              />
              <div className="md:px-10 flex-col  gap-1 flex">
                <div className="text-black text-sm font-medium font-['IBM Plex Mono']">
                  原石擺設
                </div>
                <div className="text-zinc-500 text-[15px] font-medium font-['IBM Plex Mono']">
                  78000
                </div>
              </div>
            </div>
            <div className="w-1/5 flex-col  gap-5 md:flex hidden">
              <img
                className="w-full aspect-square  rounded-xl"
                src="https://via.placeholder.com/305x313"
                alt="pic"
              />
              <div className="md:px-10 flex-col  gap-1 flex">
                <div className="text-black text-sm font-medium font-['IBM Plex Mono']">
                  4人快開防曬遮陽帳篷
                </div>
                <div className="text-zinc-500 text-[15px] font-medium font-['IBM Plex Mono']">
                  1499
                </div>
              </div>
            </div>
            <div className="w-1/5 flex-col  gap-5 md:flex hidden">
              <img
                className="w-full aspect-square  rounded-xl"
                src="https://via.placeholder.com/305x313"
                alt="pic"
              />
              <div className="md:px-10 flex-col  gap-1 flex">
                <div className="text-black text-sm font-medium font-['IBM Plex Mono']">
                  咖啡豆擺飾
                </div>
                <div className="text-zinc-500 text-[15px] font-medium font-['IBM Plex Mono']">
                  5000
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 更多推薦商品結束 */}
        <div className=" h-20"></div>
        {/* footer開始 */}
        <Footer />
        {/* FOOTER結束 */}
      </div>
    </>
  );
}
