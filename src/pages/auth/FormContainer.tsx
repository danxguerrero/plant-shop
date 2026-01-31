type FormContainerProps = {
    children: React.ReactNode
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {

    return (
        <div className="flex">
            <div className="relative hidden md:flex">
                <img src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png" className="h-screen object-cover " />
                <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-green-800/40"></div>
            </div>
            <div className="flex flex-col items-center justify-center h-screen bg-green-50 flex-1">
                <div className="flex flex-col items-center my-8 mx-2">
                    <img className="w-16 mb-2" src="https://static-task-assets.react-formula.com/capstone_logo_dark.png" />
                    <div className="font-playfair text-emerald-700 text-2xl ">Plant Shop</div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default FormContainer;