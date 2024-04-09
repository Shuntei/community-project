import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import img from './img/90.jpg'
import postImg from './img/1868140_screenshots_20240117160639_1.jpg'
import { z } from 'zod'
import { useToggles } from '@/contexts/use-toggles'
import {
  RiVideoOnFill,
  RiImageFill,
  RiMapPinFill,
  RiPriceTag3Fill,
  RiEmotionLaughFill,
  RiEqualizerLine,
  RiSendPlane2Fill,
  RiDraftLine,
  RiCloseLargeLine,
  RiArrowDropDownLine,
} from '@remixicon/react'
import { SN_ADD_POST } from './config/api-path'
import { useRouter } from 'next/router'
import { useBoards } from '@/contexts/use-boards'

export default function PostModal() {
  const { postModal, setPostModal } = useToggles()
  const [postFrom, setPostForm] = useState({
    title: '',
    content: '',
    image_url: '',
  })
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')

  const { render, setRender, allPostsShow } = useBoards()

  const changeHandler = (e) => {
    setPostForm({ ...postFrom, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const r = await fetch(`${SN_ADD_POST}`, {
      method: 'POST',
      body: JSON.stringify(postFrom),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log('postForm:', postFrom)

    const result = await r.json()
    if (result.success) {
      console.log(result)
      setRender(true)
      setPostModal(!postModal)
    } else {
      alert('發文失敗')
    }
  }

  useEffect(() => {
    allPostsShow()
    setRender(false)
  }, [render])

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    console.log(file)
    if (file) {
      setSelectedFile(file)
      const fileUrl = URL.createObjectURL(file)
      setPostForm({ ...postFrom, image_url: fileUrl })
      setPreviewUrl('')
    } else {
      selectedFile(null)
      setPreviewUrl('')
    }
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl('')
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreviewUrl(objectUrl)
    console.log(objectUrl)
    // return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  return (
    <>
      {' '}
      {/* <!-- 發文框 --> */}
      <form
        name="form1"
        className=" bg-gray-400 bg-opacity-50 fixed backdrop-blur-sm inset-0 flex justify-center items-center z-[1003]"
        id="postModal"
        onSubmit={submitHandler}
      >
        <div className="bg-black w-full pc:w-[700px] px-5 pc:px-10 pt-5 pb-10 rounded-3xl">
          <div className="flex justify-between pb-5 text-white">
            <div className="text-[25px] flex items-center">
              Choose a Board
              <RiArrowDropDownLine />
            </div>
            <button onclick="closeModal()">
              <RiCloseLargeLine onClick={() => setPostModal(!postModal)} />
            </button>
          </div>
          <div className="flex-col mb-5">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-5">
                <Image className="size-[35px] rounded-full" src={img} alt="" />
                <span className="text-white text-[20px]">John Doe</span>
              </div>
              {/* 操作按鈕區 */}
              <div className="text-white flex gap-10">
                <button type="button">
                  <RiEqualizerLine />
                </button>
                <button type="button">
                  <RiDraftLine />
                </button>
                <button type="submit">
                  <RiSendPlane2Fill />
                </button>
              </div>
            </div>

            <div className="w-full h-full">
              {/* <!-- title --> */}
              <div className="flex justify-center mb-5">
                <input
                  className="justify-center w-full text-[20px] leading-10 px-10 py-1 rounded-lg outline-none"
                  placeholder="Title Here"
                  name="title"
                  onChange={changeHandler}
                  value={postFrom.title}
                />
              </div>
              <div className="rounded-lg bg-slate-300">
                <div className="flex justify-center gap-2 pc:gap-5 py-3">
                  <div className="text-[14px] pc:text-[16px] flex">
                    <RiPriceTag3Fill className="mr-2" />
                    黃曉桂
                  </div>
                  <div className="text-[14px] pc:text-[16px] flex">
                    <RiEmotionLaughFill className="mr-2" />
                    覺得興奮
                  </div>
                  <div className="text-[14px] pc:text-[16px] flex">
                    <RiMapPinFill className="mr-2" />
                    光華商場
                  </div>
                </div>
                {/* <!-- 輸入區域 --> */}
                <textarea
                  type="text"
                  className="w-full h-[150px] outline-none p-10"
                  placeholder="What are you thinking??"
                  name="content"
                  onChange={changeHandler}
                  value={postFrom.content}
                ></textarea>{' '}
                <div className="flex justify-center py-2 overflow-hidden gap-5">
                  {Array(1)
                    .fill(1)
                    .map((v, i) => {
                      return (
                        <Image
                          className="size-[150px] object-cover rounded-lg"
                          src={previewUrl}
                          width={150}
                          height={150}
                          alt=""
                          key={i}
                        />
                      )
                    })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pc:gap-10 justify-center text-white ">
            <button className="flex items-center">
              <RiVideoOnFill className="mr-2 text-[24px]" />
              <span className="hidden pc:flex">VIDEO</span>
            </button>
            <label className="flex items-center cursor-pointer">
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                multiple
                accept="image/png,image/jpeg"
                name="image_url"
              />
              <RiImageFill className="mr-2 text-[24px]" />
              <span className="hidden pc:flex">PHOTO</span>
            </label>
            <button className="flex items-center">
              <RiMapPinFill className="mr-2 text-[24px]" />
              <span className="hidden pc:flex">LOCATION</span>
            </button>
            <button className="flex items-center">
              <RiPriceTag3Fill className="mr-2 text-[24px]" />
              <span className="hidden pc:flex">TAGS</span>
            </button>
            <button className="flex items-center">
              <RiEmotionLaughFill className="mr-2 text-[24px]" />
              <span className="hidden pc:flex">FEELING</span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
