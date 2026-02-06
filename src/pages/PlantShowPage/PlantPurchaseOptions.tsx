import { useState } from "react";
import type { PlantDataType } from "./types";
import clsx from "clsx";
import { POT_COLORS } from "@/shared-components/utils";
import * as cartService from "@/services/cart";

type PlantPurchaseOptionsProps = {
  plantData: PlantDataType | null;
  imageIdx: number;
  setImageIdx: React.Dispatch<React.SetStateAction<number>>;
};

const PlantPurchaseOptions = ({
  plantData,
  imageIdx,
  setImageIdx,
}: PlantPurchaseOptionsProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
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
                  "h-10 w-10 rounded-full border border-slate-300",
                  POT_COLORS[image.pot_color],
                  imageIdx === idx &&
                    "outline outline-offset-2 outline-slate-500",
                )}
              ></div>
              <div
                className={clsx(
                  "mt-1",
                  imageIdx == idx ? "text-slate-700" : "text-slate-500",
                )}
              >
                {image.pot_color}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center rounded-full border-2 border-slate-300 px-3 py-2 text-xl text-slate-500">
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="mx-4 text-2xl text-emerald-700">{quantity}</div>
          <button onClick={() => setQuantity(quantity + 1)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button
          className="ml-2 flex-1 rounded-full bg-emerald-700 text-xl text-white"
          onClick={async () => {
            if (!plantData) {
              throw new Error("plantData is required to add item to cart");
            }
            setIsLoading(true);
            const response = await cartService.addPlantToCart({
              quantity: quantity,
              plantId: plantData.id,
              potColor: plantData.images[imageIdx].pot_color,
            });
            setIsLoading(false);
            console.log(response.status);
          }}
        >
          {isLoading ? <i className="fa-solid fa-spinner animate-spin text-2xl text-white mr-2"></i> : <i className="fa-solid fa-cart-arrow-down mr-2 text-2xl hover:bg-emerald-800"></i>}
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default PlantPurchaseOptions;
