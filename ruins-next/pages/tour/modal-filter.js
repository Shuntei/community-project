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
      <div className="md:relative absolute -top-[60px] right-4 md:top-0 md:right-0">
        <button
          className="font-['Noto Sans TC'] md:text-[13px] text-xl me:font-semibold md:rounded rounded-full bg-white md:opacity-100 opacity-90 px-2.5 py-[5px]"
          onClick={openModal}
        >
          <i className="ri-equalizer-line"></i>
          <span className="md:inline hidden">排序</span>
        </button>
      </div>
      {isOpen && (
        <div className=" bg-white absolute top-12 right-1 border rounded text-black drop-shadow-lg">
          <div className="py-2">
            <div className="text-center">排序方式</div>
            <button
              className="close absolute top-4 right-4 text-[30px] text-black"
              onClick={closeModal}
            >
              <RiCloseLine />
            </button>
          </div>
          <hr />
          <div className="px-2 py-1 ">
            <div className="hover:bg-blue-100 px-2 py-1">最早上架</div>
            <div className="hover:bg-blue-100 px-2 py-1">最受歡迎</div>
            <div className="hover:bg-blue-100 px-2 py-1">探險難度</div>
          </div>
          <hr />
        </div>
      )}
      </div>
    </>
  )
}

export default CategoryModal
