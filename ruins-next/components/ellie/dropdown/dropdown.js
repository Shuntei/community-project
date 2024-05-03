import React, { useState, useEffect } from 'react'
import {
  RiSubtractLine,
  RiArrowDownWideFill,
  RiArrowUpWideFill,
  RiAddLine,
} from '@remixicon/react'
import AchievementsPopup from '../popup/popupachievements'
import Notepad from '../notepad/notepad'
import { useRouter } from 'next/router'
import Link from 'next/link'
// import { NOTE_LIST } from '@/components/config/api-path'
import EditNotes from '../notepad/notepad_edit'
// import toggleEditNotes from '../notepad/notepad_edit'

export default function Dropdown() {
  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  const [showNotepad, setShowNotepad] = useState(false)

  const toggleNotepad = () => {
    setShowNotepad(!showNotepad)
  }

  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
    // setShowNotes(false); // 关闭笔记内容
  }

  const [showAchievements, setShowAchievements] = useState(false)

  const toggleAchievements = () => {
    setShowAchievements(!showAchievements)
  }

  const [showNotes, setShowNotes] = useState(false)

  const toggleNotes = () => {
    setShowNotes(!showNotes)
  }

  const [showEditNotes, setShowEditNotes] = useState(false)

  // const toggleEditNotes = () => {
  //   setShowEditNotes(!showEditNotes)
  // }
  const [selectedNote, setSelectedNote] = useState(null);

  const toggleEditNotes = (noteData) => {
    setSelectedNote(noteData)
    setShowEditNotes(!showEditNotes)
  }

  // ++++++++++++++++++++

  const router = useRouter()

  const [note, setNote] = useState('')

  const getNote = async () => {
    const url = `http://localhost:3001/game/gm_note`
    try {
      const res = await fetch(url)
      const data = await res.json()
      //確保就算資料傳輸產生錯誤 畫面不會整個崩潰

      setNote(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getNote()
  }, [router])

  return (
    <>
      {/* {console.log(note.rows)} */}
      <div className="absolute">
        <div
          className={
            setShowDropdown
              ? 'w-64 px-4 bg-gray-50 bg-opacity-25 backdrop-blur-sm rounded-b'
              : 'w-64 px-4 bg-gray-50 bg-opacity-25 backdrop-blur-sm'
          }
        >
          {showDropdown && (
            <div className="flex flex-col ">
              <div className="flex flex-col mt-4">
                <div className="inline-flex gap-30 border-b-2 border-black mb-3">
                  <div className="flex-1 text-sm font-regular font-['IBM Plex Mono'] ">
                    ACHIEVEMENTS
                  </div>
                  {showAchievements ? (
                    <RiAddLine onClick={toggleAchievements} />
                  ) : (
                    <RiSubtractLine onClick={toggleAchievements} />
                  )}
                </div>

                {showAchievements && (
                  <div id="achievements" className="my-2">
                    <div className="flex justify-start pt-1">
                      <div className="w-7 h-7 flex items-center justify-center bg-gray-800">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          1
                        </div>
                      </div>
                      <div className="flex flex-col gap-none ml-2">
                        <div className="text-xs font-regular font-['IBM Plex Mono']">
                          Mission 01
                        </div>
                        <div className="text-xs font-light font-['IBM Plex Mono']">
                          Picked a character.
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start pt-1 gap-1">
                      <div className="w-7 h-7 flex items-center justify-center bg-gray-800">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          2
                        </div>
                      </div>
                      <div className="w-7 h-7 flex items-center justify-center bg-gray-800">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          3
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs font-light font-['IBM Plex Mono'] border-b border-black">
                      LOCKED ACHIEVEMENTS
                    </div>
                    <div className="flex justify-start pt-1 gap-1">
                      <div className="w-7 h-7 flex items-center justify-center bg-gray-800">
                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                          4
                        </div>
                      </div>
                      <div className="w-7 h-7 flex items-center justify-center bg-gray-800">
                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                          5
                        </div>
                      </div>
                      <div className="w-7 h-7 flex items-center justify-center bg-gray-800">
                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                          6
                        </div>
                      </div>
                      <div className="w-7 h-7 flex items-center justify-center bg-gray-800">
                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                          7
                        </div>
                      </div>
                      <div className="w-7 h-7 flex items-center justify-center bg-gray-800 text-white font-light">
                        +6
                      </div>
                    </div>
                    <div className="mt-2 text-xs font-extralight font-['IBM Plex Mono'] flex flex-row-reverse">
                      <button onClick={togglePopup}>View All</button>
                    </div>
                  </div>
                )}

                <div className="inline-flex gap-32 border-b-2 border-black mb-3">
                  <div className="flex-1 text-sm font-regular font-['IBM Plex Mono'] ">
                    NOTE
                  </div>
                  {showNotes ? (
                    <RiAddLine onClick={toggleNotes} />
                  ) : (
                    <RiSubtractLine onClick={toggleNotes} />
                  )}
                </div>

                {showNotes && (
                  <div id="notes" className="my-2">
                    <div className="flex flex-col items-start">
                      {note.rows &&
                        note.rows.map((v, i) => {
                          return (
                            <div
                              key={i}
                              onClick={() => toggleEditNotes(v)}
                              className="ml-1 mb-1 text-xs font-light font-['IBM Plex Mono'] border-b border-black inline-block cursor-pointer"
                            >
                              {v.title}
                            </div>
                          )
                        })}
                    </div>
                    <div className="mt-2 text-xs font-extralight font-['IBM Plex Mono'] flex flex-row-reverse">
                      <button onClick={toggleNotepad}>New Note</button>
                    </div>
                  </div>
                )}

                <div className="inline-flex gap-30 border-b-2 border-black">
                  <div className="flex-1 text-sm font-regular font-['IBM Plex Mono'] ">
                    SCREENSHOTS
                  </div>
                  <RiSubtractLine />
                </div>
                <div id="screenshot" className="my-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1">
                      <div className="bg-white w-16 h-16 rounded"></div>
                      <div className="bg-white w-16 h-16 rounded"></div>
                      <div className="bg-white w-16 h-16 rounded"></div>
                    </div>
                    <div className="flex flex-row gap-1">
                      <div className="bg-white w-16 h-16 rounded"></div>
                      <div className="bg-white w-16 h-16 rounded"></div>
                      <div className="bg-white w-16 h-16 rounded"></div>
                    </div>
                    <div className="flex flex-row gap-1">
                      <div className="bg-white w-16 h-16 rounded"></div>
                      <div className="bg-white w-16 h-16 rounded"></div>
                      <div className="bg-white w-16 h-16 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <button onClick={toggleDropdown}>
            {showDropdown ? (
              <RiArrowUpWideFill className="w-16 h-16 ml-16" />
            ) : (
              <RiArrowDownWideFill className="w-16 h-16 ml-16" />
            )}
          </button>
        </div>
      </div>
      {showPopup && <AchievementsPopup onClose={togglePopup} />}
      {showNotepad && <Notepad onClose={toggleNotepad} />}
      {/* {showDropdown && <RiArrowDownWideFill onClose={toggleDropdown}/>} */}
      {showEditNotes && <EditNotes onClose={toggleEditNotes} note1={selectedNote} />}
    </>
  )
}
