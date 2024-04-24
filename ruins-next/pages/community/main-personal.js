import FollowsBar from '@/components/johnny/bar-follows-notify'
import InfoBar from '@/components/johnny/ps-intro-bar'
import PageSelect from '@/components/johnny/page-select'
import React, { useEffect, useState } from 'react'
import CentralPersonal from './central-personal'
import Navbar from '@/components/linda/navbar/navbar'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/router'

export default function MainPersonal() {
  const paddingBG = 'bg-292929'

  const { auth } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!auth.id) {
      router.back()
    }
  }, [auth, router])

  return (
    <>
      {auth.id ? (
        <div className=" h-screen">
          <Navbar className="bg-gradient-to-b from-black to-gray-800" />
          <PageSelect />
          <InfoBar />
          <FollowsBar />
          <CentralPersonal />
        </div>
      ) : (
        <h1 className="text-white">返回上一頁</h1>
      )}
    </>
  )
}
