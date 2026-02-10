import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as plantService from "@/services/plant";
import NavBar from "@/shared-components/NavBar";
import LoadingSpinner from "@/shared-components/LoadingSpinner";
import RedirectToSignInIfSignedOut from "@/shared-components/RedirectToSignInIfSignedOut";
import PlantItem from "./PlantItem";
import type { PlantType } from "./types";

const PlantListPage = () => {
  const [plants, setPlants] = useState<PlantType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlants(data);
      setIsLoading(false);
    })();
  }, []);

  const plantItems = plants.map((plant: PlantType, idx) => (
    <motion.div 
      key={plant.id}
      initial={{ opacity: 0, translateY: "20px"}}
      whileInView={{ opacity: 1, translateY: 0}}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + (idx % 3) * 0.2, duration: 0.4}}
    >
      <PlantItem plant={plant} />
    </motion.div>
  ));

  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="min-h-screen bg-green-50">
        {isLoading ? (
          <LoadingSpinner />
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
