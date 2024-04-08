import Image from 'next/image'
import React from 'react'
import Process1 from '@/components/common/process1'
import Link from 'next/link'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import { useCart } from '@/hooks/use-cart'

export default function FillDoc() {
  const { items, onDecreaseItem, onIncreaseItem, totalPrice } = useCart()

  return (
    <>
      <div className=" bg-zinc-800 flex flex-col justify-center items-center pt-28">
        <Navbar />

        <div className="md:w-10/12  w-full flex  flex-col justify-center items-center bg-gradient-to-t from-gray-400 to-gray-100 md:px-24 px-4 py-5 mb-5">
          {/* 進度條開始 */}
          <Process1 name1={'選擇活動'} name2={'填寫資料'} name3={'報名成功'} />
          {/* 進度條結束 */}
          {/* 內頁開始 */}
          <form
            action=""
            className=" w-full md:p-10 p-3 m-10 flex flex-col bg-white items-center space-y-12"
          >
            {/* title */}
            <div className="text-black text-xl font-semibold font-['IBM Plex Mono'] border-b border-b-black ">
              填寫資料
            </div>
            {/* 填寫資料 */}
            <div className="w-full">
              <div>
                <div>行程資訊</div>
                <div id="articleCard" className="w-fit pb-10">
                  <Link href="/tour/tour-post" className="md:flex md:space-x-8 md:space-y-0 space-y-3">
                    <img
                      src="/images/borou/dry01.jpg"
                      className="md:w-[250px] w-full aspect-square rounded object-cover "
                      alt=""
                    />
                    <div className="relative space-y-2.5">
                      <div className="md:text-xl text-[15px]">
                        Grace Hill麗庭莊園
                      </div>
                      <div className="md:text-base text-[13px]">
                        出團時間：2024年10月25日
                      </div>
                      <p className="md:text-base text-[13px] md:h-[120px] h-[151px] text-ellipsis overflow-hidden">
                        麗庭莊園位於台北內湖的工業園區，前身為婚禮場地。
                        該酒店於 2005
                        年開業，由長興婚禮事業有限公司管理，該公司熱衷於為婚禮和其他活動提供更大、更奢華的空間，顛覆當地市場。
                        這項業務起初舉步維艱，但在電視連續劇、音樂錄影帶和新聞中出現後變得更加廣為人知。
                        2007年，該空間被租給迪詩，這是一家希望進入台灣豪華婚禮市場的日本婚禮公司。
                        原所有者退了一步，將日常營運的控制權交給了日本管理層，業務在接下來的幾年中持續成長。
                      </p>
                    </div>
                  </Link>
                </div>
                <hr />
              </div>
              <div>
                <div>聯絡資料</div>
                <i class="ri-add-line"></i>
                <div id="infoCard" className="w-1/2 bg-zinc-300 uppercase px-4 py-4 space-y-1">
                  <div>
                    <label>user name</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>name</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>birthday</label>
                    <input type="date" />
                  </div>
                  <div>
                    <label>phone</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>email</label>
                    <input type="text" />
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div>注意事項</div>
                <div>
                  <div>年齡限制</div>
                  <input type="radio" />
                  <label htmlFor="">我已滿 18 歲</label>
                </div>
                <div>
                  <div><Link href="">探險禮儀</Link></div>
                  <input type="radio" />
                  <label htmlFor="">已詳細閱讀並同意遵守</label>
                </div>
              </div>

            </div>

            <Link
              href=""
              className="w-[280px] h-[75px] bg-black border justify-center items-center gap-2.5 flex "
            >
              <div className="text-white  text-2xl font-semibold font-['IBM Plex Mono']">
                NEXT
              </div>
            </Link>
          </form>
          {/* 內頁結束 */}
        </div>
        <Footer />
      </div>
    </>
  )
}
