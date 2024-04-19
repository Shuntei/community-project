import React, { useContext, useEffect, useState } from 'react'
import { useBoards } from '@/contexts/use-boards'
import { RiArrowDropDownLine } from '@remixicon/react'
import { SN_BOARDS } from './config/api-path'
import { useRouter } from 'next/router'

export default function Topics() {
  const router = useRouter()
  // const query = { ...router.query, page:  }

  const {
    boards,
    setBoards,
    setPostsLists,
    setSelectedPosts,
    postsShow,
    handleBdPosts,
  } = useBoards()

  useEffect(() => {
    try {
      fetch(`${SN_BOARDS}`)
        .then((r) => r.json())
        .then((data) => setBoards(data))
    } catch (err) {
      console.log('boards error')
    }
  }, [])

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
            onClick={() => postsShow()}
          >
            全部
            <RiArrowDropDownLine />
          </li>
          {boards.map((v, i) => {
            return (
              <li
                className=" text-white px-10 py-3 flex cursor-pointer duration-200 hover:text-2xl"
                key={v.board_id}
                onClick={() => handleBdPosts(v.board_id)}
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
