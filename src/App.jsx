import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar';
import HeroSection from './Components/HeroSection';
import BrandLogos from './Components/BrandLogos';
import ProductPage from './components/ProductPage';
import ContactUs from './components/ContactUs';
import MyFooter from './Components/MyFooter';
import AboutUs from './components/AboutUs';
import { CartProvider } from './CartContext'; // Adjust the path according to your structure
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckoutPage from './components/Checkout';
import Home from './components/Home';

function App() {
  
  return (
    <CartProvider>
 
       
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/checkout" exact element={<CheckoutPage />} />
      </Routes>
   
        {/* </div> */}
    </CartProvider>
  );
}

export default App;
