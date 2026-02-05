import { useEffect, useState } from "react";
import * as plantService from "@/services/plant";
import NavBar from "@/shared-components/NavBar";
import RedirectToSignInIfSignedOut from "@/shared-components/RedirectToSignInIfSignedOut";
import PlantItem from "./PlantItem";
import type { PlantType } from "./types";

const PlantListPage = () => {
  const [plants, setPlants] = useState<PlantType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlants(data);
      setLoading(false);
    })();
  }, []);

  const plantItems = plants.map((plant: PlantType) => (
    <PlantItem key={plant.id} plant={plant} />
  ));

  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="min-h-screen bg-green-50">
        {loading ? (
          <div className="flex justify-center pt-40">
            <i className="fa-solid fa-spinner animate-spin text-3xl text-emerald-600"></i>
          </div>
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl font-playfair">
              <div className="mb-6 px-4 font-playfair text-4xl text-emerald-800">
                Plants In Stock
              </div>
              <div className="flex flex-wrap justify-center">{plantItems}</div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
