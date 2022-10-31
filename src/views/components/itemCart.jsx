
//React Redux
import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

//Actions
import { deleteItemCart, addDayToProf, removeDayFromProf } from "../../state/ducks/cart/actions"

//Bootstrap
import Dropdown from 'react-bootstrap/Dropdown'
import CloseButton from 'react-bootstrap/CloseButton'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'



export default function ItemCart () {

    const items = useSelector((state) => state.cart.list)

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

    const deleteDay = ( id, day ) => {
        dispatch(removeDayFromProf( id, day ))
    }

    const selectDays = (id, day) => {
        dispatch(addDayToProf(id, day))
    }

    const orderDays = (days) => {

        let newArray = days.sort(( a, b ) => {
           return a.id - b.id
        })

        return newArray
    }

    const costoTotal = (items) => {
        let costo = 2000
        let counter = 0

        items.forEach((item) => {
            counter = counter + (costo * item.quantity)
        })
        return counter
    }

    const precioPorItem = (item) => {
        let total = 0
        let costo = 2000

        total = item.days.length * costo

        return total
    }

    const numberItems = () => {

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
                                    days.map((day) => {
                                       return (<Dropdown.Item onClick={() => selectDays(item.professional.id, day.name)}>{day.name}</Dropdown.Item>)
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                    <td>
                        {
                            orderDays(item.days)?.map((day) => {
                                return (
                                    <td>
                                        <Badge 
                                            style={{cursor: "pointer"}} 
                                            onClick={() => deleteDay(item.professional.id, day)}
                                            >{day}</Badge>
                                    </td>
                                )
                            })
                        }
                    </td>
                    <td style={{fontSize: "20px"}}>
                        {item.quantity}
                    </td>
                    <td>
                        ${precioPorItem(item)}
                    </td>
                    <td>
                        <CloseButton variant="white" onClick={() => deleteItem(item.professional.id)} />
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

            <Container >
                <Button variant="success">
                    Pasarela de Pago
                </Button> 
            </Container>
        </>
    )
}