import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../assets/griz.png';
import img2 from '../assets/NB.png';
import img3 from '../assets/nulo.png';
import img4 from '../assets/plato.png';
import img5 from '../assets/precise.png';
import img6 from '../assets/verus.jpg';
import img7 from '../assets/earthnborn.jpg';
import img8 from '../assets/farmina.png';
import img9 from '../assets/holistic.jpg';
import img10 from '../assets/acana.png';
import '../css/BrandLogos.css'

function BrandLogos() {
  const logos = [img1, img2, img3, img4, img5, img6, img7,img8,img9,img10]; // Array representing the logos

  return (
    <>
     {/* <Col xs={12} md={6}>
     <div className='wedeal'>
      <h1>We Deal in...</h1>
    </div>
    </Col> */}
    <Container className="my-5">
    <Row className="justify-content-center align-items-center">
          <Col xs={12} className="text-center mb-4">
            <h1>We Deal in...</h1>
          </Col>
        </Row>
      <Row className="justify-content-center align-items-center">
        {logos.map((logo, index) => (
          <Col key={index} xs={6} md={2} className="text-center">
            <img
              src={logo} // Use the imported logo directly
              alt={`Logo ${index + 1}`} // Alt text to describe the logo
              className="img-fluid" // Bootstrap class for responsive images
            />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default BrandLogos;
