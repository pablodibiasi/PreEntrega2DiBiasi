import React from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer({ greeting }) {
  const onAdd = (cantidad) => {
    alert(`El usuario agrego: ${cantidad}`)
  }
  return (
    <>
      <div
        style={{
          backgroundColor: 'Brown',
          color: 'yellow',
          textAlign: 'center',
          height: 250,
          fontSize: 50,
        }}
      >
        {greeting}
      </div>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </>
  )
}
