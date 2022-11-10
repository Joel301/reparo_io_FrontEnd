

//React
import React, { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

//Redux
import { getAllProfessionals } from "../../state/ducks/professionals/actions"
import { getClientId } from "../../state/ducks/clients/actions";

//Bootstrap Material UI
import { Button, Badge, Container, Nav, Navbar, NavDropdown, Offcanvas, Dropdown, NavbarBrand } from "react-bootstrap"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//Components
import CartOffCanvas from "./CartOffCanvas"
import FormRegistro from "./Formularios/FormRegistro"
import LogSimpleCard from "./LogSimpleCard";

//Image 
import logoReparoio from "../pages/imgs/logo-reparoio.png"

import { fakeClient } from "./ClientProfile";
import LogIn from "./LogIn"
import { useAuth } from "../../Context/AuthContext"
import { logoutUser } from "../../state/ducks/users/actions"

function HeaderNavBar() {
  const { user, usersimple, logout } = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showFormprof, setshowFormprof] = useState(false)
  const [showFormClient, setshowFormClient] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const totalReserved = useSelector(state => state.cart.list)
  const total = useSelector(state => state.cart.total)
  const profesionales = useSelector((state) => state.professionals.allProfessionals)
  const userLogged = useSelector(state => state.user)
  const handleShow = (e) => {
    if (e.target.textContent === "Cliente") setshowFormClient(true)
    if (e.target.textContent === "Profesional") setshowFormprof(true)
  }
  const loginClose = () => setShowLoginForm(false)
  const handleClose = () => {
    setshowFormClient(false)
    setshowFormprof(false)

  }
  useEffect(() => {
    console.log(userLogged);
    
      
    if (profesionales[0] === undefined) {
      dispatch(getAllProfessionals())
    }
  }, [userLogged])


  const showProf = () => {setshowFormprof(false)
    setshowFormClient(false)};

  return (

    <Navbar sticky="top" expand="md" bg="primary" variant="dark">
      <Container>
        <Container>
          <Link to="/">

            <img style={{ width: "7%", paddingRight: "20px" }} src={logoReparoio} />

            <Navbar.Brand>Reparo.io</Navbar.Brand>
          </Link>
          <Link to="/home">
            <Navbar.Brand>Profesionales</Navbar.Brand>
          </Link>
          <LogSimpleCard />
        </Container>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav
            className="ms-auto"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            {userLogged?.id ? (
              <>
                <Dropdown

                >{console.log(user)}
                  <Dropdown.Toggle style={{
                    backgroundImage: `url(${userLogged?.profileImg || usersimple?.client?.profileImg || ""})`,
                    color: 'transparent',
                    backgroundSize: "cover",
                    height: "2rem",
                    width: "2rem",
                    borderRadius: "50%",
                    marginRight: "2rem",
                  }}  />
                  <Dropdown.Menu>
                    <Dropdown.Item
                    onClick={() =>
                      navigate(`details/me`)
                    }
                    >
                      Ir a Mi Perfil
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() =>{
                      dispatch(logoutUser())
                       logout()
                       localStorage.clear()
                       
                       navigate('/')
                       window.location.reload()
                      }}>
                      Cerrar Sesion
                    </Dropdown.Item></Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <> <LogIn show={showLoginForm} onClose={loginClose} />
                <NavbarBrand onClick={() => setShowLoginForm(true)}  style={{fontSize:'0.9rem',alignSelf:'center',cursor:'pointer'}}>Iniciar Sesion</NavbarBrand>
                <NavDropdown title="Regístrate" id="signin-nav-dropdown">
                  <NavDropdown.Item defaultValue="cliente" onClick={handleShow}>
                    Cliente
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    defaultValue="professional"
                    onClick={handleShow}
                  >
                    Profesional
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
            <Link to="/cart">
              <Button
                style={{
                  display: "flex",
                  height: "2rem",
                  alignItems: "center",
                }}
              >
                <ShoppingCartIcon />
                <Badge bg="danger">
                  {totalReserved.length > 0 ? totalReserved.length : null}
                </Badge>
              </Button>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
      <Offcanvas
        bg="dark"
        show={showFormprof}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Regístrate como profesional</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormRegistro onClose={showProf} />
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        bg="dark"
        show={showFormClient}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Regístrate como cliente</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormRegistro onClose ={showProf}isClient={true} />
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default HeaderNavBar;
