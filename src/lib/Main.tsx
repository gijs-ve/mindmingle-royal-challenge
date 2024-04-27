"use client";
import { Checkbox } from "@/lib/Checkbox";
import { LinkItems } from "@/lib/LinkItems";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ImagePreloader } from "./ImagePreloader";

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
      <MotionMain
        ref={containerRef}
        animate={{
          backgroundColor: checked ? "#FF4F00" : "#f6f6f6",
        }}
        className="flex h-screen bg-slate-500 flex-col items-center justify-center p-24"
      >
        <Checkbox {...checkboxProps} />
        <LinkItems />
      </MotionMain>
    </>
  );
};

const MotionMain = motion.main;
