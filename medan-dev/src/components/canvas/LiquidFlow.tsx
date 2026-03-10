'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(a, b, f.x) + (c - a) * f.y * (1.0 - f.x) + (d - b) * f.x * f.y;
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 5; ++i) {
      v += a * noise(p);
      p = rot * p * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.4;

    // Define the S-shape central path
    // We use a sine wave as the center of the flow
    float xOffset = 0.2 * sin(uv.y * 4.0 + t * 0.5);
    float distToPath = abs(uv.x - 0.5 - xOffset);
    
    // Create a mask for the path (river)
    float mask = 1.0 - smoothstep(0.0, 0.2, distToPath);
    
    // Liquid Flow logic within the path
    vec2 flowUv = uv * 3.0;
    flowUv.y -= t; // Flow downwards
    
    vec2 q = vec2(
      fbm(flowUv + t * 0.1),
      fbm(flowUv + vec2(1.0))
    );

    vec2 r = vec2(
      fbm(flowUv + 4.0 * q + vec2(1.7, 9.2) + t * 0.15),
      fbm(flowUv + 4.0 * q + vec2(8.3, 2.8) + t * 0.126)
    );

    float f = fbm(flowUv + 4.0 * r);

    // Color Palette: Orange, White, Blue
    vec3 colOrange = vec3(1.0, 0.4, 0.0);
    vec3 colWhite = vec3(1.0, 1.0, 1.0);
    vec3 colBlue = vec3(0.0, 0.2, 0.8);
    vec3 colDark = vec3(0.05, 0.05, 0.1); // Deep background

    // Mix colors based on noise
    vec3 liquidColor = mix(colBlue, colOrange, clamp(f * f * 2.0, 0.0, 1.0));
    liquidColor = mix(liquidColor, colWhite, clamp(length(q) * 0.5, 0.0, 1.0));
    
    // Final composite: Background (dark) vs Liquid Path
    vec3 finalColor = mix(colDark, liquidColor, mask);
    
    // Add highlights and texture
    finalColor += mask * f * 0.3;
    
    // Fade at edges of the path
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function LiquidFlow() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2() },
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
