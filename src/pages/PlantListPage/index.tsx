import { useEffect, useState } from "react";
import * as plantService from "@/services/plant";
import NavBar from "@/shared-components/NavBar";
import RedirectToSignInIfSignedOut from "@/shared-components/RedirectToSignInIfSignedOut";
import PlantItem from './PlantItem'
import type { plantType } from "./types";

const PlantListPage = () => {
  const [plants, setPlants] = useState<plantType[]>([]);
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


  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      {loading ? (
        <div className="flex justify-center pt-40">
          <i className="fa-solid fa-spinner animate-spin text-3xl text-emerald-600"></i>
        </div>
      ) : (
        <div className="flex justify-center py-24">
          <div className="w-full max-w-5xl border border-red-500 font-playfair">
            plants go here
          </div>
        </div>
      )}
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
