import React, { useRef,useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export function Pallet(props) {
  const { nodes, materials } = useGLTF('/3Ddemo/props/old_wooden_pallet.glb')

  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // useFrame((state, delta) => (ref.current.rotation.y += delta))

  return (
    <group 
    {...props} 
    dispose={null} 
    scale={1.5}
    ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wooden_Pallet_01_Wooden_Pallet_SHD_0.geometry}
        material={materials.Wooden_Pallet_SHD}
        onPointerOver={(event) => (event.stopPropagation(), hover(true))}
        onPointerOut={(event) => hover(false)}
        scale={0.01}
      />
      
    </group>
  )
}

useGLTF.preload('/3Ddemo/props/old_wooden_pallet.glb')
