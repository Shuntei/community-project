import React, { useState, useEffect } from 'react'
import {
  RiCheckboxBlankLine,
  RiCheckboxFill,
  RiSubtractLine,
} from '@remixicon/react'
import Volume from '../vol/volume'
import Indicator from '../Indicator/Indicator'
import { useRouter } from 'next/router'


export default function Mission() {
  const router = useRouter()

  const [mission, setMission] = useState('')

  const getMission = async () => {
    const url = `http://localhost:3001/game/gm_mission`
    try {
      const res = await fetch(url)
      const data = await res.json()
      //確保就算資料傳輸產生錯誤 畫面不會整個崩潰

      setMission(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getMission()
  }, [router])

  return (
    <>
      {/* {console.log(mission.rows)} */}
      
      <div className="w-1/6 relative">
        <div className="my-8 px-4">
          <div className="w-full flex flex-col border-b border-dotted mb-1"></div>
          <div className="w-full flex flex-col border-t border-dotted"></div>
        </div>
        <div className="flex justify-center text-lg font-regular font-['IBM Plex Mono'] text-white mb-4">
          MISSION
        </div>
        <Indicator />
        
        <div className="p-6">
        {mission.rows &&
          mission.rows.map((v, i) => {
          return (
            <div className="flex">
              {/* {console.log(v.activate)} */}
              {v.activate === 0 ? <RiCheckboxBlankLine className="text-white" /> : <RiCheckboxFill className="text-white" />}
            <div className="flex-grow"></div>
            {v.activate === 0 ? <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white \">
            {v.mission_name}
            </div> : <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white line-through">
            {v.mission_name}
            </div>}
            
          </div>
          )
        })}
        </div>
        <div className="my-8 px-4">
          <div className="w-full flex flex-col border-b border-dotted mb-1"></div>
          <div className="w-full flex flex-col border-t border-dotted"></div>
        </div>
        <Volume />
      </div>
    </>
  )
}
