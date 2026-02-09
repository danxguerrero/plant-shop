import * as cartService from "@/services/cart";
import type { CartItemType } from "./types";

type CartItemProps = {
  item: CartItemType;
  fetchCart: () => Promise<void>;
};

const CartItem = ({ item, fetchCart }: CartItemProps) => {
  return (
    <div className="flex">
      <img src={item.image_src} className="w-28 rounded-md" />
      <div className="mx-4 flex flex-1 justify-between">
        <div>
          <div className="font-playfair text-xl text-emerald-700">
            {item.plant_name}
          </div>
          <div className="my-1 flex text-slate-500">
            <div className="w-14 text-slate-400">Color:</div>
            {item.pot_color}
          </div>
          <div className="my-1 flex text-slate-500">
            <div className="w-14 text-slate-400">Qty:</div>
            {item.quantity}
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="text-slate-500">
            ${item.price_per_unit * item.quantity}
          </div>
          <button
            className="text-sm text-slate-400 hover:text-red-400"
            onClick={async () => {
              await cartService.removeItemFromCart({ itemId: item.id });
              fetchCart();
            }}
          >
            <i className="fa-regular fa-trash-can mr-2 text-base"></i>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
