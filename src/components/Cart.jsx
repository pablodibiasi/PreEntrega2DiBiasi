import React from 'react'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export default function Cart() {
  const { cart, totalPrice } = useCartContext()
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
            <Button> finalizar compra </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
