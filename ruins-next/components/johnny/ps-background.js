import React from 'react'
import Image from 'next/image'
import img from './img/1868140_screenshots_20240116015852_1.jpg'
import { useAuth } from '@/contexts/auth-context'
import { IMG_SERVER } from '../config/api-path'

export default function PersonalBackground() {
  const { auth } = useAuth()
  return (
    <>
      <div>
        <Image
          className="h-[256px] w-full object-cover rounded-lg overflow-hidden bg-zinc-500"
          // src={img}
          width={1000}
          height={256}
          objectFit="cover"
          src={
            auth.coverUrl ? (auth.googlePhoto ? auth.coverUrl : `${IMG_SERVER}/${auth.coverUrl}`) : ''
          }
          alt="背景圖片"
        />
      </div>
    </>
  )
}
