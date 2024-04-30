import React, { useCallback, useRef, useState, useEffect, useMemo, } from 'react'
import { CapsuleCollider, RigidBody, useRapier } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber';
import Boy from './character_boy'
import { useKeyboardControls } from '@react-three/drei'
import * as THREE from 'three'
import { useSpring, animated } from "@react-spring/web";
import { useGame } from '../three/store/useGame';
  

export default function BoyController(props) {


  const { rapier, world } = useRapier()

  const cameraProperties = useMemo(
    () => ({
        position: new THREE.Vector3(0, 20, 20),
        target: new THREE.Vector3()
    }),
    []
)

  const boyRef = useRef()
  const [subscribeKeys, getKeys] = useKeyboardControls()

  const jumpHandler = useCallback(() => {
    const rapierWorld = world

    const boyPosition = boyRef.current.translation()
    const groundDirection = { x: 0, y: -1, z: 0 }
    const ray = new rapier.Ray(boyPosition, groundDirection)
    const hit = rapierWorld.castRay(ray)
    const isBoyOnGround = hit?.toi < 1

    if (isBoyOnGround) {
        boyRef.current.applyImpulse({ x: 0, y: 15, z: 0 })
    }
}, [boyRef, rapier, world])


  const resetHandler = useCallback(() => {
    boyRef.current.setTranslation({ x: 0, y: 4, z: 0 })
    boyRef.current.setLinvel({ x: 0, y: 0, z: 0 })
    boyRef.current.setAngvel({ x: 0, y: 0, z: 0 })
}, [boyRef])


useEffect(() => {
  return subscribeKeys(
      ({ jump }) => ({ jump }),
      ({ jump }) => {
          if (jump) jumpHandler()
      }
  )
}, [subscribeKeys, jumpHandler])

useEffect(() => {
  return useGame.subscribe(
      (state) => state.phase,
      (phase) => {
          if (phase === 'ready') resetHandler()
      }
  )
}, [resetHandler])


useFrame((_, delta) => {
    const { forward, backward, left, right } = getKeys()

    // if (gamePhase === 'ready' && (forward || backward || left || right)) startGame()

    const impulse = { x: 0, y: 0, z: 0 }
    const torque = { x: 0, y: 0, z: 0 }

    const impulseStrength = 50 * delta
    const torqueStrength = 1 * delta

    if (forward) {
        impulse.z -= impulseStrength
        torque.x -= torqueStrength
    }
    if (backward) {
        impulse.z += impulseStrength
        torque.x += torqueStrength
    }
    if (left) {
        impulse.x -= impulseStrength
        torque.z -= torqueStrength
    }
    if (right) {
        impulse.x += impulseStrength
        torque.z += torqueStrength
    }

    if (boyRef.current) {
        boyRef.current.applyImpulse(impulse)
        boyRef.current.applyTorqueImpulse(torque)
      }
})

useFrame(({ camera }, delta) => {
  if (boyRef.current) {
  const boyPosition = boyRef.current.translation()

  const cameraPosition = new THREE.Vector3()
  cameraPosition.copy(boyPosition)
  cameraPosition.z += 8
  cameraPosition.y += 3

  const cameraTarget = new THREE.Vector3()
  cameraTarget.copy(boyPosition)
  cameraTarget.y += 0.5

  cameraProperties.position.lerp(cameraPosition, 5 * delta)
  cameraProperties.target.lerp(cameraTarget, 5 * delta)

  camera.position.copy(cameraProperties.position)
  camera.lookAt(cameraProperties.target)
      // update camera
      // camera.position.copy(ref.current.translation())
  }
})

  return (
    <group 
    position={[0, 3, -2]} 
    // position={[24, 3, -2]} 
    // rotation={[0, Math.PI / 2, 0]}
    >
      <RigidBody 
      ref={boyRef}
      mass={2}
      restitution={0.2}
      friction={10}
      linearDamping={8}
      angularDamping={8}
      {...props}
      // position-y={0.1}  
      colliders={false} 
      scale={[0.5,0.5,0.5]}
      enabledRotations={[false,false,false]}
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]}/>
        <Boy/>
      </RigidBody>
    </group>
  );
};

