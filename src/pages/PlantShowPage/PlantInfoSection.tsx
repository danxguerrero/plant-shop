import PlantHeading from "./PlantHeading";
import BenefitBox from "./BenefitBox";
import type { PlantDataType } from "./types";

type PlantInfoSectionProps = {
  plantData: PlantDataType | null;
};

const PlantInfoSection = ({ plantData }: PlantInfoSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
        <div className="mb-8 block md:hidden">
          <PlantHeading plantData={plantData} />
        </div>
        <img src={plantData?.images[0].src} />
        <div className="flex flex-1 mt-4">
          <BenefitBox
            icon="far fa-check-circle"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
          <div className="w-px bg-slate-300"></div>
          <BenefitBox
            icon="fa-regular fa-truck-fast"
            title="Free Shipping"
            description="Get free ground shipping on orders of $50 or more"
          />
        </div>
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
