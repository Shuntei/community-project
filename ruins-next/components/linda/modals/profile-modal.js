import React from 'react'
import Link from 'next/link'

export default function ProfileModal({ isVisible, logout }) {
  if (!isVisible) return null
  return (
    <>
      <div className=" absolute top-[30px] right-0 w-[381px] h-[239px] pl-6 pr-[26px] py-[39px] bg-zinc-950 border border-white justify-start items-start gap-6 inline-flex">
        <div className="w-[197px] self-stretch justify-start items-start gap-2.5 flex">
          <div className="w-[197px] self-stretch p-[30px] justify-start items-start gap-2.5 flex">
            <img
              className="w-[137px] h-[101px] relative"
              src="https://via.placeholder.com/137x101"
            />
          </div>
        </div>
        <div className="self-stretch pl-[21px] border-l border-zinc-500 flex-col justify-start items-start gap-[15px]">
          <div className="self-stretch h-[149px] flex-col justify-start items-start flex">
            <div className="h-[37px] pt-[3px] flex-col justify-start items-start gap-[3px] flex">
              <div className="self-stretch h-[34px] py-[9px] flex-col justify-start items-start gap-[3px] flex">
                <div className="self-stretch text-neutral-300 text-xs">
                  ACCOUNT
                </div>
              </div>
            </div>
            <div className=" text-white self-stretch h-28 pt-[3px] pb-[26px] flex-col justify-start items-start gap-2.5 flex">
              <Link
                href={'/member/account-settings/account'}
                className="text-base"
              >
                PROFILE
              </Link>
              <Link
                href={'/member/account-settings/email-and-password'}
                className="text-base"
              >
                SETTINGS
              </Link>
              <Link
                href="#"
                onClick={logout}
                className="text-rose-400 text-base uppercase"
              >
                LOGOUT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
