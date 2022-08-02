import React, { useContext } from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import { Container, BoxProducts } from './styles';

//components
import Header from '../../components/Header'
import Product from '../../components/Product'

import { ProductContext } from '../../hooks/product';

export default function Home() {
  const { products } = useContext(ProductContext);

  return (
    <>
      <Container>  
        <Row>
          <Col xs={12}>
            <Header/>
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