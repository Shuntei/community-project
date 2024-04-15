import React from 'react'
import { RiCloseLargeLine } from '@remixicon/react'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'

export default function OTPModal({ isVisible, onClose }) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex justify-center items-center">
      <div className="flex flex-col md:h-auto h-full relative md:justify-center items-center gap-[37px] py-8 px-8 bg-[#292929] md:rounded-md divide-slate-200 md:w-[400px]">
        <div className="flex items-start w-full">
          <div className="flex flex-col gap-[30px] w-full">
            <div className="flex">
              <div className="flex-none text-xl font-regular font-['IBM Plex Mono'] text-white ">
                ENTER SECURITY CODE
              </div>
              <div className="flex-1"></div>
              <button className="flex-none">
                <RiCloseLargeLine className="text-white" onClick={onClose} />
              </button>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="text-[14px]">
                A security code has been sent to:
              </div>
              <div className="text-[14px] font-bold">
                currentEmail@mgail.com
              </div>
            </div>
          </div>
        </div>
        <div className="gap-[25px] flex w-full flex-col">
          <form
            className="flex gap-4 items-center"
          >
            <input
              type="text"
              className="flex w-1/5 bg-[#121517] text-white text-center text-base p-2 h-16 rounded focus:outline-none focus:border border-white"
              maxLength="1"
            />
            <input
              type="text"
              className="flex w-1/5 bg-[#121517] text-white text-center text-base p-2 h-16 rounded focus:outline-none focus:border border-white"
              maxLength="1"
            />
            <input
              type="text"
              className="flex w-1/5 bg-[#121517] text-white text-center text-base p-2 h-16 rounded focus:outline-none focus:border border-white"
              maxLength="1"
            />
            <input
              type="text"
              className="flex w-1/5 bg-[#121517] text-white text-center text-base p-2 h-16 rounded focus:outline-none focus:border border-white"
              maxLength="1"
            />
            <input
              type="text"
              className="flex w-1/5 bg-[#121517] text-white text-center text-base p-2 h-16 rounded focus:outline-none focus:border border-white"
              maxLength="1"
            />
          </form>
          <button 
        //   onClick={verifyOTP}
          className="bg-black hover:bg-[#7A7A7A] flex items-center justify-center w-full py-[18px] italic border border-white">
            VERIFY OTP
          </button>
        </div>
      </div>
    </div>
  )
}
