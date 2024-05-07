import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAuth } from '@/contexts/auth-context'

export function Trash(props) {
  const { nodes, materials } = useGLTF('/3Ddemo/props/trash_can.glb')

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
          missionId: 8, // 更新 achieved_id 為 1 的資料ss
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
    <group {...props} dispose={null}>
      <group position={[-0.012, 0.042, 0.002]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[244.939, 62.854, -165.567]} rotation={[-Math.PI / 2, 0, -2.461]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.trash_can_finish1_trash_can_mat_0.geometry}
              material={materials.trash_can_mat}
              position={[172.454, 60.749, -9.669]}
              rotation={[-1.396, 0, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cap1_trash_can_mat_0.geometry}
              material={materials.trash_can_mat}
              position={[172.39, 121.795, -58.184]}
              rotation={[-1.562, 0, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel_8_trash_can_mat_0.geometry}
              material={materials.trash_can_mat}
              position={[132.97, 4.691, 16.993]}
              rotation={[-1.396, 0, -1.292]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel_7_trash_can_mat_0.geometry}
              material={materials.trash_can_mat}
              position={[132.916, 17.015, -52.899]}
              rotation={[-1.396, 0, 0.559]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel_6_trash_can_mat_0.geometry}
              material={materials.trash_can_mat}
              position={[211.408, 4.793, 16.413]}
              rotation={[-1.396, 0, 1.745]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel_5_trash_can_mat_0.geometry}
              material={materials.trash_can_mat}
              position={[211.408, 17.089, -53.316]}
              rotation={[-1.396, 0, 2.182]}
              scale={100}
            />
          </group>
          <group position={[-0.247, 0, 0.471]} rotation={[0, 0.122, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.trash_can_finish_trash_can_mat_0.geometry}
              material={materials.trash_can_mat}
              position={[3.73, 70.102, 0.195]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cap_trash_can_mat_0.geometry}
              material={materials.trash_can_mat}
              position={[3.666, 121.795, -58.184]}
              rotation={[-0.026, 0, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel_1_trash_can_mat_0.geometry}
              material={materials.trash_can_mat}
              position={[-35.224, 19.525, 35.597]}
              rotation={[-Math.PI / 2, 0, 1.92]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel_3_trash_can_mat_0.geometry}
              material={materials.trash_can_mat}
              position={[-35.224, 19.525, -35.208]}
              rotation={[-Math.PI / 2, 0, -2.443]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel_2_trash_can_mat_0.geometry}
              material={materials.trash_can_mat}
              position={[42.683, 19.525, 35.597]}
              rotation={[-Math.PI / 2, 0, 1.745]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel_4_trash_can_mat_0.geometry}
              material={materials.trash_can_mat}
              position={[42.683, 19.525, -35.208]}
              rotation={[-Math.PI / 2, 0, 2.182]}
              scale={100}
            />
          </group>
          <group position={[-148.18, 0, 47.565]} rotation={[0, Math.PI / 3, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.trash_can_finish_trash_can_mat_0_1.geometry}
              material={materials.trash_can_mat}
              position={[3.73, 70.102, 0.195]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cap_trash_can_mat_0_1.geometry}
              material={materials.trash_can_mat}
              position={[3.666, 121.795, -58.184]}
              rotation={[1.772, 0, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel_1_trash_can_mat_0_1.geometry}
              material={materials.trash_can_mat}
              position={[-35.224, 19.525, 35.597]}
              rotation={[-Math.PI / 2, 0, 1.92]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel_3_trash_can_mat_0_1.geometry}
              material={materials.trash_can_mat}
              position={[-35.224, 19.525, -35.208]}
              rotation={[-Math.PI / 2, 0, -2.443]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel_2_trash_can_mat_0_1.geometry}
              material={materials.trash_can_mat}
              position={[42.683, 19.525, 35.597]}
              rotation={[-Math.PI / 2, 0, 1.745]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel_4_trash_can_mat_0_1.geometry}
              material={materials.trash_can_mat}
              position={[42.683, 19.525, -35.208]}
              rotation={[-Math.PI / 2, 0, 2.182]}
              scale={100}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3Ddemo/props/trash_can.glb')