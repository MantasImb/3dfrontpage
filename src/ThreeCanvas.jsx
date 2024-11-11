import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import { ContactShadows } from '@react-three/drei'
import { a, useTransition, useSpring } from '@react-spring/three'
import { FontLoader, TextGeometry } from 'three-stdlib'
import create from 'zustand'

const useStore = create((set) => {
  new FontLoader().load('/font.blob', (font) => {
    set({
      items: [{ position: [0, 0, 0], r: 0.4, geometry: new THREE.IcosahedronGeometry(6) }]
    })
  })
  return { items: [], material: new THREE.MeshStandardMaterial({ color: '#d90000' }) }
})

function Geometry({ r, position, ...props }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.004 * r
    ref.current.position.y = position[1] + Math[r > 0.5 ? 'cos' : 'sin'](state.clock.getElapsedTime() * r) * r
  })
  return (
    <group position={position} ref={ref}>
      <a.mesh {...props} />
    </group>
  )
}

function Geometries() {
  const { items, material } = useStore()
  const transition = useTransition(items, {
    from: { scale: [0, 0, 0], rotation: [0, 0, 0] },
    enter: ({ r }) => ({ scale: [1, 1, 1], rotation: [r * 3, r * 3, r * 3] }),
    leave: { scale: [0.1, 0.1, 0.1], rotation: [0, 0, 0] },
    config: { mass: 5, tension: 1000, friction: 100 },
    trail: 100
  })
  return transition((props, { position: [x, y, z], r, geometry }) => (
    <Geometry position={[x * 3, y * 3, z]} material={material} geometry={geometry} r={r} {...props} />
  ))
}

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.2))
}

export default function ThreeCanvas() {
  const { color } = useSpring({ color: 0, from: { color: 1 }, config: { friction: 50 }, loop: true })
  return (
    <Canvas camera={{ position: [0, 0, 15], near: 5, far: 40 }}>
      {/* <color attach="background" args={['white']} /> */}
      {/* <a.fog attach="fog" args={['white', 10, 40]} color={color.to([0, 0.2, 0.4, 0.7, 1], ['white', 'red', 'white', 'red', 'white'])} /> */}
      <ambientLight intensity={0.3} />
      <directionalLight castShadow position={[2.5, 12, 12]} intensity={0.5} />
      <pointLight position={[20, 20, 20]} />
      <pointLight position={[-20, -20, -20]} intensity={0.3} />
      <Suspense fallback={null}>
        <Geometries />
        {/* <ContactShadows position={[0, -7, 0]} opacity={0.75} scale={40} blur={1} far={9} /> */}
        <EffectComposer disableNormalPass>
          <N8AO aoRadius={3} distanceFalloff={3} intensity={0.3} />
        </EffectComposer>
      </Suspense>
      <Rig />
    </Canvas>
  )
}
