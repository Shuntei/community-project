import React, { useState, useEffect } from 'react'
import { RiCloseLargeLine } from "@remixicon/react";
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/auth-context'
// const AchievementsData=[
//   {
//     "achieved_id": "1",
//     "user_id": "1",
//     "mission_id": "1",
//     "name": "Mission 001",
//     "title": "Picked a character.",
//     "description": "Avatar editing features are unlocked.",
//     "activate": "1",
//     "last_update": "2024-01-25 16:46:48"
//   },
//   {
//     "achieved_id": "2",
//     "user_id": "1",
//     "mission_id": "2",
//     "name": "Mission 002",
//     "title": "Found a Portal.",
//     "description": "Awesome! You found a Portal.",
//     "activate": "1",
//     "last_update": "2024-01-25 16:46:48"
//   },
//   {
//     "achieved_id": "3",
//     "user_id": "1",
//     "mission_id": "3",
//     "name": "Mission 003",
//     "title": "Teleport yourself.",
//     "description": "Link to some where else.",
//     "activate": "1",
//     "last_update": "2024-01-25 16:46:48"
//   },
//   {
//     "achieved_id": "4",
//     "user_id": "1",
//     "mission_id": "4",
//     "name": "Mission 004",
//     "title": "Home Page.",
//     "description": "You have linked to HomePage.",
//     "activate": "0",
//     "last_update": "2024-01-25 16:46:48"
//   },
//   {
//     "achieved_id": "5",
//     "user_id": "1",
//     "mission_id": "5",
//     "name": "Mission 005",
//     "title": "!important member page",
//     "description": "Check your setting.",
//     "activate": "0",
//     "last_update": "2024-01-25 16:46:48"
//   },
//   {
//     "achieved_id": "6",
//     "user_id": "1",
//     "mission_id": "6",
//     "name": "Mission 006",
//     "title": "View SNS",
//     "description": "Checkout our Social networking place.",
//     "activate": "0",
//     "last_update": "2024-01-25 16:46:48"
//   },
//   {
//     "achieved_id": "7",
//     "user_id": "1",
//     "mission_id": "7",
//     "name": "Mission 007",
//     "title": "Love window shopping.",
//     "description": "I check the price, and put it back.",
//     "activate": "0",
//     "last_update": "2024-01-25 16:46:48"
//   },
//   {
//     "achieved_id": "8",
//     "user_id": "1",
//     "mission_id": "8",
//     "name": "Mission 008",
//     "title": "tour tour tour",
//     "description": "Make some friends here.",
//     "activate": "0",
//     "last_update": "2024-01-25 16:46:48"
//   },
//   {
//     "achieved_id": "9",
//     "user_id": "1",
//     "mission_id": "9",
//     "name": "Mission 009",
//     "title": "Live.",
//     "description": "Are you ready to be entertained?",
//     "activate": "0",
//     "last_update": "2024-01-25 16:46:48"
//   },
//   {
//     "achieved_id": "10",
//     "user_id": "1",
//     "mission_id": "10",
//     "name": "Mission 010",
//     "title": "volume mute",
//     "description": "Shut up & pay attention",
//     "activate": "0",
//     "last_update": "2024-01-25 16:46:48"
//   },
//   {
//     "achieved_id": "11",
//     "user_id": "1",
//     "mission_id": "11",
//     "name": "Mission 011",
//     "title": "tic-tac-toe 01",
//     "description": "Join the game.",
//     "activate": "0",
//     "last_update": "2024-01-25 16:46:48"
//   },
//   {
//     "achieved_id": "12",
//     "user_id": "1",
//     "mission_id": "12",
//     "name": "Mission 012",
//     "title": "tic-tac-toe 02",
//     "description": "Try harder.",
//     "activate": "0",
//     "last_update": "2024-01-25 16:46:48"
//   },
//   {
//     "achieved_id": "13",
//     "user_id": "1",
//     "mission_id": "13",
//     "name": "Mission 013",
//     "title": "finished goods",
//     "description": "That's all.",
//     "activate": "0",
//     "last_update": "2024-01-25 16:46:48"
//   },
// ]

export default function AchievementsPopup({ onClose }) {

  const router = useRouter()
  const { auth } = useAuth()
  const mbID = auth.id

  const [achieved, setAchieved] = useState('')

  const getAchieved = async () => {
    const url = `http://localhost:3001/game/gm_achieved/${mbID}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      //確保就算資料傳輸產生錯誤 畫面不會整個崩潰

      setAchieved(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getAchieved()
  }, [router])


  return (
    // {console.log(achieved.rows)}

    <div className="popup absolute left-1/4 top-1/6 py-8 px-8 bg-[#292929] rounded-md border divide-slate-200 w-5/12">
      <div className="popup_inner">
        <div className='flex mb-4'>
          <div className="flex-none text-xl font-regular font-['IBM Plex Mono'] text-white ">ACHIEVEMENTS</div>
          <div className='flex-1'></div>
          <button onClick={onClose} className='flex-none'>
            <RiCloseLargeLine className='text-white'/></button>
        </div>
        
          
          {achieved.rows &&
          achieved.rows.map((v, i) => {
          return (
            <div className='flex flex-col gap-2'>
             {v.activate === 0 ?
          <div className='gap-3 content-center flex flex-row'>
            <div className='w-10 h-10 flex items-center justify-center bg-gray-600'>
              <div className='w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center'>{v.mission_id}</div>
              </div>
            <div className='gap-2'>
                <div className="text-base font-regular font-['IBM Plex Mono'] text-white ">{v.mission_name}</div>
                <div className="text-sm font-light font-['IBM Plex Mono'] text-white ">{v.description}</div>
            </div>
          </div> :
        <div className='gap-3 content-center flex flex-row bg-zinc-700 p-1'>
          <div className='w-10 h-10 flex items-center justify-center bg-zinc-600'>{v.mission_id}</div>
          <div className='gap-2'>
              <div className="text-base font-regular font-['IBM Plex Mono'] text-gray-500 ">{v.mission_name}</div>
              <div className="text-sm font-light font-['IBM Plex Mono'] text-gray-500 ">{v.description}</div>
          </div>
        </div> }
        </div>
          )
        })}
          
          
          
        
        {/* {console.log(AchievementsData[0].description)} */}
      </div>
    </div>
  );
}
