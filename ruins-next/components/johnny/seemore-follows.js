import React, { useEffect, useState } from 'react'
import { RiSearchLine, RiCloseLine } from '@remixicon/react'
// import Image from 'next/image'
// import profileImg from './img/16.jpg'
import { useToggles } from '@/contexts/use-toggles'
import { SN_USER_INFO } from '../config/johnny-api-path'
import { IMG_SERVER } from '../config/api-path'

export default function SeeMoreFollows({ marginTop = `mt-5` }) {
  const { toggles, setToggles } = useToggles()
  const [userInfo, setUserinfo] = useState('')

  useEffect(() => {
    fetch(`${SN_USER_INFO}`)
      .then((r) => r.json())
      .then((result) => {
        // console.log(result)
        const chunkSize = Math.ceil(result.length / 3) // 每個等份的大小
        console.log(chunkSize)

        // 切割成三等份長度
        const chunkedArray = [
          result.slice(0, chunkSize),
          result.slice(chunkSize, chunkSize * 2),
          result.slice(chunkSize * 2),
        ]

        console.log(chunkedArray) // 三等份數組
        setUserinfo(chunkedArray)
      })
  }, [])

  return (
    <>
      <div
        className={`flex justify-end bg-neutral-300 ${marginTop} rounded-t-lg pt-5 px-5 cursor-pointer`}
        onClick={() => {
          setToggles({ ...toggles, follows: false })
        }}
      >
        <RiCloseLine />
      </div>
      <div className="flex justify-center pb-5 px-10 mb-5 rounded-b-lg bg-neutral-300">
        <div className="flex-col items-center">
          {' '}
          <div className="text-center py-3 text-[20px]">FOLLOWS</div>
          <div className="flex justify-center py-5">
            <input className="flex p-[6px] items-center outline-none h-[32px] pc:w-[250px] w-full pc:shadow1 rounded-l-lg pl-5" />
            <button className="px-2 bg-white flex items-center h-[32px] p-[6px] translate-x-[-5px] pc:translate-x-0 pc:shadow1 rounded-r-lg">
              <RiSearchLine />
            </button>
          </div>
          <div className="flex justify-center  gap-10">
            <ul className="rounded-full">
              {userInfo &&
                userInfo[0].map((v, i) => {
                  return (
                    // <li className="py-2 flex items-center w-[50px] pc:w-[100px]">
                    <li className="flex items-center py-2">
                      <img
                        className="size-[80px] object-cover rounded-full mr-3 bg-575757"
                        src={
                          v.google_id
                            ? v.profile_pic_url
                            : `${IMG_SERVER}/${v.profile_pic_url}`
                        }
                        alt=""
                      />
                      <div>{v.username}</div>
                    </li>
                  )
                })}
            </ul>
            <ul className="rounded-full">
              {userInfo &&
                userInfo[1].map((v, i) => {
                  return (
                    // <li className="py-2 flex items-center w-[50px] pc:w-[100px]">
                    <li className="flex items-center py-2">
                      <img
                        className="size-[80px] object-cover rounded-full mr-3  bg-575757"
                        src={
                          v.google_id
                            ? v.profile_pic_url
                            : `${IMG_SERVER}/${v.profile_pic_url}`
                        }
                        alt=""
                      />
                      <div>{v.username}</div>
                    </li>
                  )
                })}
            </ul>
            <ul className="rounded-full">
              {userInfo &&
                userInfo[2].map((v, i) => {
                  return (
                    // <li className="py-2 flex items-center w-[50px] pc:w-[100px]">
                    <li className="flex items-center py-2">
                      <img
                        className="size-[80px] object-cover rounded-full mr-3  bg-575757"
                        src={
                          v.google_id
                            ? v.profile_pic_url
                            : `${IMG_SERVER}/${v.profile_pic_url}`
                        }
                        alt=""
                      />
                      <div>{v.username}</div>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
