import React, { useEffect, useState } from 'react'
import { getItem } from '../data/productos'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer({}) {
  const [prodDetalle, setProdDetalle] = useState([])
  useEffect(() => {
    const obtengoProductDet = new Promise((resolve, reject) => {
      resolve(getItem())
    })
    obtengoProductDet
      .then((res) => {
        console.log(res)
        setProdDetalle(res)
      })

      .catch((err) => console.log(err))
  }, [])

  return prodDetalle.map((item) => {
    return (
      <div className="Cards" key={item.id}>
        <ItemDetail item={item} />
      </div>
    )
  })
}
