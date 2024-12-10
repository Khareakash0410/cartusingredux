import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Navbar />
     <Routes>

       <Route path='/' element={<Home />}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/profile' element={<Profile />}/>

     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
