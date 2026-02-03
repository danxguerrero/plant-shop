import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import SignUpPage from './pages/auth/SignUpPage';
import SignInPage from './pages/auth/SignInPage';
import * as userService from '@/services/user'
import SessionContext from './contexts/SessionContext';
import PlantListPage from './pages/PlantListPage';

function App() {
  const [sessionToken, setSessionToken] = useState<string | null>(() => userService.getSessionTokenStorage());

  interface JwtPayload {
    username: string | null
  }

  const decoded: JwtPayload | null = sessionToken ? jwtDecode(sessionToken) : null

  const username = decoded ? decoded.username : null

  return (
    <SessionContext.Provider value={{
      username: username,
      signIn: (capstoneSessionToken: string) => {
        setSessionToken(capstoneSessionToken);
        userService.setSessionTokenStorage(capstoneSessionToken);
      },
      signOut: () => {
        setSessionToken(null);
        userService.removeSessionTokenStorage();
      },
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/plants' element={<PlantListPage/>} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  )
}

export default App
