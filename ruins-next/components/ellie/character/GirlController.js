import React from 'react'
import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import Girl from './character_girl'

export default function GirlController() {

  return (
    <group>
      <RigidBody position-y={3} colliders={false} scale={[0.5,0.5,0.5]}>
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]}/>
        <Girl/>
      </RigidBody>
    </group>
  );
};




// import { useRef } from "react";
// import { RigidBody } from "@react-three/rapier"; // Component for rigid body physics simulation

// // Player component - represents the player character in the game
// export const Player = ({
//   walk = 3, // Default walking speed for the player
//   jump = 4, // Default jump force for the player
//   input = () => ({ move: [0, 0, 0], look: [0, 0] }), // Function to get player input (movement and look direction)
// }) => {
//   const api = useRef(null); // Reference to the RigidBody API provided by "@react-three/rapier".
//   const mesh = useRef(); // Reference to the 3D mesh of the player character.

//   return (
//     <RigidBody
//       ref={api} // Attach the RigidBody API reference to the RigidBody component
//       lockRotations // Lock rotations to prevent unwanted rotations during physics simulation
//       position={[0, 20, 0]} // Initial position of the player character in 3D space
//       friction={0.5} // Friction coefficient for physics interactions
//       restitution={0.5} // Restitution (bounciness) coefficient for physics interactions
//       colliders="ball" // Type of collider shape for the player's body (a sphere in this case)
//     >
//       {/* 3D mesh representing the player character */}
//       <mesh ref={mesh} userData={{ tag: "player" }} castShadow>
//         <meshPhysicalMaterial metalness={0.5} roughness={0} />
//         <sphereGeometry args={[1, 16, 16]} /> {/* Sphere geometry with specified arguments */}
//       </mesh>
//     </RigidBody>
//   );
// };
