import FollowsBar from '@/components/johnny/bar-follows-notify'
import InfoBar from '@/components/johnny/ps-intro-bar'
import PageSelect from '@/components/johnny/page-select'
import React, { useState } from 'react'
import CentralPersonal from './central-personal'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
// import InfoBar from "../../component/community/intro-bar";
// import PageSelect from "../../component/community/page-select";
// import FollowsBar from "../../component/community/follows-notify-bar";
// import CentralContentP from "./central-personal";

export default function MainPersonal() {
  return (
    <div className="bg-black h-screen">
      <Navbar className=" bg-black" />
      <PageSelect />
      <InfoBar />
      <FollowsBar />
      <CentralPersonal />
      {/* <Footer /> */}
    </div>
  )
}
