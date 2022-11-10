
//React
import { useEffect, useState } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { filterStatus, getOrdersDB, updateOrderStatus } from '../../../state/ducks/admins/actions'

//Bootstrap
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Ordenes () {

    const ordenes = useSelector((state) => state.admins.ordersFiltered)
    
    const dispatch = useDispatch()

    const [state, setState] = useState('')

    useEffect(() => {
        dispatch(getOrdersDB())
        setState(ordenes)
    }, [state])

    const estados = ["creada", "procesando", "cancelada", "completa"]
    
    const changeStatus = (id, status) => {
        setState(id)
        dispatch(updateOrderStatus(id, status))
    }

    const filterByStatus = (e, status) => {
        e.preventDefault()
        dispatch(filterStatus(status))
    }


    return (
        <div style={{paddingBottom: "100px", marginBottom: "100px"}}>
                <h1 style={{ display: "flex", justifyContent: "center", paddingBottom: "50px", paddingTop: "50px"}}>Editar Ordenes</h1>

                <Dropdown style={{ display: "flex", height: "2.5rem", margin: "30px" }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic2">
                        Filtrar por Estado
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item
                        onClick={(e) => filterByStatus(e, "Todas")}
                        >
                        Todas
                        </Dropdown.Item>
                        {
                            estados.map((status) => {
                            return (<Dropdown.Item 
                                        style={{textTransform: "capitalize"}}
                                        onClick={(e) => filterByStatus(e, status)}
                                        >{status}
                                    </Dropdown.Item>)
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
            
            {
                ordenes ?
                    <Table striped bordered hover style={{paddingBottom: "50px", marginBottom: "50px"}}>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>ID Orden</th>
                                <th>ID Cliente</th>
                                <th>Cantidad de Profesionales</th>
                                <th>Costo Total</th>
                                <th>Estado Actual</th>
                                <th>Cambiar Estado</th>
                            </tr>
                        </thead>
                        <tbody >
                                {
                                    ordenes?.map((orden) => {
                                        return (
                                            <tr>
                                                <td>{orden.date}</td>
                                                <td>{orden.id}</td>
                                                <td>{orden.clientId}</td>
                                                <td>{orden.orderDetails.length}</td>
                                                <td>${orden.amount}</td>
                                                <td>{orden.status}</td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            Cambiar Estado 
                                                        </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                {
                                                                    estados.map((status) => {
                                                                    return (<Dropdown.Item 
                                                                                style={{textTransform: "capitalize"}}
                                                                                onClick={(e) => changeStatus(orden.id, status)}
                                                                                >{status}
                                                                            </Dropdown.Item>)
                                                                    })
                                                                }
                                                            </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                        </tbody >
                    </Table>
                :
                <></>
            }
        </div>
    )
}