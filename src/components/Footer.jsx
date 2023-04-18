import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="bg-light mt-5">
      <Row>
        <Col className="text-center">
          <p>&copy; 2023 My App</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
