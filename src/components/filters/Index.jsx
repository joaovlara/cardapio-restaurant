import { Container, Row, Col, Button } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";

import styles from './filter.module.scss';

const Filter = () => {
  return (
    <section className={`d-flex justify-content-around align-items-center py-3 ${styles.filterSection}`}>
      <Container className={styles.filter}>
        <Row>
          <Col xs={12} md={8} className={`${styles.btnGroup} d-flex justify-content-between`}>
            <Button
              variant="outline-primary"
              className="me-2 rounded-pill">Vegano</Button>
            <Button
              variant="outline-primary"
              className="me-2 rounded-pill">Lamen</Button>
            <Button
              variant="outline-primary"
              className="me-2 rounded-pill">Sushi</Button>
            <Button
              variant="outline-primary"
              className="me-2 rounded-pill">Temaki</Button>
            <Button
              variant="outline-primary"
              className="me-2 rounded-pill">Sobremesa</Button>
            <Button
              variant="outline-primary"
              className="me-2 rounded-pill">Option 6</Button>
          </Col>
          <Col xs={12} md={4} className={`d-flex align-items-center order-md-2 border-light ${styles.searchDiv}`}>
            <input className={`${styles.search} me-2`}
              type="search"
              placeholder="Search"
              aria-label="Search" />
            <CiSearch />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Filter;
