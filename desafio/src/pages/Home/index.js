import React, { useEffect, useState } from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import { Container, BoxProducts } from './styles';

//components
import Header from '../../components/Header'
import Product from '../../components/Product'

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  console.log(products);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Header />
          </Col>
          <h2>Produtos</h2>
          <BoxProducts>
            {products.map(item => {
              return <Product key={item.id} item={item} />
            })}
          </BoxProducts>
        </Row>
      </Container>
    </>
  );
}