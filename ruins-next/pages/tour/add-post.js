import Footer from '@/components/linda/footer/footer'
import Navbar from '@/components/linda/navbar/navbar'
import React from 'react'

export default function AddPost() {
  return (
    <>
      <Navbar />
      <h1></h1>
      <form className="pt-28 px-[150px] space-y-10">
        <div className="bg-zinc-400 grid place-items-center py-10">
          <div className="w-3/5">
            <div className="text-xl">活動詳情</div>
            <div className="flex flex-col">
              <label htmlFor="">出團人數：</label>
              <input type="text" className="text-black" />
              <label htmlFor="">出發時間：</label>
              <input type="date" className="text-black" />
              <label htmlFor="">探險時長(小時)：</label>
              <select className="text-black">
                {}
                <option value="someOption">1</option>
                <option value="otherOption">2</option>
                <option value="otherOption">3</option>
              </select>
              <label htmlFor="">探險難易度：</label>
              <select className="text-black">
                <option value="someOption">簡單</option>
                <option value="otherOption">中等</option>
                <option value="otherOption">困難</option>
              </select>
              <label htmlFor="">集合地點：</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="2"
                className="text-black"
              ></textarea>
            </div>
          </div>
          <div className="w-3/5 flex flex-col">
            <h2 className="text-xl">活動介紹</h2>
            <label htmlFor="">探險標題：</label>
            <input type="text" className="text-black" />
            <label htmlFor="">文章內容：</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="text-black"
            ></textarea>
          </div>
          <div className="w-3/5 flex flex-col">
            <h2 className="text-xl">上傳照片</h2>
            <label for="">選擇圖片：</label>
            <input type="file" id="img" name="img" accept="image/*" />
            {/* <input type="submit"/> */}
            <label for="caption1">圖片說明1：</label>
            <input
              type="text"
              id="caption1"
              name="caption1"
              className="text-black"
            />
            <label for="caption2">圖片說明2：</label>
            <input
              type="text"
              id="caption2"
              name="caption2"
              className="text-black"
            />
            <label for="caption3">圖片說明3：</label>
            <input
              type="text"
              id="caption3"
              name="caption3"
              className="text-black"
            />
          </div>
          <div className="w-3/5 flex flex-col space-y-1">
            <h2 className="text-xl">介紹自己</h2>
            <label htmlFor="">選擇身分：</label>
            <select className="text-black">
              <option value="someOption">探險新手</option>
              <option value="otherOption">探險達人</option>
            </select>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="text-black"
            ></textarea>
          </div>
        </div>
      </form>
      <Footer />
    </>
  )
}
