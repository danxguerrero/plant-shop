import {useState} from 'react'
import {Link} from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";


const SignUpPage = () => {
    const [error,setError] = useState<string>("")
    const onSubmit = (values: {[key:string]: string}) => {
        if (values.username.length < 4) {
            setError("Username too short");
            return;
        } 

        if (values.password.length < 4) {
            setError("Password too short");
            return;
        }

        if (values.password !== values["confirm password"]) {
            setError("Passwords do not match");
            return;
        }
    }

    return (
        <FormContainer>
            <div className="text-red-700 font-lato">{error}</div>
            <AuthForm
                fields={[
                    { label: "username", type: "text" },
                    { label: "password", type: "password" },
                    { label: "confirm password", type: "password" }]} 
                submitButtonLabel="Create Account" 
                onSubmit={onSubmit}
            />
            <Link to="/" className="text-sm text-green-600 underline">Already have an account? Sign in</Link>
        </FormContainer>
    )
}

export default SignUpPage;