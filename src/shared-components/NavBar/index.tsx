import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SessionContext from "@/contexts/SessionContext";
import CartModal from "./modals/CartModal";
import ModalWrapper from "./modals/ModalWrapper";
import MobileModalMenu from "./modals/MobileModalMenu";

const NavBar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const sessionContext = useContext(SessionContext);
  const username = sessionContext?.username;

  return (
    <>
      <nav
        className="flex justify-center bg-emerald-800"
        onMouseLeave={() => setUserMenuOpen(false)}
      >
        <div className="flex w-full max-w-5xl items-center justify-between px-8 py-2">
          <Link to="/plants">
            <div className="flex flex-col items-center font-playfair text-2xl text-white">
              <img
                className="w-10"
                src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
              />
              Plant Shop
            </div>
          </Link>
          <div className="hidden flex-1 justify-end sm:flex">
            <div className="relative min-w-32">
              <button
                className="flex items-center text-emerald-200"
                onClick={() => setUserMenuOpen(true)}
              >
                <i className="fa-solid fa-user mr-2 text-xl"></i>
                {username}
              </button>
              {userMenuOpen && (
                <div className="absolute bottom-[-46px] left-0 mt-20 rounded-md bg-white px-4 py-2 shadow-md">
                  <button
                    className="text-slate-500 hover:text-emerald-700"
                    onClick={sessionContext?.signOut}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
            <button
              className="flex items-center text-emerald-200"
              onClick={() => setCartOpen(true)}
            >
              <i className="fa-solid fa-cart-shopping mr-2 text-xl"></i>
              Cart
            </button>
          </div>
          <button onClick={() => setMobileMenuOpen(true)}>
            <i className="fa-solid fa-bars flex text-4xl text-emerald-400 sm:hidden"></i>
          </button>
        </div>
      </nav>
      <ModalWrapper isOpen={cartOpen} onCloseClick={() => setCartOpen(false)}>
        <CartModal />
      </ModalWrapper>
      <ModalWrapper isOpen={mobileMenuOpen} onCloseClick={() => setMobileMenuOpen(false)}>
              <MobileModalMenu onCartOpenClick={() => {
                setCartOpen(true);
                setMobileMenuOpen(false);
              }}/>
      </ModalWrapper>
    </>
  );
};

export default NavBar;
