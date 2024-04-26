import React, { useEffect, useRef, useState } from 'react'
import { RiSearchLine, RiCloseLine } from '@remixicon/react'
// import Image from 'next/image'
// import profileImg from './img/16.jpg'
import { useToggles } from '@/contexts/use-toggles'
import { SN_USER_INFO } from '../config/johnny-api-path'
import { IMG_SERVER } from '../config/api-path'
import { useRouter } from 'next/router'
import useOutsideClick from './utils/out-side-click'

export default function SeeMoreFollows({ marginTop = `mt-5` }) {
  const { toggles, setToggles } = useToggles()
  const [userInfo, setUserinfo] = useState('')
  const [keyword, setKeyword] = useState('')

  const fetchAllFollows = () => {
    fetch(`${SN_USER_INFO}`)
      .then((r) => r.json())
      .then((result) => {
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
            <input
              className="flex p-[6px] items-center outline-none h-[32px] pc:w-[250px] w-full pc:shadow1 rounded-l-lg pl-5"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
            />
            <button
              onClick={submitHandler}
              className="px-2 bg-white flex items-center h-[32px] p-[6px] translate-x-[-5px] pc:translate-x-0 pc:shadow1 rounded-r-lg"
            >
              <RiSearchLine />
            </button>
          </div>
          <div className="flex justify-center  gap-10">
            <ul className="rounded-full flex flex-wrap justify-center pl-16">
              {userInfo &&
                userInfo.map((v, i) => {
                  return (
                    <li
                      key={v.id}
                      className="flex items-center py-2 w-[100%] sm:w-[50%] md:w-[33.3%]"
                    >
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
          </div>
        </div>
      </div>
    </span>
  )
}
