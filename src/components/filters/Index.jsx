import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styles from './filter.module.scss';

const Filter = () => {
  return (
    <section className={`d-flex justify-content-around align-items-center py-3 ${styles.filterSection}`}>
      <Container className={styles.filter}>
        <div className={styles.btnGroup}>
          <Button className="me-2">Option 1</Button>
          <Button className="me-2">Option 2</Button>
          <Button className="me-2">Option 3</Button>
          <Button className="me-2">Option 4</Button>
          <Button className="me-2">Option 5</Button>
          <Button className="me-2">Option 6</Button>
        </div>
        <input className={styles.search} type="search" placeholder="Search" aria-label="Search" />
      </Container>
    </section>
  );
}

export default Filter;
