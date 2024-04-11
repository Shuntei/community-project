import React, { useEffect, useState } from 'react'
import {
  RiChat4Fill,
  RiEyeFill,
  RiDeleteBinLine,
  RiMoreFill,
} from '@remixicon/react'
import Image from 'next/image'
import img from './img/1868140_screenshots_20240115034222_1.jpg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useBoards } from '@/contexts/use-boards'
import { useToggles } from '@/contexts/use-toggles'
import { SN_DELETE_POST } from './config/api-path'

export default function PersonalContent() {
  const router = useRouter()
  const {
    postsList,
    selectedPosts,
    allPostsShow,
    handlePostId,
    handlePage,
    handleBdPostsPage,
    render,
    setRender,
  } = useBoards()

  const { removeBox, setRemoveBox } = useToggles()
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    const currentPage = location.search
    // allPostsShow(currentPage);
    allPostsShow()
    // console.log('location.search: ', location.search)
  }, [])

  const handlePush = (postId) => {
    // router.push(`/community/main-post?postId=${postId}`);
    handlePostId(postId)
  }

  const removePost = async (postId) => {
    const r = await fetch(`${SN_DELETE_POST}/${postId}`, {
      method: 'DELETE',
      body: JSON.stringify(postId),
    })
    const result = await r.json()
    // console.log(result)
    if (result.success) {
      // router.reload();
      // router.push(location.search);
      setRender(true)
    } else {
      alert('刪除失敗')
    }
  }

  useEffect(() => {
    allPostsShow()
    setRender(false)
  }, [render])

  // console.log(postsList.totalPostsRows)

  return (
    <>
      <ul className="bg-sky-300 flex justify-center">
        {Array(10)
          .fill(1)
          .map((v, i) => {
            const p = postsList.page - 5 + i
            // const p = i;
            if (p < 1 || p > postsList.totalPostsRows) return null
            return (
              <li key={p} className="mx-5">
                <Link
                  href={`?page=${p}`}
                  onClick={() => handlePage(p)}
                  className="btn btn-primary"
                >
                  {p}
                  {/* <a href={`?page=${p}`}>{p}</a> */}
                </Link>
              </li>
            )
          })}{' '}
      </ul>
      {postsList &&
        postsList.totalPostsRows
          .filter((v) => v.post_type === 'yours')
          .map((v, i) => {
            return (
              <main className="flex bg-neutral-300 border-b-2 border-b-slate-500 relative">
                {/*relative用於toggle垃圾桶*/}
                <div
                  // onClick={() => handlePush(v.post_id)} // href={`/community/main-post`}
                  className=" pc:px-20 px-10 py-3 flex pc:hover:hover3 transition-transform w-full"
                  key={v.post_id}
                >
                  {' '}
                  <div className="px-2 flex text-center absolute left-0">
                    {removeBox ? (
                      <label className="flex-col">
                        <input type="checkbox" />
                        <RiDeleteBinLine />
                      </label>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="w-[70%]">
                    <Link
                      name="postId"
                      onClick={() => handlePush(v.post_id)}
                      href={`/community/main-post?postId=${v.post_id}`}
                      className="cursor-pointer"
                    >
                      <div className="text-[20px] font-semibold">{v.title}</div>
                      <div className="text-[14px]">RYUSENKEI@ccmail.com</div>
                      <span>{v.content}</span>
                    </Link>
                    <div className="text-[14px] text-292929">
                      <div className="flex gap-2">
                        <span className="text-575757 pr-2 flex">
                          <RiEyeFill className="pr-1" />
                          297
                        </span>
                        <span className="text-575757 flex">
                          <RiChat4Fill className="pr-1" />
                          85
                        </span>
                        <div className="dropdown dropdown-right dropdown-end">
                          <div
                            tabIndex={0}
                            role="button"
                            onClick={() => setToggleMenu(!toggleMenu)}
                          >
                            <RiMoreFill className="pr-1" />
                          </div>
                          {toggleMenu && (
                            <ul
                              tabIndex={0}
                              className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-24"
                            >
                              <li onClick={() => removePost(v.post_id)}>
                                <a>remove</a>
                              </li>
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    className="ml-6 w-[100px] pc:w-[150px] flex items-center justify-end flex-shrink-0 cursor-pointer"
                    onClick={() => handlePush(v.post_id)}
                    href={`/community/main-post?postId=${v.post_id}`}
                  >
                    {v.image_url && (
                      <Image
                        className="size-[100px] object-cover rounded-xl"
                        src={v.image_url}
                        width={100}
                        height={100}
                        alt="Description of image"
                      />
                    )}
                  </Link>
                </div>
              </main>
            )
          })}
    </>
  )
}
