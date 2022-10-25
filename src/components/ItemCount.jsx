import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
export default function ItemCount() {
  return (
    <div>
      <ButtonGroup size="lg" className="mb-2">
        <Button>+</Button>
        <Button>cont</Button>
        <Button>-</Button>
      </ButtonGroup>
    </div>
  )
}
