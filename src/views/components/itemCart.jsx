
//React Redux
import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

//Actions
import { deleteItemCart,  addDayToProf,  removeDayFromProf } from "../../state/ducks/cart/actions"

//Bootstrap
import Dropdown from 'react-bootstrap/Dropdown'
import CloseButton from 'react-bootstrap/CloseButton'
import Badge from 'react-bootstrap/Badge'



export default function ItemCart () {

    const items = useSelector((state) => state.cart.list)

    const dispatch = useDispatch()

    const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]


    const deleteItem = (id) => {
        dispatch(deleteItemCart(id))
    }

    const deleteDay = ( id, day ) => {
        dispatch(removeDayFromProf( id, day ))
    }

    const selectDays = (id, day) => {
        dispatch(addDayToProf(id, day))
    }

    const totalDays = (items) => {
        let counter = 0

        items.map((item) => {
            counter = counter + item.days.length
        })
        return counter
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
                    <td>1</td>
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
                    <td style={{fontSize: "20px"}}>
                        {item.quantity}
                    </td>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Selecciona los dias
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    days.map((day) => {
                                       return (<Dropdown.Item onClick={() => selectDays(item.professional.id, day)}>{day}</Dropdown.Item>)
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                    <td>
                        {
                            item.days?.map((day) => {
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
            <Badge pill bg="warning" text="dark" style={{width: "100px", height: "40px", fontSize: "20px"}}>
                        Total: {totalDays(items)}
            </Badge>{' '}
            
        </>
    )
}