import {useState} from 'react'
import AuthForm from './AuthForm'
import FormContainer from './FormContainer';
import { Link, useLocation } from 'react-router-dom';
import * as userService from '../../services/user'


const SignInPage = () => {
    const [error, setError] = useState<string>('');
    const location = useLocation();

    const onSubmit = async (values: {[key:string]: string}) => {


        const response = await userService.createSession(
            {username: values.username, password: values.password}
        )
        if (response.status == 201) {
            console.log("Sign in successful")
            setError('')
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
            {location.state?.accountCreated && <div className="p-4 mt-2 mb-8 bg-green-200 border border-emerald-500 text-emerald-700">
                Account created successfully. Please sign in.
                </div>}
            <AuthForm
                fields={[{ label: "username", type: "text" }, { label: "password", type: "password" }]}
                submitButtonLabel="Sign In"
                onSubmit={onSubmit}
            />
            <Link to="/sign-up" className="text-sm text-green-600 underline">Create an account</Link>
        </FormContainer>
    )
}

export default SignInPage;