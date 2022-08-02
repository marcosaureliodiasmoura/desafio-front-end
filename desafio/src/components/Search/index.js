import React, { useContext, useEffect, useState } from 'react';
import {
  Form
} from 'react-bootstrap';
import { ProductContext } from '../../hooks/product';

export default function Search(props) {
  const { products, setProducts } = useContext(ProductContext);

  const [filterProduct, setFilterProduct] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length) {
      setFilterProduct(products.filter(p => p.name
        .toLowerCase()
        .includes(search.toLowerCase())))
    }

    if(search.length > 0){
      setProducts(filterProduct); 
    }
  }, [search]);

  console.log(filterProduct)


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