"use client";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Euler, Quaternion, Vector3 } from "three";
import { Box } from "./Box";
import { CanvasLight } from "./CanvasLight";
import { ThreeModel } from "./ThreeModel";
export const CanvasScene = ({ checked }: { checked?: boolean }) => {
  const lightPosition = new Vector3(45, 35, -55);
  const targetLightPosition = new Vector3(-22, -5, 0);
  const cameraStartPosition = new Vector3(0, 0, 0);
  const cameraRotationPosition = new Quaternion().setFromEuler(
    new Euler(0.0 * Math.PI, (-84.0 / 180.0) * Math.PI, 0.0 * Math.PI, "ZXY"),
  );
  const [cameraPosition, setCameraPosition] =
    useState<Vector3>(cameraStartPosition);
  const [cameraRotation, setCameraRotation] = useState<Quaternion>(
    cameraRotationPosition,
  );
  useEffect(() => {
    if (!checked) return;
    const interval = setInterval(() => {
      setCameraPosition((prev) => {
        const randomZ = prev.y + Math.random() * 0.1 - 0.05;
        return new Vector3(prev.x, prev.y, randomZ);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [checked, cameraPosition]);

  return (
    <div className="absolute w-screen h-screen top-0 left-0">
      <Canvas className="">
        {checked && (
          <>
            <ThreeModel
              source="/lion/lion.glb"
              position={[-4, 9, -7]}
              rotation={[0, 0, 0]}
              scale={1}
            />
            <ThreeModel
              source="/lion/lion.glb"
              position={[4, 9, -7]}
              rotation={[0, 3.141592, 0]}
              scale={[1, 1, -1]}
            />
          </>
        )}
        <PerspectiveCamera position={cameraPosition} rotation={[0, 0, 0]} />

        <CanvasLight
          directLightPosition={lightPosition}
          targetLightPosition={targetLightPosition}
          directionalLightIntensity={0}
          ambientLightIntensity={1.2}
        />
      </Canvas>
    </div>
  );
};

const EternalRainLands = () => {
  const rainLands = [0, 1, 2];
  return rainLands.map((rainLand) => {
    return (
      <>
        <Box position={rainLand} color="00FF00" args={[1, 1, 1]} />
      </>
    );
  });
};
