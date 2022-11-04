import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../data/productos'
import item from './Item'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
  const { iditem } = useParams()
  const [prodDetalle, setProdDetalle] = useState([])

  useEffect(() => {
    const obtengoProductDet = new Promise((res, rej) => {
      res(getProduct())
    })
    obtengoProductDet
      .then((res) => {
        setProdDetalle(res.find((item) => item.id == iditem))
      })

      .catch((err) => console.log(err))
  }, [iditem])
  console.log(prodDetalle)
  return (
    <div className="Cards" key={prodDetalle.id}>
      <ItemDetail item={prodDetalle} />
    </div>
  )
}
