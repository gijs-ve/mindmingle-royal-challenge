"use client";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { CanvasLight } from "./CanvasLight";
import { CheckedModels } from "./CheckedModels";
export const CanvasScene = ({ checked }: { checked?: boolean }) => {
  return null;
  const lightPosition = new Vector3(45, 35, -55);
  const targetLightPosition = new Vector3(-22, -5, 0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    <div className="absolute w-screen h-screen top-0 left-0">
      <Canvas ref={canvasRef} className="">
        <CheckedModels checked={checked} />

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
