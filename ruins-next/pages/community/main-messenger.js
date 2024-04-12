import ChannelAndMsg from '@/components/johnny/bar-msg-left'
import MessengerFollows from '@/components/johnny/bar-msg-follows'
import PageSelect from '@/components/johnny/page-select'
import React from 'react'
import CentralMsg from './central-msg'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'

export default function MainMessenger() {
  const paddingBG = 'bg-292929'

  return (
    <div className="bg-292929 h-screen">
      <Navbar className="bg-black" />
      <PageSelect paddingBG={paddingBG} />
      <ChannelAndMsg />
      <MessengerFollows />
      <CentralMsg />
      {/* <Footer /> */}
    </div>
  )
}
