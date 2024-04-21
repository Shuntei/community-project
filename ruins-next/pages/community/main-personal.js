import FollowsBar from '@/components/johnny/bar-follows-notify'
import InfoBar from '@/components/johnny/ps-intro-bar'
import PageSelect from '@/components/johnny/page-select'
import React, { useState } from 'react'
import CentralPersonal from './central-personal'
import Navbar from '@/components/linda/navbar/navbar'
// import Footer from '@/components/linda/footer/footer'

export default function MainPersonal() {
  return (
    <div className="bg-black h-screen">
      <Navbar className="bg-gradient-to-b from-black to-gray-800" />
      <PageSelect />
      <InfoBar />
      <FollowsBar />
      <CentralPersonal />
      {/* <Footer /> */}
    </div>
  )
}
