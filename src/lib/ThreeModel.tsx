"use client";
import { useGLTF } from "@react-three/drei";
import { ComponentProps, useMemo, useRef } from "react";
import { BufferGeometry, Mesh, NormalBufferAttributes } from "three";

export function ThreeModel({
  source,
  position,
  rotation,
  scale,
}: {
  source: string;
  position?: ComponentProps<"primitive">["position"];
  rotation?: ComponentProps<"primitive">["rotation"];
  scale?: ComponentProps<"primitive">["scale"];
}) {
  const { scene } = useGLTF(source);
  const ref = useRef<Mesh<BufferGeometry<NormalBufferAttributes>> | null>(null);
  const clonedScene = useMemo(() => scene.clone(), [scene]);
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
