import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/Logo-nobg.png';

function CheckoutNavbar() {
  return (
    <div>
      <Navbar style={{ backgroundColor: '#001f3f' }} variant="dark" expand="lg" className="py-0">
        <Navbar.Brand href="/" style={{ marginLeft: '40px' }}>
          <img
            src={logo}
            alt="ElClub Logo"
            style={{ height: '80px' }}
          />
        </Navbar.Brand>
        <Nav className="ms-auto" style={{ marginRight: '50px' }}>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default CheckoutNavbar;
