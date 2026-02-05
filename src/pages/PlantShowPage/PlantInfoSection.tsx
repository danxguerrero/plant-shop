import PlantHeading from "./PlantHeading";
import type { PlantDataType } from "./types";

type PlantInfoSectionProps = {
  plantData: PlantDataType | null;
};

const PlantInfoSection = ({ plantData }: PlantInfoSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
        <div className="block md:hidden mb-8">
            <PlantHeading plantData={plantData}/>
        </div>
        <img src={plantData?.images[0].src} />
        <div>todo</div>
      </div>
      <div className="flex flex-1 flex-col md:px-8">
        <div className="hidden md:block">
          <PlantHeading plantData={plantData} />
        </div>
        <p className="mt-4 leading-relaxed text-slate-600">
          {plantData?.description}
        </p>
      </div>
    </div>
  );
};

export default PlantInfoSection;
