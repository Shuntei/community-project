import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import CommentModal from '@/components/kevin/modal/comment-modal'
import AccountLayout from '@/components/linda/accountLayout'
import { useState, useEffect, useContext } from 'react'
import AuthContext, { useAuth } from '@/contexts/auth-context'
import {
  CART_GETPO,
  CART_GETPODETAIL,
  PRODUCT_MYALLPO,
  PRODUCT_MYONGOINGPO,
  PRODUCT_MYCOMPLETEDPO,
} from '@/components/config/api-path'
import { useRouter } from 'next/router'
import { Path } from 'three'
import OrderState from '@/components/kevin/product/order-state'
export default function MyOrder() {
  const router = useRouter()
  const { auth } = useAuth()
  const memberId = auth.id
  const [allPo, setAllPo] = useState([])
  const [ongoingPo, setOngoingPo] = useState([])
  const [completedPo, setCompletedPo] = useState([])
  const [products, setProducts] = useState([])
  const [orderDetails, setOrderDetails] = useState({})

  // 取得訂單詳細商品
  const getdetailPO = async (poid) => {
    try {
      const response = await fetch(CART_GETPODETAIL + `?poid=${poid}`)
      const products = await response.json()

      // 將詳細產品資料保存到對應的訂單 ID 中
      setOrderDetails((prevDetails) => ({
        ...prevDetails,
        [poid]: products,
      }))
    } catch (ex) {
      console.log(ex)
    }
  }
  // 取得歷史訂單： 全部
  // const getAllPo = async () => {
  //   try {
  //     const r = await fetch(PRODUCT_MYALLPO + `/${memberId}`)
  //     const d = await r.json()
  //     setAllPo(d)
  //   } catch (ex) {
  //     console.log(ex)
  //   }
  // }

  // 取得歷史訂單：訂單處理中
  // const getOngoingPo = async () => {
  //   try {
  //     const r = await fetch(PRODUCT_MYONGOINGPO + `/${memberId}`)
  //     const d = await r.json()
  //     setOngoingPo(d)
  //   } catch (ex) {
  //     console.log(ex)
  //   }
  // }

  // 取得歷史訂單：已完成
  // const getCompletedPo = async () => {
  //   try {
  //     const r = await fetch(PRODUCT_MYCOMPLETEDPO + `/${memberId}`)
  //     const d = await r.json()
  //     setCompletedPo(d)
  //   } catch (ex) {
  //     console.log(ex)
  //   }
  // }
  const fetchProductDetails = async () => {
    try {
      const r = await fetch(PRODUCT_MYCOMPLETEDPO + `/${memberId}`)
      const d = await r.json()
      setAllPo(d)

      // 獲取所有訂單的詳細產品資料
      await Promise.all(
        d.rows.map(async (order) => {
          await getdetailPO(order.purchase_order_id)
        })
      )
    } catch (error) {
      console.error('Error fetching product details:', error)
    }
  }

  // useEffect(() => {
  //   // if (memberId) {
  //   // getOngoingPo()
  //   // getAllPo()
  //   // getCompletedPo()
  //   // } else {
  //   //   // router.push('/member/login')
  //   //   router.push('/shop/product/my-order')
  //   // }
  // }, [memberId])

  useEffect(() => {
    fetchProductDetails()
  }, [memberId])
  return (
    <>
      {console.log(allPo)}
      <div className="w-full flex flex-col px-4 md:px-20 py-5 md:py-12 md:gap-12 gap-5 ">
        {/* 訂單完成/未完成超連結 &&我的訂單標題*/}
        <OrderState />
        {/* 訂單內容列表 */}
        {allPo.rows &&
          allPo.rows.map((v, i) => {
            return (
              <div className="w-full flex flex-col md:gap-12 gap-5" key={v.sid}>
                {/* 一個內容 */}
                <div className="collapse collapse-arrow  bg-292929">
                  <input type="checkbox" className="bg-292929" />
                  {/* 訂單外部 */}
                  <div className="collapse-title text-xl font-medium bg-292929">
                    <div className="md:w-full w-3/4 flex flex-col gap-3">
                      <div className="w-full flex flex-col md:flex-row justify-between">
                        <div className="text-white text-base font-['Noto Sans TC']">
                          訂單編號:{v.purchase_order_id.slice(0, 14)}
                        </div>
                        <div className="text-zinc-300 text-xs font-['Noto Sans TC']">
                          付款狀態:{v.payment_status}
                        </div>
                        <div className="text-zinc-300 text-xs font-['Noto Sans TC']">
                          訂單狀態:{v.status}
                        </div>
                      </div>
                      <div className="w-full flex flex-col md:flex-row justify-between">
                        <div className="text-zinc-300 text-xs font-['Noto Sans TC']">
                          訂單成立日期:{v.created_at.split('T')[0]}
                        </div>
                        <div className="text-white text-base font-['IBM Plex Mono']">
                          訂單總金額:${v.total_amount}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 訂單內部 */}
                  <div className="collapse-content flex flex-col items-center justify-center ">
                    {orderDetails[v.purchase_order_id]?.rows &&
                      orderDetails[v.purchase_order_id].rows.map((p, index) => {
                        const isCommented = p.is_comment === 1
                        const isFinish = p.status === '已完成'
                        return (
                          <div
                            className="w-11/12 md:py-3 flex justify-between md:gap-12 gap-5 relative h-[150px] md:h-fit"
                            key={index}
                          >
                            <div className="md:w-1/12 w-1/4">
                              <Image
                                src={`/images/product/${typeof p.img === 'string' ? p.img.split(',')[0] : ''}`}
                                alt="Picture of camp"
                                width={200}
                                height={200}
                                className="aspect-square rounded"
                              />
                            </div>
                            <div className="md:w-11/12 w-3/4 flex flex-col gap-3">
                              <div className="w-full flex justify-between">
                                <div className="text-white text-base font-['Noto Sans TC']">
                                  {p.name}
                                </div>
                                {/* <div className="text-zinc-300 text-xs font-['Noto Sans TC']">
                                  已完成
                                </div> */}
                              </div>
                              <div className="w-full text-right text-white text-xs  font-['IBM Plex Mono']">
                                x{p.qty}
                              </div>
                              <div className="w-full flex justify-between">
                                {isFinish ? (
                                  <div className="flex gap-5">
                                    {isCommented ? (
                                      <button
                                        disabled
                                        className="py-2 px-7 bg-neutral-500 border  border-black justify-center items-center flex absolute bottom-0 md:static hover:bg-neutral-500 hover:border-white group"
                                      >
                                        <div className="text-white group-hover:text-white text-xs  font-['Noto Sans TC']">
                                          已評價
                                        </div>
                                      </button>
                                    ) : (
                                      <CommentModal
                                        p={p}
                                        fetchProductDetails={
                                          fetchProductDetails
                                        }
                                      />
                                    )}

                                    <button
                                      className=" py-2 px-7 bg-black border border-black justify-center items-center flex absolute bottom-0 right-0 md:static hover:bg-neutral-500 hover:border-white"
                                      onClick={(e) => {
                                        e.preventDefault()
                                        router.push(
                                          {
                                            pathname: `/shop/product/${p.pid}`,
                                          },
                                          undefined,
                                          { scroll: false }
                                        )
                                      }}
                                    >
                                      <div className="text-white text-xs  font-['Noto Sans TC']">
                                        再買一次
                                      </div>
                                    </button>
                                  </div>
                                ) : (
                                  <div></div>
                                )}

                                <div className="text-white text-base font-['IBM Plex Mono']">
                                  $ {p.price}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
                {/* 一個內容 */}
              </div>
            )
          })}
      </div>
    </>
  )
}

MyOrder.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>
}
