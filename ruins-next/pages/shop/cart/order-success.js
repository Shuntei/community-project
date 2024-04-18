import Image from 'next/image'
import Process3 from '@/components/common/process2'
import Link from 'next/link'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import {
  CART_GETPO,
  CART_GETPODETAIL,
  CART_LINEPAY,
} from '@/components/config/api-path'
import dayjs from 'dayjs'

export default function OrderSuccess() {
  const router = useRouter()
  const [purchaseOrder, setPurchaseOrder] = useState([])
  const [products, setProducts] = useState([])

  const getPurchaseOrder = async () => {
    const orderId = router.query.orderId || ''
    // console.log(orderId)

    try {
      const r = await fetch(CART_GETPO + `?poid=${orderId}`)
      const d = await r.json()
      setPurchaseOrder(d)
    } catch (ex) {
      console.log(ex)
    }
  }

  // 取得訂單詳細商品
  const getdetailPO = async () => {
    const orderId = router.query.orderId || ''
    // console.log(orderId)

    try {
      const r = await fetch(CART_GETPODETAIL + `?poid=${orderId}`)
      const d = await r.json()
      setProducts(d)
    } catch (ex) {
      console.log(ex)
    }
  }


  useEffect(() => {
    getPurchaseOrder()
    getdetailPO()
  }, [router.query.orderId])

  return (
    <>
      {console.log(products)}
      <div className=" bg-gray-100 flex flex-col justify-center items-center pt-8 md:pt-28">
        {/* header開始 */}
        <Navbar navColor={''} />
        {/* header結束 */}

        <div className="md:w-10/12  w-full flex  flex-col justify-center items-center bg-gradient-to-t from-gray-400 to-gray-100 md:px-24 px-4 py-5 mb-5">
          {' '}
          {/* 進度條開始 */}
          <Process3 name1={'購物車　'} name2={'填寫資料'} name3={'確認訂單'} />
          {/* 進度條結束 */}
          {/* 內頁開始 */}
          <div className="md:w-9/12 w-full md:p-10 p-3 m-10 flex flex-col bg-white items-center md:space-y-12 space-y-7">
            {/* title */}
            <div className="text-black text-xl font-semibold font-['Noto Sans TC'] border-b border-b-black ">
              確認訂單
            </div>
            {/* 購物細項 */}
            {purchaseOrder.row && (
              <div className="flex md:w-8/12 flex-col items-center space-y-2">
                {/* 訂單編號 */}
                <div className="border-b-black text-black border-b-2 w-full text-[15xp] font-semibold font-['Noto Sans TC']">
                  訂單編號:{purchaseOrder.row.purchase_order_id.slice(0, 14)}
                </div>
                {/* 分隔線 */}
                <div className=" border-black border-b border-dotted   w-full text-[15xp] font-semibold font-['Noto Sans TC'] h-px"></div>
                {/* 訂單內容 */}
                <div className="flex flex-col  md:w-8/12 space-y-6 py-2">
                  <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                    訂單金額:${purchaseOrder.row.total_amount}
                  </div>
                  <div className="text-black text-[15px] font-normal font-['IBM Plex Mono']">
                    訂單日期:
                    {dayjs(purchaseOrder.row.created_at).format(
                      'YYYY-MM-DD HH:mm'
                    )}
                  </div>{' '}
                  <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                    物流方式:{purchaseOrder.row.shipping_method}
                  </div>
                  <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                    收件人:{purchaseOrder.row.recipient}
                  </div>
                  <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                    收件人手機:{purchaseOrder.row.recipient_mobile}
                  </div>{' '}
                  
                  <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                    付款方式:{purchaseOrder.row.payment_method}
                  </div>
                  <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                    取貨商店:{purchaseOrder.row.store_name}
                  </div>
                  <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                    付款狀態:已付款
                  </div>
                  <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                    訂單狀態:準備出貨中
                  </div>
                </div>
              </div>
            )}
            {/* 分隔線 */}
            <div className="w-10/12 border-dotted border-black border-b border-t h-1"></div>

            <button
              onClick={(e) => {
                e.preventDefault()
                sendPoToLine(e)
              }}
              className="w-[280px] h-[75px] bg-black border justify-center items-center gap-2.5 flex hover:bg-neutral-500 hover:border-white"
            >
              <div className="text-white  text-2xl font-semibold font-['IBM Plex Mono']">
                PAY NOW
              </div>
            </button>
          </div>
          {/* 內頁結束 */}
        </div>

        {/* footer開始 */}
        <Footer />
        {/* FOOTER結束 */}
      </div>
    </>
  )
}
