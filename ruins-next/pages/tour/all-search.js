import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { API_SERVER, TOUR_LIST } from '@/components/config/api-path'
import dayjs from 'dayjs'
import CategoryModal from '@/components/tony/modal-category'
import FilterModal from '@/components/tony/modal-filter'

export default function AllSearch() {
  const [tourList, setTourList] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [keyword, setKeyword] = useState('') // 搜尋關鍵字
  const [category, setCategory] = useState('') // 類別標籤
  const [totalRows, setTotalRows] = useState(0) // 呈現資料筆數

  // 取得全部貼文資料
  const fetchAllTourData = async (page) => {
    const response = await fetch(`${TOUR_LIST}?page=${page}`)
    const result = await response.json()

    // 若 result 或 result.rows undefined, 直接結束
    if (!result || !result.rows) {
      return
    }

    const newData = result.rows.map((item) => ({
      ...item,
      key: item.tour_id,
    }))
    setTourList((prevList) => [...prevList, ...newData])
    setPageNumber(page + 1)
    setTotalRows(result.totalRows)
  }

  // 取得關鍵字結果,主題篩選結果
  const fetchFilteredTourData = async (page, keyword, category) => {
    const response = await fetch(
      `${TOUR_LIST}?page=${page}&category=${category}&keyword=${encodeURIComponent(keyword)}`
    )
    const result = await response.json()
    const newData = result.rows.map((item) => ({
      ...item,
      key: item.tour_id,
    }))
    setTourList((prevList) => [...prevList, ...newData])
    setPageNumber(page + 1)
    setTotalRows(result.totalRows)
  }

  // Fetch all posts data on initial load
  useEffect(() => {
    fetchAllTourData(pageNumber)
  }, [])

  // 關鍵字搜尋
  const handleSearch = (e) => {
    e.preventDefault()
    setPageNumber(1)
    setTourList([])
    fetchFilteredTourData(1, keyword, category)
  }

  // 主題類別篩選
  const handleCategoryClick = (cat) => {
    const newCategory = category === cat ? '' : cat
    setCategory(newCategory)
    console.log(category)
    setPageNumber(1)
    setTourList([])
    fetchFilteredTourData(1, keyword, newCategory)
  }

  // 載入更多結果
  const handleLoadMore = () => {
    if (tourList.length < totalRows) {
      if (category || keyword) {
        fetchFilteredTourData(pageNumber, keyword, category)
      } else {
        fetchAllTourData(pageNumber)
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-[url('/images/tempuse.jpg')] bg-cover bg-center">
        <div id="headerReplace" className="h-32"></div>
        <div className="space-y-2.5 pt-12 md:pb-12 pb-5 md:px-[150px] px-5">
          <h1 className="text-white text-[26px] font-semibold">
            找尋你的精彩冒險
          </h1>
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                className="md:w-1/3 w-[87%] pl-8 pr-5 py-2.5 opacity-90 rounded"
                placeholder="想找什麼呢？"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <i className="ri-search-line ri-lg absolute left-2 top-[13px]"></i>
            </div>
          </form>
        </div>
      </div>
      <div className="md:px-[150px] px-5 py-5 space-y-5 relative">
        <div className="flex justify-between">
          <div className="md:flex md:space-x-3 font-['Noto Sans TC'] text-[13px] font-semibold">
            {/* <button className="rounded bg-white px-2.5 py-[5px] md:inline-block hidden ">
              更多主題<i className="ri-arrow-down-s-line"></i>
            </button> */}
            <CategoryModal/>
            <div className="md:space-x-3 space-x-2 flex flex-nowrap">
              <button
                className={`rounded bg-white px-2.5 py-[5px] ${category === 4 ? 'bg-blue-500 text-red-900' : ''}`}
                onClick={() => handleCategoryClick(4)}
              >
                古厝洋樓
              </button>
              <button
                className={`rounded bg-white px-2.5 py-[5px] ${category === 11 ? 'bg-blue-500 text-red-900' : ''}`}
                onClick={() => handleCategoryClick(11)}
              >
                廢棄飯店
              </button>
              <button className="rounded bg-white px-2.5 py-[5px]">工廠</button>
              <button className="rounded bg-white px-2.5 py-[5px]">
                電影院
              </button>
              <button className="rounded bg-white px-2.5 py-[5px]">
                廢棄百貨
              </button>
              <button className="rounded bg-white px-2.5 py-[5px]">
                娛樂場所
              </button>
              <button className="rounded bg-white px-2.5 py-[5px]">
                醫院診所
              </button>
              <button className="rounded bg-white px-2.5 py-[5px]">
                公寓大樓
              </button>
              <button className="rounded bg-white px-2.5 py-[5px]">學校</button>
              <button className="rounded bg-white px-2.5 py-[5px]">旅館</button>
              <button className="rounded bg-white px-2.5 py-[5px]">
                歷史建築
              </button>
            </div>
          </div>
          <div className="md:relative absolute -top-[60px] right-4 md:top-0 md:right-0">
            {/* <button className="font-['Noto Sans TC'] md:text-[13px] text-xl me:font-semibold md:rounded rounded-full bg-white md:opacity-100 opacity-90 px-2.5 py-[5px]">
              <i className="ri-equalizer-line"></i>
              <span className="md:inline hidden">排序</span>
            </button> */}
            <FilterModal/>
          </div>
        </div>
        <p className="text-white text-[13px]">{totalRows}個探險結果</p>
      </div>
      <div className="md:px-[150px] px-5 space-y-10 pb-[50px]">
        <div className="space-y-4 font-['Noto Sans TC']">
          {/* 揪團文章容器 */}
          <div
            id="cardbox"
            className="md:flex md:gap-8 md:space-y-0 space-y-5 flex-wrap"
          >
            {tourList &&
              tourList.map((v, i) => {
                return (
                  <div
                    className="bg-white md:w-[23%] rounded overflow-hidden pb-4"
                    key={v.tour_id}
                  >
                    <Link
                      href={`/tour/tourpost/${v.tour_id}`}
                      className="space-y-5"
                    >
                      <img
                        className="h-[250px] max-w-full object-cover"
                        src={v.image_url}
                        alt=""
                      />
                      <div className="flex justify-between px-5">
                        <span className="text-[15px] content-center">
                          <i className="ri-star-fill ri-lg pr-1"></i>4.51
                        </span>
                        <span className="space-x-1">
                          <i className="ri-heart-3-line ri-lg"></i>
                          <i className="ri-share-forward-fill ri-lg"></i>
                        </span>
                      </div>
                      <div className="px-5 space-y-1">
                        <div className="text-xl font-semibold">{v.title}</div>
                        <div className="text-[15px]">
                          出團時間 : {dayjs(v.event_date).format('YYYY/MM/DD')}
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="border text-white px-5 py-[10px] rounded-lg hover:bg-black"
            onClick={handleLoadMore}
          >
            載入更多結果
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
