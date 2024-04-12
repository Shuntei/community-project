import React, { useState, useEffect } from 'react';
import { RiCheckboxBlankLine, RiCheckboxFill, RiSubtractLine } from "@remixicon/react";
import Volume from '../vol/volume';
import Indicator from '../Indicator/Indicator';
//  import mission_data from '@/data/mission_data.json'

const MissionData = [
  {
    "mission_id": 1,
    "name": "Edit your avatar.",
    "activate": 1
  },
  {
    "mission_id": 2,
    "name": "You've found a LINK.",
    "activate": 1
  },
  {
    "mission_id": 3,
    "name": "Link to some where else.",
    "activate": 1
  },
  {
    "mission_id": 4,
    "name": "Have you seen HomePage?",
    "activate": 0
  },
  {
    "mission_id": 5,
    "name": "!important member page ",
    "activate": 0
  },
  {
    "mission_id": 6,
    "name": "View SNS",
    "activate": 0
  },
  {
    "mission_id": 7,
    "name": "Love window shopping",
    "activate": 0
  },
  {
    "mission_id": 8,
    "name": "tour tour tour",
    "activate": 0
  },
  {
    "mission_id": 9,
    "name": "LIVE WAREHOUSE.",
    "activate": 0
  },
  {
    "mission_id": 10,
    "name": "shut up & pay attention",
    "activate": 0
  },
  {
    "mission_id": 11,
    "name": "tic-tac-toe 01",
    "activate": 0
  },
  {
    "mission_id": 12,
    "name": "try harder",
    "activate": 0
  },
  {
    "mission_id": 13,
    "name": "Done",
    "activate": 0
  },
]

export default function Mission() {
  

  return (
    <>
    {console.log(MissionData[0].name)}
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
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white line-through">{MissionData[0].name}</div>
          </div>
          <div className='flex'>
            <RiCheckboxFill className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white line-through">{MissionData[1].name}</div>
          </div>
          <div className='flex'>
            <RiCheckboxFill className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white line-through">{MissionData[2].name}</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">{MissionData[3].name}</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">{MissionData[4].name}</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">{MissionData[5].name}</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">{MissionData[6].name}</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">{MissionData[7].name}</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">{MissionData[8].name}</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">{MissionData[9].name}</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">{MissionData[10].name}</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">{MissionData[11].name}</div>
          </div>
          <div className='flex'>
            <RiCheckboxBlankLine className='text-white'/>
            <div className='flex-grow'></div>
            <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white">{MissionData[12].name}</div>
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
