import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home Page</div>}/>
        <Route path='/sign-up' element={<div>Sign Up</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
