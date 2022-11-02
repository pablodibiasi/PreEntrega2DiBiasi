import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function ItemCount({ stock, initial, onAdd }) {
  const [contador, setContador] = useState(initial)

  return (
    <div>
      <ButtonGroup size="sm" className="mb-2">
        <Button
          onClick={() => {
            contador < stock ? setContador(contador + 1) : setContador(stock)
          }}
        >
          {' '}
          +{' '}
        </Button>
        <Button>{contador}</Button>
        <Button
          onClick={() => {
            contador > 0 ? setContador(contador - 1) : setContador(0)
          }}
        >
          {' '}
          -{' '}
        </Button>

        <button
          style={{ backgroundColor: 'brown', color: 'white', borderRadius: 8 }}
          onClick={() => onAdd(contador)}
        >
          Agregar al carrito
        </button>
      </ButtonGroup>
    </div>
  )
}
