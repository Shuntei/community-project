import FollowsBar from '@/components/johnny/bar-follows-notify'
import InfoBar from '@/components/johnny/bar-ps-intro'
import PageSelect from '@/components/johnny/page-select'
import React, { useEffect } from 'react'
import CentralPersonal from './central-personal'
import Navbar from '@/components/linda/navbar/navbar'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/router'
import Loader from '@/components/linda/loader/loader'

export default function MainPersonal() {
  const { auth } = useAuth()
  const router = useRouter()

  // console.log('psUserId', router.query.psUserId)
  const psUserId = router.query.psUserId
  useEffect(() => {
    if (!router.isReady) return
    setTimeout(() => {
      if (!psUserId) {
        router.back()
      }
    }, 1000)
  }, [psUserId, router])

  return (
    <>
      {psUserId ? (
        <div className=" h-screen">
          <Navbar className="bg-gradient-to-b from-black to-gray-800" />
          <PageSelect />
          <InfoBar />
          <FollowsBar />
          <CentralPersonal />
        </div>
      ) : (
        // <div className="flex justify-center items-center mt-[300px]">
        //   <div className="flex-col text-center">
        //     <h1 className="text-white">載入中</h1>
        //     <div>
        //       <span className="loading loading-ring loading-lg bg-gradient-to-r from-red-300  via-pink-400 via-purple-400 to-blue-400"></span>
        //       <span className="loading loading-ring loading-lg bg-gradient-to-r from-red-300  via-pink-400 via-purple-400 to-blue-400"></span>
        //       <span className="loading loading-ring loading-lg bg-gradient-to-r from-red-300  via-pink-400 via-purple-400 to-blue-400"></span>
        //       <span className="loading loading-ring loading-lg bg-gradient-to-r from-red-300  via-pink-400 via-purple-400 to-blue-400"></span>
        //     </div>
        //   </div>
        // </div>
        <Loader />
      )}
    </>
  )
}
