import React, { useEffect } from 'react'
import AccountLayout from '@/components/linda/accountLayout'
import Link from 'next/link'
import { TOUR_GET_POST } from '@/components/config/api-path'
import { useAuth } from '@/contexts/auth-context'

export default function MyPosts() {

  const {auth} = useAuth()

  useEffect(async ()=>{
    console.log(auth.id);
    try {
      const r = await fetch(`${TOUR_GET_POST}/${auth.id}`, {
        method: 'get'
      })

      const result = await r.json()
      console.log(result);

    } catch (error) {
      console.log("Failed to fetch tour data:", error);
    }
  }, [])

  return (
    <>
      <div className="flex w-full flex-col md:p-0 p-[30px] gap-[37px]">
        <div className="pt-[50px] pb-5 md:px-[80px] flex w-full">
          <div className="flex flex-col gap-[30px] w-full">
            <div className="md:text-[30px] text-[24px] font-semibold">
              你發起的行程
            </div>
            <div id="postBox" className="">
              <div className="">
                <div id="articleCard" className="w-fit pb-10">
                  <Link href="/tour/tour-post" className="md:flex md:space-x-8 md:space-y-0 space-y-3">
                    <img
                      src="/images/borou/dry01.jpg"
                      className="md:w-[250px] w-full aspect-square rounded object-cover"
                      alt=""
                    />
                    <div className="relative space-y-2.5">
                      <div className="md:text-xl text-[15px]">
                        Grace Hill麗庭莊園
                      </div>
                      <div className="md:text-base text-[13px]">
                        出團時間：2024年10月25日
                      </div>
                      <p className="md:text-base text-[13px] md:h-[120px] h-[151px] text-ellipsis overflow-hidden">
                        麗庭莊園位於台北內湖的工業園區，前身為婚禮場地。
                        該酒店於 2005
                        年開業，由長興婚禮事業有限公司管理，該公司熱衷於為婚禮和其他活動提供更大、更奢華的空間，顛覆當地市場。
                        這項業務起初舉步維艱，但在電視連續劇、音樂錄影帶和新聞中出現後變得更加廣為人知。
                        2007年，該空間被租給迪詩，這是一家希望進入台灣豪華婚禮市場的日本婚禮公司。
                        原所有者退了一步，將日常營運的控制權交給了日本管理層，業務在接下來的幾年中持續成長。
                      </p>
                      <button className="md:absolute bottom-0 right-[230px] md:w-48 w-1/2 md:py-4 py-2 bg-white text-black hover:bg-red-900 hover:text-white hover:border-white italic">
                        DELETE
                      </button>
                      <button className="md:absolute bottom-0 right-0 md:w-48 w-1/2 md:py-4 py-2 bg-black hover:bg-white hover:text-black italic">
                        EDIT
                      </button>
                    </div>
                  </Link>
                </div>
                <div id="articleCard" className="md:w-fit pb-10">
                <Link href="" className="md:flex md:space-x-8 md:space-y-0 space-y-3">
                    <img
                      src="/images/borou/dry01.jpg"
                      className="md:w-[250px] w-full aspect-square rounded object-cover"
                      alt=""
                    />
                    <div className="relative space-y-2.5">
                      <div className="md:text-xl text-[15px]">
                        Grace Hill麗庭莊園
                      </div>
                      <div className="md:text-base text-[13px]">
                        出團時間：2024年10月25日
                      </div>
                      <p className="md:text-base text-[13px]">
                        麗庭莊園位於台北內湖的工業園區，前身為婚禮場地。
                        該酒店於 2005
                        年開業，由長興婚禮事業有限公司管理，該公司熱衷於為婚禮和其他活動提供更大、更奢華的空間，顛覆當地市場。
                        這項業務起初舉步維艱，但在電視連續劇、音樂錄影帶和新聞中出現後變得更加廣為人知。
                        2007年，該空間被租給迪詩，這是一家希望進入台灣豪華婚禮市場的日本婚禮公司。
                        原所有者退了一步，將日常營運的控制權交給了日本管理層，業務在接下來的幾年中持續成長。
                      </p>
                      <button className="md:absolute bottom-0 right-[230px] md:w-48 w-1/2 md:py-4 py-2 bg-white text-black hover:bg-red-900 hover:text-white hover:border-white italic">
                        DELETE
                      </button>
                      <button className="md:absolute bottom-0 right-0 md:w-48 w-1/2 md:py-4 py-2 bg-black hover:bg-white hover:text-black italic">
                        EDIT
                      </button>
                    </div>
                  </Link>
                </div>
                <div id="articleCard" className="md:w-fit pb-10">
                <Link href="" className="md:flex md:space-x-8 md:space-y-0 space-y-3">
                    <img
                      src="/images/borou/dry01.jpg"
                      className="md:w-[250px] w-full aspect-square rounded object-cover"
                      alt=""
                    />
                    <div className="relative space-y-2.5">
                      <div className="md:text-xl text-[15px]">
                        Grace Hill麗庭莊園
                      </div>
                      <div className="md:text-base text-[13px]">
                        出團時間：2024年10月25日
                      </div>
                      <p className="md:text-base text-[13px]">
                        麗庭莊園位於台北內湖的工業園區，前身為婚禮場地。
                        該酒店於 2005
                        年開業，由長興婚禮事業有限公司管理，該公司熱衷於為婚禮和其他活動提供更大、更奢華的空間，顛覆當地市場。
                        這項業務起初舉步維艱，但在電視連續劇、音樂錄影帶和新聞中出現後變得更加廣為人知。
                        2007年，該空間被租給迪詩，這是一家希望進入台灣豪華婚禮市場的日本婚禮公司。
                        原所有者退了一步，將日常營運的控制權交給了日本管理層，業務在接下來的幾年中持續成長。
                      </p>
                      <button className="md:absolute bottom-0 right-[230px] md:w-48 w-1/2 md:py-4 py-2 bg-white text-black hover:bg-red-900 hover:text-white hover:border-white italic">
                        DELETE
                      </button>
                      <button className="md:absolute bottom-0 right-0 md:w-48 w-1/2 md:py-4 py-2 bg-black hover:bg-white hover:text-black italic">
                        EDIT
                      </button>
                    </div>
                  </Link>
                </div>
                <div id="articleCard" className="md:w-fit pb-10">
                <Link href="" className="md:flex md:space-x-8 md:space-y-0 space-y-3">
                    <img
                      src="/images/borou/dry01.jpg"
                      className="md:w-[250px] w-full aspect-square rounded object-cover"
                      alt=""
                    />
                    <div className="relative space-y-2.5">
                      <div className="md:text-xl text-[15px]">
                        Grace Hill麗庭莊園
                      </div>
                      <div className="md:text-base text-[13px]">
                        出團時間：2024年10月25日
                      </div>
                      <p className="md:text-base text-[13px]">
                        麗庭莊園位於台北內湖的工業園區，前身為婚禮場地。
                        該酒店於 2005
                        年開業，由長興婚禮事業有限公司管理，該公司熱衷於為婚禮和其他活動提供更大、更奢華的空間，顛覆當地市場。
                        這項業務起初舉步維艱，但在電視連續劇、音樂錄影帶和新聞中出現後變得更加廣為人知。
                        2007年，該空間被租給迪詩，這是一家希望進入台灣豪華婚禮市場的日本婚禮公司。
                        原所有者退了一步，將日常營運的控制權交給了日本管理層，業務在接下來的幾年中持續成長。
                      </p>
                      <button className="md:absolute bottom-0 right-[230px] md:w-48 w-1/2 md:py-4 py-2 bg-white text-black hover:bg-red-900 hover:text-white hover:border-white italic">
                        DELETE
                      </button>
                      <button className="md:absolute bottom-0 right-0 md:w-48 w-1/2 md:py-4 py-2 bg-black hover:bg-white hover:text-black italic">
                        EDIT
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </>
  )
}

MyPosts.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>
}

// /images/borou/anju01.jpg
// /images/borou/home02.jpg
// /images/borou/pink03.jpg