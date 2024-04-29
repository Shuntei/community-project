import PageSelect from '@/components/johnny/page-select'
import React from 'react'
import CentralMain from './central-main'
import Topics from '@/components/johnny/bar-home-topics'
import FollowsBar from '@/components/johnny/bar-follows-notify'
import Navbar from '@/components/linda/navbar/navbar'

export default function MainPage() {
  const paddingBGPC = 'pc:bg-292929'

  return (
    <div className="h-screen ">
      {/* <Navbar className="bg-gradient-to-b from-black to-gray-800" /> */}
      <Navbar className="bg-gray-950" />
      <PageSelect />
      <div
        className={`mt-[40px] pc:h-[10px] h-[15px] fixed w-full z-10 ${paddingBGPC} bg-neutral-300`}
      ></div>
      <Topics />
      <FollowsBar />
      <CentralMain />
      {/* <Footer /> */}
    </div>
  )
}
