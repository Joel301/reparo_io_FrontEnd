
//React
import React from 'react'

//Components
import ItemCart from '../components/itemCart'

//Bootstrap
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { Container } from 'react-bootstrap'


export default function Cart() {
    
    return (
        <>
            <>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nombre y Apellido</th>
                        <th>Profesion</th>
                        <th>Numero de dias</th>
                        <th>Selecciona los dias</th>
                        <th>Dias Seleccionados</th>
                        <th>Eliminar</th>
                        </tr>
                    </thead>
                    <ItemCart />
                </Table>
                <Container style={{justifyContent: "end", display: "flex"}}>
                    <Button variant="success">
                        Pasarela de Pago
                    </Button> 
                </Container>
            </>
        </>
    )
}
