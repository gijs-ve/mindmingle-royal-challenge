"use client";

import { useState } from "react";

export const useRandomIndex = (max: number) => {
  const startIndex = Math.floor(Math.random() * max);
  const [usedIndexes, setUsedIndexes] = useState<number[]>([startIndex]);
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const getRandomIndex = () => {
    let randomIndex = Math.floor(Math.random() * max);
    if (usedIndexes.length === max) {
      setUsedIndexes(() => [randomIndex]);
    }
    if (usedIndexes.length < max) {
      while (usedIndexes.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * max);
      }
      setUsedIndexes((prev) => [...prev, randomIndex]);
    }
    setCurrentIndex(randomIndex);
  };
  return [currentIndex, getRandomIndex] as const;
};
