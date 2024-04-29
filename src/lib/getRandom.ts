export const getRandom = (min: number, max: number, float: boolean = false) => {
  if (float) {
    return Math.random() * (max - min) + min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
