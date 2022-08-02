/**
 * @desc [Componente do Produto em lista]
 */
import React from 'react';
import { BoxCard, Price } from './styles';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product(props) {

    return(
        <BoxCard>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${props.item.avatar}`} />
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>
                    {props.item.desciption} 
                    <Price>{props.item.price}</Price>
                    </Card.Text>
                    <Button variant="primary">Adicionar ao carrinho</Button>
                </Card.Body>
            </Card>
        </BoxCard>
    );
}