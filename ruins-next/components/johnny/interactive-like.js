import React, { useEffect, useState } from 'react'
import { RiHeartLine, RiHeartFill } from '@remixicon/react'
import {
  SN_LIKES_CHANGE,
  SN_LIKES_STATE,
  SN_POSTS,
} from '@/components/johnny/config/api-path'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/router'
import { useBoards } from '@/contexts/use-boards'

export default function LikeButton({ postId, likes }) {
  const [isLike, setIsLike] = useState('')
  const [likeChange, setLikeChange] = useState(false)
  const { getPost, setGetPost } = useBoards()
  const { auth } = useAuth()
  const router = useRouter()
  // console.log('the postId', postId)

  const query = { ...router.query, postId: postId, userId: auth.id }
  const queryString = new URLSearchParams(query)

  const toggleLike = async (postId) => {
    const r = await fetch(`${SN_LIKES_CHANGE}?${queryString}`)
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
    fetch(`${SN_POSTS}?postId=${postId}`)
      .then((r) => r.json())
      .then((result) => setGetPost(result))
    toggleLikeInit(postId)
  }, [likeChange])

  return (
    <span
      className=" flex cursor-pointer"
      onClick={() => {
        toggleLike(postId)
      }}
    >
      {getPost[0].likes ? (
        <RiHeartFill
          className="pr-1 text-red-400"
          onClick={() => {
            setLikeChange(!likeChange)
          }}
        />
      ) : (
        <RiHeartLine
          className="pr-1"
          onClick={() => {
            setLikeChange(!likeChange)
          }}
        />
      )}
      {likes}
    </span>
  )
}
