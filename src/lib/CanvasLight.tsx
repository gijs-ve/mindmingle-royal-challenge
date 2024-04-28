import { Suspense } from "react";
import { Vector3 } from "three";

export const CanvasLight = ({
  directLightPosition,
  targetLightPosition,
  directionalLightIntensity,
  ambientLightIntensity,
  debug,
}: {
  directLightPosition: Vector3;
  targetLightPosition: Vector3;
  directionalLightIntensity: number;
  ambientLightIntensity: number;
  debug?: boolean;
}) => {
  return (
    <>
      {debug && (
        <>
          <mesh position={directLightPosition}>
            <meshBasicMaterial color="#00FF00" />
            <boxGeometry args={[1, 1, 1]} />
          </mesh>
          <mesh position={targetLightPosition}>
            <meshBasicMaterial color="#DDFF00" />
            <boxGeometry args={[1, 1, 1]} />
          </mesh>{" "}
        </>
      )}
      <Suspense fallback={null}>
        <directionalLight
          castShadow={true}
          intensity={directionalLightIntensity}
          position={directLightPosition}
          target-position={targetLightPosition}
        />
        <ambientLight castShadow={true} intensity={ambientLightIntensity} />
        {/* <ambientLight intensity={0.3} /> */}
      </Suspense>
    </>
  );
};
