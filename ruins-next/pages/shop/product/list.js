import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import Carousel from '@/components/kevin/product/carousel'
import { RiSearchLine } from '@remixicon/react'
import { useCart } from '@/hooks/use-cart'
import Pagination from '@/components/kevin/product/pagination'
import { useRouter } from 'next/router'
import Category from '@/components/kevin/product/category'
import Search from '@/components/kevin/product/search'
import SortBy from '@/components/kevin/product/sort-by'
import SubCategory from '@/components/kevin/product/sub-category'

export default function List() {
  const router = useRouter()
  const { onAddItem } = useCart()
  const [products, setProuducts] = useState([])

  const getProducts = async () => {
    const url = `http://localhost:3005/product/api${location.search}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      //確保就算資料傳輸產生錯誤 畫面不會整個崩潰

      setProuducts(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getProducts()
  }, [router])

  useEffect(() => {
    // 检查 router.query 中的 keyword 或 category 参数是否有变化
    if (router.query.keyword || router.query.main_category) {
      // 如果有变化，则更新页面的 page 参数为 1
      const updatedQuery = { ...router.query, page: '1' }
      router.push(
        {
          pathname: router.pathname,
          query: updatedQuery,
        },
        undefined,
        { scroll: false }
      )
    }
  }, [router.query.main_category])
  return (
    <>
      <div className=" bg-gray-100 flex flex-col justify-center items-center w-full pt-28">
        {/* header開始 */}
        {/* header開始 */}
        <Navbar navColor={''} />
        {/* header結束 */}
        <div className=" bg-gray-100 flex flex-col justify-center items-center w-full py-7 md:py-12 space-y-6 md:space-y-12">
          {/* 輪播開始 */}
          <div className=" flex w-full md:h-[600px] h-[147px] md:px-24 px-4   justify-center">
            <Carousel />
          </div>
          {/* 輪播結束 */}
          {/* 分類開始 */}
          <Category />
          {/* 分類結束 */}
          {/* 分類標題 */}
          <div className="w-full md:px-24 px-[16px] ">
            <div className="text-black md:text-[32px] font-semibold font-['Noto Sans TC'] ">
            
              <SubCategory />
            </div>
          </div>
          {/* 搜尋與排序欄開始 */}
          <div className="w-full justify-between flex md:px-24 px-4 ">
            <div className="w-5 h-[19.50px] relative">
              {/* 搜尋 */}
              <Search />
            </div>
            <div className="justify-start items-center gap-[15px] flex">
              <div className="text-black text-sm font-medium font-['IBM Plex Mono']">
                <SortBy />
              </div>
            </div>
          </div>
          {/* 搜尋與排序欄結束 */}
          {/* 商品欄開始 */}

          <div className="grid md:grid-cols-4  grid-cols-2 md:gap-[36px]  gap-[20px] w-full  justify-between md:px-24 px-4">
            {' '}
            {products.rows &&
              products.rows.map((v, i) => {
                return (
                  <div className=" flex-col  gap-5 flex " key={v.pid}>
                    <Link href={`/shop/product/${v.pid}`}>
                      <img
                        className="w-full aspect-square  rounded-xl"
                        src={v.img}
                        alt="pic"
                      />
                    </Link>
                    <div className="md:px-10 w-full items-center md:items-start flex-col  gap-1 flex">
                      <Link
                        href={`/shop/product/${v.pid}`}
                        className="text-black md:text-sm text-xs font-medium font-['IBM Plex Mono']"
                      >
                        {v.name}
                      </Link>
                      <div className="text-zinc-500 md:w-full md:text-sm text-xs font-medium font-['IBM Plex Mono'] flex justify-between">
                        <div>{v.price}</div>
                        <button
                          onClick={() => {
                            onAddItem(v)
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
          {/* 商品欄結束 */}
          {/* 頁碼開始 */}
          <Pagination products={products}></Pagination>

          {/* 頁碼結束 */}
        </div>{' '}
        {/* footer開始 */}
        <Footer />
        {/* FOOTER結束 */}
      </div>
    </>
  )
}
