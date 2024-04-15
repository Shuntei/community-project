import React, { useEffect, useState } from 'react'
import {
  RiChat4Fill,
  RiEyeFill,
  RiDeleteBinLine,
  RiMoreFill,
  RiArrowRightDoubleLine,
  RiArrowLeftDoubleLine,
} from '@remixicon/react'
import Image from 'next/image'
import img from './img/1868140_screenshots_20240115034222_1.jpg'
import Link from 'next/link'
import { useBoards } from '@/contexts/use-boards'
import { useToggles } from '@/contexts/use-toggles'
import { SN_DELETE_POST } from './config/api-path'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import toast, { Toaster } from 'react-hot-toast'

export default function MainContent() {
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
    console.log('location.search: ', location.search)
  }, [])

  useEffect(() => {
    allPostsShow()
    // 發送後會設成true用於重整,這裡設回false
    setRender(false)
  }, [render])

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
      confirmButtonColor: '#006400',
      cancelButtonColor: '#8B0000',
      confirmButtonText: '是',
      cancelButtonText: '否',
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

  return (
    <>
      {postsList ? (
        <ul className="bg-neutral-300 flex justify-center mt-[90px] text-xl">
          <li className="border-s-2 px-3 py-3 flex items-center hover:hover1">
            <RiArrowLeftDoubleLine />
          </li>
          {Array(20)
            .fill(1)
            .map((v, i) => {
              const p = postsList.page - 5 + i
              // const p = i;
              if (p < 1 || p > postsList.totalPages) return null
              return (
                <li key={p}>
                  <Link
                    href={`?page=${p}`}
                    onClick={() => handlePage(p)}
                    className={`border-s-2 px-5 flex py-3 hover:hover1 active:bg-white ${p === postsList.page ? 'bg-white' : ''}`}
                  >
                    {p}
                    {/* <a href={`?page=${p}`}>{p}</a> */}
                  </Link>
                </li>
              )
            })}
          <li className="border-x-2 px-3 py-3 flex items-center hover:hover1">
            {/* <Link href={`?page=${page}`}> */}
            <RiArrowRightDoubleLine />
            {/* </Link> */}
          </li>
        </ul>
      ) : selectedPosts ? (
        <ul className=" flex justify-center mt-[90px] text-xl">
          <li className="border-s-2 px-3 py-3 flex items-center hover:hover1">
            <RiArrowLeftDoubleLine />
          </li>
          {Array(10)
            .fill(1)
            .map((v, i) => {
              const p = selectedPosts.page - 5 + i
              // const p = i;
              if (p < 1 || p > selectedPosts.totalPages) return null
              return (
                <li key={p}>
                  <Link
                    href={`?page=${p}`}
                    // onClick={handleBdPostsPage(location.search)}
                    onClick={() => handleBdPostsPage(p)}
                    className={`border-s-2 px-5 flex py-3 hover:hover1 active:bg-white ${p === selectedPosts.page ? 'bg-white' : ''}`}
                  >
                    {p}
                  </Link>
                </li>
              )
            })}
          <li className="border-x-2 px-3 py-3 flex items-center hover:hover1">
            <RiArrowRightDoubleLine />
          </li>
        </ul>
      ) : (
        ''
      )}
      {(postsList.totalPostsRows || selectedPosts.selectedBdPostsRows).map(
        (v, i) => {
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
                  <Image
                    className="size-[100px] object-cover rounded-xl"
                    src={img}
                    alt="Description of image"
                  />
                </Link>
              </div>
            </main>
          )
        }
      )}
    </>
  )
}
