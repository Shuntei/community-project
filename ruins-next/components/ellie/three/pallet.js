import React, { useRef,useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export function Pallet(props) {
  const { nodes, materials } = useGLTF('/3Ddemo/props/old_wooden_pallet.glb')

  const ref = useRef()
  const [hovered, hover] = useState(false)
  // useFrame((state, delta) => (ref.current.rotation.y += delta))

  const [clicked, click] = useState(false)

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3001/game/ruins_final", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: auth.id,
          missionId: 10, // 更新 achieved_id 為 1 的資料ss
          newValue: 1, // 新的 activate 值
        }),
      });
      if (response.ok) {
        console.log("Achievement updated successfully.");
        click(!clicked); // 切換 clicked 狀態以更新 <mesh> 的狀態
      } else {
        console.error("Failed to update achievement.");
      }
    } catch (error) {
      console.error("Error updating achievement:", error);
    }
  };

  return (
    <group 
    {...props} 
    dispose={null} 
    scale={1.5}
    ref={ref}
    onClick={handleClick}
    >
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
