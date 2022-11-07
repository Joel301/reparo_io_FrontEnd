

//React
import React, { useEffect } from "react"
import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

//Redux
import { getAllProfessionals } from "../../state/ducks/professionals/actions"
import { getClientId } from "../../state/ducks/clients/actions";

//Bootstrap Material UI
import { Button, Badge, Container, Nav, Navbar, NavDropdown, Offcanvas, Dropdown } from "react-bootstrap"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//Components
import CartOffCanvas from "./CartOffCanvas"
import FormRegistro from "./Formularios/FormRegistro"
import LogSimpleCard from "./LogSimpleCard";

//Image 
import logoReparoio from "../pages/imgs/logo-reparoio.png"

import { fakeClient } from "./DetailClient";
import LogIn from "./LogIn"
import { useAuth } from "../../Context/AuthContext"

function HeaderNavBar() {
  const {user,usersimple,logout}=useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showFormprof, setshowFormprof] = useState(false)
  const [showFormClient, setshowFormClient] = useState(false)
  const [showLoginForm,setShowLoginForm]= useState(false)
  const totalReserved = useSelector(state => state.cart.list)
  const total = useSelector(state => state.cart.total)
  const profesionales = useSelector((state) => state.professionals.allProfessionals)
  const userLogged =useSelector(state=>state.user)
  const handleShow = (e) => {
    if (e.target.textContent === "Cliente") setshowFormClient(true)
    if (e.target.textContent === "Profesional") setshowFormprof(true)
  }
  const loginClose= ()=> setShowLoginForm(false)
  const handleClose = () => {
    setshowFormClient(false)
    setshowFormprof(false)

  }
  useEffect(() => {
    console.log(userLogged);

    if (profesionales[0] === undefined) {
      dispatch(getAllProfessionals())
    }
  }, [user])


  const showProf = (boolean) => setshowFormprof(boolean);

  return (  


    <Navbar sticky="top" expand="md" bg="primary" variant="dark">
      <Container>
        <Container>
          <Link to="/">

            <img style={{ width: "5%" }} src={logoReparoio} />

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
            {usersimple?.hasOwnProperty("uid") ? (
              <>
                <Dropdown
                  
                >
                  <Dropdown.Toggle style={{
                    backgroundImage: `url(${user?.photoURL})`,
                    color:'transparent',
                    backgroundSize: "cover",
                    height: "2rem",
                    width: "2rem",
                    borderRadius: "50%",
                    marginRight: "2rem",
                  }} /* onClick={showProfile} *//>
                    <Dropdown.Menu>
                  <Dropdown.Item
                    // onClick={() =>
                    //   navigate(`details/client/${loggedClient.id}`)
                    // }
                  >
                    Ir a Mi Perfil
                  </Dropdown.Item>
                  <Dropdown.Item onClick={()=>logout()}>
                    Cerrar Sesion
                  </Dropdown.Item></Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <> <LogIn show={showLoginForm} onClose={loginClose} />
                <NavDropdown title="Iniciar Sesion" id="login-nav-dropdown">
                  <NavDropdown.Item onClick={()=>setShowLoginForm(true)}
                  > Login
                 
                  </NavDropdown.Item>
               
                </NavDropdown>
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
          <Offcanvas.Title>Regístrate como prodesional</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormRegistro />
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
          <FormRegistro isClient={true} />
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default HeaderNavBar;
