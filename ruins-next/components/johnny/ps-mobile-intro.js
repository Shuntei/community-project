import Link from 'next/link'
import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { RiAddLine } from '@remixicon/react'
import { useAuth } from '@/contexts/auth-context'

export default function InfoMobile() {
  const { auth } = useAuth()
  return (
    <>
      <section>
        <div className="text-white pt-3 pl-10 pr-5 pb-1 text-[20px]  flex items-center">
          ABOUT ME
          <RiAddLine />
        </div>
        <div className="border-b-2 w-[200px] ml-10 mr-5"></div>
        <div className=" pl-10 pr-5 text-white py-3 ">{auth.aboutMe}</div>
        <div className=" pl-10 pr-5 text-white pb-3 flex gap-x-3">
          <Link href={auth.ytLink}>
            <FaYoutube className="text-[24px] cursor-pointer hover:text-red-500" />
          </Link>
          <Link href={auth.fbLink}>
            <FaFacebook className="text-[24px] cursor-pointer hover:text-sky-600" />
          </Link>
          <Link href={auth.igLink}>
            <AiFillInstagram className="text-[24px] cursor-pointer hover:text-pink-400" />
          </Link>
          <Link href={auth.gmailLink}>
            <MdEmail className="text-[24px] cursor-pointer hover:text-amber-400" />
          </Link>
          {/* <div class="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 transform rotate-45"></div>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-300  via-pink-400 via-purple-400 to-blue-400">
            Nothing short <br /> of amazing.
          </span> */}
          {/* 除了學習和探索，我還喜歡與人交流和建立連結。我相信每個人都有獨特的故事和觀點，我希望能夠與您分享我的故事，並聆聽您的故事。
          我相信通過互相交流和分享，我們可以共同成長和學習。最後，我想再次感謝您與我進行對話。
          無論您有任何問題或需求，我都會盡力幫助您，讓我們一起創造有意義的交流和連結！ */}
        </div>
      </section>
    </>
  )
}
