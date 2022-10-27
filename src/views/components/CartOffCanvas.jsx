import React from 'react'
import CartOffItem from './CartOffItem'
import { Modal, Offcanvas } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
function CartOffCanvas({estado,estadoBoolean}) {
  const cartItems = useSelector(state=> state.cart.list)
  const [noDaysAlert,setNoDaysAlert] = useState(false) // este estado se creo para mostrar el mensaje de error si ningun dia fue seleccionado
  const onHideCart = ()=>{
    if(cartItems.filter((item)=>item.quantity===0).length>0){
      
      return setNoDaysAlert(true)
    }

    estadoBoolean(estado=false)
  }
  useEffect(()=>{
    if(cartItems.length===0){
      estadoBoolean(estado=false)
    }
    
  },[cartItems])

  return (
    <Offcanvas show={estado } onHide={onHideCart}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Resumen Del Carrito</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
      {cartItems.map(({professional,quantity, days})=>{
        return (<CartOffItem professional={professional} totalDays={quantity} days={days} />)
})}
    </Offcanvas.Body>
    <Modal  style={{color:'white'}} show={noDaysAlert} onHide={()=>setNoDaysAlert(false)}>
        <Modal.Header style={{backgroundColor:' #CC6666'}} closeButton>
          <Modal.Title>No se puede realizar esta accion!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:' #CC6666'}}>Debes seleccionar los dias de tu profesional para seguir navegando</Modal.Body>
        <Modal.Footer style={{backgroundColor:' #CC6666'}}/>
      </Modal>
  </Offcanvas>
  )
}

export default CartOffCanvas