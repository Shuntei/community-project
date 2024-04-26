import React, { useRef } from 'react'
import { useGLTF, } from '@react-three/drei'


export default function Model1(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3Ddemo/avatar/model-1.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
<mesh geometry={nodes.character_bear.geometry} material={nodes.character_bear.material} rotation={[Math.PI / 2, 0, 0,]} >
<mesh geometry={nodes.character_bearArmLeft.geometry} material={nodes.character_bearArmLeft.material} position={[0.2, 0, -0.63,]} />
<mesh geometry={nodes.character_bearArmRight.geometry} material={nodes.character_bearArmRight.material} position={[-0.2, 0, -0.63,]} />
<group position={[0, 0, -0.7,]} >
<mesh geometry={nodes.Cube1337.geometry} material={materials['Black.025']} />
<mesh geometry={nodes.Cube1337_1.geometry} material={nodes.Cube1337_1.material} />
</group>
</mesh>

    </group>
  )
}

useGLTF.preload('/3Ddemo/avatar/model-1.gltf')