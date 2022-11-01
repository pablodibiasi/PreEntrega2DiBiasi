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
    {
      id: 1,
      title: 'cajonera',
      description: '',
      price: 10000,
      pictureUrl: cajonera,
    },
    {
      id: 2,
      title: 'mesa 2',
      description: '',
      price: 10000,
      pictureUrl: mesa2,
    },
    {
      id: 3,
      title: 'mesa 3',
      description: '',
      price: 10000,
      pictureUrl: mesa3,
    },
    {
      id: 4,
      title: 'mesa 4',
      description: '',
      price: 10000,
      pictureUrl: mesa4,
    },
    {
      id: 5,
      title: 'mesa 5',
      description: '',
      price: 10000,
      pictureUrl: mesa5,
    },
    {
      id: 6,
      title: 'mesa Luz',
      description: '',
      price: 10000,
      pictureUrl: mesaluz,
    },
    {
      id: 7,
      title: 'mesa movil',
      description: '',
      price: 10000,
      pictureUrl: mesamovil,
    },
    {
      id: 8,
      title: 'mesa plegable',
      description: '',
      price: 10000,
      pictureUrl: mesaplegable,
    },
    {
      id: 9,
      title: 'mesa Ratona',
      description: '',
      price: 10000,
      pictureUrl: mesaRatona,
    },
    {
      id: 10,
      title: 'vinoteca',
      description: '',
      price: 10000,
      pictureUrl: vinoteca,
    },
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
  return Catalogo.map((items) => {
    return (
      <div className="Cards" key={items.id}>
        <Item
          id={items.id}
          title={items.title}
          description={items.description}
          price={items.price}
          pictureUrl={items.pictureUrl}
        />
      </div>
    )
  })
}
