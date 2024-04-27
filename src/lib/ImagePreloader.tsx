import Image from "next/image";
import { useEffect, useState } from "react";

const nowillyLength = 2;
const willyLength = 1;
export const ImagePreloader = () => {
  const [williesReady, setWilliesReady] = useState<number>(0);
  const [noWilliesReady, setNoWilliesReady] = useState<number>(0);
  const [hide, setHide] = useState<boolean>(false);
  useEffect(() => {
    if (williesReady === willyLength && noWilliesReady === nowillyLength) {
      setHide(true);
    }
  }, [williesReady, noWilliesReady]);
  const sharedProps = {
    width: 900,
    height: 1066,
    className: "size-48 opacity-[.01]",
  };
  return (
    <div
      className={
        hide
          ? "hidden"
          : "h-screen w-screen bg-slate-600 z-50 overflow-hidden absolute"
      }
    >
      {[...Array(nowillyLength)].map((_, index) => {
        return (
          <Image
            {...sharedProps}
            onLoad={() => setNoWilliesReady((prev) => prev + 1)}
            key={index}
            src={`/nowilly/${index}.png`}
            alt={`nowilly${index}`}
          />
        );
      })}
      {[...Array(willyLength)].map((_, index) => {
        return (
          <Image
            {...sharedProps}
            onLoad={() => setWilliesReady((prev) => prev + 1)}
            key={index}
            src={`/willy/${index}.jpeg`}
            alt={`willy${index}`}
          />
        );
      })}
    </div>
  );
};
