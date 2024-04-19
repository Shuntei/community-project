import { useState, useEffect } from 'react'
import styles from './notify-green.module.css'
import { IoMdClose } from 'react-icons/io'
import { FaCheckCircle } from 'react-icons/fa'

export default function NotifyGreen({ children, onClose }) {
  return (
    <>
      <div className="bg-white">
        <div className="flex items-center p-[8px] px-[10px] gap-[20px]">
          <div className="flex items-center gap-[20px] mr-auto">
            <FaCheckCircle className="text-[20px] text-[#64CD8A]" />
            <div className="text-black text-[14px]">{children}</div>
          </div>
          <IoMdClose 
          onClick={onClose}
          className="text-[24px] text-black cursor-pointer" />
        </div>
        <div className="w-full bg-[#B8B8B8]">
          <div
          //  key={key}
           className={styles.progressBar}></div>
        </div>
      </div>
    </>
  )
}
