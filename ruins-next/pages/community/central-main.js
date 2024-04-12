import 'tailwindcss/tailwind.css'
import { RiSearchLine, RiArrowDropDownLine } from '@remixicon/react'
import MainContent from '@/components/johnny/content-list'
import SeeMoreFollows from '@/components/johnny/seemore-follows'
import SeeMoreNotification from '@/components/johnny/seemore-notification'
import { useToggles } from '@/contexts/use-toggles'

export default function CentralContent() {
  const { toggles } = useToggles()

  return (
    <>
      {/* 依據navbar  加mt-[88px] pc:mt-[113px] */}
      <div className="flex justify-center mt-[50px] pc:mt-[112px] bg-black overflow-scroll">
        <section className="w-full pc:w-[800px]">
          {toggles.follows || toggles.notification ? (
            ''
          ) : (
            <div className="w-full  pc:flex justify-between items-center h-[100px] mt-[50px] fixed pc:w-[800px] pc:px-20 px-10 bg-neutral-300 z-[997]">
              <div className=" text-[32px] flex justify-center">
                [COMMUNITY]
              </div>
              <div className="flex justify-center items-center py-2">
                {/* <div className=" pc:px-2 pc:fs-4 hidden">SORT BY</div> */}
                {/* <RiEqualizerLine /> */}
                <button className=" px-2 mx-3 border-dotted border-white border-4 rounded-[8px] flex">
                  date
                  <RiArrowDropDownLine />
                </button>{' '}
                <div className="flex">
                  <input className="flex p-[6px] items-center outline-none h-[32px] pc:w-[200px] w-full pc:shadow1 rounded-l-lg pl-5" />
                  <button className="px-2 bg-white flex items-center h-[32px] p-[6px] translate-x-[-5px] pc:translate-x-0 pc:shadow1 rounded-r-lg">
                    <RiSearchLine />
                  </button>
                </div>
              </div>
            </div>
          )}

          {toggles.follows ? (
            <SeeMoreFollows />
          ) : toggles.notification ? (
            <SeeMoreNotification />
          ) : (
            <div className="pt-[100px] pc:pt-[60px] bg-neutral-300">
              <MainContent />{' '}
            </div>
          )}
        </section>
      </div>
    </>
  )
}
