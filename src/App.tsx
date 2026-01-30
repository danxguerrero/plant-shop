import {BrowserRouter, Routes, Route} from 'react-router-dom';

import SignUpPage from './pages/auth/SignUpPage';
import SignInPage from './pages/auth/SignInPage';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInPage/>}/>
        <Route path='/sign-up' element={<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
