import React from 'react'
import Dropdown from '../dropdown/dropdown';
import _JSXStyle from 'styled-jsx/style'
import Mission from './mission';
import TestA from '@/components/ellie/three/test-a'



export default function Main() {
  return (
    <>
    <div className='flex flex-row static mt-24'>
      
      <div className='w-5/6 bg-gray-300'>
          <TestA/>
      </div>
      <Mission/>
      <Dropdown/>
    </div>
    
    </>
  )
}
