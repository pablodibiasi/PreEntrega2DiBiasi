import React, { useEffect, useState } from 'react'
import cajonera from '../imagenes/cajonera.jpg'
import mesa2 from '../imagenes/mesa2.jpg'
import mesa3 from '../imagenes/mesa3.jpg'
import mesa4 from '../imagenes/mesa4.jpg'
import mesa5 from '../imagenes/mesa5.jpg'
import mesaluz from '../imagenes/mesaluz.jpg'
import mesamovil from '../imagenes/mesamovil.jpg'
import mesaplegable from '../imagenes/mesaplegable.jpg'
import mesaRatona from '../imagenes/mesaRatona.jpg'
import vinoteca from '../imagenes/vinoteca.jpg'
import Item from './Item'

export default function ItemList() {
  let productos = [
    { id: 1, nombre: 'cajonera', precio: 10000, img: cajonera },
    { id: 2, nombre: 'mesa 2', precio: 10000, img: mesa2 },
    { id: 3, nombre: 'mesa 3', precio: 10000, img: mesa3 },
    { id: 4, nombre: 'mesa 4', precio: 10000, img: mesa4 },
    { id: 5, nombre: 'mesa 5', precio: 10000, img: mesa5 },
    { id: 6, nombre: 'mesa Luz', precio: 10000, img: mesaluz },
    { id: 7, nombre: 'mesa movil', precio: 10000, img: mesamovil },
    { id: 8, nombre: 'mesa plegable', precio: 10000, img: mesaplegable },
    { id: 9, nombre: 'mesa Ratona', precio: 10000, img: mesaRatona },
    { id: 10, nombre: 'vinoteca', precio: 10000, img: vinoteca },
  ]

  const [Catalogo, setCatalogo] = useState([])
  useEffect(() => {
    const fetching = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    })
    fetching
      .then((res) => {
        setCatalogo(res)
      })

      .catch((err) => console.log(err))
  }, [])
  return Catalogo.map((item) => {
    return (
      <div className="Cards" key={item.id}>
        <Item
          id={item.id}
          nombre={item.nombre}
          precio={item.precio}
          img={item.img}
        />
      </div>
    )
  })
}
