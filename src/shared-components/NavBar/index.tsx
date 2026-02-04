import { useContext, useState } from "react";
import SessionContext from "@/contexts/SessionContext";

const NavBar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);
  const sessionContext = useContext(SessionContext);
  const username = sessionContext?.username;

  return (
    <nav 
      className="flex justify-center bg-emerald-800"
      onMouseLeave={() => setUserMenuOpen(false)}
    >
      <div className="flex w-full max-w-5xl items-center justify-between px-8 py-2">
        <div className="flex flex-col items-center font-playfair text-2xl text-white">
          <img
            className="w-10"
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
          />
          Plant Shop
        </div>
        <div className="flex flex-1 justify-end">
          <div className="relative min-w-32">
            <button
              className="flex items-center text-emerald-200"
              onClick={() => setUserMenuOpen(true)}
            >
              <i className="fa-solid fa-user mr-2 text-xl"></i>
              {username}
            </button>
            {userMenuOpen && (
              <div className="absolute bottom-[-46px] left-0 mt-20 bg-white px-4 py-2 rounded-md shadow-md">
                <button className="text-slate-500 hover:text-emerald-700"
                  onClick={sessionContext?.signOut}
                >
                  <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
