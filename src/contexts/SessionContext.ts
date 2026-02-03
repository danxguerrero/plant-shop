import { createContext } from "react";

interface SessionContextType {
    username: string | null;
    signIn: (token:string) => void;
    signOut: () => void
}

const SessionContext = createContext<SessionContextType | null>(null);

export default SessionContext;