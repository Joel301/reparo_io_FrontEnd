
//React Redux
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

//Actions
import { deleteItemCart, addDayToProf, removeDayFromProf, getMercadoPagoLink, postCart, deleteOrder } from "../../state/ducks/cart/actions"

//Bootstrap
import Dropdown from 'react-bootstrap/Dropdown'
import CloseButton from 'react-bootstrap/CloseButton'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

import axios from "axios"

//PARA REMOVER DIAS EN DBCART
async function removeDay (day,idDb) {
    try {
        await axios.patch(
            `https://reparoiobackend-main.up.railway.app/api/cart/${idDb}`,
            {
              type: "remove",
              day,
            }
          );
         
    } catch (error) {
        console.log(error)
    }
}

//PARA AGREGAR DIAS EN DBCART
async function addDay (day,idDb) {
    try {
        await axios.patch(
            `https://reparoiobackend-main.up.railway.app/api/cart/${idDb}`,
            {
              type: "add",
              day,
            }
          );
         
    } catch (error) {
        console.log(error)
    }
}



export default function ItemCart () {

    const cliente = useSelector(state=>state.user)
    const items = useSelector((state) => state.cart.list)
    const order = useSelector((state) => state.cart.order)
    const url = useSelector((state) => state.cart.url)


    let id = order ? order.newOrder.id : ""


    const [component, setComponent] = useState('')
    const [show, setShow] = useState(false)
    const [name, setName] = useState("")

    function handleInputChange(e) {
      e.preventDefault(e)
      setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        // dispatch(getProfesional(name))
    }

    const handleClose = () => setShow(false)

    const dispatch = useDispatch()


    const deleteItem = (item) => {
        dispatch(deleteItemCart(item))
    }
    
    const postItem = items.map(el => {
        return {
            clientId: cliente.id,
        }
    })

    const postCarrito = (e) => {
        setComponent("resumen")
        setShow(true)
        dispatch(postCart({cartId: cliente.cartId}))
    }

    const deleteDay = ( id, day, idDb) => {
        removeDay(day,idDb)
        dispatch(removeDayFromProf( id, day))
    }

    const selectDays = (id, day, idDb) => {
        addDay(day,idDb)
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
        
        items.map((item) => {

            counter = counter + (item.professional.dayPrice * item.days.length)
            return counter

        })

        return counter
    }

    const precioPorItem = (item) => {
        let total = 0

        total = item.days.length * item.professional.dayPrice

        return total
    }

    const payItems = (profesionales) => {


        const itemsMercadoPago =  {
                orderId: order.newOrder.id, //falta reveer
                clientId: cliente.id,
                items: [{
                    title: `Order ${order.newOrder.id}`,
                    price: order.newOrder.amount,
                    quantity: 1
                }]
            }
    

        dispatch(getMercadoPagoLink(itemsMercadoPago))
    }

    //PARA BORRAR LA ORDEN DE COMPRA DEL HISTORIAL DEL CLIENT
    const deleteOrderHandler = (orderId) => {
        handleClose()
        dispatch(deleteOrder(orderId))
        handleClose()
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
                                       return (<Dropdown.Item onClick={() => selectDays(item.professional.id, day,item.idDb)}>{day}</Dropdown.Item>)
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
                                            onClick={() => deleteDay(item.professional.id, day,item.idDb)}
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
            <Container>
                {
                    items.length > 0 
                    ? 
                    <Button variant="success" value='resumen'  onClick={() => postCarrito(postItem)}>
                        Resumen de la compra
                    </Button> 
                    :
                     <></>
                }
                
            </Container>

            {
                component === 'resumen' ?
                <>
                    <Modal show={show}  animation={false}>
                        <Modal.Header >
                            <Modal.Title>Resumen de la Compra</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Profesiones</th>
                                        <th>Dias Seleccionados</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>
                                {
                                    items ?
                                    items.map((item) => {
                                        return (
                                            <tbody>
                                                <tr>
                                                <td>{item.professional.firstName} {item.professional.lastName}</td>
                                                <td>{
                                                    item.professional.professions?.map((p) => {
                                                        return (
                                                        
                                                            <Badge style={{cursor: "default"}}>{p.name}</Badge> 
                                                        )
                                                    })
                                                    }
                                                </td>
                                                <td>
                                                {
                                                    item.days.map((day) => {
                                                    return (
                                                    <td>
                                                        <Badge style={{cursor: "default"}}>{day}</Badge>
                                                    </td>)
                                                    })
                                                }
                                                </td>
                                                    <td>${precioPorItem(item)}</td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                    : 
                                    <>Error, no se puede ejecutar la compra </>
                                }
                            </Table>
                        </Modal.Body>

                        <Modal.Footer style={{display: "flex", justifyContent: "flex-start"}}>
                            <h5>Direccion : {cliente.address}</h5>
                            <br/>
                            <h5>Email : {cliente.email}</h5>
                            {/* <Form.Label htmlFor="inputCambiarDireccion">¿ Desea cambiar de direccion ? Indique aqui...</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputCambiarDireccion"
                                placeholder="Nueva direccion..."
                                onChange={(e) => handleInputChange(e)}
                            />
                            <Button
                                type="submit"
                                variant="outline-success"
                                onClick={(e) => handleSubmit(e)}
                            >
                                Buscar
                            </Button> */}
                        </Modal.Footer>

                        <Modal.Footer style={{marginTop: "10px"}}>
                            <h2>Total = ${costoTotal(items)}</h2> 
                        </Modal.Footer>

                        <Modal.Footer>
                            <Button variant='danger' onClick={() => deleteOrderHandler(id)}>
                                Cancelar compra
                            </Button>
                            <Button variant="primary" onClick={() => payItems(items)}>
                                Solicitar Pago
                            </Button>
                            {
                                url ?
                                    <a href={url}>
                                        <Button variant="secondary">
                                            Pagar
                                        </Button> 
                                    </a>
                                : 
                                <></>
                            }
                        </Modal.Footer>
                    </Modal>
                </>
                :
                <></>
            }
        </>
    )
}
