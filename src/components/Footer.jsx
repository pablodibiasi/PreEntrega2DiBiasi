import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export default function TextLinkExample() {
  return (
    <Navbar bg="warning" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Elemento madera</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Derechos reservados: Pablo Di Biasi 2022</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
