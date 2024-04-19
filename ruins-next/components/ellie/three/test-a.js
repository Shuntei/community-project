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
import { useState, useRef, Suspense, useMemo } from "react"
import Experience from './Experience'
import { useKeyboard } from './KeyboardControls'
import { useMouseCapture } from './MouseCapture'

// Function to get player input from keyboard and mouse
function getInput(keyboard, mouse) {
  let [x, y, z] = [0, 0, 0];
  // Checking keyboard inputs to determine movement direction
  if (keyboard["s"]) z += 1.0; // Move backward
  if (keyboard["w"]) z -= 1.0; // Move forward
  if (keyboard["d"]) x += 1.0; // Move right
  if (keyboard["a"]) x -= 1.0; // Move left
  if (keyboard[" "]) y += 1.0; // Jump

  // Returning an object with the movement and look direction
  return {
    move: [x, y, z],
    look: [mouse.x / window.innerWidth, mouse.y / window.innerHeight], // Mouse look direction
    running: keyboard["Shift"], // Boolean to determine if the player is running (Shift key pressed)
  };
}

// Scene component - where the 3D scene is set up and rendered
const Scene = () => {
  const keyboard = useKeyboard(); // Hook to get keyboard input
  const mouse = useMouseCapture(); // Hook to get mouse input

  return (
      <Player walk={2} jump={5} input={() => getInput(keyboard, mouse)} />
  );
};

export default function TestA() {

  return (
    <>
    <div className="h-full w-full">
      {/* <KeyboardControls map={map}> */}
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
            <Experience/>
          </Physics>
          
          <Model position={[0, 5, 0]} rotation={[0,230,0]}/>
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

        </Suspense>
        
      </Canvas>
      {/* </KeyboardControls> */}
      <Stats />
    </div>

</>
  )
}
