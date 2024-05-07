import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAuth } from '@/contexts/auth-context'

export function Cans(props) {
  const { nodes, materials } = useGLTF('/3Ddemo/props/food_cans.glb')

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
          missionId: 9, // 更新 achieved_id 為 1 的資料ss
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
      <group rotation={[0, 1.542, -Math.PI]} scale={0.002}>
        <group rotation={[Math.PI / 2, 0, 0]} >
          <group
            position={[460.754, -213.525, 77.461]}
            rotation={[-Math.PI, 0, Math.PI]}
            scale={[-50.423, 50.423, 70.644]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials.material_4}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_2.geometry}
              material={materials.material_4}
            />
          </group>
          <group position={[520.804, -126.894, 48.949]} rotation={[0, 0, 2.204]} scale={44.499}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_5.geometry}
              material={materials.material_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_6.geometry}
              material={materials.material_1}
            />
          </group>
          <group
            position={[405.636, -298.366, 62.528]}
            rotation={[0, 0, 0.677]}
            scale={[39.727, 39.727, 57.215]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_7.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_8.geometry}
              material={materials.material}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.material_5}
            position={[580.242, -294.175, 33.409]}
            rotation={[-0.023, -0.056, -1.953]}
            scale={[11.039, 18.051, 7.769]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.material_3}
            position={[572.32, -215.287, 27.079]}
            scale={[47.414, 47.414, 22.669]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.material_2}
            position={[502.148, -314.707, 19.092]}
            scale={[47.053, 47.053, 15.883]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3Ddemo/props/food_cans.glb')