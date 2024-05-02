import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './homeContent.module.css'
import home1 from '@/public/images/home1.jpg'
import home2 from '@/public/images/home2.jpg'
import home3 from '@/public/images/home3.jpg'
import arrowPng from '@/public/images/arrow.png'
import product1 from '@/public/images/product1.jpeg'
import {
  PRODUCT_ALL,
  MB_GET_TOUR_INFO,
  MB_GET_POST,
} from '@/components/config/api-path'
import { useRouter } from 'next/router'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaArrowRightLong } from 'react-icons/fa6'
import EmblaCarousel from '../emblaCarousel/EmblaCarousel'
import { SN_COMMUNITY } from '@/components/config/johnny-api-path'

export default function HomeContent() {
  const router = useRouter()

  const [products, setProducts] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slides, setSlides] = useState([])
  const [post, setPost] = useState([])
  const card3Ref = useRef(null)
  const card2Ref = useRef(null)

  const OPTIONS = { loop: true }

  const getTourInfo = async () => {
    try {
      const r = await fetch(MB_GET_TOUR_INFO)
      const result = await r.json()
      setSlides(result.data)
    } catch (error) {
      console.log('Failed to fetch tour info:', error)
    }
  }

  const getPost = async () => {
    try {
      const r = await fetch(MB_GET_POST)
      const result = await r.json()
      setPost(result.data[0])
    } catch (error) {
      console.log('Failed to fetch post info:', error)
    }
  }

  const limitContent = (content) => {
    const maxLength = 50
    if (content?.length > maxLength) {
      return content.slice(0, maxLength) + '...'
    }
    return content
  }

  const getProducts = async () => {
    const url = `${PRODUCT_ALL}${location.search}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      //確保就算資料傳輸產生錯誤 畫面不會整個崩潰

      setProducts(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getProducts()
    getTourInfo()
    getPost()
  }, [router])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === card2Ref.current) {
              card2Ref.current.classList.add(styles['slide-in-from-left'])
            } else if (entry.target === card3Ref.current) {
              card3Ref.current.classList.add(styles['slide-in-from-right'])
            }
          }
        })
      },
      {
        threshold: 0.5,
      }
    )

    observer.observe(card2Ref.current)
    observer.observe(card3Ref.current)
  }, [])

  useEffect(() => {
    const container = document.querySelector(`.${styles['containerP']}`)

    const slide = () => {
      container.scrollLeft += 0.5 // 控制滑動速度

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0
      }
    }

    const sliderInterval = setInterval(slide, 20) //  調整滑動間隔

    return () => clearInterval(sliderInterval)
  }, [])

  return (
    <>
      {/* ------- Section One Start ---------- */}
      <EmblaCarousel
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        className="absolute md:left-1/2 md:top-1/3 bottom-0 p-[20px] md:p-0"
        slides={slides}
        options={OPTIONS}
      />
      <div
        style={{
          backgroundImage:
            currentIndex > 0
              ? `url('/images/borou/${slides[currentIndex - 1]?.image_url}.jpg')`
              : `url('/images/borou/${slides[slides.length - 1]?.image_url}.jpg')`,
          width: '100%',
        }}
        className={`z-[-1] relative w-full h-lvh bg-center bg-cover brightness-50 ${styles['bg-transition']}`}
      ></div>
      {/* ------- Section One End ---------- */}
      <div
        className={styles.homeSectionTwo}
        style={{
          backgroundImage: `url(${SN_COMMUNITY}/${post?.image_url})`,
          width: '100%',
        }}
      >
        {/* card start */}

        <div className={styles.card2} ref={card2Ref}>
          <div
            className={`${styles['card-info']} flex flex-col md:gap-[10px] md:max-w-[300px] max-w-[200px]`}
          >
            <span className={`${styles.title}`}>MOST VIEWED POST!</span>
            <span className={styles.text}>
              <div className="pb-2">{post.title} :</div>
              {limitContent(post?.content)}
            </span>
          </div>
          <Link
            href={`http://localhost:3000/community/main-post?postId=${post.post_id}`}
            className={`${styles['card2-button']} hover:bg-[#7A7A7A]`}
          >
            READ NOW
          </Link>
        </div>
        {/* card end  */}
      </div>
      <div className={styles.homeSectionThree}>
        <div>
          <div className={styles.rowThreeContainer}>
            <div className={styles['sec3-img-container']}>
              <video className="rounded" autoPlay muted loop>
                <source src="/video/live.mp4" type="video/mp4" />
                Video is unavailable
              </video>
            </div>
            <div className={styles.sec3TextContainer}>
              <div className={styles['sec3-text']} ref={card3Ref}>
                <div className="text-sm">LIVE!</div>
                <div className="text-2xl">
                  拿起手機 <br />
                  啟動你的廢墟探險
                </div>
                <Link
                  href={'http://localhost:3000/chat'}
                  className='flex px-[52px] py-[18px] items-center bg-white text-italic border border-black hover:bg-black hover:border-white'
                >
                  READ NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.ps5}></div>
            <p className={styles['cards-container-title']}>RECENTLY ADDED</p>
            <div className="flex w-full justify-between  md:px-24 px-4 py-5 flex-col space-y-5">
              <div className={`flex md:gap-10 gap-5  ${styles['containerP']} `}>
                {products &&
                  products.rows.map((v, i) => {
                    return (
                      <Link
                        key={v.pid}
                        href={`/shop/product/${v.pid}`}
                        className={`md:w-1/5 w-1/2 ${styles['product-item']} flex-col  gap-5 flex transition duration-200 hover:skew-y-2`}
                        
                      >
                        <img
                          className="w-full aspect-square  rounded-xl"
                          src={`/images/product/${v.img.split(',')[0]}`}
                          alt="pic"
                        />
                        <div className="md:px-10 flex-col  gap-1 flex">
                          <div className="text-white text-sm font-medium font-['IBM Plex Mono']">
                            {v.name}
                          </div>
                          <div className="text-zinc-500 text-[15px] font-medium font-['IBM Plex Mono']">
                            {v.price}
                          </div>
                        </div>
                      </Link>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
