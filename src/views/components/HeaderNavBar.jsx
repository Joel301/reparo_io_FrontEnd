import React, { useEffect } from "react"
import { useState } from "react"
import { Button,Badge, Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap"
import FormProfession from "./Formularios/FormProfession"
import FormClient from "./Formularios/FormClient"
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logoReparoio from "../pages/imgs/logo-reparoio.png"
import { useDispatch,useSelector } from "react-redux"
import { getAllProfessionals } from "../../state/ducks/professionals/actions"
import CartOffCanvas from "./CartOffCanvas"
function HeaderNavBar() {
  const dispatch = useDispatch()
  const [showFormprof, setshowFormprof] = useState(false)
  const [showFormClient, setshowFormClient] = useState(false)
  const totalReserved = useSelector(state=>state.cart.list)
  const total = useSelector(state=>state.cart.total)
  const profesionales = useSelector((state)=> state.professionals.allProfessionals)
  const handleShow = (e) => {

    console.log(e.target.textContent);
    if (e.target.textContent === "Cliente") setshowFormClient(true)
    if (e.target.textContent === "Profesional") setshowFormprof(true)
  }

  const handleClose = () => {
    setshowFormClient(false)
    setshowFormprof(false)
 
  }
  useEffect(()=>{
    console.log(total)
    console.log(totalReserved.length)
    if(profesionales[0]=== undefined){
      dispatch(getAllProfessionals())
    }
  },[])

  const showProf = (boolean) => setshowFormprof(boolean)

  return (
    /////// esto es con react-bootstrap
    // desde el archivo ../../node_modules/bootstrap/_variables.scss cambio la paleta de colores
    //



    <Navbar sticky="top" expand="md" bg="primary" variant="dark">
      <Container>
        <Container>
          <Link to="/">
            <img
            style={{width: "5%"}}
              src={logoReparoio}
            />
            <Navbar.Brand>Reparo.io</Navbar.Brand>
          </Link>
          <Link to="/home">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
        </Container>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Nav className="ms-auto" style={{display:'flex',justifyContent:'space-around'}}>
            <NavDropdown title="Iniciar Sesion" id="login-nav-dropdown">
              <NavDropdown.Item disabled href="#login/client">
                Cliente
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Profesional
              </NavDropdown.Item > 
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
            <Link to='/cart'>
            <Button  style={{display:'flex',height:'2rem',alignItems:'center'}}>
             <ShoppingCartIcon/><Badge  bg='danger'>{totalReserved.length>0?totalReserved.length:null}</Badge>
            </Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Offcanvas bg="dark" show={showFormprof} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Regístrate como prodesional</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormProfession showProf={showProf} state={showFormprof} />
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