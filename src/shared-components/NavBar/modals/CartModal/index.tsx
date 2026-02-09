import SessionContext from "@/contexts/SessionContext";
import { useContext, useEffect, useState, useCallback } from "react";
import { RemoveScroll } from "react-remove-scroll";
import * as cartService from "@/services/cart";
import LoadingSpinner from "@/shared-components/LoadingSpinner";
import type { CartItemType } from "./types";
import CartItem from "./CartItem";
import clsx from "clsx";

type CartModalProps = {
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartModal = ({ setCartOpen }: CartModalProps) => {
  const sessionContext = useContext(SessionContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const fetchCart = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await cartService.getCart();
      const data = await response.json();
      setCartItems(data);
    } catch (err) {
      console.error("There was a problem fetching the cart: ", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalQuantity: number = 0;
  let subtotal: number = 0;

  for (let item of cartItems) {
    totalQuantity += item.quantity;
    subtotal += item.price_per_unit * item.quantity;
  }

  return (
    <RemoveScroll>
      <div className="fixed left-0 top-0 flex h-full w-full justify-end bg-black/30 backdrop-blur-sm">
        <div className="h-screen w-full max-w-xl bg-white flex flex-col">
          <button
            className="absolute right-0 top-0 p-2"
            onClick={() => setCartOpen(false)}
          >
            <i className="fa-solid fa-xmark text-4xl text-emerald-400"></i>
          </button>
          <div className="bg-emerald-800 py-7 text-center font-playfair text-3xl text-white shadow-md">
            {sessionContext?.username}'s Cart
          </div>

            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className="flex-1 overflow-y-scroll">
                  {cartItems.map((item, idx) => (
                    <div
                      key={item.id}
                      className={clsx(
                        "mx-5 mt-8 pt-8",
                        idx !== 0 && "border-t border-slate-200",
                      )}
                    >
                      <CartItem item={item} fetchCart={fetchCart} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col border-t border-slate-200 px-4 pb-4">
                  <div className="flex justify-between py-2 text-slate-400">
                    <div>{totalQuantity} items</div>
                    <div>
                      subtotal
                      <span className="ml-2 text-lg text-slate-500">${subtotal}</span>
                    </div>
                  </div>
                  <button 
                    className="flex items-center justify-center rounded-full bg-emerald-700 py-3 text-lg text-white" 
                    onClick={() => alert("This app in not a real plant selling site")}
                  >
                    Checkout <i className="fa-solid fa-cash-register ml-2 text-xl"></i>
                  </button>
                </div>
              </>
            )}

        </div>
      </div>
    </RemoveScroll>
  );
};

export default CartModal;
