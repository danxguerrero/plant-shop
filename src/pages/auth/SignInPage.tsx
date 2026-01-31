import AuthForm from './AuthForm'
import FormContainer from './FormContainer';
import { Link } from 'react-router-dom';


const SignInPage = () => {
    return (
            <FormContainer>
                <AuthForm fields={[{ label: "username", type: "text" }, { label: "password", type: "password" }]} submitButtonLabel="Sign In" />
                <Link to="/sign-up" className="text-sm text-green-600 underline">Create an account</Link>
            </FormContainer>
    )
}

export default SignInPage;