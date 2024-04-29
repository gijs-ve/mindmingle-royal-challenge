import { Camera } from "./Camera";
import { ThreeModel } from "./ThreeModel";

export const CheckedModels = ({ checked }: { checked?: boolean }) => {
  if (!checked) return null;
  const randomDistanceZ = Math.random() + 6.5;
  const randomDistanceX = Math.random() + 3.9;
  return (
    <>
      <ThreeModel
        source="/lion/lion.glb"
        position={[-randomDistanceX, 9, -randomDistanceZ]}
        rotation={[0, 0, 0]}
        scale={1}
      />
      <ThreeModel
        source="/lion/lion.glb"
        position={[randomDistanceX, 9, -randomDistanceZ]}
        rotation={[0, 3.141592, 0]}
        scale={[1, 1, -1]}
      />
      <Camera checked={checked} />
    </>
  );
};
