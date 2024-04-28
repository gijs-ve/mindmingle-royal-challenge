"use client";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { Camera } from "./Camera";
import { CanvasLight } from "./CanvasLight";
import { ThreeModel } from "./ThreeModel";
export const CanvasScene = ({ checked }: { checked?: boolean }) => {
  const lightPosition = new Vector3(45, 35, -55);
  const targetLightPosition = new Vector3(-22, -5, 0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="absolute w-screen h-screen top-0 left-0">
      <Canvas ref={canvasRef} className="">
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
            <Camera checked={checked} />
          </>
        )}

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
