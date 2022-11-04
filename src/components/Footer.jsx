import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <Navbar bg="warning" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to={'/'}>elemento madera</Link>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Derechos reservados: Pablo Di Biasi 2022</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
