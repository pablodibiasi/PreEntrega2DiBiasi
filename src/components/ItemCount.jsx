import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function ItemCount({ stock, initial, onAdd }) {
  const [contador, setContador] = useState(initial)

  return (
    <div>
      <p
        style={{
          backgroundColor: 'brown',
          color: 'white',
          borderRadius: 8,
          textAlign: 'center',
        }}
      >
        {' '}
        Solo quedan {stock - contador} unidades en stock{' '}
      </p>
      <Button
        onClick={() => {
          contador < stock ? setContador(contador + 1) : setContador(stock)
        }}
      >
        {' '}
        +{' '}
      </Button>
      <Button variant="danger" style={{ margin: '5px' }}>
        {contador}
      </Button>
      <Button
        onClick={() => {
          contador >= 2 ? setContador(contador - 1) : setContador(1)
        }}
      >
        {' '}
        -{' '}
      </Button>
      <button
        style={{
          backgroundColor: 'brown',
          color: 'white',
          borderRadius: 5,
          margin: 10,
          borderColor: 'brown',
        }}
        onClick={() => onAdd(contador)}
      >
        Agregar al carrito
      </button>{' '}
    </div>
  )
}
