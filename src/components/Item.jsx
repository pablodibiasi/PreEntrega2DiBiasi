import React from 'react'

import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'

export default function item({ id, title, description, price, pictureUrl }) {
  const onAdd = (cantidad) => {
    alert(`El usuario agrego: ${cantidad}`)
  }
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
          <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </Card.Body>
      </Card>
    </div>
  )
}
