import React from 'react'

import ItemList from './ItemList'
// import ItemCount from './ItemCount'

export default function ItemListContainer({}) {
  // const onAdd = (cantidad) => {
  //   alert(`El usuario agrego: ${cantidad}`)
  // }

  return (
    <>
      {/* <div
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
      <ItemCount stock={10} initial={1} onAdd={onAdd} /> */}
      <ItemList />
    </>
  )
}
