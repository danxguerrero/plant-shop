import type { PlantDataType } from "./types";
import clsx from "clsx";
import { POT_COLORS } from "@/shared-components/utils";

type PlantPurchaseOptionsProps = {
  plantData: PlantDataType | null;
  imageIdx: number
  setImageIdx: React.Dispatch<React.SetStateAction<number>>
};

const PlantPurchaseOptions = ({ plantData, imageIdx, setImageIdx }: PlantPurchaseOptionsProps) => {
  return (
    <div className="my-10">
      <div className="flex text-emerald-700">
        <i className="fa-solid fa-brush mr-2 text-2xl"></i>
        <div className="text-lg">Pot Color</div>
      </div>
      <div className="flex">
        {plantData?.images.map((image, idx) => (
          <div
            key={image.pot_color}
            className="mx-2 my-4 flex flex-col items-center"
            onMouseEnter={() => setImageIdx(idx)}
          >
            <div
              className={clsx(
                "h-10 w-10 rounded-full",
                POT_COLORS[image.pot_color],
                imageIdx === idx && 'outline outline-offset-2 outline-slate-500'
              )}
            ></div>
            <div className={clsx("mt-1", imageIdx == idx ? 'text-slate-700' : 'text-slate-500' )}>{image.pot_color}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantPurchaseOptions;
