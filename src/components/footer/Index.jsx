import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${styles.footer} py-3`}>
      <Container className='my-3'>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Contato</h5>
            <p>
              Endereço: Rua Exemplo, 123<br />
              Cidade, Estado<br />
              CEP: 12345-678
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Links Rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">Sobre</a></li>
              <li><a href="#services" className="text-white">Serviços</a></li>
              <li><a href="#contact" className="text-white">Contato</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Siga-nos</h5>
            <ul className="list-unstyled">
              <li><a href="#facebook" className="text-white">Facebook</a></li>
              <li><a href="#whatsApp" className="text-white">WhatsApp</a></li>
              <li><a href="#instagram" className="text-white">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <div className="footer-copyright text-center py-3">© 2024 Copyright Desenvolvido por
              <a href="https://www.linkedin.com/in/joaovlara/">  João Lara</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
