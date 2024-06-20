import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import cardapio from "..//../data/cardapio";
import styles from "./card.module.scss"

const CardGrid = () => {
  return (
    <Container>
      <Row>
        {Object.keys(cardapio).map((categoriaKey) => (
          <React.Fragment key={cardapio[categoriaKey].id}>
            <Col sm={12}>
              <h2>{categoriaKey.charAt(0).toUpperCase() + categoriaKey.slice(1)}</h2>
            </Col>
            {cardapio[categoriaKey].items.map((item) => (
              <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
                <Card
                  className={`${styles.customCard} rounded-0 card text-white bg-dark`}>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/100"
                    alt={item.nome}
                    className="card-img-top"
                  />
                  <Card.Body>
                    <Card.Title className="card-title">{item.nome}</Card.Title>
                    <Card.Text className="card-text">{item.descricao}</Card.Text>
                    <Card.Text className="card-price">R${item.preco}</Card.Text>
                    {item.vegano && (
                      <Card.Text className="card-vegano">Vegano</Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
}

export default CardGrid;
