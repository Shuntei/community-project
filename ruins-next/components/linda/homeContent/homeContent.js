import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './homeContent.module.css'
import home1 from '@/public/images/home1.jpg'
import home2 from '@/public/images/home2.jpg'
import home3 from '@/public/images/home3.jpg'
import arrowPng from '@/public/images/arrow.png'
import product1 from '@/public/images/product1.jpeg'
import { PRODUCT_ALL } from '@/components/config/api-path'
import { useRouter } from 'next/router'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaArrowRightLong } from 'react-icons/fa6'
import EmblaCarousel from '../emblaCarousel/EmblaCarousel'

export default function HomeContent() {
  const router = useRouter()

  const [products, setProducts] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)

  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const slides = [
    {
      name: 'Title1',
      image: 'https://source.unsplash.com/23fk429Ayok',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      name: 'Title2',
      image: 'https://source.unsplash.com/GSCtoEEqntQ',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      name: 'Title3',
      image: 'https://source.unsplash.com/F1VKXkx17RM',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      name: 'Title4',
      image: 'https://source.unsplash.com/t0DRQNoRuSw',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      name: 'Title5',
      image: 'https://source.unsplash.com/B2Eiil2Y0lo',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
    {
      name: 'Title6',
      image: 'https://source.unsplash.com/k5lSVBfhPm8',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
    },
  ]

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
  }, [router])

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
          backgroundImage: currentIndex > 0 ? `url(${slides[currentIndex - 1].image})` : `url(${slides[slides.length - 1].image})`,
          width: '100%',
        }}
        className={`z-[-1] relative w-full h-lvh bg-center bg-cover brightness-50 ${styles['bg-transition']}`}
      >
      </div>
      {/* ------- Section One End ---------- */}
      <div
        className={styles.homeSectionTwo}
        style={{
          backgroundImage: `url(${home2.src})`,
          width: '100%',
        }}
      >
        {/* card start */}
        <div className={styles.card2}>
          <div className={styles['card-info']}>
            <span className={styles.title}>NEW POST!</span>
            <span className={styles.text}>
              Something <br />
              Special For
              <br />
              Compulsive Hoarder:
              <br />
              Whimsical Pet
            </span>
          </div>
          <button className={`${styles['card2-button']} hover:bg-[#7A7A7A]`}>
            READ NOW
          </button>
        </div>
        {/* card end  */}
      </div>
      <div className={styles.homeSectionThree}>
        <div>
          <div className={styles.rowThreeContainer}>
            <div className={styles['sec3-img-container']}>
              <Image alt="" src={home3} className="rounded-xl" />
            </div>
            <div className={styles.sec3TextContainer}>
              <div className={styles['sec3-text']}>
                <div className="text-sm">NEW!</div>
                <div className="text-2xl">
                  Something <br />
                  Special For <br />
                  Compulsive Hoarder: <br />
                  Whimsical Pet
                </div>
                <div className="text-sm">$480</div>
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
