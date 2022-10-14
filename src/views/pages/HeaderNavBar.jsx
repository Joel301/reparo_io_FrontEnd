import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
function HeaderNavBar() {
  return (
    /////// esto es con react-bootstrap
    // desde el archivo ../../node_modules/bootstrap/_variables.scss cambio la paleta de colores
    //

    <Navbar sticky="top" expand="md" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Reparo.io</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Nav className="ms-auto">
            <NavDropdown title="Login" id="login-nav-dropdown">
              <NavDropdown.Item href="#login/client">
                As Client
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#login/worker">
                As Worker
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sign In" id="signin-nav-dropdown">
              <NavDropdown.Item href="#signin/client">
                As Client
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#signin/worker">
                As Worker
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavBar;