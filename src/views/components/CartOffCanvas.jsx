
//React Redux
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//Components
import CartOffItem from './CartOffItem'

//Bootstrap
import { Offcanvas, Button } from 'react-bootstrap'
import { postingCart } from '../../state/ducks/cart/actions'
import { Modal, ModalBody } from 'react-bootstrap'




export default function CartOffCanvas({ estado, estadoBoolean }) {
  
  const cartItems = useSelector(state=> state.cart.list)
  const client = useSelector(state=>state.user)
  const[showModal,setShowModal]=useState(false)
  console.log(client)
  const dispatch = useDispatch()

  const [exitCanvas, setExit] = useState(false)

  const navigate = useNavigate()
  

  const onHideCart = ()=>{
    if(cartItems.map(i => i.quantity).includes(0)){
      return setExit(true)
    }
    estadoBoolean(estado = false)
    setExit(false)
  }


  useEffect(()=>{
    if(cartItems.length === 0){
      estadoBoolean(estado = false)
    }
  },[cartItems])




  return (
      <Offcanvas show={estado } onHide={onHideCart}>

      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Resumen Del Carrito</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body style={{display:'flex',flexDirection:'column',gap:'2rem'}}>

        {
          cartItems.map(({professional,quantity, days, idDb})=>{
            return (<CartOffItem idDb = {idDb? idDb : undefined} professional={professional} totalDays={quantity} days={days} exitCanvas={exitCanvas} />)
            })
        }
      
        <Button variant='success' onClick={()=> {
          if(client.id){
            dispatch(postingCart(cartItems,client.id))
          }
           navigate('/cart')}}>Realizar Compras</Button>
          
      </Offcanvas.Body>
      

    </Offcanvas>
  )
}
