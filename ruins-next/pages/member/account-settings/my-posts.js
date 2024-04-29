import React, { useEffect, useState } from 'react'
import AccountLayout from '@/components/linda/accountLayout'
import Link from 'next/link'
import { TOUR_GET_POST } from '@/components/config/api-path'
import { useAuth } from '@/contexts/auth-context'
import dayjs from 'dayjs'

export default function MyPosts() {
  const { auth } = useAuth()
  const [posts, setPosts] = useState([])
  const [code, setCode] = useState(0)

  useEffect(() => {
    async function getPostInfo() {
      try {
        const r = await fetch(`${TOUR_GET_POST}/${auth.id}`, {
          method: 'get',
        })
        
        const result = await r.json()
        if (result.success) {
          setPosts(result.data)
        } else {
          setCode(result.code)
        }
      } catch (error) {
        console.log('Failed to fetch tour data:', error)
      }
    }

    getPostInfo()
  }, [])

  return (
    <>
      <div className="flex w-full flex-col md:p-0 p-[30px] gap-[37px]">
        <div className="pt-[50px] pb-5 md:px-[80px] flex w-full">
          <div className="flex flex-col gap-[30px] w-full">
            <div className="md:text-[30px] text-[24px] font-semibold">
              你發起的行程
            </div>
            
            <div id="postBox" className="">
              <div className="">
                {posts.map((post, i) => (
                  <div id="articleCard" className="w-full pb-10" key={i}>
                    <Link
                      href={`/tour/tourpost/${post.tour_id}`}
                      className="md:flex md:space-x-8 md:space-y-0 space-y-3"
                    >
                      <img
                        src={`/images/borou/${post.image_url}.jpg`}
                        className="md:w-[250px] w-full aspect-square rounded object-cover"
                        alt=""
                      />
                      <div className="relative space-y-2.5 w-full">
                        <div className="md:text-xl text-[15px] font-semibold">
                          {post.title}
                        </div>
                        <div className="md:text-base text-[13px]">
                          出團時間：{dayjs(post.event_date).format('YYYY/MM/DD')}
                        </div>
                        <p className="md:text-base text-[13px] md:h-[120px] h-[151px] text-ellipsis overflow-hidden">
                          {post.content}
                        </p>
                        <button className="md:absolute bottom-0 right-[230px] md:w-48 w-1/2 md:py-4 py-2 bg-white text-black hover:bg-red-900 hover:text-white hover:border-white italic">
                          DELETE
                        </button>
                        <button className="md:absolute bottom-0 right-0 md:w-48 w-1/2 md:py-4 py-2 bg-black hover:bg-white hover:text-black italic">
                          EDIT
                        </button>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </>
  )
}

MyPosts.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>
}

// /images/borou/anju01.jpg
// /images/borou/home02.jpg
// /images/borou/pink03.jpg
// TO DO: 判斷若沒有資料的code 並提示沒有找到使用者文章