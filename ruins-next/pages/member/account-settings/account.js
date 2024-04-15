import React, { useState } from 'react'
import home2 from '@/public/images/home2.jpg'
import { MdOutlineFileUpload } from 'react-icons/md'
import ProfileIcon from '@/public/icons/profileIcon.svg'
import ProfileIconBold from '@/public/icons/profileIconBold.svg'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'
import Toggle from '@/components/linda/toggle'
import { CgProfile } from 'react-icons/cg'
import AccountLayout from '@/components/linda/accountLayout'
import { useAuth } from '@/contexts/auth-context'
import { FaCamera } from 'react-icons/fa'
import { useProfile } from '@/contexts/profile-context'

export default function Account() {
  const { auth } = useAuth()
  const {profile} = useProfile()
  const [aboutMe, setAboutMe] = useState('')
  const [charCount, setCharCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleAboutMe = (e) => {
    const value = e.target.value
    setAboutMe(value)
    setCharCount(value.length)
  }

  const handleChange = () => {}

  return (
    <>
      <div className="md:py-[50px] md:px-[80px] p-0 flex flex-col items-start md:p-0 p-[30px] gap-[28px] w-full">
        {/* Profile */}
        <div
          className="text-[29px] font-medium md:block hidden
            "
        >
          Profile
        </div>
        <div className="flex flex-col gap-[18px] ">
          <div className="text-[15px] font-bold md:block hidden">
            Personal details
          </div>
          <div className="text-[15px] md:block hidden">
            Create your own world
          </div>
        </div>
        {/* Upload banner */}
        <div className="md:h-72 h-52 relative w-full hover:brightness-50 cursor-pointer hover:shadow-[0_0_0_2px_rgba(255,255,255,1)]">
          <div className="absolute flex gap-1.5 top-1/2 md:left-[45%] left-[30%] z-10">
            <MdOutlineFileUpload />
            <div className="font-bold text-[15px]">Upload banner</div>
          </div>
          <div
            className="bg-cover bg-center absolute inset-0"
            style={{
              backgroundImage: `url(${home2.src})`,
              width: '100%',
              filter: 'brightness(50%)',
            }}
          ></div>
        </div>
        {/* Upload avatar */}
        <div className="flex md:flex-row flex-col md:gap-[37px] gap-[20px] md:items-start items-center md:border-b md:border-white w-full">
          <div className="hover:shadow-[0_0_0_4px_rgba(255,255,255,1)] relative rounded-full">
            <Image
              className="w-[110px]"
              alt=""
              src={isHovered ? ProfileIconBold : ProfileIcon}
              onMouseEnter={() => {
                setIsHovered(true)
              }}
              onMouseLeave={() => {
                setIsHovered(false)
              }}
            />
            {isHovered ? (
              <div className="absolute rounded bg-white px-[8px] py-[4px] bottom-[10px] text-black right-0 text-[20px]">
                <FaCamera />
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="flex flex-col md:gap-[50px] gap-[30px] w-full">
            <div className="flex flex-col gap-[24px]">
              <div className="flex w-1/3 flex-col gap-[6px] md:w-2/5 w-full">
                <div className="text-[#969696] text-[14px]">Name</div>
                <input
                  type="text"
                  className="w-full text-[14px] rounded h-10 p-3 bg-[#191919] focus:outline-none"
                />
              </div>
              <div className="flex w-1/3 flex-col gap-[6px] md:w-2/5 w-full">
                <div className="text-[#969696] text-[14px]">Username</div>
                <input
                  type="text"
                  className="w-full text-[14px] rounded h-10 p-3 bg-[#191919] focus:outline-none "
                  value={auth.username}
                  onChange={handleChange}
                />
                <span className="text-[12px] text-[#969696]">
                  This will affect your login details
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[6px] md:w-3/5 w-full">
              <div className="text-[#969696] text-[14px]">About me</div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={aboutMe}
                maxLength={500}
                onChange={handleAboutMe}
                className="px-[20px] placeholder:text-[#969696] leading-[22px] rounded py-[10px] focus:outline-none text-[14px] resize-none h-38 bg-[#191919]"
                placeholder="Let others know something about you"
              ></textarea>
              <div className="text-[#969696] text-[14px] text-end">
                {charCount}/500
              </div>
            </div>
            <div></div>
          </div>
        </div>
        {/* Contact information */}
        <div className="flex flex-col gap-[30px] md:pb-[120px] pb-[180px] md:pl-[30px]">
          <div className="flex items-center relative gap-[30px]">
            <div className="font-bold text-[15px]">Contact Information</div>
            <Toggle className="absolute right-0 top-[45px] md:block md:right-0 md:top-0" />
          </div>
          <div className="text-[15px] w-9/12 md:w-full">
            Allow others to see this information on my profile — I understand
            and accept that I may be exposed to spam, phishing, and other
            things.
          </div>
          <div className="flex md:pt-[30px] flex-col gap-[40px]">
            <div className="flex gap-[18px] md:w-2/5 w-full">
              <FaYoutube className="text-[36px] h-auto" />
              <input
                type="text"
                placeholder="youtube.com/example"
                className="bg-[#191919] w-full text-[14px] rounded h-10 p-3 bg-[#191919] focus:outline-none"
              />
            </div>
            <div className="flex gap-[18px] md:w-2/5 w-full">
              <FaFacebook className="text-[36px] h-auto" />
              <input
                type="text"
                placeholder="@example"
                className="bg-[#191919] w-full text-[14px] rounded h-10 p-3 bg-[#191919] focus:outline-none"
              />
            </div>
            <div className="flex gap-[18px] md:w-2/5 w-full">
              <AiFillInstagram className="text-[36px] h-auto" />
              <input
                type="text"
                placeholder="@example"
                className="bg-[#191919] w-full text-[14px] rounded h-10 p-3 bg-[#191919] focus:outline-none"
              />
            </div>
            <div className="flex gap-[18px] md:w-2/5 w-full">
              <MdEmail className="text-[36px] h-auto" />
              <input
                type="text"
                placeholder="example@gmail.com"
                className="bg-[#191919] w-full text-[14px] rounded h-10 p-3 bg-[#191919] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer button */}
      <div className="fixed bottom-0 right-0 flex md:flex-row flex-col py-[23px] md:px-[80px] text-white md:justify-between gap-[15px] items-center w-full md:pl-[360px] bg-black">
        <div className="flex gap-[15px] items-center">
          <CgProfile className="text-[30px]" />
          <div className="font-bold text-white text-[15px]">View Profile</div>
        </div>
        <div className="flex gap-[15px]">
          <button className="hover:bg-[#7A7A7A] py-[18px] md:px-[98px] px-[47px] flex justify-center items-center border border-white font-medium italic">
            CANCEL
          </button>
          <button className="hover:bg-black border hover:border-white hover:text-white py-[18px] md:px-[98px] px-[47px] flex justify-center items-center font-medium italic bg-white text-black">
            SAVE
          </button>
        </div>
      </div>
    </>
  )
}

Account.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>
}
