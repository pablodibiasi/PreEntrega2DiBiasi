import React from 'react'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

import { useState } from 'react'

export default function Cart() {
  const { cart, totalPrice } = useCartContext()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')

  const order = {
    buyer: {
      nombre: nombre,
      email: email,
      telefono: telefono,
      direccion: direccion,
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  }

  const handleClick = () => {
    //instancia de firestore
    const db = getFirestore()

    //referencia a una collection
    const ordersCollection = collection(db, 'orders')
    //promesa addDoc

    addDoc(ordersCollection, order).then(({ id }) => console.log(id))
  }

  console.log(order)
  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h2>El carrito esta vacio</h2>
        <Link to="/">
          <Button> ir al catalogo de productos</Button>
        </Link>
      </div>
    )
  }
  return (
    <>
      {' '}
      <div className="carrito">
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
        <div
          style={{
            textAlign: 'center',
            margin: '20px',
            border: '3px solid brown',
            borderRadius: 5,
            padding: 10,
          }}
        >
          {' '}
          <h2>Total a pagar: $ {totalPrice()}</h2>
          <div>
            <input
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <input
              placeholder="Direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <Link to="/">
            <Button onClick={handleClick}> generar pedido </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
