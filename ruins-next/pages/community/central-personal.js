import React, { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import { RiSettings3Fill, RiEqualizerLine, RiAddLine } from '@remixicon/react'
import PostModal from '@/components/johnny/modal-post'
import EditPostModal from '@/pages/community/edit/[postId]'
import PersonalBackground from '@/components/johnny/ps-background'
import Profile from '@/components/johnny/ps-profile'
import SeeMoreFollows from '@/components/johnny/seemore-follows'
import SeeMoreNotification from '@/components/johnny/seemore-notification'
import { useToggles } from '@/contexts/use-toggles'
import PersonalContent from '@/components/johnny/content-list-ps'
import InfoMobile from '@/components/johnny/ps-mobile-intro'
import { SN_PSPOSTS } from '@/components/config/johnny-api-path'

export default function CentralContentP() {
  const { postModal, setPostModal, toggles, removeBox, setRemoveBox } =
    useToggles()

  return (
    <>
      {/* 依據navbar 加mt-[88px] pc:mt-[113px] */}
      <div className="w-full flex justify-center pc:pt-[50px] mt-[50px] pc:mt-[112px]">
        {/* <!-- 中間內容 --> */}
        <section className="w-full pc:w-[800px]">
          {/* <div> */}
          {/* <!-- 背景 --> */}
          <PersonalBackground />
          {/* <!-- 頭像,姓名 --> */}
          <Profile />
          <span className="bargone:hidden">
            <InfoMobile />
          </span>
          {/* <!-- 發文按鈕 --> */}
          <div className="border-y-2 text-white flex mt-3 ">
            <button
              className="items-center flex justify-center leading-10 w-[100%] hover:bg-zinc-900 text-[20px]"
              onClick={() => {
                setPostModal(!postModal)
              }}
            >
              <RiAddLine />
              Add a Post
            </button>
          </div>
          {postModal && <PostModal />}
          {/* {editModal && <EditPostModal />} */}
          {/* <!-- 貼文列表 --> */}
          {toggles.follows || toggles.notification ? (
            ''
          ) : (
            <div className="  px-10 bg-neutral-500 flex-col my-5 rounded-t-lg text-white mb-0">
              <div className="flex items-center justify-between py-2">
                <div className="pc:pl-10 text-[20px]">POSTS</div>
                <div className="flex gap-5">
                  <span>
                    <RiEqualizerLine />
                  </span>
                  <span>
                    <RiSettings3Fill
                      className="cursor-pointer"
                      onClick={() => setRemoveBox(!removeBox)}
                    />
                  </span>
                </div>
              </div>
            </div>
          )}
          {toggles.follows ? (
            <SeeMoreFollows />
          ) : toggles.notification ? (
            <SeeMoreNotification />
          ) : (
            <PersonalContent />
          )}
        </section>
      </div>
    </>
  )
}
