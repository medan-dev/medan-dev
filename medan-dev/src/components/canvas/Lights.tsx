'use client';

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.5}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#00d2ff" />
      <pointLight position={[10, -10, 5]} intensity={0.5} color="#7000ff" />
      <directionalLight position={[0, 5, 5]} intensity={0.5} />
    </>
  );
}
