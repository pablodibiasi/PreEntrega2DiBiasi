import React from 'react'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Cart() {
  const { cart, totalPrice } = useCartContext()

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
      </div>
      <h2>Total a pagar: $ {totalPrice()}</h2>
      <Link to="/checkout">
        {' '}
        <Button> ir al checkout</Button>
      </Link>
    </>
  )
}
