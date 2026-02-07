import type { CartItemType } from "./types";

type CartItemProps = {
  item: CartItemType;
};

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="mx-6 my-8 flex">
      <img src={item.image_src} className=" rounded-md w-28" />
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
        <div className="text-slate-500">${item.price_per_unit * item.quantity}</div>
      </div>
    </div>
  );
};

export default CartItem;
