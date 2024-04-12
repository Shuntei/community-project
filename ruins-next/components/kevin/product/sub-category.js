import { useRouter } from 'next/router'
import React from 'react'

export default function SubCategory() {
  const router = useRouter()
  return (
    <>
      {router.query.main_category === '4'
        ? '直播'
        : router.query.main_category === '2'
          ? '手作'
          : router.query.main_category === '3'
            ? '戶外'
            : '所有商品'}
    </>
  )
}
