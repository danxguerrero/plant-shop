import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "@/shared-components/NavBar";
import LoadingSpinner from "@/shared-components/LoadingSpinner";
import PlantInfoSection from "./PlantInfoSection";
import type { PlantDataType } from "./types";
import * as PlantService from "@/services/plant";

const PlantShowPage = () => {
  const { plantId } = useParams();

  const [plantData, setPlantData] = useState<PlantDataType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPlantById = async () => {
    const response = await PlantService.getPlantById({ id: plantId });
    const data = await response.json();
    setPlantData(data);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchPlantById();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="flex justify-center bg-green-50 font-lato">
        <div className="min-h-screen w-full max-w-5xl px-8 py-24">
            {isLoading ? <LoadingSpinner/> : <PlantInfoSection  plantData={plantData} />}
        </div>
      </div>
    </div>
  );
};

export default PlantShowPage;
