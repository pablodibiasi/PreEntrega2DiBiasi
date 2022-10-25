import React from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer({ greeting }) {
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
      <ItemCount />
    </>
  )
}
