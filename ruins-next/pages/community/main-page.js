import PageSelect from '@/components/johnny/page-select'
import React from 'react'
import CentralMain from './central-main'
import Topics from '@/components/johnny/home-topics'
import FollowsBar from '@/components/johnny/bar-follows-notify'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'

export default function MainPage() {
  return (
    <div className="bg-black h-screen">
      <Navbar className="bg-gradient-to-b from-black to-gray-800" />
      <PageSelect />
      <Topics />
      <FollowsBar />
      <CentralMain />
      {/* <Footer /> */}
    </div>
  )
}
