import React from 'react'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
export default function Cart() {
  const { cart, totalPrice } = useCartContext()

  const order = {
    buyer: {
      nombre: 'pablo',
      email: 'pablo@gmail.com',
      tel: '5555555',
      direccion: 'calle 1 555',
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

  console.log(cart)
  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h2>El carrito esta vacio</h2>
        <Link to="/">
          <Button> ir al catalogo </Button>
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
          <h2>Total: $ {totalPrice()}</h2>
          <Link to="/">
            <Button onClick={handleClick}> generar pedido </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
