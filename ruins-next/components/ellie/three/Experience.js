import React,{ useState, useRef, useEffect } from 'react'
import { Box, OrbitControls, useKeyboardControls } from '@react-three/drei'
import { CylinderCollider, RigidBody } from '@react-three/rapier'
import { Cylinder } from '@react-three/drei';
import GirlController  from '../character/GirlController';
import { useFrame } from '@react-three/fiber';
import Ball from './ball';
// import Box1 from './box';

export default function Experience() {
  const [hover, setHover ] = useState(false);
  // const [state, setState] = useState({
  //   controls: {
  //     left: false,
  //     right: false,
  //   },
  // });
  const cube = useRef();
  const jump = () => {
    cube.current.applyImpulse({ x:-5, y:2 , z:0 });
  };

  // const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);

  // useFrame((_state, delta) => {
  //   if (jumpPressed) {
  //     jump();
  //   }
  //   if (!start) {
  //     return; 
  //   }
  // })
  const isOnFloor = useRef(true); 
  // useEffect(() => {
  //   // 在客戶端渲染時初始化相關功能
  //   // 例如：設置事件監聽器，初始化動畫，等等
  // }, []);
  
  return (
    <>
    <group>
       {/* LIGHT */}
       <OrbitControls/>
      {/* <ambientLight intensity={1}/> */}
      <directionalLight position={[5,5,5]} intensity={0.8} castShadow color={"#9e69da"}/>
      {/* STAGE */}
      <RigidBody colliders={false} type="fixed" position-y={1}>
        <CylinderCollider args={[0.5, 20]}/>
        <Cylinder scale={[20,0.5,20]} receiveShadow>
          <meshStandardMaterial color="white"/>
        </Cylinder>
      </RigidBody>
      <RigidBody position={[6,5,0]} ref={cube}>
        <Box 
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          onClick={jump}
          >
          <meshStandardMaterial color={hover ? 'hotpink' : 'royalblue'} />
          </Box>
      </RigidBody>
      <Ball/>
      {/* <GirlController onPointerEnter={() => setHover(true)}/> */}
    </group>
   
    </>
  )
}
