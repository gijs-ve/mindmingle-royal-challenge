"use client";
import { Checkbox } from "@/lib/Checkbox";
import { LinkItems } from "@/lib/LinkItems";
import { useEffect, useRef, useState } from "react";

export const Main = () => {
  const containerRef = useRef<HTMLElement>(null);
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
  return (
    <main
      ref={containerRef}
      className="flex h-screen bg-slate-500 flex-col items-center justify-center p-24"
    >
      <Checkbox containerDimensions={dimensions} />
      <LinkItems />
    </main>
  );
};
