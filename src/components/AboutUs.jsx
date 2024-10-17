import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutUsImage from '../assets/about-us.jpg'; // Replace with actual image path
import '../css/AboutUs.css'; // Add your styles here

const AboutUs = () => {
  return (
    <>
    <div id='about'>
    <Container className="about-us-section my-5">
      {/* Heading */}
      <div className="text-center mb-4">
        <div className='Heading'>
        <h1>About Us</h1>
        </div>
      </div>

      {/* About Content */}
      <Row className="align-items-center">
        {/* Image Section */}
        <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
          <Image 
            src={aboutUsImage} 
            alt="Happy Pets" 
            fluid 
             
            className="about-us-image" 
          />
        </Col>

        {/* Text Content Section */}
        <Col xs={12} md={6}>
          <h2>Welcome to El Club!</h2>
          <p className="text-muted my-3">
            At El Club, we are passionate about providing high-quality pet food and supplies that cater to your pets' nutritional needs. Whether you have a playful puppy, a curious kitten, or a senior companion, our products are designed to nourish and bring joy to your pets, ensuring they stay healthy and happy.
          </p>
          <h3 className="mt-4">Why Choose Us?</h3>
          <ul className="mt-3">
            <li><strong>Premium Quality:</strong> Our pet food is made with the finest ingredients, free from artificial additives, and packed with essential nutrients.</li>
            <li><strong>For Every Pet:</strong> From dry kibble to wet food, treats, and supplements, we offer a wide variety of products for dogs, cats, and small pets.</li>
            <li><strong>We Care:</strong> We’re a team of pet lovers who understand the importance of good nutrition. That's why every product is carefully selected to meet the highest standards.</li>
          </ul>
          <p className="my-3">
            Our mission is simple: To help pet parents provide the best for their furry friends, ensuring they live long, healthy, and fulfilling lives. Feel free to explore our website, browse our products, and reach out if you have any questions. We're always happy to help!
          </p>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
};

export default AboutUs;
