import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';

const Filter = () => {
  return (
    <section className="filter">
      <Container className="d-flex justify-content-around align-items-center py-3 ">
          <Button className="me-2">Option 1</Button>
          <Button className="me-2">Option 2</Button>
          <Button className="me-2">Option 3</Button>
          <Button className="me-2">Option 4</Button>
          <Button className="me-2">Option 5</Button>
          <Button className="me-2">Option 6</Button>
        <Form className="d-flex w-50">
          <Form.Control
            type="text"
            placeholder="Search"
            className="w-90"
          />
        </Form>
      </Container>
    </section>
  );
}

export default Filter;
