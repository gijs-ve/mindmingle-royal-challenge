import { useEffect, useState } from "react";

export const useCompletelyMadeUpFps = ({
  checked,
}: {
  checked?: boolean;
}): number => {
  const [fps, setFps] = useState(60);
  useEffect(() => {
    if (!checked) return;
    const interval = setInterval(() => {
      setFps(Math.floor(Math.random() * 16) + 4);
    }, 1000);
    return () => clearInterval(interval);
  }, [checked, fps]);
  if (!checked) return 60;
  return fps;
};
