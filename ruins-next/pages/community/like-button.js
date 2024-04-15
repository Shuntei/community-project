import React, { useEffect, useState } from 'react'
import { RiHeartLine, RiHeartFill } from '@remixicon/react'
import {
  SN_LIKES_CHANGE,
  SN_LIKES_STATE,
} from '@/components/johnny/config/api-path'

export default function LikeButton({ postId }) {
  const [isLike, setIsLike] = useState('')
  // console.log('the postId', postId)

  const toggleLike = async (postId) => {
    const r = await fetch(`${SN_LIKES_CHANGE}/${postId}`)
    const data = await r.json()
    console.log(data)
    toggleLikeInit(postId)
  }
  const toggleLikeInit = async (postId) => {
    const r = await fetch(`${SN_LIKES_STATE}/${postId}`)
    const data = await r.json()
    setIsLike(data.rows)
  }

  useEffect(() => {
    toggleLikeInit(postId)
  }, [])

  return (
    <span
      className=" flex cursor-pointer"
      onClick={() => {
        toggleLike(postId)
      }}
    >
      {isLike && isLike[0] ? (
        <RiHeartFill className="pr-1 text-red-400" />
      ) : (
        <RiHeartLine className="pr-1" />
      )}
      85
    </span>
  )
}
