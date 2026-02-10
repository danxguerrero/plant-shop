import { useContext } from "react";
import SessionContext from "@/contexts/SessionContext";
import {motion} from "framer-motion";

type MobileModalMenuProps = {
    onCartOpenClick: () => void;
}

const MobileModalMenu = ({onCartOpenClick}: MobileModalMenuProps) => {
    const sessionContext = useContext(SessionContext);
    

    return (
        <motion.div 
            className="bg-emerald-800 text-emerald-200 flex flex-col pt-12 pr-12 text-lg items-start pb-6 rounded-bl-lg shadow-md"
            initial={{ translateY: "-100%"}}
            animate={{ translateY: 0}}
            transition={{ duration: 0.5}}
        >
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
        </motion.div>
    )
}

export default MobileModalMenu;