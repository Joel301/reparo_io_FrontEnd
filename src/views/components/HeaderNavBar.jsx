import React from "react"
import { useState } from "react"
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap"
import FormProfession from "./Formularios/FormProfession"
import FormClient from "./Formularios/FormClient"
import { Link } from "react-router-dom"



function HeaderNavBar() {

  const [showFormprof, setshowFormprof] = useState(false)
  const [showFormClient, setshowFormClient] = useState(false)

  const handleShow = (e) => {

    console.log(e.target.textContent);
    if (e.target.textContent === "Cliente") setshowFormClient(true)
    if (e.target.textContent === "Profesional") setshowFormprof(true)
  }

  const handleClose = () => {
    setshowFormClient(false)
    setshowFormprof(false)
  }

  return (
    /////// esto es con react-bootstrap
    // desde el archivo ../../node_modules/bootstrap/_variables.scss cambio la paleta de colores
    //



    <Navbar sticky="top" expand="md" bg="primary" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Reparo.io</Navbar.Brand>
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
                Profesional
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Regístrate" id="signin-nav-dropdown">
              <NavDropdown.Item defaultValue='cliente' onClick={handleShow}>
                Cliente
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item defaultValue='professional' onClick={handleShow}>
                Profesional
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Offcanvas bg="dark" show={showFormprof} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Regístrate como prodesional</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormProfession />
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas bg="dark" show={showFormClient} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Regístrate como cliente</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormClient />
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default HeaderNavBar;