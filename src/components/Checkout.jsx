import React from 'react'
import { useCartContext } from '../context/CartContext'

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import swal from 'sweetalert'
import { useState } from 'react'

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCartContext()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  //validar email
  function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (reg.test(email) == false) {
      swal({
        title: 'El formato de email no es valido',
        text: 'ejemplo: nombre@mail.com',
        icon: 'warning',
        button: 'cerrar',
        timer: 3000,
      })
      return false
    }
    return true
  }

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

    if (!nombre || !email || !telefono || !direccion) {
      swal({
        title: 'completa los campos requeridos',
        text: 'debes completar todos los campos',
        icon: 'warning',
        button: 'cerrar',
        timer: 3000,
      })
      return
    }
    if (validateEmail(email) == false) {
      return
    }
    addDoc(ordersCollection, order).then(
      ({ id }) =>
        swal({
          icon: 'success',
          title: 'pedido recibido con exito',
          text: 'Su codigo de pedido es: ' + id,
        }),
      clearCart(),
    )
  }

  console.log(order)

  return (
    <>
      <div
        style={{
          textAlign: 'center',
          margin: '20px',
          border: '3px solid brown',
          borderRadius: 5,
          padding: 10,
        }}
      >
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
        <Button onClick={handleClick}> generar pedido </Button>
      </div>
    </>
  )
}
