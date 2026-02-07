import SessionContext from "@/contexts/SessionContext";
import { useContext, useEffect, useState, type SetStateAction } from "react";
import { RemoveScroll } from "react-remove-scroll";
import * as cartService from "@/services/cart";
import LoadingSpinner from "@/shared-components/LoadingSpinner";

type CartModalProps = {
    setCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type CartItemsType = {
    id: number;
    image_src: string;
    plant_name: string;
    pot_color: string;
    price_per_unit: number;
    quantity: number;
}

const CartModal = ({setCartOpen}: CartModalProps) => {
    const sessionContext = useContext(SessionContext);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [cartItems, setCartItems] = useState<CartItemsType[]>([])

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
          <div className="bg-emerald-800 py-7 text-center font-playfair text-3xl text-white shadow-md">
            {sessionContext?.username}'s Cart
          </div>
          {isLoading && <LoadingSpinner/>}
        </div>
      </div>
    </RemoveScroll>
  );
};

export default CartModal;
