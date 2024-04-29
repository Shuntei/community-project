import React,{ useState, useRef, useEffect } from 'react'
import { Box, OrbitControls, useKeyboardControls } from '@react-three/drei'
import { CylinderCollider, RigidBody } from '@react-three/rapier'
import { Cylinder } from '@react-three/drei';
import BoyController  from '../character/BoyController';
import { useFrame } from '@react-three/fiber';
import Ball from './ball';
import { LayerMaterial, Depth, Noise } from "lamina";
import * as THREE from 'three';


export default function Experience() {
  const [hover, setHover ] = useState(false);
  const cube = useRef();
  

  return (
    <>
    <group>
       {/* LIGHT */}
       <OrbitControls/>
      {/* <ambientLight intensity={1}/> */}
      <directionalLight position={[5,5,5]} intensity={0.8} castShadow color={"#9e69da"}/>
      <group>
      {/* STAGE */}
      <RigidBody colliders={false} type="fixed" position-y={1}>
        <CylinderCollider args={[0.5, 30]}/>
        <Cylinder scale={[30,0.5,30]} receiveShadow>
          <meshStandardMaterial color="white"/>
        </Cylinder>
      </RigidBody>
      <RigidBody position={[6,5,0]} ref={cube}>
        <Box 
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          // onClick={jump}
          >
          <meshStandardMaterial color={hover ? 'hotpink' : 'royalblue'} />
          </Box>
      </RigidBody>
      {/*   */}
      </group> 
      <Ball/>
      <BoyController onPointerEnter={() => setHover(true)}/>
      {/* <Background/> */}
    </group>
   
    </>
  )
}
