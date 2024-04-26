import React, { useRef } from 'react'
import { useGLTF, 

 } from '@react-three/drei'


export default function Model3(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3Ddemo/avatar/model-3.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
<mesh geometry={nodes.character_duck.geometry} material={nodes.character_duck.material} rotation={[Math.PI / 2, 0, 0,]} >
<mesh geometry={nodes.character_duckArmLeft.geometry} material={nodes.character_duckArmLeft.material} position={[0.2, 0, -0.63,]} />
<mesh geometry={nodes.character_duckArmRight.geometry} material={nodes.character_duckArmRight.material} position={[-0.2, 0, -0.63,]} />
<group position={[0, 0, -0.7,]} >
<mesh geometry={nodes.Cube1338.geometry} material={nodes.Cube1338.material} />
<mesh geometry={nodes.Cube1338_1.geometry} material={materials['Yellow.043']} />
<mesh geometry={nodes.Cube1338_2.geometry} material={materials['Black.027']} />
</group>
</mesh>

    </group>
  )
}

useGLTF.preload('/3Ddemo/avatar/model-3.gltf')