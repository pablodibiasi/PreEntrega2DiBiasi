import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function TextLinkExample() {
  return (
    <Navbar bg="warning" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Brand href="#home">Elemento madera</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Derechos reservados: <a href="#login">Pablo Di Biasi</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TextLinkExample
