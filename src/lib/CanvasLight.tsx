import { Suspense } from "react";
import { Vector3 } from "three";

export const CanvasLight = ({
  directLightPosition,
  targetLightPosition,
  directionalLightIntensity,
  ambientLightIntensity,
}: {
  directLightPosition: Vector3;
  targetLightPosition: Vector3;
  directionalLightIntensity: number;
  ambientLightIntensity: number;
}) => {
  return (
    <>
      <Suspense fallback={null}>
        <directionalLight
          castShadow={true}
          intensity={directionalLightIntensity}
          position={directLightPosition}
          target-position={targetLightPosition}
        />
        <ambientLight castShadow={true} intensity={ambientLightIntensity} />
      </Suspense>
    </>
  );
};
