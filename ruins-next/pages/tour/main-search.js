import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import Link from 'next/link'

export default function MainSearch() {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/images/tempuse.jpg')] bg-cover bg-center">
        <div id="headerReplace" className="h-32"></div>
        <div className="space-y-2.5 pt-12 md:pb-12 pb-5 md:px-[150px] px-5">
          <h1 className="text-white text-[26px] font-semibold">
            找尋你的精彩冒險
          </h1>
          <div className="relative">
            <input
              type="text"
              className="md:w-1/3 w-[87%] pl-8 pr-5 py-2.5 opacity-90 rounded"
              placeholder="想找什麼呢？"
            />
            <i className="ri-search-line ri-lg absolute left-2 top-[13px]"></i>
          </div>
        </div>
      </div>
      <div className="md:px-[150px] px-5 py-5 space-y-5 relative">
        <div className="flex justify-between">
          <div className="md:flex md:space-x-3 font-['Noto Sans TC'] text-[13px] font-semibold">
            <button className="rounded bg-white px-2.5 py-[5px] md:inline-block hidden ">
              更多主題<i className="ri-arrow-down-s-line"></i>
            </button>
            <div className="md:space-x-3 space-x-2 flex flex-nowrap">
              <button className="rounded bg-white px-2.5 py-[5px]">戲院</button>
              <button className="rounded bg-white px-2.5 py-[5px]">
                工廠遺址
              </button>
              <button className="rounded bg-white px-2.5 py-[5px]">
                百貨公司
              </button>
              <button className="rounded bg-white px-2.5 py-[5px]">
                尚有名額
              </button>
            </div>
          </div>
          <div className="md:relative absolute -top-[60px] right-4 md:top-0 md:right-0">
            <button className="font-['Noto Sans TC'] md:text-[13px] text-xl me:font-semibold md:rounded rounded-full bg-white md:opacity-100 opacity-90 px-2.5 py-[5px]">
              <i className="ri-equalizer-line"></i>
              <span className="md:inline hidden">篩選</span>
            </button>
          </div>
        </div>
        <p className="text-white text-[13px]">215個探險</p>
      </div>
      <div className="md:px-[150px] px-5 space-y-10 pb-[50px]">
        <div className="space-y-4 font-['Noto Sans TC']">
          <div className="text-white text-2xl font-semibold">
            ▌即將在12小時內開始的探險
          </div>
          <div
            id="cardbox"
            className="md:flex md:space-x-7 md:space-y-0 space-y-5"
          >
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="/tour/tour-post" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/gracehill0.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4 font-['Noto Sans TC']">
          <div className="text-white text-2xl font-semibold">▌最新發佈</div>
          <div
            id="cardbox"
            className="md:flex md:space-x-7 md:space-y-0 space-y-5"
          >
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4 font-['Noto Sans TC']">
          <div className="text-white text-2xl font-semibold">
            ▌新手友善的行程
          </div>
          <div
            id="cardbox"
            className="md:flex md:space-x-7 md:space-y-0 space-y-5"
          >
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4 font-['Noto Sans TC']">
          <div className="text-white text-2xl font-semibold">▌古宅洋樓</div>
          <div
            id="cardbox"
            className="md:flex md:space-x-7 md:space-y-0 space-y-5"
          >
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/tour/all-search">
            <button className="border text-white px-5 py-[10px] rounded-lg hover:bg-black">
              探索全部行程
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
