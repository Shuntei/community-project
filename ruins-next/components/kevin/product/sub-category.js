import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function SubCategory() {
  const router = useRouter()
  const [cate, setCate] = useState('')
  const handleChange = (e) => {
    const cateValue = e.currentTarget.getAttribute('data-value')
    setCate(cateValue)
    router.push(
      {
        pathname: '/shop/product/list',
        query: { sub_category: cateValue },
      },
      undefined,
      { scroll: false }
    )
  }

  return (
    <>
      {/* 文字 */}
      {router.query.main_category === '4'
        ? '直播'
        : router.query.main_category === '2' ||
            router.query.sub_category === '2' ||
            router.query.sub_category === '3'
          ? '手作'
          : router.query.main_category === '3' ||
              router.query.sub_category === '4' ||
              router.query.sub_category === '5' ||
              router.query.sub_category === '6' 
            ? '戶外'
            : '所有商品'}
      {/* 副分支 */}
      {router.query.main_category === '4' ? (
        '直播'
      ) : router.query.main_category === '2' ||
        router.query.sub_category === '2' ||
        router.query.sub_category === '3' ? (
        <div className="justify-start items-center flex">
          <div className="px-2.5 py-2 bg-white bg-opacity-20 border border-zinc-300 justify-center items-center gap-2.5 flex">
            <div
              name="sub_category"
              data-value="3"
              onClick={handleChange}
              className="text-black text-[13px] font-normal font-['Noto Sans TC'] tracking-wide cursor-pointer"
            >
              手作擺飾
            </div>
          </div>
          <div className="px-2.5 py-2 border border-zinc-300 justify-center items-center gap-2.5 flex">
            <div
              className="text-black text-[13px] font-normal font-['Noto Sans TC'] tracking-wide cursor-pointer"
              name="sub_category"
              data-value="2"
              onClick={handleChange}
            >
              花瓶擺設
            </div>
          </div>
        </div>
      ) : router.query.main_category === '3'||
              router.query.sub_category === '4' ||
              router.query.sub_category === '5' ||
              router.query.sub_category === '6'  ? (
        <div className="justify-start items-center flex">
          <div className="px-2.5 py-2 bg-white bg-opacity-20 border border-zinc-300 justify-center items-center gap-2.5 flex">
            <div data-value="4"
              onClick={handleChange}
              className="text-black text-[13px] font-normal font-['Noto Sans TC'] tracking-wide cursor-pointer">
              帳篷
            </div>
          </div>
          <div className="px-2.5 py-2 border border-zinc-300 justify-center items-center gap-2.5 flex">
            <div data-value="5"
              onClick={handleChange}
              className="text-black text-[13px] font-normal font-['Noto Sans TC'] tracking-wide cursor-pointer">
              露營周邊
            </div>
          </div>
          <div className="px-2.5 py-2 border border-zinc-300 justify-center items-center gap-2.5 flex">
            <div data-value="6"
              onClick={handleChange}
              className="text-black text-[13px] font-normal font-['Noto Sans TC'] tracking-wide cursor-pointer">
              穿戴
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
