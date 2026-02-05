import type { PlantDataType } from "./types";

type PlantHeadingProps = {
  plantData: PlantDataType | null;
};
const PlantHeading = ({ plantData }: PlantHeadingProps) => {
  return (
    <>
      <div className="flex items-center justify-between text-emerald-700">
        <div className="font-playfair text-4xl">{plantData?.name}</div>
        <div className="text-3xl">${plantData?.price}</div>
      </div>
      <div className="my-2 pl-px text-lg italic text-slate-500">
        {plantData?.botanical_name}
      </div>
    </>
  );
};

export default PlantHeading;
