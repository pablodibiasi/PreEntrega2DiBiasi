import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'
import { getProducts } from '../data/productos'
import ItemList from './ItemList'

export default function ItemListContainer({}) {
  const { idcategoria } = useParams()
  const [Catalogo, setCatalogo] = useState([])

  useEffect(() => {
    const obtengoProductos = new Promise((resolve, reject) => {
      resolve(getProducts())
    })
    obtengoProductos
      .then((res) => {
        if (idcategoria) {
          setCatalogo(res.filter((item) => item.categoria == idcategoria))
        } else {
          setCatalogo(res)
        }
      })

      .catch((err) => console.log(err))
  }, [idcategoria])
  return (
    <>
      {!Catalogo.length && <Spinner animation="grow" />}
      <ItemList Catalogo={Catalogo} />
    </>
  )
}
