import React from 'react'

export default function Volume() {
  return (
    <>
      <div className='my-12'>
          <div className='relative '>
            <img src='svg/volbg.svg' className='absolute bottom-0 left-12'/>
            <img src='svg/volbtn.svg' className='absolute bottom-0 left-24'/>
          </div>
        
          <div className="py-2 flex justify-center mt-2 text-xs font-light font-['IBM Plex Mono'] text-white">Global Volume</div>
        </div>
    </>
  )
}
