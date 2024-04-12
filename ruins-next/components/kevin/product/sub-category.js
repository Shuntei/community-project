import { useRouter } from 'next/router'
import React from 'react'

export default function SubCategory() {
  const router = useRouter()
  return (
    <>
      {router.query.main_category === '4'
        ? '直播'
        : router.query.main_category === '2'
          ? '手作'
          : router.query.main_category === '3'
            ? '戶外'
            : '所有商品'}
      {router.query.main_category === '4' ? (
        '直播'
      ) : router.query.main_category === '2' ? (
        <div className="justify-start items-center flex">
        <div className="px-2.5 py-2 bg-white bg-opacity-20 border border-zinc-300 justify-center items-center gap-2.5 flex">
          <div className="text-black text-[13px] font-normal font-['Noto Sans TC'] tracking-wide">
            手作擺飾
          </div>
        </div>
        <div className="px-2.5 py-2 border border-zinc-300 justify-center items-center gap-2.5 flex">
          <div className="text-black text-[13px] font-normal font-['Noto Sans TC'] tracking-wide">
            花瓶擺設
          </div>
        </div>

      </div>
      ) : router.query.main_category === '3' ? (
        <div className="justify-start items-center flex">
          <div className="px-2.5 py-2 bg-white bg-opacity-20 border border-zinc-300 justify-center items-center gap-2.5 flex">
            <div className="text-black text-[13px] font-normal font-['Noto Sans TC'] tracking-wide">
              帳篷
            </div>
          </div>
          <div className="px-2.5 py-2 border border-zinc-300 justify-center items-center gap-2.5 flex">
            <div className="text-black text-[13px] font-normal font-['Noto Sans TC'] tracking-wide">
              露營周邊
            </div>
          </div>
          <div className="px-2.5 py-2 border border-zinc-300 justify-center items-center gap-2.5 flex">
            <div className="text-black text-[13px] font-normal font-['Noto Sans TC'] uppercase tracking-wide">
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
