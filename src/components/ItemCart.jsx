import React from 'react'
import { useCartContext } from '../context/CartContext'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export default function ItemCart({ product }) {
  const { removeProduct } = useCartContext()
  const subTotal = () => product.quantity * product.price

  return (
    <div className="itemCart">
      <Card
        style={{
          width: '20rem',

          borderColor: 'brown',
          borderWidth: 3,
          margin: 10,
        }}
      >
        <Card.Img variant="top" src={product.pictureUrl} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            <p> precio: {product.price}</p>
            <p>cantidad : {product.quantity}</p>
            <p>Id de producto: {product.id}</p>
            <h3> subtotal: $ {product.quantity * product.price} </h3>
          </Card.Text>
          <Button
            style={{
              backgroundColor: 'white',
              borderColor: 'brown',
              borderRadius: 8,
            }}
          >
            {' '}
            <Link className="link" to={'/categoria/' + product.categoria}>
              ir atras{' '}
            </Link>
          </Button>{' '}
          <Button onClick={() => removeProduct(product.id)}>remover</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
