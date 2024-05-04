import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Dropdown from '../dropdown/dropdown'
import _JSXStyle from 'styled-jsx/style'
import Mission from './mission'
import Entrance from '../three/Entrance'
import Image from 'next/image'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/router'

export default function Main() {
  const router = useRouter()
  //判斷登入
  const { auth } = useAuth()
  const mbID = auth.id

  const getmbID = async () => {
    try {
      const r = await fetch(`http://localhost:3001/game/check/gm_achieved/${mbID}`)
      const d = await r.json()
      console.log(d)
    } catch (ex) {
      console.log(ex)
    }
  }

  const [showFirstSVG, setShowFirstSVG] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const flashingInterval = setInterval(() => {
      setShowFirstSVG((prevState) => !prevState)
    }, 1100)
    return () => clearInterval(flashingInterval)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!mbID) {router.push('/member/account/login')}
  }, [mbID])

  useEffect(()=>{
    if(auth.id){
      fetch(``)
    }
  }, [auth])

  useEffect(()=>{
    getmbID()
  },[mbID])
  return (
    <>
      <div className="flex flex-row mt-24 relative">
        <div className="w-5/6 h-auto bg-gray-300 overflow-hidden">
          {/* <Entrance/> */}
        </div>
        <div className="absolute w-5/6 h-full flex-row">
          <div className="bg-black bg-opacity-50 backdrop-blur-sm absolute w-full h-full"></div>
          <div className="container absolute bottom-24">
            {loading ? (
              // <div className="loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              //   <div className="animate-spin rounded-full border-t-4 border-gray-400 border-opacity-25 h-12 w-12"></div>
              // </div>
              <img src="/svg/banner.svg" className="h-auto mx-auto" />
            ) : showFirstSVG ? (
              <button>
                {/* <img src="/svg/banner.svg" className="absolute w3/5 h-auto mt-96 ml-40" /> */}
              </button>
            ) : (
              <Link href="/game/three">
                <img
                  src="/svg/enter.svg"
                  className="h-auto mx-auto"
                  id="start"
                />
              </Link>
            )}
          </div>
        </div>

        <Mission />
        <Dropdown />
      </div>
      <style jsx>{`
        .flash-animation {
          opacity: ${showFirstSVG ? '0' : '1'};
          transition: opacity 0.8s ease-out;
        }
      `}</style>
    </>
  )
}
