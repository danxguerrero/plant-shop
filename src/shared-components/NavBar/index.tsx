import { useContext } from 'react'
import SessionContext from '@/contexts/SessionContext';

const NavBar = () => {


    const sessionContext = useContext(SessionContext);
    const username = sessionContext?.username;

    return (
        <nav className="bg-emerald-800 flex justify-center">
            <div className="flex w-full max-w-5xl items-center justify-between px-8 py-2">
                <div className="flex flex-col items-center font-playfair text-2xl text-white">
                    <img
                        className="w-10"
                        src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
                    />
                    Plant Shop
                </div>
                <div>
                    <button className="flex items-center text-emerald-200">
                        <i className="mr-2 text-xl fa-solid fa-user"></i>{username}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;