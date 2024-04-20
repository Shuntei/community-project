import React, { useContext, useEffect, useState } from 'react'
import { useBoards } from '@/contexts/use-boards'
import { RiArrowDropDownLine } from '@remixicon/react'
import { SN_BOARDS } from './config/api-path'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Topics() {
  const router = useRouter()
  const { boards, setBoards, setSelectedPosts } = useBoards()

  useEffect(() => {
    fetch(`${SN_BOARDS}`)
      .then((r) => r.json())
      .then((data) => setBoards(data))
  }, [])

  // console.log('第一步拿到boardId', router.query.boardId)

  useEffect(() => {
    if (!router.isReady) return
    // console.log('第二步進入抓取資料')
    fetch(`${SN_BOARDS}/${location.search}`)
      .then((r) => r.json())
      .then((result) => {
        // console.log('第三步抓到資料', result)
        setSelectedPosts(result)
      })
      .catch((ex) => console.log({ ex }))
    console.log(router)
  }, [router.query.boardId])
  
  return (
    <>
      <section className="fixed mt-[40px] hidden bargone:block ml-10 h-[600px] bg-black overflow-scroll z-[998] rounded-b-3xl">
        <div className="text-white px-10 pt-3 pb-1 text-[20px]  cursor-pointer">
          TOPICS
        </div>
        <div className="border-b-2 mx-10 w-[200px]"></div>
        <ul>
          <li
            className=" text-white px-10 py-3 flex cursor-pointer duration-200 hover:text-2xl"
            // onClick={() => postsShow()}
            onClick={() =>
              router.push({
                pathname: '/community/main-page',
              })
            }
          >
            全部
            <RiArrowDropDownLine />
          </li>
          {boards &&
            boards.map((v, i) => {
              return (
                <li
                  className=" text-white px-10 py-3 flex cursor-pointer duration-200 hover:text-2xl"
                  onClick={() =>
                    router.push({
                      query: { ...router.query, boardId: v.board_id },
                    })
                  }
                >
                  {v.board_name}
                  <RiArrowDropDownLine />
                </li>
              )
            })}
        </ul>
      </section>
    </>
  )
}
