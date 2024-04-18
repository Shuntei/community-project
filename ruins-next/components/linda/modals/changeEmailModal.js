import React from 'react'
import { RiCloseLargeLine } from '@remixicon/react'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'

export default function ChangeEmailPopup({ isVisible, onClose, setShowOTPModal }) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex justify-center items-center">
      <div className="flex flex-col md:h-auto h-full relative md:justify-center items-center gap-[37px] py-8 px-8 bg-[#292929] md:rounded-md divide-slate-200 md:w-4/12">
        <div className="flex items-start w-full">
          <div className="flex flex-col gap-[30px] w-full">
            <div className="flex">
              <div className="flex-none text-xl font-regular font-['IBM Plex Mono'] text-white ">
                EDIT EMAIL
              </div>
              <div className="flex-1"></div>
              <button className="flex-none">
                <RiCloseLargeLine className="text-white" onClick={onClose} />
              </button>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="text-[14px]"> 
                For your security, you will have to validate your request with a
                code sent to your old email.
              </div>
              <div className="max-w-[300px] md:max-w-full flex gap-[10px] whitespace-nowrap items-center md:text-[14px] text-[12px] overflow-hidden">
                Current email:
                <span className="font-bold whitespace-normal overflow-hidden overflow-ellipsis text-[14px]">
                  currentEmail@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-[25px] flex w-full flex-col">
          <div className="flex w-full flex-col gap-[6px]">
            <div className="text-[#969696] text-[12px]">Your password</div>
            <div className="flex relative">
              {' '}
              <input
                type="password"
                className="bg-[#191919] h-[44px] rounded focus:outline-none text-base text-white flex w-full p-[15px]"
              />{' '}
              <IoMdEye className="absolute bottom-[10px] right-[15px] md:text-3xl text-xl text-white" />
            </div>
          </div>
          <div className="flex w-full flex-col gap-[6px]">
            <div className="text-[#969696] text-[12px]">New email</div>
            <div className="flex relative">
              <input
                type="text"
                className="bg-[#191919] h-[44px] rounded focus:outline-none text-base text-white flex w-full p-[15px]"
              />
            </div>
          </div>
          <button 
          onClick={()=>{setShowOTPModal(true)}}
          className="bg-black hover:bg-[#7A7A7A] flex items-center justify-center w-full py-[18px] italic border border-white">
            SEND CODE
          </button>
        </div>
      </div>
    </div>
  )
}
