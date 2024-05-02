import Footer from '@/components/linda/footer/footer'
import Navbar from '@/components/linda/navbar/navbar'
import { useAuth } from '@/contexts/auth-context'
import React, { useEffect, useState } from 'react'

export default function AddPost() {
  const { auth } = useAuth()
  console.log(auth.id)
  // 定義表單資料
  const initialFormData = {
    user_id: auth.id,
    ruin_id: 0,
    event_date: '',
    max_groupsize: 0,
    event_period: 0,
    level_id: 0,
    title: '',
    description: '',
    content: '',
    images: [], // 存放圖片和說明
  }

  const [formData, setFormData] = useState(initialFormData)

  // 紀錄選取的圖片
  const handleImageChange = (e) => {
    const files = e.target.files
    const imageFiles = Array.from(files).map((file) => ({
      file,
      caption: '', // 初始化圖片說明
    }))
    setFormData({
      ...formData,
      images: imageFiles,
    })
  }

  // 更新圖片說明文字
  const handleCaptionChange = (e, index) => {
    const newImages = [...formData.images]
    newImages[index].caption = e.target.value
    setFormData({
      ...formData,
      images: newImages,
    })
  }

  // 等 auth.id 變化後更新 user_id
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      user_id: auth.id,
    }))
  }, [auth.id])

  // 取得輸入的表單資料
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // 處理表單送出
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formDataToSend = new FormData()
      // Append other form data
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })
      console.log('FormData entries:')
      for (const pair of formDataToSend.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }

      // Append each image and its caption
      formData.images.forEach((image, index) => {
        formDataToSend.append(`image${index + 1}`, image.file)
        formDataToSend.append(`caption${index + 1}`, image.caption)
      })
      console.log('After appending images and captions:', formDataToSend)

      console.log(formData)
      // 向後端發出 POST
      const response = await fetch('http://localhost:3001/tour/api/add-post', {
        method: 'POST',
        body: formDataToSend,
      })
      if (!response.ok) {
        throw new Error('Failed to create post')
      }
      console.log('Post created successfully')
      // 在這裡提示成功訊息
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  return (
    <>
      <Navbar />
      <h1></h1>
      <form className="pt-28 px-[150px] space-y-10" onSubmit={handleSubmit}>
        <div className="bg-zinc-400 grid place-items-center py-10">
          <div className="w-3/5">
            <div className="text-xl">活動詳情</div>
            <div className="flex flex-col">
              <label htmlFor="max_groupsize">出團人數：</label>
              <input
                id="max_groupsize"
                name="max_groupsize"
                value={formData.max_groupsize}
                onChange={handleChange}
                type="text"
                className="text-black"
              />
              <label htmlFor="event_date">出發時間：</label>
              <input
                id="event_date"
                name="event_date"
                value={formData.event_date}
                onChange={handleChange}
                type="datetime-local"
                className="text-black"
              />
              <label htmlFor="event_period">探險時長(小時)：</label>
              <select
                id="event_period"
                name="event_period"
                value={formData.event_period}
                onChange={handleChange}
                className="text-black"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <label htmlFor="level_id">探險難易度：</label>
              <select
                id="level_id"
                name="level_id"
                value={formData.level_id}
                onChange={handleChange}
                className="text-black"
              >
                <option value="1">簡單</option>
                <option value="2">中等</option>
                <option value="3">困難</option>
              </select>
              <label htmlFor="ruin_id">廢墟編號</label>
              <select
                id="ruin_id"
                name="ruin_id"
                value={formData.ruin_id}
                onChange={handleChange}
                className="text-black"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {/* <label htmlFor="">集合地點：</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="2"
                className="text-black"
              ></textarea> */}
            </div>
          </div>
          <div className="w-3/5 flex flex-col">
            <h2 className="text-xl">活動介紹</h2>
            <label htmlFor="title">探險標題：</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              className="text-black"
              onChange={handleChange}
            />
            <label htmlFor="content">文章內容：</label>
            <textarea
              id="content"
              name="content"
              cols="30"
              rows="10"
              value={formData.content}
              className="text-black"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="w-3/5 flex flex-col">
            <h2 className="text-xl">上傳照片</h2>
            <label htmlFor="image">選擇圖片：</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              multiple
            />
            <div className="flex flex-wrap">
              {formData.images.map((image, index) => (
                <div key={index} className="flex flex-col mr-4 mb-4">
                  <img
                    src={URL.createObjectURL(image.file)}
                    alt={`Preview ${index + 1}`}
                    className="w-40 h-40 object-cover"
                  />
                  <input
                    type="text"
                    id={`caption${index + 1}`}
                    name={`caption${index + 1}`}
                    className="text-black mt-2"
                    value={image.caption}
                    placeholder="請輸入圖片說明"
                    onChange={(e) => handleCaptionChange(e, index)}
                  />
                </div>
              ))}
            </div>
            {/* <label htmlFor="caption1">圖片說明1：</label>
            <input
              type="text"
              id="caption1"
              name="caption1"
              className="text-black"
            /> */}
          </div>
          <div className="w-3/5 flex flex-col space-y-1">
            <h2 className="text-xl">介紹自己</h2>
            {/* <label htmlFor="">選擇身分：</label>
            <select className="text-black">
              <option value="someOption">探險新手</option>
              <option value="otherOption">探險達人</option>
            </select> */}
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              cols="30"
              rows="10"
              className="text-black"
            ></textarea>
          </div>
          <button type="submit" className="bg-white mt-5 p-2">
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </>
  )
}
