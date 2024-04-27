"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Crown } from "./Crown";
type Position = { x: number; y: number };
const getRandomPosition = (xMax: number, yMax: number): Position => {
  return {
    x: Math.random() * xMax - xMax / 2,
    y: Math.random() * yMax - yMax / 2,
  };
};
type CheckboxProps = {
  containerDimensions: { width: number; height: number };
};
export const Checkbox = ({
  containerDimensions: { width, height },
}: CheckboxProps) => {
  const [{ x, y }, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const transitionPercentage = 0.3;
  const maxX = width * transitionPercentage;
  const maxY = height * transitionPercentage;
  return (
    <MotionDiv
      className="flex flex-col justify-items items-center "
      animate={{
        x,
        y,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <MotionDiv
        key={`${x}-${y}`}
        initial={{
          rotate: 0,
        }}
        animate={{
          y: [0, -100, 0],
          rotate: Math.random() > 0.5 ? 360 : -360,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
      >
        <Crown />
      </MotionDiv>
      <input
        onClick={() => setPosition(getRandomPosition(maxX, maxY))}
        type="checkbox"
        className="size-48 appearance-none border-orange-900 border-2 rounded bg-red-900 checked:bg-orange-600"
      />
    </MotionDiv>
  );
};
const MotionDiv = motion.div;
