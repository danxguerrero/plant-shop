import apiFetch from './apiFetch'

export const createUser = ({ username, password }: { username: string; password: string }) =>
    apiFetch('POST', '/users', {
        username: username,
        password: password,
    }
    );

export const createSession = ({ username, password }: { username: string; password: string }) =>
    apiFetch('POST', '/users/session', {
        username: username,
        password: password,
    }
    );

const CAPSTONE_SESSION_STORAGE_KEY = 'capstone_session_token' 
    
export const setSessionTokenStorage = (capstoneSessionToken: string): void => {
    localStorage.setItem(CAPSTONE_SESSION_STORAGE_KEY, capstoneSessionToken);
}

export const getSessionTokenStorage = ():string | null => {
    return localStorage.getItem(CAPSTONE_SESSION_STORAGE_KEY);
} 

export const removeSessionTokenStorage = (): void => {
    localStorage.removeItem(CAPSTONE_SESSION_STORAGE_KEY);
}
