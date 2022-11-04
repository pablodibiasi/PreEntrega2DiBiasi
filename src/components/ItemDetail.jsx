import React from 'react'
import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'

export default function ItemDetail({ item }) {
  const onAdd = (cantidad) => {
    alert(`El usuario agrego: ${cantidad}`)
  }
  return (
    <div>
      <Card style={{ width: '18rem', borderColor: 'brown', borderWidth: 3 }}>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            <p>descripcion:{item.description}</p>
            <p> precio:{item.price}</p>
            <p>Id de producto:{item.id}</p>
            <p>Muebles de {item.categoria}</p>
          </Card.Text>
          <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </Card.Body>
      </Card>
    </div>
  )
}
