import React,{ useState, useEffect } from 'react'
import Dropdown from '../dropdown/dropdown';
import _JSXStyle from 'styled-jsx/style'
import Mission from './mission';
import TestA from '@/components/ellie/three/test-a'
import Image from 'next/image'

export default function Main() {

  const [showFirstSVG, setShowFirstSVG] = useState(true);

  useEffect(() => {
    const flashingInterval = setInterval(() => {
      setShowFirstSVG(prevState => !prevState);
    }, 800); // 500ms for twice per second

    // Clean up the interval when component unmounts
    return () => clearInterval(flashingInterval);
  }, []);
  

  return (
    <>
    <div className='flex flex-row static mt-24'>
      <div className='w-5/6 h-auto bg-gray-300 overflow-hidden'>
        <TestA/>
      </div>
    {/* <div className='bg-black bg-opacity-50 backdrop-blur-sm absolute w-5/6 h-full'></div>
      {showFirstSVG ? (
        <img src="/svg/banner.svg" className='absolute w3/5 h-auto mt-96 ml-40' />
      ) : (
        <button><img src="/svg/enter.svg" className='flash-animation absolute w3/5 h-auto mt-44 ml-72' id='start'/></button>
      )} */}
      <Mission/>
      <Dropdown/>
    </div>
    <style jsx>{`
        .flash-animation {
          opacity: ${showFirstSVG ? '0' : '1'};
          transition: opacity 0.8s ease-out;
        }
      `}</style>
    </>
  )
}
