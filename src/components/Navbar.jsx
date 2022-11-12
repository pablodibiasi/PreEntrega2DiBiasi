import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../imagenes/logoelemento.jpg'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand>
            {' '}
            <Link className="link" to={'/'}>
              {' '}
              <img src={logo} alt="logo" style={{ width: 120, height: 120 }} />
            </Link>{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="link" to={'/'}>
              {' '}
              <Button className="navbutton" variant="light">
                Inicio{' '}
              </Button>
            </Link>{' '}
            <Dropdown className="navbutton">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Categorias
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link className="link" to={'/categoria/Living'}>
                    Living
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="link" to={'/categoria/Dormitorio'}>
                    Dormitorio
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="link" to={'/categoria/Cocina'}>
                    {' '}
                    Cocina
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="link" to={'/categoria/Oficina'}>
                    Oficina
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>{' '}
            <Link className="link" to={'/Contacto'}>
              {' '}
              <Button className="navbutton" variant="light">
                Contacto{' '}
              </Button>
            </Link>{' '}
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  )
}

export default ColorSchemesExample
