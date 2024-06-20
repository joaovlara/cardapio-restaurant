import { Container, Row, Col, Button } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";

import styles from './filter.module.scss';

const Filter = () => {
  return (
    <section className={`d-flex justify-content-around align-items-center py-3 ${styles.filterSection}`}>
      <Container className={styles.filter}>
        <Row>
          <Col xs={12} md={8} className={`${styles.btnGroup} d-flex justify-content-around`}>
            <Button className="me-2">Vegano</Button>
            <Button className="me-2">Lamen</Button>
            <Button className="me-2">Sushi</Button>
            <Button className="me-2">Temaki</Button>
            <Button className="me-2">Sobremesa</Button>
            <Button className="me-2">Option 6</Button>
          </Col>
          <Col xs={12} md={4} className={`d-flex align-items-center order-md-2 ${styles.searchDiv}`}>
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
