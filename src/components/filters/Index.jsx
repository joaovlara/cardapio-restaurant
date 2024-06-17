import React from 'react';
import { Container, ButtonGroup, Button, Form, Row, Col } from 'react-bootstrap';

const Filter = () => {
  return (
    <section className="filter">
      <Container>
            <Button variant="secondary">Option 1</Button>
            <Button variant="secondary">Option 2</Button>
            <Button variant="secondary">Option 3</Button>
            <Button variant="secondary">Option 4</Button>
            <Button variant="secondary">Option 5</Button>
            <Button variant="secondary">Option 6</Button>
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
            />
      </Container>
    </section>
  );
}

export default Filter;
