import React from 'react'
import Link from 'next/link'
import { useToggles } from '@/contexts/use-toggles'

export default function PageSelect({
  bgColor = 'bg-black',
  paddingBG = 'bg-black',
  optionsStyle,
}) {
  const { toggles, setToggles } = useToggles()

  optionsStyle =
    'text-white w-full text-center h-[40px] leading-[40px] hover:hover1 bg-zinc-900'

  return (
    <>
      <div
        className={`${bgColor} flex justify-center items-center  h-[40px] fixed w-full z-[998]`}
      >
        <Link
          href="./main-page"
          className={`${optionsStyle} `}
          onClick={() =>
            setToggles({ ...toggles, follows: false, notification: false })
          }
        >
          HOME
        </Link>
        <Link
          href="./main-personal"
          className={`${optionsStyle} `}
          onClick={() =>
            setToggles({ ...toggles, follows: false, notification: false })
          }
        >
          PERSONAL
        </Link>
        <Link
          href="./main-messenger"
          className={`${optionsStyle}`}
          onClick={() =>
            setToggles({ ...toggles, follows: false, notification: false })
          }
        >
          MESSENGER
        </Link>
      </div>
      {/* 用於main page 頂部padding 滾軸時不會透出 */}
      <div
        className={`mt-[40px] h-[10px] fixed w-full z-10 ${paddingBG}`}
      ></div>
    </>
  )
}
