import React from 'react'
import {Link, Route, Routes} from "react-router";
import Contact from './component/Contact';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Bca from './component/Bca';
import Mca from './component/Mca';

const App = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link> */}

      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}>
            <Route path='bca' element={<Bca/>}/>
            <Route path='mca' element={<Mca/>} />
          </Route>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
