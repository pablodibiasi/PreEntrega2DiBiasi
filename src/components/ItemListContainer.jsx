import React, { useEffect, useState } from 'react'
import { getProducts } from '../data/productos'
import ItemList from './ItemList'

export default function ItemListContainer({}) {
  const [Catalogo, setCatalogo] = useState([])
  useEffect(() => {
    const obtengoProductos = new Promise((resolve, reject) => {
      resolve(getProducts())
    })
    obtengoProductos
      .then((res) => {
        setCatalogo(res)
      })

      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <ItemList Catalogo={Catalogo} />
    </>
  )
}
