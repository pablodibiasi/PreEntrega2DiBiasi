import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function item({ id, title, description, price, pictureUrl }) {
  return (
    <div>
      <Card style={{ width: '18rem', borderColor: 'brown', borderWidth: 3 }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>descripcion:{description}</p>
            <p> precio:{price}</p>
            <p>id:{id}</p>
          </Card.Text>
          <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
