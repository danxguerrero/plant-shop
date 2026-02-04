import type { plantType } from "./types";
import clsx from "clsx";

const POT_COLORS: { [key: string]: string } = {
  stone: "bg-stone-200",
  slate: "bg-slate-300",
  sky: "bg-sky-300",
  black: "bg-gray-600",
  white: "bg-gray-50",
  amber: "bg-amber-600",
};

type PlantItemProps = {
  plant: plantType;
};
const PlantItem = ({ plant }: PlantItemProps) => {
  console.log(plant);
  return (
    <div className="mx-5 my-8">
      <img className="h-[320px] w-[280px]" src={plant.images[0].src} />
      <div className="my-3 flex justify-between">
        <div className="font-playfair text-xl text-emerald-700">
          {plant.name}
        </div>
        <div className="text-lg text-emerald-600">${plant.price}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-slate-500">slate</div>
        <div className="flex">
          {plant.images.map((image, idx) => (
            <div
              key={idx}
              className={clsx(
                "mx-[3px] h-5 w-5 rounded-full border border-slate-300",
                POT_COLORS[image.pot_color],
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
