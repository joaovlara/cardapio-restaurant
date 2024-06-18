import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './filter.module.scss'; 

const CardGrid = () => {
  const cards = [
    { title: 'Card 1', text: 'This is the first card.', price: '10.00', img: 'https://via.placeholder.com/150' },
    { title: 'Card 2', text: 'This is the second card.', price: '20.00', img: 'https://via.placeholder.com/150' },
    { title: 'Card 3', text: 'This is the third card.', price: '30.00', img: 'https://via.placeholder.com/150' },
    { title: 'Card 4', text: 'This is the fourth card.', price: '40.00', img: 'https://via.placeholder.com/150' },
    { title: 'Card 5', text: 'This is the fifth card.', price: '50.00', img: 'https://via.placeholder.com/150' },
    { title: 'Card 6', text: 'This is the sixth card.', price: '60.00', img: 'https://via.placeholder.com/150' }
  ];

  return (
    <Container>
      <Row>
        {cards.map((card, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={card.img} alt={card.title} className="card-img-top-custom" />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Card.Text className="text-muted">R$ {card.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardGrid;
