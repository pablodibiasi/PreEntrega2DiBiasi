import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function item({
  id,
  title,
  description,
  price,
  pictureUrl,
  categoria,
}) {
  const onAdd = (cantidad) => {
    alert(`El usuario agrego: ${cantidad}`)
  }
  return (
    <>
      <Card style={{ width: '18rem', borderColor: 'brown', borderWidth: 3 }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p> precio: {price}</p>

            <p>Muebles de {categoria}</p>
          </Card.Text>
          <Button variant="outline-primary">
            <Link to={'/item/' + id}>Ir a detalles del producto</Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}
