import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/buildingO2.glb'); // 修改匯入路徑為 buildingO2.glb
  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* 使用從 buildingO2.glb 文件中讀取的 geometry 和 material */}
      <mesh castShadow receiveShadow geometry={nodes.mesh.geometry} material={materials.material} />
    </group>
  );
}

// 預加載 buildingO2.glb 模型
useGLTF.preload('/buildingO2.glb');