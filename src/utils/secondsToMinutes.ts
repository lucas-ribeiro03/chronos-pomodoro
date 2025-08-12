export const secondsToMinutes = (seconds: number) => {
  const minutes = String(seconds / 60).padStart(2, "0");
  const secondsMod = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${secondsMod}`;
};
