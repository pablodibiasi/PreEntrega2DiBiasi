import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../imagenes/logoelemento.jpg'
import CartWidjet from './CartWidjet'
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {' '}
            <img
              src={logo}
              alt="logo"
              style={{ width: 120, height: 120 }}
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">productos</Nav.Link>
            <Nav.Link href="#pricing">contacto</Nav.Link>
          </Nav>
          <CartWidjet />
        </Container>
      </Navbar>
    </>
  )
}

export default ColorSchemesExample
