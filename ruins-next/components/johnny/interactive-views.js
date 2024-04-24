import React, { useState } from 'react'
import { RiEyeFill } from '@remixicon/react'
import { SN_POSTS } from '@/components/johnny/config/api-path'

export default function Views({ postId }) {
  const [viewCount, setViewCount] = useState('')
  // console.log('the postId', postId)

  fetch(`${SN_POSTS}?postId=${postId}`)
    .then((r) => r.json())
    .then((data) => {
      // console.log(data[0].view_count)
      setViewCount(data[0].view_count)
    })

  return (
    <span className=" pr-2 flex">
      <RiEyeFill className="pr-1" />
      {viewCount}
      {/*原本前端寫法(無法儲存)
            {viewsCounter.map((v) => {
              if (v.postId == getPost[0].post_id) {
                return v.count
              }
            })} */}
    </span>
  )
}
