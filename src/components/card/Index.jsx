import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import cardapio from "../../data/cardapio";
import img from "../../assets/img/100.png";

const CardGrid = ({ filterTipo }) => {
  return (
    <Container>
      <Row>
        {Object.keys(cardapio).map((categoriaKey) => (
          <React.Fragment key={cardapio[categoriaKey].id}>
            {cardapio[categoriaKey].items
              .filter((item) => filterTipo === '' || item.tipo.includes(filterTipo))
              .map((item) => (
                <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
                  <Card className={`rounded-0`} bg="dark" text="white">
                    <Card.Img variant="top" src={item.img} alt={item.nome} className={`rounded-0`} />
                    <Card.Body>
                      <Card.Title>{item.nome}</Card.Title>
                      <Card.Text className="text-light">{item.descricao}</Card.Text>
                      <Card.Text className="font-weight-bold">R${item.preco}</Card.Text>
                      {item.tipo.includes("vegano") && (
                        <Card.Text className="text-success font-weight-bold">Vegano</Card.Text>
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
