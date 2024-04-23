import React, { useEffect, useState } from 'react'
import { API_SERVER } from './config/api-path'
import {
  RiChat4Fill,
  RiEyeFill,
  RiDeleteBinLine,
  RiMoreFill,
  RiArrowRightDoubleLine,
  RiArrowLeftDoubleLine,
} from '@remixicon/react'
import Image from 'next/image'
import Link from 'next/link'
import { useBoards } from '@/contexts/use-boards'
import { useToggles } from '@/contexts/use-toggles'
import { SN_DELETE_POST } from './config/api-path'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'

export default function MainContent() {
  const { postsList, postsShow, handlePostId, setRender } = useBoards()

  const router = useRouter()

  const { removeBox, setRemoveBox } = useToggles()
  const [toggleMenu, setToggleMenu] = useState(false)

  const handlePush = (postId) => {
    // router.push(`/community/main-post?postId=${postId}`);
    handlePostId(postId)
  }

  const removePost = async (postId) => {
    const MySwal = withReactContent(Swal)
    await MySwal.fire({
      icon: 'warning',
      title: '確認刪除貼文?',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#292929', //#006400
      cancelButtonColor: '#8B0000',
      confirmButtonText: '是',
      cancelButtonText: '否',
      timer: 3000,
    }).then((rst) => {
      if (rst.isConfirmed) {
        MySwal.fire({
          title: '刪除成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        })
        fetch(`${SN_DELETE_POST}/${postId}`, {
          method: 'DELETE',
          body: JSON.stringify(postId),
        })
          .then((r) => r.json())
          .then((result) => {
            console.log(result)
            if (result.success) {
              setRender(true)
            } else {
              toast.error('刪除失敗')
            }
          })
      }
    })
  }

  useEffect(() => {
    postsShow()
  }, [router.query, router.query.page])

  return (
    <>
      {postsList.totalPostsRows.length === 0 ? (
        <ul className=" flex justify-center mt-[90px] text-xl"></ul>
      ) : (
        <ul className="flex justify-center mt-[90px] text-xl">
          <Link
            className="border-s-2 px-3 py-3 flex items-center hover:hover1"
            // onClick={() => handlePage(1)}
            onClick={postsShow}
            href={{
              pathname: '/community/main-page',
              query: { ...router.query, page: `${1}` },
            }}
          >
            <RiArrowLeftDoubleLine />
          </Link>
          {Array(20)
            .fill(1)
            .map((v, i) => {
              const p = postsList.page - 5 + i
              // const p = i;
              if (p < 1 || p > postsList.totalPages) return null
              return (
                <li key={p}>
                  <Link
                    href={{
                      pathname: '/community/main-page',
                      query: { ...router.query, page: `${p}` },
                    }}
                    onClick={postsShow}
                    className={`border-s-2 px-5 flex py-3 hover:hover1 active:bg-white ${p === postsList.page ? 'bg-white' : ''}`}
                  >
                    {p}
                  </Link>
                </li>
              )
            })}
          <Link
            className="border-x-2 px-3 py-3 flex items-center hover:hover1"
            // href={`?page=${postsList.totalPages}`}
            href={{
              pathname: '/community/main-page',
              query: { ...router.query, page: `${postsList.totalPages}` },
            }}
            // onClick={() => handlePage(postsList.totalPages)}
            onClick={postsShow}
          >
            <RiArrowRightDoubleLine />
          </Link>
        </ul>
      )}
      {postsList.totalPostsRows.length === 0 ? (
        <h1
          className="flex bg-neutral-300 leading border-b-slate-500 justify-center 
        text-[20px] font-semibold py-10"
        >
          沒&nbsp;有&nbsp;任&nbsp;何&nbsp;貼&nbsp;文
        </h1>
      ) : (
        ''
      )}
      {postsList?.totalPostsRows?.map((v, i) => {
        return (
          <main
            className="flex bg-neutral-300 border-b-2 border-b-slate-500 relative"
            key={v.post_id}
          >
            {/*relative用於toggle垃圾桶*/}
            <div
              // onClick={() => handlePush(v.post_id)} // href={`/community/main-post`}
              className=" pc:px-20 px-10 py-3 flex pc:hover:hover3 transition-transform w-full"
            >
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
                  <div className="text-[20px] font-semibold flex items-center justify-between">
                    <span>{v.title}</span>
                    <span className="hidden pc:flex text-[12px]">
                      {dayjs(v.posts_timestamp).format('MMM DD, YYYY')}
                    </span>
                  </div>
                  <div className="text-[14px]">RYUSENKEI@ccmail.com</div>
                  <span>{v.content}</span>{' '}
                  <div className="text-[12px] pc:hidden">
                    {dayjs(v.posts_timestamp).format('MMM DD, YYYY')}
                  </div>
                </Link>
                <div className="text-[14px] text-292929">
                  <div className="flex gap-2">
                    <span className="text-575757 pr-2 flex">
                      <RiEyeFill className="pr-1" />
                      {v.view_count}
                    </span>
                    <span className="text-575757 flex cursor-pointer">
                      <RiChat4Fill className="pr-1" />
                      {v.comment_count}
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
                          className="dropdown-content z-[1] menu shadow bg-base-100 rounded-lg w-24"
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
                    src={`${API_SERVER}/${v.image_url}`}
                    alt="上傳的圖片無法顯示"
                    width={100}
                    height={100}
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
