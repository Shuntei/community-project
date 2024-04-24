import React from 'react'
import Image from 'next/image'
import img from './img/90.jpg'
import { RiDraftLine, RiBookmarkFill } from '@remixicon/react'
import { useToggles } from '@/contexts/use-toggles'
import { useAuth } from '@/contexts/auth-context'
import { IMG_SERVER } from '../config/api-path'

export default function Profile() {
  const { toggles, setToggles } = useToggles()
  const { auth } = useAuth()
  console.log(auth)
  return (
    <>
      <div className="flex   justify-center mr-[10%] w-full ">
        <div className="flex items-center pc:gap-10">
          <div className="overflow-hidden size-[100px] pc:size-[128px] translate-x-[20%] translate-y-[-10%] pc:translate-x-[40%] pc:translate-y-[-40%] PcImagePosition">
            <Image
              src={
                auth.googlePhoto
                  ? auth.profileUrl
                  : `${IMG_SERVER}/${auth.profileUrl}`
              }
              // src={img}
              fill={true}
              objectFit="cover"
              alt=""
              className="rounded-full bg-zinc-300"
            />
          </div>

          <div className="text-white pc:ml-56 ml-[140px] mt-2 pc:my-3">
            <div className="text-[24px]">{auth.username}&nbsp;</div>
            <div className="flex gap-16 items-end">
              <ul className="flex gap-4 pc:gap-6">
                <li className="text-[14px] pc:text-[16px]">
                  POSTS <div>23</div>
                </li>
                <li
                  className="text-[14px] pc:text-[16px] cursor-pointer"
                  onClick={() =>
                    setToggles({
                      ...toggles,
                      notification: false,
                      follows: true,
                    })
                  }
                >
                  FOLLOWS <div>234</div>
                </li>
                <li className="text-[14px] pc:text-[16px]">
                  FOLLOWERS <div>66</div>
                </li>
              </ul>
              <ul className="hidden pc:flex w-[120px]">
                <li>
                  <RiDraftLine className="text=[24px]" />
                </li>
                <li>
                  <RiBookmarkFill className="text-[24px]" />
                </li>
              </ul>
            </div>
            <div className="flex justify-end pc:hidden pr-5 gap-3 mt-1">
              <RiDraftLine className="text=[24px]" />
              <RiBookmarkFill className="text-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
