import { useContext, useEffect } from 'react';
import SessionContext from '@/contexts/SessionContext';
import { useNavigate } from 'react-router-dom';

const RedirectToPlantsIfSignedIn = ({children}: any) => {

    const sessionContext = useContext(SessionContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionContext?.username !== null) {
            navigate('/plants');
        } 
    }, [sessionContext?.username])

    return children
}

export default RedirectToPlantsIfSignedIn;