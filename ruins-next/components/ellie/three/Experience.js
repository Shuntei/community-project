import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  OrbitControls,
  Cylinder,
  useKeyboardControls,
} from '@react-three/drei'
import { CylinderCollider, RigidBody } from '@react-three/rapier'
import BoyController from '../character/BoyController'
import { useFrame } from '@react-three/fiber'
import Ball from './ball'
import { LayerMaterial, Depth, Noise } from 'lamina'
import * as THREE from 'three'
import { GameLevel, useGameStore } from './newStore'
// import { treasure } from './Constents';
import { ObjSpots } from './objSpots'
import Box1 from './box'
import Box2 from './box2'
import Box3 from './box3'
import { Chair } from './chair'
import { Pallet } from './pallet'
import { Bricks } from './bricks'
import { Basket } from './basket'
import { Cans } from './food-cans'
import { Soda } from './soda'
import { Trash } from './trash'
import { Spray } from './spray'

export default function Experience() {
  const [hover, setHover] = useState(false)
  const cube = useRef();
  
  const jump = ()=> {
    cube.current.applyImpule({x:0,y:4,z:0});
  }
  //  console.log(GameLevel({thStages:3}));
  const startGame = useGameStore((state) => state.startGame)

  const random = useRef(Math.floor(Math.random() * (9 - 1) + 1))
  const posData = [
    [
      [1, 1.5, 4],
      [-1.2, 2, 9],
      [-18, 1.5, -9],
      [9.5, 1.2, -8],
      [-8, 2, -4],
      [-3, 2, 0],
      [-8, 2, 7.5],
      [3, 2, -11],
      [9, 2, -3],
    ],
    [
      [-18, 1.5, -9],
      [1, 1.5, 4],
      [-3, 2, 0],
      [3, 2, -11],
      [-8, 2, -4],
      [9, 2, -3],
      [-8, 2, 7.5],
      [9.5, 1.2, -8],
      [-1.2, 2, 9],
    ],
    [
      [3, 2, -11],
      [-18, 1.5, -9],
      [1, 1.5, 4],
      [9.5, 1.2, -8],
      [-8, 2, 7.5],
      [-1.2, 2, 9],
      [-8, 2, -4],
      [-3, 2, 0],
      [9, 2, -3],
    ],
    [
      [9.5, 1.2, -8],
      [3, 2, -11],
      [-18, 1.5, -9],
      [1, 1.5, 4],
      [-8, 2, 7.5],
      [9, 2, -3],
      [-8, 2, -4],
      [-3, 2, 0],
      [-1.2, 2, 9],
    ],
    [
      [-8, 2, 7.5],
      [9.5, 1.2, -8],
      [3, 2, -11],
      [-18, 1.5, -9],
      [1, 1.5, 4],
      [-3, 2, 0],
      [9, 2, -3],
      [-8, 2, -4],
      [-1.2, 2, 9],
    ],
    [
      [-8, 2, -4],
      [-8, 2, 7.5],
      [9.5, 1.2, -8],
      [3, 2, -11],
      [-18, 1.5, -9],
      [1, 1.5, 4],
      [-1.2, 2, 9],
      [9, 2, -3],
      [-3, 2, 0],
    ],
    [
      [-1.2, 2, 9],
      [-8, 2, -4],
      [-8, 2, 7.5],
      [9.5, 1.2, -8],
      [3, 2, -11],
      [-18, 1.5, -9],
      [1, 1.5, 4],
      [-3, 2, 0],
      [9, 2, -3],
    ],
    [
      [-1.2, 2, 9],
      [-3, 2, 0],
      [9, 2, -3],
      [-8, 2, 7.5],
      [9.5, 1.2, -8],
      [3, 2, -11],
      [-18, 1.5, -9],
      [1, 1.5, 4],
      [-8, 2, -4],
    ],
    [
      [-3, 2, 0],
      [9, 2, -3],
      [-1.2, 2, 9],
      [-8, 2, -4],
      [-8, 2, 7.5],
      [9.5, 1.2, -8],
      [3, 2, -11],
      [-18, 1.5, -9],
      [1, 1.5, 4],
    ],
  ]

  // console.log(random.current)

  const posDisplay = posData[random.current - 1]

  return (
    <>
    {console.log(random.current)}
      <group>
        {/* LIGHT */}
        <OrbitControls />
        {/* <ambientLight intensity={1}/> */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          castShadow
          color={'#9e69da'}
        />
        <group>
          {/* STAGE */}
          <RigidBody colliders={false} type="fixed" position-y={1} friction={2}>
            <CylinderCollider args={[0.5, 30]} />
            <Cylinder scale={[30, 0.5, 30]} receiveShadow>
              <meshStandardMaterial color="white" />
            </Cylinder>
          </RigidBody>
          <RigidBody position={[6, 5, 0]} ref={cube}>
            <Box
              onPointerEnter={() => setHover(true)}
              onPointerLeave={() => setHover(false)}
              // onClick={jump}
            >
              <meshStandardMaterial color={hover ? 'hotpink' : 'royalblue'} />
            </Box>
          </RigidBody>
          {/* <RigidBody position={posDisplay[0]} ref={cube}>
            <Box1 />
          </RigidBody> */}
          <RigidBody position={posDisplay[0]} 
          ref={cube}
          >
            <Box2 />
          </RigidBody>
          {/* <RigidBody position={posDisplay[2]} ref={cube}>
            <Box3 />
          </RigidBody> */}
          {/* <OrbitControls target={[0, 1, 0]}/> */}
          <RigidBody position={posDisplay[1]} 
          // ref={cube}
          >
            <Chair />
          </RigidBody>
          <RigidBody
            // position={[-16, 1.4, -1]}
            position={posDisplay[2]}
          >
            <Pallet />
          </RigidBody>
          <RigidBody
            // position={[-16.8, 1.2, 5]}
            position={posDisplay[3]} 
          >
            <Bricks />
          </RigidBody>
          <RigidBody
            // position={[-8, 2, 7.5]}
            position={posDisplay[4]}
          >
            <Basket />
          </RigidBody>
          <RigidBody
            // position={[9.5, 1.2, -8]}
            position={posDisplay[5]}
            ref={cube}
          >
            <Cans />
          </RigidBody>
          <RigidBody
            // position={[3, 2, -11]}
            position={posDisplay[6]}
            ref={cube}
          >
            <Soda />
          </RigidBody>
          <RigidBody
            // position={[-18, 1.5, -9]}
            position={posDisplay[7]}
            ref={cube}
          >
            <Trash />
          </RigidBody>
          <RigidBody 
          // position={[-3, 2.3, 4]} 
          position={posDisplay[8]}
          ref={cube}
          >
            <Spray />
          </RigidBody>

          {/*   */}
        </group>
        {/* <Ball/> */}
        <BoyController onPointerEnter={() => setHover(true)} />
        <ObjSpots />
        {/* <Background/> */}
      </group>
    </>
  )
}
