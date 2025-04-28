import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import ProductDetail from './Pages/ProductDetail/ProductDetail.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import RegisterPage from './Pages/RegisterPage/RegisterPage.jsx';
import UserProfile from './Pages/UserProfile/UserProfile.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import PrivacyPolicy from './Pages/PrivacyPolices/PrivacyPolicy.jsx';
import TermsAndConditions from './Pages/T&C/TermsAndConditions.jsx';

function App() {

  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route element={<ProtectedRoute/>}>
        <Route path="/profile" element={<UserProfile/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/privacyPolicies" element={<PrivacyPolicy/>}></Route>
        <Route path="/t&c" element={<TermsAndConditions/>}></Route>
        </Route>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/ProductDetails/:ProductId" element={<ProductDetail/>}></Route>

        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
