import React from "react"
import { useState } from "react"
import { Container, Nav, Navbar, NavDropdown,Offcanvas } from "react-bootstrap"
import FormProfession from "./Formularios/FormProfession"
import { Link } from "react-router-dom"



function HeaderNavBar() {
  
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  
  return (
    /////// esto es con react-bootstrap
    // desde el archivo ../../node_modules/bootstrap/_variables.scss cambio la paleta de colores
    //
    
  

    <Navbar sticky="top" expand="md" bg="primary" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Reparo.io</Navbar.Brand>
        </Link>
        <Link to="/home">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Nav className="ms-auto">
            <NavDropdown title="Login" id="login-nav-dropdown">
              <NavDropdown.Item disabled href="#login/client">
                Cliente
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Profesionla
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sign In" id="signin-nav-dropdown">
              <NavDropdown.Item disabled href="#signin/client">
                Cliente
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleShow}>
                Profesional
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Offcanvas bg="dark" show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Regístrate</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormProfession/>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default HeaderNavBar;