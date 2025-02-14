import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx';
import Cart from './Pages/Cart/Cart.jsx';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
