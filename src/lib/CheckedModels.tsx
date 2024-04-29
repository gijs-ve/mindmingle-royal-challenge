import { Camera } from "./Camera";
import { ThreeModel } from "./ThreeModel";
import { getRandom } from "./getRandom";

export const CheckedModels = ({
  checked,
  width,
}: {
  checked?: boolean;
  width: number;
}) => {
  if (!checked) return null;
  const isPhone = width < 640;
  const randomDistanceZ = isPhone
    ? getRandom(7.35, 7.6, true)
    : getRandom(6.5, 7.5, true);
  const randomDistanceX = isPhone
    ? getRandom(3.9, 4.2, true)
    : getRandom(3.9, 4.9, true);
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
      <Camera />
    </>
  );
};
