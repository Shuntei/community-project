import React, { useState } from 'react'
import { RiStarFill, RiCloseLargeLine } from '@remixicon/react'
import Image from 'next/image'

function CommentModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full  bg-black/50 z-40 ">
          <div className=" bg-white  p-5 rounded  z-50 md:w-[800px] w-[330px] md:h-[470px] md:px-20 md:py-10">
            <div className="flex flex-col">
              <div className="flex justify-end">
                <button className="close text-[30px] text-black" onClick={closeModal}>
                <RiCloseLargeLine />
                </button>
              </div>
              <div className="text-black text-xl font-['IBM Plex Mono']">
                輕量款露營登山帳篷
              </div>
              <div className="w-full flex  gap-4">
                {/* 左 */}
                <div className="md:w-2/5 flex flex-col gap-3 py-3">
                  <div className="flex w-full justify-between">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                  </div>

                  <div className="w-8/12                  ">
                    <Image
                      src="/images/camp.jpg"
                      alt="Picture of camp"
                      width={200}
                      height={200}
                      className="aspect-square rounded"
                    />
                  </div>
                </div>
                {/* 右 */}
                <div className="w-3/5 flex flex-col gap-2">
                  <div className="text-neutral-500 text-[15px] font-bold font-['Noto Sans']">
                    評論
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols="28"
                      rows="5"
                      className="border border-dashed md:px-4 py-4"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="py-3">
                  <div className=" px-[98px] py-[18px] bg-black border border-black justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[15px] font-normal font-['Noto Sans']">
                      評價商品
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CommentModal
