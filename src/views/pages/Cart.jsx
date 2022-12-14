
//React
import React from 'react'

//Components
import ItemCart from '../components/itemCart'

//Bootstrap
import Table from 'react-bootstrap/Table'


export default function Cart() {
    
    return (
        <>
            <>
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                        <th>Nombre y Apellido</th>
                        <th>Profesiones</th>
                        <th>Selecciona entre los dias habiles</th>
                        <th>Dias Seleccionados</th>
                        <th>Numero de dias</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                        </tr>
                    </thead>
                    <ItemCart />
                </Table>
            </>
        </>
    )
}
