"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Preload, Float } from "@react-three/drei";
import Lights from "./Lights";
import LiquidFlow from "./LiquidFlow";

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 bg-background">
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 30 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Lights />
          <LiquidFlow />
          <Environment preset="city" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
