import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";
import type { CinematicCamera } from "three-stdlib";

export const Camera = () => {
  const cameraSpeed = 0.005;
  const [cameraDirection, setCameraDirection] = useState(-1);
  const randomY = Math.random() + 1;
  const cameraRef = useRef<CinematicCamera>(null);
  const cameraPosition = new Vector3(0, randomY, 0);
  useFrame((state) => {
    const currentZ = state.camera.position.z;
    if (currentZ < 4) {
      setCameraDirection(-1);
    }
    if (currentZ > 5) {
      setCameraDirection(1);
    }
    if (cameraDirection === 1) {
      state.camera.position.z = currentZ - cameraSpeed;
    }
    if (cameraDirection === -1) {
      state.camera.position.z = currentZ + cameraSpeed;
    }
  });
  return (
    <PerspectiveCamera
      ref={cameraRef}
      position={cameraPosition}
      rotation={[0, 0, 0]}
    />
  );
};
