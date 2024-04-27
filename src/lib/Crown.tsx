const CrownColors = ["#C8102E", "#FFFFFF", "#003DA5", "#FF4F00"];
export const Crown = ({ colorIndex }: { colorIndex: number }) => {
  const randomColor = CrownColors[colorIndex];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      version="1.0"
    >
      <path
        fill={randomColor}
        stroke="#000"
        strokeWidth="4.33534527"
        d="m64.000012 31.484944 28.902346 36.127871L121.8046 31.484944l-7.22553 65.030147H13.420984L6.1954237 31.484944 35.0977 67.612815l28.902312-36.127871Z"
      />
    </svg>
  );
};
