import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Modal from '@/components/kevin/modal/comment-modal'
import AccountLayout from '@/components/linda/accountLayout'
import { useState, useEffect, useContext } from 'react'
import AuthContext from '@/contexts/auth-context'
import {
  CART_GETPO,
  CART_GETPODETAIL,
  PRODUCT_MYONGOINGPO,
  PRODUCT_MYCOMPLETEDPO,
} from '@/components/config/api-path'
import { useRouter } from 'next/router'

export default function MyOrder() {
  const router = useRouter()
  const { auth } = useContext(AuthContext)
  const memberId = auth.id
  const [ongoingPo, setOngoingPo] = useState([])
  const [completedPo, setCompletedPo] = useState([])
  // 取得歷史訂單：訂單處理中
  const getOngoingPo = async () => {
    try {
      const r = await fetch(PRODUCT_MYONGOINGPO + `/${memberId}`)
      const d = await r.json()
      setOngoingPo(d)
    } catch (ex) {
      console.log(ex)
    }
  }

  // 取得歷史訂單：已完成
  const getCompletedPo = async () => {
    try {
      const r = await fetch(PRODUCT_MYCOMPLETEDPO + `/${memberId}`)
      const d = await r.json()
      setCompletedPo(d)
    } catch (ex) {
      console.log(ex)
    }
  }
  
  useEffect(() => {
    // if (memberId) {
      getOngoingPo()
      getCompletedPo()
    // } else {
    //   // router.push('/member/login')
    //   router.push('/store/product/my-order')
    // }
  }, [memberId])

  return (
    <>
      {console.log(ongoingPo)}

      <div className="w-full flex flex-col px-4 md:px-20 py-5 md:py-12 md:gap-12 gap-5 ">
        <Modal />
        {/* 訂單完成/未完成超連結 &&我的訂單標題*/}
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-5">
          <div className="flex gap-7 items-end order-2 md:order-1">
            <div className="text-white md:text-4xl text-base  font-['Noto Sans TC']">
              全 部
            </div>
            <div className="text-neutral-400 md:text-xl text-sm font-['Noto Sans TC']">
              未完成
            </div>
            <div className="text-neutral-400 md:text-xl text-sm font-['Noto Sans TC']">
              已完成
            </div>
          </div>
          <div className="flex text-white md:text-xl text-base font-['Noto Sans TC'] order-1 md:order-2 justify-center items-end ">
            我的訂單
          </div>
        </div>
        {/* 訂單內容列表 */}
        <div className="w-full flex flex-col md:gap-12 gap-5">
          {/* 一個內容 */}

          <div className="w-full flex justify-between md:gap-12 gap-5 relative h-[150px] md:h-fit">
            <div className="md:w-1/12 w-1/4">
              <Image
                src="/images/camp.jpg"
                alt="Picture of camp"
                width={200}
                height={200}
                className="aspect-square rounded"
              />
            </div>
            <div className="md:w-11/12 w-3/4 flex flex-col gap-3">
              <div className="w-full flex justify-between">
                <div className="text-white text-base font-['Noto Sans TC']">
                  天幕帳專用營柱
                </div>
                <div className="text-zinc-300 text-xs font-['Noto Sans TC']">
                  已完成
                </div>
              </div>
              <div className="w-full text-right text-white text-xs  font-['IBM Plex Mono']">
                x1
              </div>
              <div className="w-full flex justify-between">
                <div className="flex gap-5">
                  <button className="py-2 px-7 bg-white border border-black justify-center items-center flex absolute bottom-0 md:static hover:bg-black hover:border-white group">
                    <div className="text-black group-hover:text-white text-xs  font-['Noto Sans TC']">
                      評價商品
                    </div>
                  </button>
                  <button className=" py-2 px-7 bg-black border border-black justify-center items-center flex absolute bottom-0 right-0 md:static hover:bg-neutral-500 hover:border-white">
                    <div className="text-white text-xs  font-['Noto Sans TC']">
                      再買一次
                    </div>
                  </button>
                </div>
                <div className="text-white text-base font-['IBM Plex Mono']">
                  $ 1,998
                </div>
              </div>
            </div>
          </div>
          {/* 一個內容 */}
          <div className="collapse bg-292929">
            <input type="checkbox" className="bg-292929" />
            <div className="collapse-title text-xl font-medium bg-292929">
              Click me to show/hide content
            </div>
            <div className="collapse-content bg-292929">
              <p>hello</p>
            </div>
          </div>
          {/* 一個內容 */}
        </div>
      </div>
    </>
  )
}

MyOrder.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>
}
