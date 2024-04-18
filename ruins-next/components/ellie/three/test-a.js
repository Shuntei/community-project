import { Canvas, useLoader, useFrame, useThree  } from '@react-three/fiber'
import { Physics } from "@react-three/rapier"
import Box from './box'
import Box2 from './box2'
import Box3 from './box3'
import * as THREE from 'three'
import { Stats, OrbitControls, Environment } from '@react-three/drei'
import { Model } from './model'
import { folder, useControls } from 'leva'
import { useSpring, animated } from '@react-spring/three'
import { useState, useRef, Suspense } from "react"


 
export default function TestA() {


  return (
    <>
    <div className="h-full w-full">
      <Canvas className='bg-neutral-100' shadows camera={{ position: [24, 4, 1.5], fov:42 }}>
        {/* <ambientLight intensity={Math.PI / 2} /> */}
        {/* <spotLight
          position={[30, 40, 40]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
        <color attach="background" args={["#dbecfb"]}/>
        <fog attach="fog" args={["#dbecfb",30,40]}/>
        <Suspense>
          <Physics debug>
          <Model position={[0, 0, 0]} rotation={[0,230,0]}/>
        {/* <Environment preset="forest" background blur={0.8} /> */}
        <Environment files="./3Ddemo/hdr/150_hdrmaps_com_free_10K.exr" background blur={0.5} />
        <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
        <Box position={[-3.6, 0,5]} />
        <Box2 position={[-1.2, 0,5]} />
        <Box3 position={[1.2, 0, 5]} />
        {/* <OrbitControls target={[0, 1, 0]}/> */}
        <OrbitControls
  // minAzimuthAngle={-Math.PI / 4}
  // maxAzimuthAngle={Math.PI / 4}
  // minPolarAngle={Math.PI / 6}
  // maxPolarAngle={Math.PI - Math.PI / 6}
/><ambientLight intensity={1 } />

        <Stats />

          </Physics>
        </Suspense>
        
      </Canvas>
    </div>

</>
  )
}
