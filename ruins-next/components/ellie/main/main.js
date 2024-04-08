import Link from 'next/link'
import React from 'react'
import { RiSubtractLine, RiArrowDownWideFill, } from "@remixicon/react";
import Dropdown from '../dropdown/dropdown';
import _JSXStyle from 'styled-jsx/style'
import Mission from './mission';

export default function Main() {
  return (
    <>
    <div className='flex flex-row static mt-24'>
      
      <div className='w-5/6'>
        <div className='w-full bg-gray-300'>
          <div className=''>
            <img src='https://via.placeholder.com/1580x788'/>
            </div>
        </div>
      </div>
      <Mission/>
      <Dropdown/>
    </div>
    
    </>
  )
}
