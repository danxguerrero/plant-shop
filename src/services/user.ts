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

