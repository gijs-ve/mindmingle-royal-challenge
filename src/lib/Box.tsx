import { ComponentProps } from "react";
export const Box = ({
  position,
  color,
  args,
}: {
  position: ComponentProps<"mesh">["position"];
  color: ComponentProps<"meshBasicMaterial">["color"];
  args: ComponentProps<"boxGeometry">["args"];
}) => {
  return (
    <mesh position={position}>
      <meshBasicMaterial color={color} />
      <boxGeometry args={args} />
    </mesh>
  );
};
