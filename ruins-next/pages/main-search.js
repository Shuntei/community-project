import React from "react";
import "remixicon/fonts/remixicon.css";

export default function MainSearch() {
  return (
    <>
      <div className="bg-zinc-800">
        <div className="bg-[url('/images/tempuse.jpg')] bg-cover bg-center">
          <div id="headerReplace" className="h-32"></div>
          <div className="space-y-2.5 py-12 px-[150px]">
            <h1 className="text-white text-[26px] font-semibold">
              找尋你的精彩冒險
            </h1>
            <div className="relative">
            
            <input
              type="text"
              className="w-1/3 pl-8 pr-5 py-2.5 opacity-90 rounded"
              placeholder="想找什麼呢？"
            />
            <i className="ri-search-line ri-lg absolute left-2 top-[13px]"></i>
            </div>
          </div>
        </div>
        <div className="px-[150px] py-5 space-y-5">
          <div className="flex justify-between">
            <div className="space-x-3">
              <button className="font-['Noto Sans TC'] text-[13px] font-semibold rounded bg-white px-2.5 py-[5px]">
                更多主題<i class="ri-arrow-down-s-line"></i>
              </button>
              <button className="font-['Noto Sans TC'] text-[13px] font-semibold rounded bg-white px-2.5 py-[5px]">
                戲院
              </button>
              <button className="font-['Noto Sans TC'] text-[13px] font-semibold rounded bg-white px-2.5 py-[5px]">
                工廠遺址
              </button>
              <button className="font-['Noto Sans TC'] text-[13px] font-semibold rounded bg-white px-2.5 py-[5px]">
                百貨公司
              </button>
              <button className="font-['Noto Sans TC'] text-[13px] font-semibold rounded bg-white px-2.5 py-[5px]">
                尚有名額
              </button>
            </div>
            <div>
              <button className="font-['Noto Sans TC'] text-[13px] font-semibold rounded bg-white px-2.5 py-[5px]">
                <i class="ri-equalizer-line"></i>篩選
              </button>
            </div>
          </div>
          <p className="text-white text-[13px]">215個探險</p>
        </div>
        <div className="px-[150px] space-y-5 pb-[50px]">
          <div className="space-y-4 font-['Noto Sans TC']">
            <div className="text-white text-xl font-semibold">
              ▌即將在12小時內開始的探險
            </div>
            <div id="cardbox" className="flex space-x-7">
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  className="h-auto max-w-full"
                  src="/images/borou/arcade02.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/arcade01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span className="space-x-1">
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/hourse01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span className="space-x-1">
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/arcade07.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span className="space-x-1">
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 font-['Noto Sans TC']">
            <div className="text-white text-xl font-semibold">▌最新發佈</div>
            <div id="cardbox" className="flex space-x-7">
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/arcade04.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span>
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/anju01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span>
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/anju02.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span>
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/dry03.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span>
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 font-['Noto Sans TC']">
            <div className="text-white text-xl font-semibold">
              ▌新手友善的行程
            </div>
            <div id="cardbox" className="flex space-x-7">
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/home01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span>
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/home02.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span>
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/home03.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span>
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/home04.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span>
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 font-['Noto Sans TC']">
            <div className="text-white text-xl font-semibold">▌古宅洋樓</div>
            <div id="cardbox" className="flex space-x-7">
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/hotel01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span>
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/hotel02.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span>
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/hotel03.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span>
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded overflow-hidden space-y-5 pb-4">
                <img
                  class="h-auto max-w-full"
                  src="/images/borou/hotel04.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i class="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span>
                    <i class="ri-heart-3-line ri-lg"></i>
                    <i class="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button className="border text-white px-5 py-[10px] rounded-lg">
              探索全部行程
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full h-[370px] px-[91px] py-[83px] bg-black flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="justify-start items-start gap-[51px] inline-flex">
          <div className="w-[298px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="flex-col justify-start items-start gap-[5px] flex">
              <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                SHOP
              </div>
              <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                COMMUNITIES
              </div>
              <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                LIVE
              </div>
              <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                TOUR
              </div>
              <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                GAME
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[5px] flex">
              <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                SHIPPING & RETURNS
              </div>
              <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                TERMS OF USE
              </div>
              <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                PRIVACY POLICY
              </div>
              <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                PRIVACY PREFERENCES
              </div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start inline-flex">
            <div className="w-[311.09px] grow shrink basis-0 flex-col justify-start items-start gap-[3px] flex">
              <div className="text-white text-[10px] font-medium font-['IBM Plex Mono']">
                MORE Runis
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                  RUNIS
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                  TWITTER
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                  FACEBOOK
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                  INSTAGRAM
                </div>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-white text-[13px] font-medium font-['IBM Plex Mono']">
                  YOUTUBE
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[29px] inline-flex">
            <div className="flex-col justify-start items-start gap-[3px] flex">
              <div className="w-[117.58px] h-[15.92px] text-white text-[10px] font-medium font-['IBM Plex Mono']">
                WANT MORE Runis?
              </div>
            </div>
            <div className="w-[367.43px] text-white text-[13px] font-medium font-['IBM Plex Mono']">
              Get our emails.Letters from our forum administrator, new trailers,
              podcasts, merch, and more. Not too often - just enough.
            </div>
            <div className="w-[622.18px] h-[73px] relative">
              <div className="w-[483px] h-[73px] left-0 top-0 absolute">
                <div className="w-[483px] h-[73px] left-0 top-0 absolute border border-white" />
                <div className="w-[36.74px] h-[15.92px] left-[19.26px] top-[11.68px] absolute text-white text-[11px] font-medium font-['IBM Plex Mono']">
                  EMAIL
                </div>
              </div>
              <div className="w-[140px] h-[73px] left-[482px] top-[0.02px] absolute">
                <div className="w-[140px] h-[73px] left-[140px] top-0 absolute origin-top-left rotate-180 border border-white" />
                <div className="w-[62.46px] h-[19.60px] left-[39px] top-[27px] absolute text-white text-[13px] font-medium font-['IBM Plex Mono']">
                  SIGN UP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
