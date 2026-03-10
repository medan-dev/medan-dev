'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, MeshWobbleMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function Trapezium({ position, color }: { position: [number, number, number]; color: string }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.cos(t / 4) / 2;
    mesh.current.rotation.y = Math.sin(t / 4) / 2;
    mesh.current.rotation.z = Math.sin(t / 4) / 2;
    mesh.current.position.y = position[1] + Math.sin(t / 2) / 2;
  });

  return (
    <mesh ref={mesh} position={position}>
      {/* radiusTop, radiusBottom, height, radialSegments */}
      <cylinderGeometry args={[1, 1.5, 0.8, 4]} />
      <MeshWobbleMaterial color={color} factor={0.1} speed={2} transparent opacity={0.6} />
    </mesh>
  );
}

function FloatingShape({ position, color, type }: { position: [number, number, number]; color: string; type: 'icosa' | 'octa' }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t / 2;
    mesh.current.rotation.y = t / 3;
    mesh.current.position.y = position[1] + Math.sin(t) * 0.2;
  });

  return (
    <mesh ref={mesh} position={position}>
      {type === 'icosa' ? <icosahedronGeometry args={[1, 0]} /> : <octahedronGeometry args={[1, 0]} />}
      <MeshDistortMaterial
        color={color}
        speed={2}
        distort={0.4}
        radius={1}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

export default function Shapes() {
  const particlePositions = useRef(new Float32Array(Array.from({ length: 300 }, () => (Math.random() - 0.5) * 20)));

  return (
    <>
      <Trapezium position={[-4, 2, -2]} color="#00d2ff" />
      <Trapezium position={[5, -3, -1]} color="#7000ff" />
      <FloatingShape position={[3, 4, -4]} color="#00ffcc" type="icosa" />
      <FloatingShape position={[-6, -4, -3]} color="#ff00ea" type="octa" />
      
      {/* Background dust/particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.current.length / 3}
            array={particlePositions.current}
            itemSize={3}
            args={[particlePositions.current, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.3} />
      </points>
    </>
  );
}
