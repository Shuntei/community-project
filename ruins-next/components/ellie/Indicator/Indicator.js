import React, { useState, useEffect } from 'react';
import _JSXStyle from 'styled-jsx/style'
import { RiSubtractLine } from "@remixicon/react";
export default function Indicator() {
  function ScrollIndicator() {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [scrollOffset, setScrollOffset] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);
  
    useEffect(() => {
      function loop() {
        const newScrollOffset = window.pageYOffset || document.documentElement.scrollTop;
        const newScrollPercent = newScrollOffset / scrollHeight || 0;
        const transformString = `translateX(${newScrollPercent * 300}px)`;
  
        document.getElementById('indicator').style.mozTransform = transformString;
        document.getElementById('indicator').style.webkitTransform = transformString;
        document.getElementById('indicator').style.transform = transformString;
  
        requestAnimationFrame(loop);
      }
  
      loop();
  
      function resize() {
        setScrollHeight(window.innerHeight * 4);
        document.getElementById('space').style.height = window.innerHeight * 4.46 + 'px';
      }
  
      resize();
  
      window.addEventListener('resize', resize);
  
      return () => {
        window.removeEventListener('resize', resize);
      };
    }, [scrollHeight]);
  
    return null; // ScrollIndicator is invisible, only handling the scrolling logic
  }

  return (
    <>
      <div className='gap-2 flex px-6 '>
          <div className="mt-2 text-xs font-light font-['IBM Plex Mono'] text-white">YOU’VE UNLOCKED</div>
          <div className="mt-2 text-xs font-light font-['IBM Plex Mono'] text-white">3/11</div>
          <div className="mt-2 text-xs font-light font-['IBM Plex Mono'] text-gray-400">(36%)</div>
        </div>
        <div className='px-6'>
          <div id="space" className="scroll-space "></div>
            <div className="scroll-indicator w-70">
              <span id="indicator" className="indicator"></span>
            </div>
        </div>

            <style global jsx>{`

.scroll-space {
  position: relative;
  width: '100%',
}

.scroll-indicator {
  {/* width: 250px; */}
  left: 50%;
  height: 6px;
  top: 50%;
  background-color: #fff;
  border-radius:20px;
}

.indicator {
  position: absolute;
  height: 6px;
  width: 40px;
  background: #8B8B8B;
  border-radius:20px;
}
        `} </style>
    </>
  )
}
