import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";

import styles from './filter.module.scss';

const Filter = () => {
  const [filterTipo, setFilterTipo] = useState('');

  const handleFilterClick = (tipo) => {
    if (filterTipo === tipo) {
      setFilterTipo(''); 
    } else {
      setFilterTipo(tipo); 
    }
    console.log(`Filtro selecionado: ${tipo}`);
  };

  return (
    <section className={`d-flex justify-content-around align-items-center py-3 ${styles.filterSection}`}>
      <Container className={styles.filter}>
        <Row>
          <Col xs={12} md={8} className={`${styles.btnGroup} d-flex justify-content-between`}>
          <Button
              onClick={() => handleFilterClick('vegano')}
              variant="outline-primary"
              className="me-2 rounded-pill">Vegano</Button>
            <Button
              onClick={() => handleFilterClick('carne')}
              variant="outline-primary"
              className="me-2 rounded-pill">Carne</Button>
            <Button              
              onClick={() => handleFilterClick('camarao')}
              variant="outline-primary"
              className="me-2 rounded-pill">Camarão</Button>
            <Button
              onClick={() => handleFilterClick('peixe')}
              variant="outline-primary"
              className="me-2 rounded-pill">Peixe</Button>
            <Button
              onClick={() => handleFilterClick('massa')}
              variant="outline-primary"
              className="me-2 rounded-pill">Massa</Button>
            <Button
              onClick={() => handleFilterClick('doce')}
              variant="outline-primary"
              className="me-2 rounded-pill">Doce</Button>
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
