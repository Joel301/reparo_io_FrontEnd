
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



export default function CartOffCanvas({ estado, estadoBoolean }) {
  
  const cartItems = useSelector(state=> state.cart.list)
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

  //INFORMACION DEL CLIENT HARDCODED
  let clientId="a270f3c5-10a8-4aec-a46f-e73e6e8fbdbc"



  return (
      <Offcanvas show={estado } onHide={onHideCart}>

      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Resumen Del Carrito</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body style={{display:'flex',flexDirection:'column',gap:'2rem'}}>

        {
          cartItems.map(({professional,quantity, days})=>{
            return (<CartOffItem professional={professional} totalDays={quantity} days={days} exitCanvas={exitCanvas} />)
            })
        }
      
        <Button variant='success' onClick={()=> {navigate('/cart')
      return dispatch(postingCart(cartItems,clientId))}}>Realizar Compras</Button>
      </Offcanvas.Body>

    </Offcanvas>
  )
}
