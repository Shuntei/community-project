import React, { useState, useEffect } from 'react'
import {
  RiCheckboxBlankLine,
  RiCheckboxFill,
  RiSubtractLine,
} from '@remixicon/react'
import Volume from '../vol/volume'
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/auth-context'


export default function Mission() {

  // const [isChanged, setIsChanged ] = useState(false)

  const router = useRouter()
  const { auth } = useAuth()
  const mbID = auth.id

  const [mission, setMission] = useState('')

  const getMission = async () => {


    const url = `http://localhost:3001/game/gm_achieved/${mbID}`
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


  const calculateProgress = () => {
    if (!mission.rows) return 0;

    const activatedCount = mission.rows.filter(v => v.activate === 1).length;
    const progressPercentage = (activatedCount / 6) * 100;
    return progressPercentage;
  };

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
        {/* 進度條 */}
        <div className='px-6'>
          <div className="w-full bg-white h-2 mt-4 rounded">
            <div
              className="bg-gray-400 h-full rounded"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>

        <div className="p-6">
        {mission.rows &&
          mission.rows.map((v, i) => {
          return (
            <div className="flex">
              {/* {console.log(v.activate)} */}
              {v.activate === 0 ? <RiCheckboxBlankLine className="text-white" /> : <RiCheckboxFill className="text-white" />}
            <div className="flex-grow"></div>
            {v.activate === 0 ? <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white \">
            {v.title}
            </div> : <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white line-through">
            {v.title}
            </div>}
            
          </div>
          )
        })}
        </div>
        <div className="my-8 px-4">
          <div className="w-full flex flex-col border-b border-dotted mb-1"></div>
          <div className="w-full flex flex-col border-t border-dotted"></div>
        </div>
        {/* <Volume /> */}
      </div>
    </>
  )
}
