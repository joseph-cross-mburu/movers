import React from 'react'
import "./App.css"
import { BrowserRouter,Route,Link,Routes,NavLink } from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/AboutUs'; 


const App = () => {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>cross</h1>
        <div id='links'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/aboutus"}>AboutUs</NavLink>
        </div>
      </nav>
    </header>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  )
}

export default App
