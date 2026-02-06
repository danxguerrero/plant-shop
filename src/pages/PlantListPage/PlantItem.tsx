import { useState } from "react";
import { Link } from "react-router-dom";
import type { PlantType } from "./types";
import clsx from "clsx";
import { POT_COLORS, getRandomIdx } from "@/shared-components/utils";

type PlantItemProps = {
  plant: PlantType;
};

const PlantItem = ({ plant }: PlantItemProps) => {
  const [imageIdx, setImageIdx] = useState<number>(() =>
    getRandomIdx(plant.images),
  );

  return (
    <div className="mx-5 my-8">
      <Link to={`/plants/${plant.id}`}>
        <img className="h-[320px] w-[280px]" src={plant.images[imageIdx].src} />
      </Link>
      <div className="my-3 flex justify-between">
        <div className="font-playfair text-xl text-emerald-700">
          {plant.name}
        </div>
        <div className="text-lg text-emerald-600">${plant.price}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-slate-500">
          {plant.images[imageIdx].pot_color}
        </div>
        <div className="flex">
          {plant.images.map((image, idx) => (
            <div
              key={idx}
              className={clsx(
                "mx-[3px] h-5 w-5 rounded-full border border-slate-300",
                POT_COLORS[image.pot_color],
                imageIdx == idx &&
                  "outlline-slate-400 outline outline-offset-1",
              )}
              onMouseEnter={() => setImageIdx(idx)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
