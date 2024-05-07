import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAuth } from '@/contexts/auth-context'

export function Chair(props) {
  const { nodes, materials } = useGLTF('/3Ddemo/props/chair.glb')
  const ref = useRef()
  const { auth } = useAuth()

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
          missionId: 3, // 更新 achieved_id 為 1 的資料ss
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
    <group {...props} dispose={null} onClick={handleClick}>
      <group scale={0.015} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_01.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_02.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_03.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_04.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_05.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_06.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_07.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_08.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_09.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_10.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_11.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_12.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_13.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_14.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_15.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_16.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_17.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_18.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_19.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_20.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_21.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_22.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_23.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_24.geometry}
          material={materials.lambert2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_25.geometry}
          material={materials.lambert2}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/3Ddemo/props/chair.glb')
