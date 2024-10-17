import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/ContactUs.css'; // Custom styles for ContactUs

function ContactUs() {
  return (
    <>
    <div id='contact'>
    <Container className="contact-container my-5">
      <Row>
        <Col xs={12} className="text-center mb-4">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Please fill out the form below for any queries or feedback.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter the subject" required />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Queries</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Write your message" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="bgcolor-butt w-100" style={{backgroundColor: '#001f3f' }}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
}

export default ContactUs;
