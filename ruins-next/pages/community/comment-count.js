import React, { useState } from 'react'
import { RiChat4Fill } from '@remixicon/react'
import { SN_COMMENTS } from '@/components/johnny/config/api-path'

export default function CommentCount({ postId }) {
  const [commentCount, setCommentCount] = useState('')
  // 獲得評論數
  // showCommentCount(postIdCmCount)
  fetch(`${SN_COMMENTS}/${postId}`)
    .then((r) => r.json())
    .then((data) => {
      // console.log('評論數:', data.totalRows[0]['COUNT(1)'])
      setCommentCount(data.totalRows[0]['COUNT(1)'])
    })

  return (
    <span className=" pr-2 flex">
      <RiChat4Fill className="pr-1" />
      {commentCount}
    </span>
  )
}
