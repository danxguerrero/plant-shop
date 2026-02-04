import { useContext, useEffect } from 'react';
import SessionContext from '@/contexts/SessionContext';
import { useNavigate } from 'react-router-dom';

const RedirectToSignInIfSignedOut = ({children}: any) => {

    const sessionContext = useContext(SessionContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionContext?.username === null) {
            navigate('/');
        } 
    }, [sessionContext?.username])

    return children
}

export default RedirectToSignInIfSignedOut;