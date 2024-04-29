"use client";
import { useGLTF } from "@react-three/drei";
import { ComponentProps, useEffect, useMemo, useRef, useState } from "react";
import { BufferGeometry, Mesh, NormalBufferAttributes } from "three";

export function ThreeModel({
  source,
  position,
  animation,
  animationLoop,
  rotation,
  scale,
  vertexColors,
}: {
  source: string;
  animation?: string;
  animationLoop?: boolean;
  position?: ComponentProps<"primitive">["position"];
  rotation?: ComponentProps<"primitive">["rotation"];
  scale?: ComponentProps<"primitive">["scale"];
  vertexColors?: boolean;
}) {
  const { scene } = useGLTF(source);
  const ref = useRef<Mesh<BufferGeometry<NormalBufferAttributes>> | null>(null);
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  const [y, setY] = useState<number>(position[1]);
  useEffect(() => {
    const interval = setInterval(() => {
      setY((prev) => prev + Math.random() * 0.1 - 0.05);
    }, 1000);
    return () => clearInterval(interval);
  }, [y]);
  return (
    <mesh ref={ref} receiveShadow={true}>
      <primitive
        receiveShadow={true}
        rotation={rotation}
        position={position}
        scale={scale}
        object={clonedScene}
      />
    </mesh>
  );
}
useGLTF.preload("/lion/lion.glb");
