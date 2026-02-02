import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import * as userService from '@/services/user'


const SignUpPage = () => {
    const [error,setError] = useState<string>("")
    const navigate = useNavigate();

    const onSubmit = async (values: {[key:string]: string}) => {
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

        const response = await userService.createUser(
            {username: values.username, password: values.password}
        )
        if (response.status == 201) {
            console.log("user created")
            setError('')
            navigate('/', {
                state: {
                    accountCreated: true
                }
            })
        } else {
            const data = await response.json()
            console.log(data)
            setError(data.error)
        }
        console.log(response)
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