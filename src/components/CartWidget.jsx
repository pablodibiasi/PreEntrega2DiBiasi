import React from 'react'
import { Cart } from 'react-bootstrap-icons'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
export default function CartWidget() {
  return (
    <div>
      <Button variant="secondary">
        <Cart color="white" size={45} /> <Badge bg="secondary">0</Badge>
      </Button>
    </div>
  )
}
