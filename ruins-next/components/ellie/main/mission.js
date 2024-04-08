import React, { useState, useEffect } from 'react';
import { RiCheckboxBlankLine, RiCheckboxFill, RiSubtractLine } from "@remixicon/react";
import Volume from '../vol/volume';
import Indicator from '../Indicator/Indicator';

export default function Mission() {
  
  return (
    <>
      <div className='w-1/6 relative'>
        <div className='my-8 px-4'>
          <div className='w-full flex flex-col border-b border-dotted mb-1'></div>
          <div className='w-full flex flex-col border-t border-dotted'></div>
        </div>
        <div className="flex justify-center text-lg font-regular font-['IBM Plex Mono'] text-white mb-4">MISSION</div>
        <Indicator/>
        <div className='p-6'>
          <div className='flex'>
            <RiCheckboxFill className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white line-through">Lorem 001</div>
          </div>
          <div className='flex'>
            <RiCheckboxFill className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white line-through">Lorem 002</div>
          </div>
          <div className='flex'>
            <RiCheckboxFill className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white line-through">Lorem 003</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">004</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">005</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">006</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">007</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">008</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">009</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">010</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">011</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">012</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">013</div>
          </div>
        </div>
        <div className='my-8 px-4'>
          <div className='w-full flex flex-col border-b border-dotted mb-1'></div>
          <div className='w-full flex flex-col border-t border-dotted'></div>
        </div>
        <Volume/>
      </div>

    </>
  )
}
