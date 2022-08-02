import React, { useContext, useEffect, useState } from 'react';
import {
  Form
} from 'react-bootstrap';
import { ProductContext } from '../../hooks/product';

export default function Search(props) {
  const { products, setProducts } = useContext(ProductContext);

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length) {
      setProducts(products.filter(p => p.name
        .toLowerCase()
        .includes(search.toLowerCase())))
    }

  }, [search]);

  console.log(products)


  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{props.title}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Buscar produto"
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
        </Form.Group>
      </Form>
    </>
  )
}