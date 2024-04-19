import React,{useState} from 'react'
import { Box, OrbitControls } from '@react-three/drei'
import { CylinderCollider, RigidBody } from '@react-three/rapier'
import { Cylinder } from '@react-three/drei';
import GirlController  from '../character/GirlController';
// import Box1 from './box';

export default function Experience() {
  const [hover, setHover ] = useState(false);
  // const cube = useRef();
  // const jump = () => {
  //   cube.curre
  // };

  return (
    <>
    <group>
       {/* LIGHT */}
       <OrbitControls/>
      {/* <ambientLight intensity={1}/> */}
      <directionalLight position={[5,5,5]} intensity={0.8} castShadow color={"#9e69da"}/>
      {/* STAGE */}
      <RigidBody colliders={false} type="fixed" position-y={1}>
        <CylinderCollider args={[0.5, 13.5]}/>
        <Cylinder scale={[13.5,0.5,13.5]} receiveShadow>
          <meshStandardMaterial color="white"/>
        </Cylinder>
      </RigidBody>
      <RigidBody position={[-2.5,1,0]}>
        <Box 
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          // onClick={jump}
          >
          {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'royalblue'} /> */}
          </Box>
      </RigidBody>
      <GirlController onPointerEnter={() => setHover(true)}/>
    </group>
   
    </>
  )
}
