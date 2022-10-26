import React from 'react'

import { Offcanvas } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
function CartOffCanvas({estado,estadoBoolean}) {
  
  return (
    <Offcanvas show={estado } onHide={()=>estadoBoolean(estado=false)}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Resumen Del Carrito</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default CartOffCanvas