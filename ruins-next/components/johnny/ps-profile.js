import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
// import img from './img/90.jpg'
import { RiDraftLine, RiBookmarkFill } from '@remixicon/react'
import { useToggles } from '@/contexts/use-toggles'
import { useAuth } from '@/contexts/auth-context'
import { IMG_SERVER } from '../config/api-path'
import { SN_PSPOSTS, SN_USER_INFO } from '../config/johnny-api-path'
import { useRouter } from 'next/router'
import { useBoards } from '@/contexts/use-boards'
import relationHandler from './utils/relationHandler'
import useOutsideClick from './utils/out-side-click'
import SeeMoreFollows from '@/components/johnny/seemore-follows'

export default function Profile() {
  const { toggles, setToggles } = useToggles()
  const { render } = useBoards()
  const { auth } = useAuth()
  const router = useRouter()
  // console.log(router)
  console.log(auth.id)
  const [postsTable, setPostsTable] = useState('')
  const [userInfo, setUserinfo] = useState('')
  const [showRelation, setShowRelation] = useState(false)
  const [followStatus, setFollowStatus] = useState('')
  const [sendStatus, setSendStatus] = useState(false)

  // console.log('有?', userInfo.id)
  // console.log('followStatus', followStatus)

  const ref = useRef()
  useOutsideClick(ref, () => {
    setShowRelation(false)
  })

  const psUserId = router.query.psUserId
  const query = { ...router.query, psUserId: psUserId }
  const queryString = new URLSearchParams(query).toString()
  // console.log(query)
  // console.log(queryString)

  const fetchAllFollows = () => {
    fetch(`${SN_USER_INFO}`)
      .then((r) => r.json())
      .then((result) => {
        console.log(result)
        if (!psUserId) return
        let selectedUser = result.find((v, i) => v.id == psUserId)
        // console.log(selectedUser)
        setUserinfo(selectedUser)
      })
  }

  const fetchSnPostsTable = async () => {
    // router.push({ pathname: '/community/main-personal', query: queryString })
    try {
      const r = await fetch(`${SN_PSPOSTS}?${queryString}`)
      const data = await r.json()
      setPostsTable(data)
      // console.log(data)
      // console.log(data.postsAmount[0]['COUNT(1)'])
    } catch (err) {
      console.log(err)
    }
  }

  const statusQuery = new URLSearchParams(followStatus).toString()
  console.log(statusQuery)
  const relationChange = () => {
    console.log(location.search)
    fetch(`http://localhost:3001/community/followedstatus?${statusQuery}`)
      .then((r) => r.json())
      .then((result) => console.log(result))
  }

  useEffect(() => {
    fetchSnPostsTable()
    if (psUserId) {
      fetchAllFollows()
    }
  }, [render, psUserId])

  useEffect(() => {
    relationChange()
    setSendStatus(false)
  }, [sendStatus])

  return (
    <>
      <div className="flex   justify-center mr-[10%] w-full ">
        <div className="flex items-center pc:gap-10">
          <div className="overflow-hidden size-[100px] pc:size-[128px] translate-x-[20%] translate-y-[-10%] pc:translate-x-[40%] pc:translate-y-[-40%] PcImagePosition">
            {/* <Image
              src={
                auth.profileUrl
                  ? auth.googlePhoto
                    ? auth.profileUrl
                    : `${IMG_SERVER}/${auth.profileUrl}`
                  : ''
              }
              // src={img}
              fill={true}
              objectFit="cover"
              alt=""
              className="rounded-full bg-zinc-300"
            /> */}
            {/* <img src="./img/0da44d263f64186851d88be18f8d36f78a4f7d5f.jpg" alt="" /> */}
            <Image
              src={
                userInfo?.profile_pic_url
                  ? userInfo?.google_photo
                    ? userInfo?.profile_pic_url
                    : `${IMG_SERVER}/${userInfo?.profile_pic_url}`
                  : ''
              }
              // src={img}
              fill={true}
              objectFit="cover"
              alt=""
              className="rounded-full bg-zinc-300"
            />
          </div>

          <div className="text-white pc:ml-56 ml-[140px] mt-2 pc:my-3">
            <div className="text-[24px]">{userInfo?.username}&nbsp;</div>
            <div className="flex gap-16 items-end">
              <ul className="flex gap-4 pc:gap-6">
                <li className="text-[14px] pc:text-[16px]">
                  POSTS{' '}
                  <div>
                    {postsTable?.postsAmount &&
                      postsTable?.postsAmount[0]['COUNT(1)']}
                  </div>
                </li>
                <li
                  className="text-[14px] pc:text-[16px] cursor-pointer"
                  onClick={() => {
                    setToggles({
                      ...toggles,
                      notification: false,
                      follows: true,
                    })
                  }}
                >
                  FOLLOWS <div>15</div>
                </li>
                <li className="text-[14px] pc:text-[16px]">
                  FOLLOWERS <div>7</div>
                </li>
              </ul>
              <ul className="hidden pc:flex w-[120px]">
                {router.pathname.includes('/main-personal') && (
                  <ul>
                    <li>
                      <RiDraftLine className="text-[24px]" />
                    </li>
                    <li>
                      <RiBookmarkFill className="text-[24px]" />
                    </li>
                  </ul>
                )}
                {router.pathname.includes('/main-page') && (
                  <li className="relative">
                    <div className="cursor-pointer relative" ref={ref}>
                      <div
                        className="flex items-center"
                        onClick={() => setShowRelation(true)}
                      >
                        {relationHandler(followStatus.status)}
                      </div>
                      {showRelation && (
                        <ul className="menu bg-base-100 rounded-lg w-32 text-black absolute mt-2">
                          <li>
                            <a
                              onClick={() => {
                                setFollowStatus({
                                  ...followStatus,
                                  psUserId: userInfo.id,
                                  authId: auth.id,
                                  status: 'follow',
                                })
                                setSendStatus(true)
                                // setIsFormChanged(true)
                              }}
                            >
                              FOLLOW
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() => {
                                setFollowStatus({
                                  ...followStatus,
                                  psUserId: userInfo.id,
                                  authId: auth.id,
                                  status: 'unfollow',
                                })
                                setSendStatus(true)
                                // setIsFormChanged(true)
                              }}
                            >
                              UNFOLLOW
                            </a>
                          </li>
                        </ul>
                      )}
                    </div>
                  </li>
                )}
              </ul>
            </div>

            <div className="flex justify-end pc:hidden pr-5 gap-3 mt-1">
              {router.pathname.includes('/main-personal') && (
                <>
                  <RiDraftLine className="text=[24px]" />
                  <RiBookmarkFill className="text-[24px]" />
                </>
              )}
            </div>
            <div className="flex justify-end pc:hidden pr-5 gap-3 mt-1">
              {router.pathname.includes('/main-page') && (
                <li className="relative">
                  <div className="cursor-pointer relative" ref={ref}>
                    <div
                      className="flex items-center"
                      onClick={() => setShowRelation(true)}
                    >
                      {relationHandler(followStatus.status)}
                    </div>
                    {showRelation && (
                      <ul className="menu bg-base-100 rounded-lg w-32 text-black absolute mt-2">
                        <li>
                          <a
                            onClick={() => {
                              setFollowStatus({
                                ...followStatus,
                                psUserId: userInfo.id,
                                authId: auth.id,
                                status: 'follow',
                              })
                              setSendStatus(true)
                              // setIsFormChanged(true)
                            }}
                          >
                            FOLLOW
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              setFollowStatus({
                                ...followStatus,
                                psUserId: userInfo.id,
                                authId: auth.id,
                                status: 'unfollow',
                              })
                              setSendStatus(true)
                              // setIsFormChanged(true)
                            }}
                          >
                            UNFOLLOW
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
