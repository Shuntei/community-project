import React, { useRef, useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useGLTF, 

 } from '@react-three/drei'


export default function Nes(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3Ddemo/props/Nes.gltf')


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
          missionId: 5, // 更新 achieved_id 為 1 的資料ss
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
    <group onClick={handleClick}>
    <group ref={group} {...props} dispose={null} scale={0.35}>
<mesh geometry={nodes.Plane016.geometry} material={nodes.Plane016.material} />
<mesh geometry={nodes.Plane016_1.geometry} material={nodes.Plane016_1.material} />
<group scale={[0.21, 0.21, 0.21,]} >
<mesh geometry={nodes.Circle020.geometry} material={materials['Material.031']} />
<mesh geometry={nodes.Circle020_1.geometry} material={nodes.Circle020_1.material} />
</group>
<mesh geometry={nodes.game_lid.geometry} material={nodes.game_lid.material} scale={[0.21, 0.21, 0.21,]} />
<mesh geometry={nodes.Power_Button.geometry} material={nodes.Power_Button.material} scale={[0.21, 0.21, 0.21,]} />
<group position={[-0.16, -0.16, -0.63,]} rotation={[0, 1.57, 0,]} scale={[0.21, 0.21, 0.21,]} >
<mesh geometry={nodes.Circle000.geometry} material={nodes.Circle000.material} />
<mesh geometry={nodes.Circle000_1.geometry} material={nodes.Circle000_1.material} />
</group>
<mesh geometry={nodes.black_back_grill.geometry} material={nodes.black_back_grill.material} position={[-0.03, 0.18, -0.62,]} scale={[0.15, 0.18, 0.13,]} />
<group scale={[0.21, 0.21, 0.21,]} >
<mesh geometry={nodes.Circle021.geometry} material={nodes.Circle021.material} />
<mesh geometry={nodes.Circle021_1.geometry} material={materials['Material.029']} />
</group>
<group scale={[0.21, 0.21, 0.21,]} >
<mesh geometry={nodes.Plane026.geometry} material={nodes.Plane026.material} />
<mesh geometry={nodes.Plane026_1.geometry} material={nodes.Plane026_1.material} />
</group>
<group position={[-0.03, -0.32, -0.82,]} scale={[0.16, 0.18, 0.13,]} >
<mesh geometry={nodes.Cube011.geometry} material={nodes.Cube011.material} />
<mesh geometry={nodes.Cube011_1.geometry} material={nodes.Cube011_1.material} />
<mesh geometry={nodes.Cube011_2.geometry} material={nodes.Cube011_2.material} />
</group>
<mesh geometry={nodes.Plane007.geometry} material={nodes.Plane007.material} position={[-0.01, -0.14, -0.59,]} rotation={[Math.PI / 2, -1.57, 0,]} scale={[0.02, 0.01, 0.02,]} />
<mesh geometry={nodes.Plane008.geometry} material={nodes.Plane008.material} position={[-0.16, -0.17, -0.44,]} rotation={[Math.PI / 2, 0, -Math.PI / 2,]} scale={[0.1, 0.12, 0.12,]} />
<mesh geometry={nodes.reset_Button.geometry} material={nodes.reset_Button.material} scale={[0.21, 0.21, 0.21,]} />
<mesh geometry={nodes.black_front_grill.geometry} material={nodes.black_front_grill.material} scale={[0.21, 0.21, 0.21,]} />

    </group>
    </group>
  )
}

useGLTF.preload('/3Ddemo/props/Nes.gltf')