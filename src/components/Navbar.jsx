import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../imagenes/logoelemento.jpg'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand>
            {' '}
            <Link to={'/'}>
              {' '}
              <img src={logo} alt="logo" style={{ width: 120, height: 120 }} />
            </Link>{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <ul>
              <li>
                <Link to={'/'}>Inicio</Link>
              </li>
              <li>
                <Link to={'/Contacto'}>contacto</Link>
              </li>
              <li>
                {' '}
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    categorias
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to={'/categoria/living'}>living</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to={'/categoria/dormitorio'}>dormitorio</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to={'/categoria/cocina'}>cocina</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to={'/categoria/oficina'}>oficina</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  )
}

export default ColorSchemesExample
