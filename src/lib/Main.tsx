"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CanvasScene } from "./CanvasScene";
import { Checkbox } from "./Checkbox";
import { ImagePreloader } from "./ImagePreloader";
import { LinkItems } from "./LinkItems";

export const Main = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [checked, setChecked] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);
  const checkboxProps = {
    checked,
    setChecked,
    containerDimensions: dimensions,
  };
  return (
    <>
      <ImagePreloader />

      <CanvasScene checked={checked} />
      {checked && (
        <div className="hidden px-24 sm:flex items-center justify-center">
          <Image
            className="h-screen w-auto z-0"
            key={checked.toString()}
            alt="coa"
            src={"/coa.png"}
            width={1920}
            height={2082}
          />
        </div>
      )}
      <MotionMain
        ref={containerRef}
        animate={{
          backgroundColor: checked
            ? "rgba(255,79,0,0.8)"
            : "rgba(246,246,246,0.3)",
        }}
        className="absolute top-0 left-0 flex h-screen w-screen bg-slate-500 flex-col items-center justify-center p-8"
      >
        <Checkbox {...checkboxProps} />

        <LinkItems />
      </MotionMain>
    </>
  );
};

const MotionMain = motion.main;
