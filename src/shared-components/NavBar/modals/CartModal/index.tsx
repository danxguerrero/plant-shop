import SessionContext from "@/contexts/SessionContext";
import { useContext, useEffect, useState, type SetStateAction } from "react";
import { RemoveScroll } from "react-remove-scroll";
import * as cartService from "@/services/cart";
import LoadingSpinner from "@/shared-components/LoadingSpinner";
import type { CartItemType } from "./types";
import CartItem from "./CartItem";

type CartModalProps = {
    setCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CartModal = ({setCartOpen}: CartModalProps) => {
    const sessionContext = useContext(SessionContext);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [cartItems, setCartItems] = useState<CartItemType[]>([])

    const fetchCart = async () => {
        try {
            const response = await cartService.getCart();
            const data = await response.json();
            setCartItems(data);
        } catch (err) {
            console.error("There was a problem fetching the cart: ", err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchCart();
    }, []);
  return (
    <RemoveScroll>
      <div className="fixed left-0 top-0 flex h-full w-full justify-end bg-black/30 backdrop-blur-sm" onClick={() => setCartOpen(false)}>
        <div className="h-screen w-full max-w-xl bg-white">
            <button className="absolute top-0 right-0 p-2" onClick={()=> setCartOpen(false)}><i className="text-4xl text-emerald-400 fa-solid fa-xmark"></i></button>
          <div className="bg-emerald-800 py-7 text-center font-playfair text-3xl text-white shadow-md">
            {sessionContext?.username}'s Cart
          </div>
          {isLoading && <LoadingSpinner/>}
          {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
      </div>
    </RemoveScroll>
  );
};

export default CartModal;
