import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import Link from 'next/link'

export default function AllSearch() {
  return (
    <>
      <Navbar />
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
            <div id="cardbox" className="flex space-x-7">
              <Link
                href="/tour/tour-post"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
            </div>
          </div>
          <div className="space-y-4 font-['Noto Sans TC']">
            <div id="cardbox" className="flex space-x-7">
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
            </div>
          </div>
          <div className="space-y-4 font-['Noto Sans TC']">
            <div id="cardbox" className="flex space-x-7">
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
            </div>
          </div>
          <div className="space-y-4 font-['Noto Sans TC']">
            <div id="cardbox" className="flex space-x-7">
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
            </div>
          </div>
          <div className="space-y-4 font-['Noto Sans TC']">
            <div id="cardbox" className="flex space-x-7">
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
              <Link
                href="#"
                className="bg-white w-1/4 rounded overflow-hidden pb-4"
              >
                <div className="space-y-5">
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
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="">
              <button className="border text-white px-5 py-[10px] rounded-lg hover:bg-black">
                載入更多結果
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
