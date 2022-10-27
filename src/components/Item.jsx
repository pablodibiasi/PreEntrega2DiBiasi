import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function Item({ id, nombre, precio, img }) {
  return (
    <div>
      <Card style={{ width: '18rem', borderColor: 'brown', borderWidth: 3 }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            <p> precio:{precio}</p>
            <p>id:{id}</p>
          </Card.Text>
          <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
