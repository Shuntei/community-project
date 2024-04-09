import React, { useState, useEffect } from 'react'
import Image from 'next/image'
const ImageComponent = () => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    // 发起请求获取图片URL
    fetch('http://localhost:3005/johnny/api/images', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.imageUrl)
        setImageUrl(data.imageUrl)
      })
      .catch((error) => {
        console.error('Error fetching image:', error)
      })
  }, [])

  return (
    <div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Sample Image"
          unoptimized={true}
          width={300}
          height={300}
        />
      )}
    </div>
  )
}

export default ImageComponent
