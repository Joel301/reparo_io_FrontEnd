
//React
import React, { useState } from 'react'

//Components
import EditarProfesional from './EditarProfesional'
import Ordenes from './Ordenes'
import EditarCliente from './EditarCliente'
import CrearProfesion from './CrearProfesion'


//React-Bootstrap
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'



export default function Admin () {

    const [component, setComponent] = useState('')
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    
    const onChangeComponent = (e) => {
        e.preventDefault()
        setComponent(e.target.value)
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{margin: "2.5%"}}>
                Modificar
            </Button>

            <Offcanvas show={show} onHide={handleClose}>

                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Modificaciones</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body >
                    <Button variant="primary" onClick={onChangeComponent} value='editarProfesional' style={{margin: "2.5%"}}>
                        Editar Profesionales
                    </Button>
                    <Button variant="primary" onClick={onChangeComponent} value='ordenes' style={{margin: "2.5%"}}>
                        Crear Profesionales
                    </Button>
                    <Button variant="primary" onClick={onChangeComponent} value='editarCliente' style={{margin: "2.5%"}}>
                        Editar Cliente
                    </Button>
                    <Button variant="primary" onClick={onChangeComponent} value='crearProfesion' style={{margin: "2.5%"}}>
                        Crear Profesiones
                    </Button>
                </Offcanvas.Body>

            </Offcanvas>
            {
                component === 'editarProfesional' ?
                <EditarProfesional /> 
                : 
                component === 'ordenes' ?
                <Ordenes />
                :
                component === 'editarCliente' ?
                <EditarCliente />
                :
                component === 'crearProfesion' ?
                <CrearProfesion />
                :
                <></>
            }
        </>
    )
}