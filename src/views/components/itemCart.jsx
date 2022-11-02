
//React Redux
import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

//Actions
import { deleteItemCart, addDayToProf, removeDayFromProf, postCart } from "../../state/ducks/cart/actions"

//Bootstrap
import Dropdown from 'react-bootstrap/Dropdown'
import CloseButton from 'react-bootstrap/CloseButton'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'
import { useState } from "react"



export default function ItemCart () {


    const cliente = {
        id: "4264b59d-7df9-4669-869f-8a7340c51f2c",
        firstName: "primernombre",
        lastName: "apeido",
        phoneNumber: "kulikitakati",
        address: "kulikitakati",
        email: "kulikittaka@sacatiki.com",
        password: "1234567",
        profileImg: "https://img.icons8.com/fluency-systems-regular/96/000000/guest-male.png",
        enabled: true,
        cart: {
          id: "531b2e53-c73d-478d-8ebd-610e584ab27a"
        }
      }

    const items = useSelector((state) => state.cart.list)
    console.log(items, "items")

    const dispatch = useDispatch()
    

    const days = [{name: 'Lunes', id: 1},
                {name: 'Martes', id: 2},
                {name: 'Miercoles', id: 3},
                {name: 'Jueves', id: 4},
                {name: 'Viernes', id: 5},
                {name: 'Sabado', id: 6},
                ]

    const deleteItem = (id) => {
        dispatch(deleteItemCart(id))
    }
    
    const postItem = items.map(el => {
    
        return {
            clientId: cliente.id,
            professionalId: el.professional.id,
            days: el.days
        }
    }

        )
        console.log(postItem[0], "otro item")


    const postCarrito = (e) => {
       dispatch(postCart({cartId: "5b18ccd4-7342-457a-93a7-0814974967a6"}))

    }

    const deleteDay = ( id, day ) => {
        dispatch(removeDayFromProf( id, day ))
    }

    const selectDays = (id, day) => {
        dispatch(addDayToProf(id, day))
    }

    const orderDays = (dias) => {

        let newArray = dias.sort(( a, b ) => {
           return a.id - b.id
        })

        return newArray
    }

    const costoTotal = (items) => {
        let counter = 0

        items.forEach((item) => {
            counter = counter + (item.professional.dayPrice * item.quantity)
        })
        return counter
    }

    const precioPorItem = (item) => {
        let total = 0

        total = item.days.length * item.professional.dayPrice

        return total
    }

    return (
        <>
        {
            items ?
            items.map((item) => {
                return (
                <>
                <tbody>
                    <tr>
                    <td>{item.professional.firstName} {item.professional.lastName}</td>    
                    <td>{
                        item.professional.professions?.map((p) => {
                            return (
                            <td>
                                <Badge>{p.name}</Badge> 
                            </td>)
                        })
                        }
                    </td>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Selecciona los dias 
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    item.professional.availableDays.map((day) => {
                                       return (<Dropdown.Item onClick={() => selectDays(item.professional.id, day)}>{day}</Dropdown.Item>)
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                    <td>
                        {
                            item.days?orderDays(item.days).map((day) => {
                                return (
                                    <td>
                                        <Badge 
                                            style={{cursor: "pointer"}} 
                                            onClick={() => deleteDay(item.professional.id, day)}
                                            >{day}</Badge>
                                    </td>
                                )
                            })
                            :
                            <></>
                        }
                    </td>
                    <td style={{fontSize: "20px"}}>
                        {item.days?.length}
                    </td>
                    <td>
                        ${precioPorItem(item)}
                    </td>
                    <td>
                        <CloseButton variant="white" onClick={() => deleteItem(item)} />
                    </td>
                    <td>
                    <Container >
                <Button onClick={e => postCarrito(postItem)} variant="success">
                    Pasarela de Pago
                </Button> 
                 </Container>
                    </td>
                    </tr>
                    
                </tbody>
            </>)
            })

            :

            <></>
            }
            <Badge pill bg="warning" text="dark" style={{width: "150px", height: "40px", fontSize: "15px"}}>
                Costo Total: ${costoTotal(items)}
            </Badge>{' '}

            
        </>
    )
}