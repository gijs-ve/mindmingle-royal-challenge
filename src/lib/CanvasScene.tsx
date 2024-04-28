"use client";
import { FlyControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Euler, Quaternion, Vector3 } from "three";
import { Box } from "./Box";
import { CanvasLight } from "./CanvasLight";
export const CanvasScene = ({ checked }: { checked?: boolean }) => {
  const lightPosition = new Vector3(45, 35, -55);
  const targetLightPosition = new Vector3(-22, -5, 0);
  const cameraStartPosition = new Vector3(-10, 2.5, 3.5);
  const cameraRotationPosition = new Quaternion().setFromEuler(
    new Euler(0.0 * Math.PI, (-84.0 / 180.0) * Math.PI, 0.0 * Math.PI, "ZXY"),
  );
  const blockPosition = new Vector3(20, 2.5, 20);
  const [cameraPosition, setCameraPosition] =
    useState<Vector3>(cameraStartPosition);
  const [cameraRotation, setCameraRotation] = useState<Quaternion>(
    cameraRotationPosition,
  );

  return (
    <div className="absolute w-screen h-screen top-0 left-0">
      <Canvas className="">
        {checked && <EternalRainLands />}
        {/* <PerspectiveCamera
        fov={40}
        makeDefault
        position={cameraPosition}
        quaternion={cameraRotation}
      /> */}
        <FlyControls
          movementSpeed={55}
          rollSpeed={0.5}
          dragToLook={true}
          position={[0, 11, 4]}
          rotation={[1, 1.6, -1]}
        />

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
