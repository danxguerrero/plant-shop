import { useContext } from "react";
import SessionContext from "@/contexts/SessionContext";

type MobileModalMenuProps = {
    onCartOpenClick: () => void;
}

const MobileModalMenu = ({onCartOpenClick}: MobileModalMenuProps) => {
    const sessionContext = useContext(SessionContext);
    

    return (
        <div className="bg-emerald-800 text-emerald-200 flex flex-col pt-12 pr-12 text-lg items-start pb-6 rounded-bl-lg shadow-md">
            <div className="px-8 py-4">
                <i className="mr-2 text-2xl fa-solid fa-user"></i>
                {sessionContext?.username}
            </div>
            <div className="px-8 py-4" onClick={sessionContext?.signOut}>
                <i className="mr-2 text-2xl fa-solid fa-arrow-right-from-bracket"></i>
                Sign Out
            </div>
            <div className="px-8 py-4" onClick={onCartOpenClick}>
                <i className="mr-2 text-2xl fa-solid fa-cart-shopping"></i>
                Cart
            </div>
        </div>
    )
}

export default MobileModalMenu;