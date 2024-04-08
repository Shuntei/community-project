import React from 'react'
import AccountLayout from '@/components/linda/accountLayout'
import Link from 'next/link'

export default function FavTours() {
  return (
    <>
      <div className="flex w-full flex-col md:p-0 p-[30px] gap-[37px]">
        <div className="pt-[50px] pb-5 md:px-[80px] flex w-full">
          <div className="flex flex-col gap-[30px] w-full">
            <div className="md:text-[30px] text-[24px] font-semibold">
              你的收藏
            </div>

            <div id="favBox" className="flex flex-wrap md:gap-[25px] md:justify-normal justify-between">
              <div id="favCard" className="w-fit py-2.5">
                <Link href="" className="space-y-2.5">
                  <img
                    src="/images/tempuse.jpg"
                    className="md:w-[250px] w-36 aspect-square rounded object-cover"
                    alt=""
                  />
                  <div className="md:text-xl text-[13px]">大安飛碟屋</div>
                  <div className="md:text-base text-[13px] text-zinc-400">
                    9項收藏
                  </div>
                </Link>
              </div>
              <div id="favCard" className="md:w-fit py-2.5">
                <Link href="" className="py-2.5 space-y-2.5">
                  <img
                    src="/images/borou/guitar.jpg"
                    className="md:w-[250px] w-36 aspect-square rounded object-cover"
                    alt=""
                  />
                  <div className="md:text-xl text-[13px]">大安飛碟屋</div>
                  <div className="md:text-base text-[13px] text-zinc-400">
                    9項收藏
                  </div>
                </Link>
              </div>
              <div id="favCard" className="md:w-fit py-2.5">
                <Link href="" className="py-2.5 space-y-2.5">
                  <img
                    src="/images/borou/greenhouse.jpg"
                    className="md:w-[250px] w-36 aspect-square rounded object-cover"
                    alt=""
                  />
                  <div className="md:text-xl text-[13px]">大安飛碟屋</div>
                  <div className="md:text-base text-[13px] text-zinc-400">
                    9項收藏
                  </div>
                </Link>
              </div>
              <div id="favCard" className="md:w-fit py-2.5">
                <Link href="" className="py-2.5 space-y-2.5">
                  <img
                    src="/images/borou/light.jpg"
                    className="md:w-[250px] w-36 aspect-square rounded object-cover"
                    alt=""
                  />
                  <div className="md:text-xl text-[13px]">大安飛碟屋</div>
                  <div className="md:text-base text-[13px]  text-zinc-400">
                    9項收藏
                  </div>
                </Link>
              </div>
              <div id="favCard" className="md:w-fit py-2.5">
                <Link href="" className="py-2.5 space-y-2.5">
                  <img
                    src="/images/borou/jpclinic01.jpg"
                    className="md:w-[250px] w-36 aspect-square rounded object-cover"
                    alt=""
                  />
                  <div className="md:text-xl text-[13px]">大安飛碟屋</div>
                  <div className="md:text-base text-[13px] text-zinc-400">
                    9項收藏
                  </div>
                </Link>
              </div>
              <div id="favCard" className="md:w-fit py-2.5">
                <Link href="" className="py-2.5 space-y-2.5">
                  <img
                    src="/images/borou/hourse05.jpg"
                    className="md:w-[250px] w-36 aspect-square rounded object-cover"
                    alt=""
                  />
                  <div className="md:text-xl text-[13px]">大安飛碟屋</div>
                  <div className="md:text-base text-[13px] text-zinc-400">
                    9項收藏
                  </div>
                </Link>
              </div>
              <div id="favCard" className="md:w-fit py-2.5">
                <Link href="" className="py-2.5 space-y-2.5">
                  <img
                    src="/images/borou/hotel01.jpg"
                    className="md:w-[250px] w-36 aspect-square rounded object-cover"
                    alt=""
                  />
                  <div className="md:text-xl text-[13px]">大安飛碟屋</div>
                  <div className="md:text-base text-[13px] text-zinc-400">
                    9項收藏
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </>
  )
}

FavTours.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>
}
