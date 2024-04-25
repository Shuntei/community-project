import React, { useEffect, useRef, useState } from 'react'
import { RiSearchLine } from '@remixicon/react'
import Image from 'next/image'
import profileImg from './img/16.jpg'
import { useToggles } from '@/contexts/use-toggles'
import { SN_USER_INFO } from '../config/johnny-api-path'
import { IMG_SERVER } from '../config/api-path'
import { useRouter } from 'next/router'
import useOutsideClick from './utils/out-side-click'

export default function FollowsBar() {
  const { toggles, setToggles } = useToggles()
  const [userInfo, setUserinfo] = useState('')
  const [keyword, setKeyword] = useState('')

  const fetchAllFollows = () => {
    fetch(`${SN_USER_INFO}`)
      .then((r) => r.json())
      .then((result) => {
        // console.log(result)
        setUserinfo(result)
      })
  }

  const ref = useRef()
  useOutsideClick(ref, () => {
    fetchAllFollows()
  })

  const router = useRouter()
  const query = { ...router.query, followsKeyword: keyword }
  const queryString = new URLSearchParams(query).toString()
  // console.log(query)
  // console.log(queryString)

  const submitHandler = (e) => {
    e.preventDefault()
    router.push({ pathname: '/community/main-page', query: queryString })

    fetch(`${SN_USER_INFO}?${queryString}`)
      .then((r) => r.json())
      .then((result) => {
        setUserinfo(result)
      })
  }

  useEffect(() => {
    fetchAllFollows()
  }, [])

  return (
    <span ref={ref}>
      <section className="fixed right-0 mt-[40px] pt-[10px] w-[260px] hidden bargone:block h-[600px] overflow-scroll pb-20 mr-10 pl-5 rounded-b-3xl z-[998] bg-292929">
        <div className="mb-5">
          <div></div>
          <div className="text-white py-1 text-[20px] ">FOLLOWS</div>
          <div className="border-b-2 mb-2 w-[200px]"></div>
          <div className="flex py-1">
            <input
              className="flex p-[6px] items-center outline-none h-[32px] w-[160px] rounded-l-lg pl-5"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
            />
            <button
              onClick={submitHandler}
              className="iconBg px-2 bg-white flex items-center h-[32px] p-[6px] rounded-r-lg"
            >
              <RiSearchLine />
            </button>
          </div>
          <ul className="h-[200px] overflow-auto hover:scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-700">
            {userInfo &&
              userInfo.map((v, i) => {
                return (
                  <li
                    key={v.id}
                    className="  text-white py-2 flex items-center"
                  >
                    <img
                      className="w-[35px] h-[35px] object-cover overflow-hidden rounded-full mr-5 bg-zinc-300"
                      src={
                        v.google_id
                          ? v.profile_pic_url
                          : `${IMG_SERVER}/${v.profile_pic_url}`
                      }
                      alt=""
                    />
                    {v.username}
                  </li>
                )
              })}
          </ul>
          <div
            className="text-white flex justify-end mr-5 text-[14px] font-semibold  hover:cursor-pointer "
            onClick={() => {
              setToggles({
                ...toggles,
                notification: false,
                follows: true,
              })
            }}
          >
            MORE...
          </div>
        </div>

        <div className="notification rounded-xl w-[240px]">
          <div className="text-white px-6 py-1 text-[20px] ">NOTIFICATION</div>
          <div className="border-b-2 mx-6 mb-2 w-[200px]"></div>
          <ul className="overflow-auto h-[180px] hover:scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-700">
            <li className="  text-white px-6 py-1 flex items-center">
              <div className="mr-5">
                <Image
                  className="w-[35px] rounded-full"
                  src={profileImg}
                  alt=""
                />
              </div>
              <div>
                <div className="">Hello,how are you?</div>
                <div className="">I'm fine.</div>
                <div className="">3 days ago</div>
              </div>
            </li>
            <li className="  text-white px-6 py-1 flex items-center">
              <div className="mr-5">
                <Image
                  className="w-[35px] rounded-full"
                  src={profileImg}
                  alt=""
                />
              </div>
              <div>
                <div className="">Hello,how are you?</div>
                <div className="">I'm fine.</div>
                <div className="">3 days ago</div>
              </div>
            </li>
            <li className="  text-white px-6 py-1 flex items-center">
              <div className="mr-5">
                <Image
                  className="w-[35px] rounded-full"
                  src={profileImg}
                  alt=""
                />
              </div>
              <div>
                <div className="">Hello,how are you?</div>
                <div className="">I'm fine.</div>
                <div className="">3 days ago</div>
              </div>
            </li>
          </ul>
          <div
            className="text-white flex justify-end mr-5 text-[14px] font-semibold  cursor-pointer"
            onClick={() => {
              setToggles({
                ...toggles,
                notification: true,
                follows: false,
              })
            }}
          >
            MORE...
          </div>
        </div>
      </section>
    </span>
  )
}
