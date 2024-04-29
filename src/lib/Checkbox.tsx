"use client";

import { motion } from "framer-motion";
import { Howl } from "howler";
import Image from "next/image";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { CheckboxIcon } from "./CheckboxIcon";
import { Crown } from "./Crown";
import { useRandomIndex } from "./useRandomIndex";
type Position = { x: number; y: number };
const getRandomPosition = (xMax: number, yMax: number): Position => {
  return {
    x: Math.random() * xMax - xMax / 2,
    y: Math.random() * yMax - yMax / 2,
  };
};
type CheckboxProps = {
  containerDimensions: { width: number; height: number };
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
};
export const Checkbox = ({
  checked,
  setChecked,
  containerDimensions: { width, height },
}: CheckboxProps) => {
  const [{ x, y }, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [colorIndex, getColorIndex] = useRandomIndex(4);
  const [noWillyIndex, getNoWillyIndex] = useRandomIndex(3);
  const willySongRef = useRef(
    new Howl({
      src: ["/originalWillySong.mp3"],
      html5: true,
      volume: 1,
    }),
  );
  const widthPercentage = 0.3;
  const heightPercentage = 0.1;
  const maxX = width * widthPercentage;
  const maxY = height * heightPercentage;
  const getImageSrc = (checked: boolean) => {
    if (checked) return "/willy/0.jpeg";
    return `/nowilly/${noWillyIndex.toString()}.png`;
  };
  const onClick = () => {
    setPosition(getRandomPosition(maxX, maxY));
    setChecked((prev) => !prev);
    if (checked) {
      getNoWillyIndex();
      willySongRef.current.pause();
      const miauw = new Howl({
        src: ["/miauw.mp3"],
        html5: true,
        loop: false,
        volume: 1,
      });
      miauw.play();
    }
    if (!checked) willySongRef.current.play();
    getColorIndex();
  };
  return (
    <MotionDiv
      className="flex flex-col justify-items items-center"
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
          scale: [1, 1.8, 1],
          rotate: Math.random() > 0.5 ? 360 : -360,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
      >
        <Crown colorIndex={colorIndex} />
      </MotionDiv>
      <label className="text-white size-48" htmlFor="checkbox">
        <MotionImage
          key={checked.toString()}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          alt="willy1"
          src={getImageSrc(checked)}
          width={900}
          height={1066}
        />
      </label>
      <input
        id="checkbox"
        onClick={onClick}
        checked={checked}
        readOnly={true}
        type="checkbox"
        className="peer relative size-48 appearance-none border-orange-900 border-2 rounded bg-white  checked:bg-orange-600"
      />
      <CheckboxIcon />
    </MotionDiv>
  );
};
const MotionDiv = motion.div;
const MotionImage = motion(Image);
