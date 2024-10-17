import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/MyFooter.css'; // Custom CSS for footer
import logo from '../assets/Logo-nobg.png'
import { Link } from 'react-scroll';
function MyFooter() {
  return (
    <footer className="footer mt-auto py-3">
      <Container>
       
        {/* Contact Info */}
        <Row className="align-items-center contact-row">
          <Col xs={12} md={4} className="text-center text-md-left">
          <Link to="naving" spy={true} smooth={true} offset={-30} duration={20}>
            <img src={logo} alt="Company Logo" className="footer-logo mb-3" />
            </Link>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h5>Contact Us</h5>
            <p>Customer Service From Real People</p>
            <p>Phone: +17372711603</p>
            <p>Email: info@elclub.com</p>
          </Col>
        </Row>
        
        {/* Social Media & Legal */}
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="legal-text">© elclubllc. All rights reserved.</p>
            <p className="legal-text"><a href="https://www.linkedin.com/company/divlynx/">Powered by divlynx Inc.</a></p>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Terms & Conditions</a></li>
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#">Terms of Access</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
