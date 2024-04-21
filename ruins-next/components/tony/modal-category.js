import React, { useState } from 'react'
import { RiCloseLine } from '@remixicon/react'
import Image from 'next/image'

function CategoryModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <div className='relative'>
      <div className="md:flex md:space-x-3 font-['Noto Sans TC'] text-[13px] font-semibold">
        <button
          className="rounded bg-white px-2.5 py-[11px]"
          onClick={openModal}
        >
          更多條件<i className="ri-arrow-down-s-line"></i>
        </button>
      </div>
      {isOpen && (
        <div className=" bg-white absolute top-11 left-0 w-[280px] border rounded text-black drop-shadow-lg">
          <div className="py-4">
            <div className="text-xl text-center">篩選條件</div>
            <button
              className="close absolute top-4 right-4 text-black"
              onClick={closeModal}
            >
              <RiCloseLine />
            </button>
          </div>
          <hr />
          <div className="px-5 py-5 space-y-5 text-[15px]">
            <div className="space-y-2">
              <div className="">地區</div>
              <div className="space-x-2">
                <button className="border border-black px-2 py-1 rounded hover:bg-black hover:text-white">
                  北部
                </button>
                <button className="border border-black px-2 py-1 rounded hover:bg-black hover:text-white">
                  中部
                </button>
                <button className="border border-black px-2 py-1 rounded hover:bg-black hover:text-white">
                  南部
                </button>
                <button className="border border-black px-2 py-1 rounded hover:bg-black hover:text-white">
                  東部
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div>城市</div>
              <select name="" id="" className="border border-black">
                <option value="">台北市</option>
              </select>
            </div>
            <div className="space-y-2">
              <div>探險時長</div>
              <div className="space-x-2">
                <button className="border border-black px-2 py-1 rounded hover:bg-black hover:text-white">
                  一日
                </button>
                <button className="border border-black px-2 py-1 rounded hover:bg-black hover:text-white">
                  半日
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="px-5 py-4 flex justify-between">
            <button className="border px-2 py-1 rounded hover:bg-gray-100 text-[15px]">
              清除全部
            </button>
            <button className="border border-zinc-800 px-2 py-1 text-white bg-zinc-800 rounded hover:bg-black text-[15px]">
              顯示結果
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  )
}

export default CategoryModal
