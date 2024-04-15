import React, { useEffect, useState } from 'react'
import shieldSvg from '@/public/icons/shield.svg'
import { RiKey2Line } from 'react-icons/ri'
import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { PiWarningFill } from 'react-icons/pi'
import AccountLayout from '@/components/linda/accountLayout'
import Link from 'next/link'
import ChangeEmailPopup from '@/components/linda/modals/changeEmailModal'
import ChangePasswordPopup from '@/components/linda/modals/changePasswordModal'
import OTPModal from '@/components/linda/modals/OTPModal'

export default function EmailAndPassword() {
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [showOTPModal, setShowOTPModal] = useState(false)

  useEffect(() => {
    if (showOTPModal) {
      setShowEmailModal(false)
    }
  }, [showOTPModal])

  return (
    <>
      <div className="flex w-full flex-col md:p-0 p-[30px] md:gap-0 gap-[37px]">
        <div className="pt-[50px] md:px-[80px] flex w-full">
          <div className="flex flex-col gap-[30px] w-full">
            <div className="md:text-[30px] text-[24px] font-medium">
              Email & Password
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="font-bold text-base">Account security</div>
              <div>
                For your security, we highly recommend that you choose a unique
                password that you don’t use for any other online account.
              </div>
            </div>
          </div>
          <div className="text-end md:p-[50px] relative">
            <Image alt="" src={shieldSvg} className="w-[160px]" />
            <RiKey2Line className="absolute md:bottom-[35%] bottom-[60%] md:left-[20%] left-[-4%] text-[50px]" />
          </div>
        </div>
        <div className="gap-[37px] md:px-[80px] flex md:w-3/5 w-full flex-col">
          <div className="flex flex-col gap-[23px]">
            <div
              onClick={() => {
                setShowEmailModal(true)
              }}
              className="flex px-[24px] py-[15px] justify-between items-center text-[#A7A7A7] text-[20px] bg-[#191919] hover:bg-black rounded"
            >
              <div className="text-[12px] md:text-base w-[10%]">Email</div>
              <div className="text-[12px] md:text-base">example@gmail.com</div>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="flex flex-col w-full justify-start md:flex-row gap-[12px] items-start">
              <div className="flex gap-[12px] w-auto justify-start items-center">
                <PiWarningFill className="text-[#959595]" />
                <div className="md:text-[12px] text-[10px]">
                  Your email address is not verified.
                </div>
              </div>
              <a href="#" className="text-[12px] justify-start text-[#0D74AF]">
                Resend confirmation email
              </a>
            </div>
          </div>
          <div
            // href="/member/account-settings/edit-password"
            onClick={() => {
              setShowPasswordModal(true)
            }}
            className="flex px-[24px] py-[15px] items-center justify-between text-[#A7A7A7] text-[20px] bg-[#191919] hover:bg-black rounded"
          >
            <div className="w-[10%] text-[12px] md:text-base">Password</div>
            <div className="flex flex-nowrap text-[12px] md:text-base">
              not modified yet
            </div>
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
      </div>
      <ChangeEmailPopup
        setShowOTPModal={setShowOTPModal}
        isVisible={showEmailModal}
        onClose={() => {
          setShowEmailModal(false)
        }}
      />
      <ChangePasswordPopup
        isVisible={showPasswordModal}
        onClose={() => {
          setShowPasswordModal(false)
        }}
      />
      <OTPModal
        isVisible={showOTPModal}
        onClose={() => {
          setShowOTPModal(false)
        }}
      />{' '}
    </>
  )
}

EmailAndPassword.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>
}
