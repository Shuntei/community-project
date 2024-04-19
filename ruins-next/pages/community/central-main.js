import 'tailwindcss/tailwind.css'
import { RiSearchLine, RiArrowDropDownLine } from '@remixicon/react'
import MainContent from '@/components/johnny/content-list'
import SeeMoreFollows from '@/components/johnny/seemore-follows'
import SeeMoreNotification from '@/components/johnny/seemore-notification'
import { useToggles } from '@/contexts/use-toggles'
import { useEffect, useState } from 'react'
import { SN_POSTS } from '@/components/johnny/config/api-path'
import { useBoards } from '@/contexts/use-boards'
import { useRouter } from 'next/router'

export default function CentralContent() {
  const { toggles } = useToggles()
  const { render, setRender, postsShow, setPostsLists } = useBoards()
  const [sortBy, setSortBy] = useState('time')
  const [searchTerm, setSearchTerm] = useState('')
  // const [searchRender, setSearchTermRender] = useState(false)

  const router = useRouter()

  const query = { ...router.query, keyword: searchTerm }
  console.log(query)

  const queryHandler = (e) => {
    // if (e) {
    //   e.preventDefault()
    // }
    const queryString = new URLSearchParams(query).toString()
    router.push({ pathname: '/community/main-page', query: queryString })
    console.log(queryString)

    const urlWithQuery = `${SN_POSTS}?${queryString}`

    fetch(urlWithQuery)
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        // setSearchTermRender(!searchRender)
        setPostsLists(data)
      })
  }

  useEffect(() => {
    postsShow()

    // 發送後(刪除)會設成true用於重整,這裡設回false
    setRender(false)
  }, [render])

  return (
    <>
      {/* 依據navbar  加mt-[88px] pc:mt-[113px] */}
      <div className="flex justify-center mt-[50px] pc:mt-[112px] bg-black overflow-scroll">
        <section className="w-full pc:w-[800px]">
          {toggles.follows || toggles.notification ? (
            ''
          ) : (
            <div className="w-full  pc:flex justify-between items-center h-[100px] mt-[50px] fixed pc:w-[800px] pc:px-20 px-10 bg-neutral-300 z-[997]">
              <div className=" text-[32px] flex justify-center">
                [COMMUNITY]
              </div>
              <div
                name="form1"
                className="flex justify-center items-center py-2"
              >
                <select
                  className="mx-3 border-white border-4 rounded-[8px] flex cursor-pointer"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="time">Time</option>
                  <option value="views">Views</option>
                  <option value="comments">Comments</option>
                </select>
                {/* <RiArrowDropDownLine /> */}
                <div className="flex">
                  <input
                    className="flex p-[6px] items-center outline-none h-[32px] pc:w-[200px] w-full pc:shadow1 rounded-l-lg pl-5"
                    name="searchTerm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    className="px-2 bg-white flex items-center h-[32px] p-[6px] translate-x-[-5px] pc:translate-x-0 pc:shadow1 rounded-r-lg"
                    onClick={queryHandler}
                  >
                    <RiSearchLine />
                  </button>
                </div>
              </div>
            </div>
          )}

          {toggles.follows ? (
            <SeeMoreFollows />
          ) : toggles.notification ? (
            <SeeMoreNotification />
          ) : (
            <div className="pt-[100px] pc:pt-[60px] bg-neutral-300">
              <MainContent />
            </div>
          )}
        </section>
      </div>
    </>
  )
}
