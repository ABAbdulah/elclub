import React from 'react'
import MyNavbar from './MyNavbar';
import HeroSection from './HeroSection';
import BrandLogos from './BrandLogos';
import ProductPage from './ProductPage';
import ContactUs from './ContactUs';
import MyFooter from './MyFooter';
import AboutUs from './AboutUs';
function Home() {
  return (
    <div>
        
  <MyNavbar />
          <HeroSection />
          <BrandLogos />
          <AboutUs />
          <ProductPage />
        
          <ContactUs />
          <MyFooter />
          {/* <CheckoutPage/> */}

    </div>
  )
}

export default Home