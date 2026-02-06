export const POT_COLORS: { [key: string]: string } = {
  stone: "bg-stone-200",
  slate: "bg-slate-300",
  sky: "bg-sky-300",
  black: "bg-gray-600",
  white: "bg-gray-50",
  amber: "bg-amber-600",
};

export const getRandomIdx = (arr: [{ pot_color: string; src: string }]) => {
    return Math.floor(Math.random() * arr.length);
};