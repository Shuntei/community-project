// import styles from './three.module.css'
import { Canvas, useLoader } from '@react-three/fiber'
import Box from './box'
import { OrbitControls } from '@react-three/drei'
import _JSXStyle from 'styled-jsx/style'
//import Model from './Model'
 
export default function TestA() {
  return (
    <>
    <div className="scene">
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {/* <Model position={[0, 0, 0]}/> */}
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>

<style global jsx>{`
.scene{
  width:100vw;
  height:100vh;
}

.canvas{
  background: #000;
}
`}</style>
</>
  )
}
